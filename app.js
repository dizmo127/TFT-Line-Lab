const D = window.TFT_DATA;
const state = {tab:'openers', openerChampions:new Set(), finder:{openers:new Set(),wincons:new Set()}, current:null, builderTab:'board', drag:null};
const CATEGORY_WORDS = new Set(['Flex','Juggernaut','Spellweaver','Executioner','Sprykin','Defender','Blossom','Riftbeast','Rapidfire','Vanguard','Brawler','Elderwood']);
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const esc = s => String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
const splitChoices = s => String(s).split('/').map(x=>x.trim()).filter(Boolean);
const primary = s => splitChoices(s)[0];
const compByName = n => D.comps.find(c=>c.name===n);
const openerByName = n => D.openers.find(o=>o.name===n);

function openerChampionNames(){
  const names=new Set();
  D.openers.forEach(o=>o.slots.forEach(slot=>splitChoices(slot).forEach(x=>{if(!CATEGORY_WORDS.has(x)) names.add(x)})));
  return [...names].sort((a,b)=>a.localeCompare(b));
}
function openerExplicitChampions(o){
  const out=new Set();
  o.slots.forEach(slot=>splitChoices(slot).forEach(x=>{if(!CATEGORY_WORDS.has(x)) out.add(x)}));
  return out;
}
function filteredOpeners(){
  if(!state.openerChampions.size) return D.openers;
  return D.openers.filter(o=>{const have=openerExplicitChampions(o);return [...state.openerChampions].some(c=>have.has(c))});
}
function allWinCons(){
  const byName=new Map();
  D.comps.forEach(c=>(c.winCons||[]).forEach(w=>{
    if(!byName.has(w.name)) byName.set(w.name,{name:w.name,type:w.type||'Other',required:false});
    if(w.required) byName.get(w.name).required=true;
  }));
  return [...byName.values()].sort((a,b)=>a.name.localeCompare(b.name));
}
function tabButton(tab){
  state.tab=tab;
  $$('.tab-btn').forEach(b=>b.classList.toggle('active',b.dataset.tab===tab));
  $$('.view').forEach(v=>v.classList.toggle('active',v.id===`view-${tab}`));
  render();
}
$$('.tab-btn').forEach(b=>b.addEventListener('click',()=>tabButton(b.dataset.tab)));

function renderOpeners(){
  const view=$('#view-openers');
  const names=openerChampionNames();
  const matches=filteredOpeners();
  view.innerHTML=`<div class="split"><aside class="panel"><div class="section-head"><h2>Champions</h2><button id="clear-opener" class="clear">Clear</button></div><input id="opener-search" class="search" placeholder="Search champions"><div id="opener-champ-list" class="list"></div></aside><main class="panel"><div class="section-head"><h2>Matching Openers</h2><span class="meta">${matches.length} shown</span></div><div class="results">${matches.map(openerCard).join('')}</div></main></div>`;
  const list=$('#opener-champ-list');
  const paint=(q='')=>{list.innerHTML=names.filter(n=>n.toLowerCase().includes(q.toLowerCase())).map(n=>`<button class="pick ${state.openerChampions.has(n)?'selected':''}" data-champ="${esc(n)}">${esc(n)}</button>`).join('');list.querySelectorAll('[data-champ]').forEach(b=>b.onclick=()=>{state.openerChampions.has(b.dataset.champ)?state.openerChampions.delete(b.dataset.champ):state.openerChampions.add(b.dataset.champ);renderOpeners()})};
  paint(); $('#opener-search').oninput=e=>paint(e.target.value); $('#clear-opener').onclick=()=>{state.openerChampions.clear();renderOpeners()};
  view.querySelectorAll('[data-comp-open]').forEach(b=>b.onclick=()=>openBuilder(b.dataset.compOpen));
}
function openerSlot(s){
  const choices=splitChoices(s);
  const flex=CATEGORY_WORDS.has(s)||s.includes('/')||s==='Flex';
  const selected=choices.some(x=>state.openerChampions.has(x));
  return `<div class="slot ${flex?'flex':''} ${selected?'slot-selected':''}">${esc(s)}</div>`;
}
function openerCard(o){
  return `<article class="card"><div class="card-title">${esc(o.name)}</div><div class="slots">${o.slots.map(openerSlot).join('')}</div><div class="chips">${o.comps.map(c=>`<button class="chip" data-comp-open="${esc(c)}">${esc(c)}</button>`).join('')}</div></article>`;
}

function finderInfo(c){
  const active = state.finder.openers.size || state.finder.wincons.size;
  const openerMatch = !state.finder.openers.size || c.openers.some(o=>state.finder.openers.has(o));
  if(!openerMatch) return {...c,hidden:true};
  const wins=c.winCons||[];
  const matched=wins.filter(w=>state.finder.wincons.has(w.name));
  const required=wins.filter(w=>w.required);
  const missingRequired=active?required.filter(w=>!state.finder.wincons.has(w.name)):[];
  return {c,hidden:false,matched,missingRequired,close:missingRequired.length>0};
}
function renderFinder(){
  const view=$('#view-finder');
  const active = state.finder.openers.size || state.finder.wincons.size;
  const info=D.comps.map(finderInfo).filter(x=>!x.hidden);
  const exact=info.filter(x=>!x.close).sort((a,b)=>b.matched.length-a.matched.length||a.c.name.localeCompare(b.c.name));
  const close=info.filter(x=>x.close).sort((a,b)=>b.matched.length-a.matched.length||a.c.name.localeCompare(b.c.name));
  const wincons=allWinCons();
  view.innerHTML=`<div class="split"><aside class="panel"><div class="section-head"><h2>Filters</h2><button id="finder-clear" class="clear">Clear</button></div>${finderGroup('Opener','openers',D.openers.map(o=>({name:o.name,label:o.name})))}${finderWinConGroup(wincons)}</aside><main class="panel"><div class="section-head"><h2>${active?'Viable Comps':'All Comps'}</h2><span class="meta">${exact.length}</span></div><div class="results">${exact.map(x=>finderCompCard(x)).join('')||'<div class="meta">No viable comps for the selected opener.</div>'}</div>${close.length?`<div class="section-head" style="margin-top:24px"><h2>Close Matches ⚠</h2><span class="meta">${close.length}</span></div><div class="results">${close.map(x=>finderCompCard(x,true)).join('')}</div>`:''}</main></div>`;
  view.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{const set=state.finder[b.dataset.filter], val=b.dataset.value;set.has(val)?set.delete(val):set.add(val);renderFinder()});
  view.querySelectorAll('[data-comp-open]').forEach(b=>b.onclick=()=>openBuilder(b.dataset.compOpen));
  $('#finder-clear').onclick=()=>{Object.values(state.finder).forEach(s=>s.clear());renderFinder()};
}
function finderGroup(title,key,values){
  return `<h3>${esc(title)}</h3><div class="list" style="margin-bottom:16px">${values.map(v=>`<button class="pick ${state.finder[key].has(v.name)?'selected':''}" data-filter="${key}" data-value="${esc(v.name)}">${esc(v.label)}</button>`).join('')}</div>`;
}
function finderWinConGroup(values){
  return `<h3>Win Cons</h3><div class="meta" style="margin:-4px 0 10px">Soft filter. Required conditions are gates.</div><div class="list">${values.map(v=>`<button class="pick ${state.finder.wincons.has(v.name)?'selected':''}" data-filter="wincons" data-value="${esc(v.name)}"><span>${esc(v.name)}</span><span class="meta" style="margin-left:6px">${esc(v.type)}${v.required?' · REQUIRED':''}</span></button>`).join('')}</div>`;
}
function finderCompCard(info,close=false){
  const c=info.c;
  const matched=(info.matched||[]);
  const missing=(info.missingRequired||[]);
  return `<article class="card" data-comp-open="${esc(c.name)}"><div class="card-title">${esc(c.name)}${close?' ⚠':''}</div><div class="meta">${esc(c.type)}</div><div class="chips">${c.openers.map(o=>`<span class="chip">${esc(o.replace(' Opener',''))}</span>`).join('')}${matched.map(w=>`<span class="chip" style="border-color:#377c57;color:#a7efbf">✓ ${esc(w.name)}</span>`).join('')}${missing.map(w=>`<span class="chip" style="border-color:#9b3d44;color:#ffadb4">! Requires ${esc(w.name)}</span>`).join('')}</div></article>`;
}
function compCard(c){return `<article class="card" data-comp-open="${esc(c.name)}"><div class="card-title">${esc(c.name)}</div><div class="meta">${esc(c.type)}</div><div class="chips">${c.openers.map(o=>`<span class="chip">${esc(o.replace(' Opener',''))}</span>`).join('')}</div></article>`}

function renderComps(){
  const view=$('#view-comps');
  view.innerHTML=`<div class="panel"><div class="section-head"><h2>Comps</h2><span class="meta">${D.comps.length} total</span></div><div class="results">${D.comps.map(c=>compCard(c)).join('')}</div></div>`;
  view.querySelectorAll('[data-comp-open]').forEach(b=>b.onclick=()=>openBuilder(b.dataset.compOpen));
}
function render(){if(state.tab==='openers')renderOpeners(); if(state.tab==='finder')renderFinder(); if(state.tab==='comps')renderComps()}

function saveKey(c){return `tft-line-lab:${c.name}`}
function defaultBuild(c){return {positions:Object.fromEntries(c.units.map((u,i)=>[i,i])), choices:Object.fromEntries(c.units.map((u,i)=>[i,primary(u)]))}}
function loadBuild(c){try{return {...defaultBuild(c),...JSON.parse(localStorage.getItem(saveKey(c))||'{}')}}catch{return defaultBuild(c)}}
function saveBuild(c,b){try{localStorage.setItem(saveKey(c),JSON.stringify(b))}catch{}}
function openBuilder(name){state.current=compByName(name);state.builderTab='board';$('#builder').classList.add('open');renderBuilder()}
function closeBuilder(){$('#builder').classList.remove('open');state.current=null}
$('#builder-back').onclick=closeBuilder;
$$('.builder-tab').forEach(b=>b.onclick=()=>{state.builderTab=b.dataset.builderTab;renderBuilder()});
function renderBuilder(){
  const c=state.current;if(!c)return;
  $('#builder-title').textContent=c.name; $('#builder-type').textContent=c.type;
  $$('.builder-tab').forEach(b=>b.classList.toggle('active',b.dataset.builderTab===state.builderTab));
  $$('.builder-page').forEach(p=>p.classList.toggle('active',p.id===`builder-${state.builderTab}`));
  renderBoard(c); renderBuilderOpeners(c); renderEcon(c);
}
function renderBoard(c){
  const box=$('#builder-board'); const b=loadBuild(c); const cells=Array(28).fill(null);
  c.units.forEach((u,i)=>{const p=Number.isInteger(b.positions?.[i])?b.positions[i]:i;if(p>=0&&p<28)cells[p]=i});
  let rows='';for(let r=0;r<4;r++){rows+=`<div class="hex-row">`;for(let col=0;col<7;col++){const cell=r*7+col, idx=cells[cell];rows+=idx===null?`<div class="hex" data-cell="${cell}"></div>`:`<div class="hex occupied" data-cell="${cell}" data-unit="${idx}">${esc(b.choices?.[idx]||primary(c.units[idx]))}</div>`}rows+='</div>'}
  const winConSummary=(c.winCons||[]).length?`<div style="margin-top:18px"><h3>Win Cons</h3><div class="chips">${(c.winCons||[]).map(w=>`<span class="chip" style="${w.required?'border-color:#9b3d44;color:#ffadb4':''}">${w.required?'REQUIRED · ':''}${esc(w.name)}${w.target?' → '+esc(w.target):''}</span>`).join('')}</div></div>`:'';
  box.innerHTML=`<div class="board-wrap"><div><div class="board">${rows}</div><div class="meta" style="margin-top:10px">Drag units between hexes. Tap a unit with alternatives to swap it.</div>${winConSummary}</div><aside class="bench"><h3>Comp Units</h3>${c.units.map((u,i)=>`<div class="bench-unit">${i+1}. ${esc(b.choices?.[i]||primary(u))}${splitChoices(u).length>1?' ↔':''}</div>`).join('')}</aside></div>`;
  box.querySelectorAll('.hex.occupied').forEach(el=>wireDrag(el,c,b));
}
function wireDrag(el,c,b){
  let startX=0,startY=0,moved=false;
  el.onpointerdown=e=>{startX=e.clientX;startY=e.clientY;moved=false;el.setPointerCapture?.(e.pointerId)};
  el.onpointermove=e=>{if(Math.hypot(e.clientX-startX,e.clientY-startY)>10)moved=true};
  el.onpointerup=e=>{const idx=+el.dataset.unit;if(moved){const target=document.elementFromPoint(e.clientX,e.clientY)?.closest?.('.hex');if(target&&target.dataset.cell!==undefined){const targetCell=+target.dataset.cell;const fromCell=+el.dataset.cell;const other=target.dataset.unit!==undefined?+target.dataset.unit:null;b.positions[idx]=targetCell;if(other!==null)b.positions[other]=fromCell;saveBuild(c,b);renderBoard(c)}}else if(splitChoices(c.units[idx]).length>1){showFlex(c,b,idx)}};
}
function showFlex(c,b,idx){const choices=splitChoices(c.units[idx]);$('#flex-options').innerHTML=choices.map(x=>`<button class="flex-option" data-choice="${esc(x)}">${esc(x)}</button>`).join('');$('#flex-menu').classList.add('open');$('#flex-options').querySelectorAll('[data-choice]').forEach(x=>x.onclick=()=>{b.choices[idx]=x.dataset.choice;saveBuild(c,b);$('#flex-menu').classList.remove('open');renderBoard(c)})}
$('#flex-cancel').onclick=()=>$('#flex-menu').classList.remove('open');
function renderBuilderOpeners(c){const el=$('#builder-openers');el.innerHTML=`<div class="results">${c.openers.map(n=>openerCard(openerByName(n))).join('')}</div>`;el.querySelectorAll('[data-comp-open]').forEach(b=>b.onclick=()=>{if(b.dataset.compOpen!==c.name)openBuilder(b.dataset.compOpen)})}
function renderEcon(c){const e=D.compTypes[c.type],el=$('#builder-econ');el.innerHTML=`<div class="econ"><h2>${esc(c.type)} Econ Guide</h2>${e?.note?`<div class="econ-note">${esc(e.note)}</div>`:''}${(e?.stages||[]).map(([s,t])=>`<div class="econ-row"><div class="econ-stage">${esc(s)}</div><div>${esc(t)}</div></div>`).join('')}</div>`}

if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}))}
render();
