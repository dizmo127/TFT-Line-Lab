const D = window.TFT_DATA;
const state = {tab:'openers', openerChampions:new Set(), finder:{types:new Set(),openers:new Set(),comps:new Set()}, current:null, builderTab:'board', drag:null};
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
function openerCard(o){
  return `<article class="card"><div class="card-title">${esc(o.name)}</div><div class="slots">${o.slots.map(s=>`<div class="slot ${CATEGORY_WORDS.has(s)||s.includes('/')||s==='Flex'?'flex':''}">${esc(s)}</div>`).join('')}</div><div class="chips">${o.comps.map(c=>`<button class="chip" data-comp-open="${esc(c)}">${esc(c)}</button>`).join('')}</div></article>`;
}

function finderScore(c){
  let total=0, hit=0, missing=[];
  if(state.finder.types.size){total++; if(state.finder.types.has(c.type))hit++; else missing.push('type')}
  if(state.finder.comps.size){total++; if(state.finder.comps.has(c.name))hit++; else missing.push('comp')}
  if(state.finder.openers.size){total++; if(c.openers.some(o=>state.finder.openers.has(o)))hit++; else missing.push('opener')}
  return {total,hit,ratio:total?hit/total:1,missing};
}
function renderFinder(){
  const view=$('#view-finder');
  const scored=D.comps.map(c=>({c,...finderScore(c)}));
  const active=[...Object.values(state.finder)].some(s=>s.size);
  const exact=scored.filter(x=>x.ratio===1), close=active?scored.filter(x=>x.ratio<1&&x.ratio>=.8):[];
  view.innerHTML=`<div class="split"><aside class="panel"><div class="section-head"><h2>Filters</h2><button id="finder-clear" class="clear">Clear</button></div>${filterGroup('Comp Type','types',Object.keys(D.compTypes))}${filterGroup('Opener','openers',D.openers.map(o=>o.name))}${filterGroup('Comp','comps',D.comps.map(c=>c.name))}</aside><main class="panel"><div class="section-head"><h2>${active?'Exact Matches':'All Comps'}</h2><span class="meta">${exact.length}</span></div><div class="results">${exact.map(x=>compCard(x.c)).join('')}</div>${close.length?`<div class="section-head" style="margin-top:24px"><h2>Close Matches ⚠</h2><span class="meta">${close.length}</span></div><div class="results">${close.map(x=>compCard(x.c,true)).join('')}</div>`:''}</main></div>`;
  view.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{const set=state.finder[b.dataset.filter], val=b.dataset.value;set.has(val)?set.delete(val):set.add(val);renderFinder()});
  view.querySelectorAll('[data-comp-open]').forEach(b=>b.onclick=()=>openBuilder(b.dataset.compOpen));
  $('#finder-clear').onclick=()=>{Object.values(state.finder).forEach(s=>s.clear());renderFinder()};
}
function filterGroup(title,key,values){return `<h3>${esc(title)}</h3><div class="list" style="margin-bottom:16px">${values.map(v=>`<button class="pick ${state.finder[key].has(v)?'selected':''}" data-filter="${key}" data-value="${esc(v)}">${esc(v)}</button>`).join('')}</div>`}
function compCard(c,close=false){return `<article class="card" data-comp-open="${esc(c.name)}"><div class="card-title">${esc(c.name)}${close?' ⚠':''}</div><div class="meta">${esc(c.type)}</div><div class="chips">${c.openers.map(o=>`<span class="chip">${esc(o.replace(' Opener',''))}</span>`).join('')}</div></article>`}

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
  box.innerHTML=`<div class="board-wrap"><div><div class="board">${rows}</div><div class="meta" style="margin-top:10px">Drag units between hexes. Tap a unit with alternatives to swap it.</div></div><aside class="bench"><h3>Comp Units</h3>${c.units.map((u,i)=>`<div class="bench-unit">${i+1}. ${esc(b.choices?.[i]||primary(u))}${splitChoices(u).length>1?' ↔':''}</div>`).join('')}</aside></div>`;
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
