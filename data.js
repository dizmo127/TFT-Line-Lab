window.TFT_DATA = {
  compTypes: {
    "Fast 8": {
      note: "",
      stages: [
        ["2-1","Level to 4 if you have upgrades and a good item to place on one of those upgrades."],
        ["2-5","Level to 5, unless on 3 loss streak."],
        ["3-1","Level to 6 if on 4+ win streak (scout to see if necessary in high elo) or can stay above 40g."],
        ["3-2","Level to 6, unless you would go below 30g. If you have to stay level 5 due to low gold (rare), then level to 6 on 3-5."],
        ["3-5","Level to 7 if you can stay above 30g, otherwise stay level 6."],
        ["4-1","Level to 7."],
        ["4-2","Level to 8. Roll for desired comp until stable. Stable changes depending on rank, items, augments, composition, and patch. Melee carries and tanks get the biggest spike for 2-stars. Usually stable involves 2-star tank or carry and some other supporting 2-stars. Try not to roll below 10g."],
        ["4-5","If you are weak (for example, have no 2-star 4-costs), consider rolling again to 10g here. If stable, save gold to go 9."],
        ["5-1","If low HP and you have not 2-starred your carry and tank, roll to 0g. If medium to high HP with an upgraded + itemized 4-cost unit and some other upgrades, save gold to go 9."],
        ["5-2","If high HP, consider waiting until 5-5 to go level 9. If medium HP, consider going level 9 if you can roll 20g or wait until 5-5. If low HP and can afford to go 9, do so even if you have almost no gold to roll on 9. If you cannot afford to go 9 this game, roll every turn for upgrades."],
        ["5-5+","Level to 9 if possible. From this point onward, look to level to 9. Acknowledge games where level 9 is not possible and roll every turn on 8 to preserve placements."],
        ["6-2+","For max cap games, you can either roll on 9 or level to 10. If you are itemizing a 5-cost carry and it is 1-starred, roll on 9. If you have all your main itemized units upgraded, level to 10."]
      ]
    },
    "Fast 9": {
      note: "Without econ augment, fast 9 is almost impossible without win-streak.",
      stages: [
        ["2-1","Level to 4 if you have upgrades and a good item to place on one of those upgrades."],
        ["2-5","Level to 5, unless on 3-loss streak."],
        ["3-1","Level to 6 if on 4+ win streak (scout to see if necessary in high elo) or can stay above 40g."],
        ["3-2","Level to 6, unless you would go below 30g. If you have to stay level 5 due to low gold (rare), then level to 6 on 3-5."],
        ["3-5","Level to 7 if you can stay above 30g, otherwise stay level 6."],
        ["4-1","Level to 7, or 8 if you can stay above 30g."],
        ["4-2","Level to 8. Main difference from Fast 8 is how much you roll on 8. Ideally you are high HP and do not need to roll at all. Otherwise, roll for acceptable board and accumulate gold afterward."],
        ["4-5","Level to 9 if you are rich enough to roll 40g+. Generally only possible with economy augment or encounter."],
        ["5-1","Level to 9 if you can roll 40g+ or if low HP."],
        ["5-2","Level to 9 and roll for important 5-costs. For the remainder of game, roll until you hit your 2 star itemized units. Can consider level 10 after hitting."]
      ]
    },
    "3-Cost Reroll": {
      note: "",
      stages: [
        ["2-1","Level to 4 if strong."],
        ["2-5","Level to 5, unless on 3 loss streak."],
        ["3-2","Level to 6, unless it places you below 30g."],
        ["3-5","Stay level 6, unless you can stay above 50g on 7 or you are below 40 HP and can stay above 30g on 7."],
        ["4-1","Level to 7, roll until board mostly upgraded. Never go below 10g even if missing tank or carry."],
        ["4-2","Build up to 50g, slow roll to 50g until 5-1."],
        ["4-5","If below about 25 HP, sometimes you must roll until you hit here. Not ideal."],
        ["5-1","Roll until you hit 3-star carry and tank. Can go to 0g. Only greed gold if you are above about 60 HP."],
        ["5-2","If you hit, you can level to 8. Otherwise stay 7. Holds true for every round for the rest of the game."]
      ]
    },
    "2-Cost Reroll": {
      note: "",
      stages: [
        ["2-1","Level to 4 if you have upgrades and a good item to place on one of those upgrades."],
        ["2-5","Level to 5, unless on 3 loss streak."],
        ["3-2","Level to 6. Roll until stable. Stable changes depending on rank, items, augments, composition, and patch, but generally involves 2-starring your desired 2-cost carry and a tank with items. Lower elo players generally need fewer upgrades to be stable and should usually roll less than high elo players on 3-2."],
        ["3-3","After your 3-2 rolldown, rebuild your economy to 50g."],
        ["3-5","Once you reach 50g, start slow rolling down to about 52g each turn. Avoid exactly 50g so shop purchases do not drop you below 50."],
        ["4-1","If high HP relative to the lobby, continue slow rolling to 52g each turn. If low HP, roll to hit your first 2-cost 3-star on 4-1 or 4-2. If you have to roll below 30g, your placement is usually capped at 3rd or 4th."],
        ["4-5","If still high HP (70+), you can continue slow rolling. Otherwise, in most cases roll deep for your 3-stars. If low HP, you can go to 0g. If you have your 3-stars and can level to 7 with 10g+, do so."],
        ["5-1","Level to 7 if you have not already."],
        ["5-2+","Level to 8 as soon as possible. This may not happen until 5-5 or, in some games, stage 6."],
        ["6-1+","Level to 9 whenever possible. This is rare, but can happen in games you have a chance of winning."]
      ]
    },
    "1-Cost Reroll": {
      note: "",
      stages: [
        ["2-1","Do not spend gold on leveling this stage. If you have 2-stars and a good item, you can consider playing to win some rounds. Otherwise lose streak is common for stage 2."],
        ["3-1","Roll to 33 gold, buying any unit that will be part of the level 4 or 5 board. You can also buy units for the level 6+ board, but sell those first if your bench fills. Rolling to 33g lets you save back to 50g by 3-5."],
        ["3-2","Do not level if you have not hit your 3-star 1-costs yet. If you have your 3-stars, generally stay level 5 if you can win or if leveling to 6 would put you below 20g. Try to get above 40g this round."],
        ["3-3","Ideally above 50g, level 5 at this point or level 6 with 3-stars."],
        ["3-5","If you have not hit your 3-stars yet, roll to about 52g each turn. If you have 8+ copies of an itemized 1-cost, you can roll to 40g or 30g each round instead. Level to 6 once you hit your 3-stars."],
        ["4-1","If you have not hit your 3-stars yet, roll until you hit them. Level to 6 after hitting. Some games you will miss or spend so much gold you cannot catch up; those usually become bottom-4 games."],
        ["4-2","Level to 7 if you can stay above about 20g. Otherwise stay level 6."],
        ["4-5","Level to 7."],
        ["5-1","Level to 8 if you are in bottom half of lobby HP and losing rounds. If higher HP and stable, you can wait until next turn."],
        ["5-2+","Level to 8 if you have not already. Roll for remaining units necessary for the comp. If stable, you can try to go 9. Most games end on level 8."],
        ["6-1+","Level to 9 whenever possible. This is rare, but can happen in games you have a chance of winning."]
      ]
    },
    "1 & 2-Cost Reroll": {
      note: "This is an uncommon econ strategy. Sometimes there are zero comps in the meta that use it.",
      stages: [
        ["2-1","Do not spend gold on leveling this stage. If you have 2-stars and a good item, you can consider playing to win some rounds. Otherwise lose streak is common for stage 2."],
        ["3-1","Unlike 1-cost reroll, stay above 50g for the entirety of stage 3. Slow roll to about 52g for the remainder of the stage, buying all necessary 1-costs and 2-costs."],
        ["4-1","If you have not hit your 3-stars yet, roll until you hit them. Level to 6 after hitting. You should be close to a 2-cost 3-star as well. In some cases, level to 6 before hitting all 1-costs if you have many copies of the 1-costs but not many of the 2-cost."],
        ["4-2","Level to 6 if you have not."],
        ["4-5","Level to 7 if you can stay above 20g, otherwise stay level 6."],
        ["5-1","Level to 7 if you have not."],
        ["5-2","Level to 8. Most likely end the game on 8, so roll for remaining important units. If far ahead, save and try to go 9 in stage 6."]
      ]
    }
  },
  openers: [
    {name:"Inferno Rapidfire Opener", comps:["Sivir Hunters","Draven Fast 9"], slots:["Akali","Ornn","Varus","Xayah","Shen"]},
    {name:"Ravager Defender Opener", comps:["Nidalee Aphelios","Sivir Nidalee"], slots:["Camille","Akali","Shen","Juggernaut","Flex"]},
    {name:"Elderwood Rapidfire Opener", comps:["Rapidfire Bramble","Elderwood Aphelios"], slots:["Ornn","Rakan","Varus","Xayah","Hecarim"]},
    {name:"Blossom Opener", comps:["Blossom Fast 9","Invoker Ahri"], slots:["Karma","Yorick","Yunara/Master Yi","Juggernaut","Spellweaver/Executioner"]},
    {name:"Veigar Sprykin Opener", comps:["Juggernaut Zyra","Soraka Flex"], slots:["Veigar","Kobuko","Rek'Sai","Sprykin","Spellweaver"]},
    {name:"Defender Cassiopeia Opener", comps:["Defender Cassiopeia"], slots:["Cassiopeia","Fiddlesticks","Defender","Defender","Defender"]},
    {name:"Adaptor Yi Opener", comps:["Master Yi Reroll"], slots:["Master Yi","Gromp","Scuttlecrab","Yorick","Blossom/Riftbeast"]},
    {name:"Blossom Yunara Opener", comps:["Solar Yunara"], slots:["Karma","Yorick","Yunara","LeBlanc","Sejuani"]},
    {name:"Akali Reroll Opener", comps:["Akali Reroll"], slots:["Akali","Camille","Leona","Varus","Ornn"]},
    {name:"Riftbeast Opener", comps:["Riftbeast Tempo","Pebbles Reroll"], slots:["Riftbeast","Riftbeast","Riftbeast","Riftbeast","Riftbeast"]},
    {name:"Solar Xayah Opener", comps:["Elderwood Kayle Reroll"], slots:["Leona","Kayle","Sejuani","Xayah","Ornn"]},
    {name:"Coven Opener", comps:["Invoker Bramble","Dark Ritual Coven"], slots:["Camille","Caitlyn","Elise","Cassiopeia","Flex"]},
    {name:"Rengar Rapidfire Opener", comps:["Rengar Reroll"], slots:["Rengar","Rakan","Xayah","Rapidfire","Juggernaut/Vanguard"]},
    {name:"Sprykin Tristana Opener", comps:["Tristana Reroll"], slots:["Tristana","Kobuko","Rakan","Sprykin","Brawler/Juggernaut/Vanguard/Defender"]},
    {name:"Unrivaled Opener", comps:["Unrivaled Kha'Zix & Rengar"], slots:["Kha'Zix","Rengar","Hecarim","LeBlanc","Elderwood"]}
  ],
  comps: [
    {name:"Sivir Hunters",type:"Fast 8",units:["Shen","Vi","Tristana","Amumu","Lillia","Sivir","Ashe","Kennen","Ivern"],openers:["Inferno Rapidfire Opener"]},
    {name:"Draven Fast 9",type:"Fast 9",units:["Alistar","Ezreal","Amumu","Draven","Ivern","Kennen","Maokai","Taric"],openers:["Inferno Rapidfire Opener"]},
    {name:"Nidalee Aphelios",type:"Fast 8",units:["Varus","Diana","Kog'Maw","Vi","Amumu","Aphelios","Nidalee","Sentinel"],openers:["Ravager Defender Opener"]},
    {name:"Sivir Nidalee",type:"Fast 8",units:["Cinderling","Rek'Sai","Krug","Kog'Maw","Nidalee","Sivir","Sentinel","Malphite","Ashe/Taric"],openers:["Ravager Defender Opener"]},
    {name:"Rapidfire Bramble",type:"Fast 8",units:["Rakan","Xayah","Varus","Diana","Mama Beak","Amumu","Aphelios","Brambleback","Sentinel"],openers:["Elderwood Rapidfire Opener"]},
    {name:"Elderwood Aphelios",type:"Fast 8",units:["Ornn","Xayah","Alistar","LeBlanc","Aphelios","Lillia","Alune","Gnar","Ivern"],openers:["Elderwood Rapidfire Opener"]},
    {name:"Blossom Fast 9",type:"Fast 9",units:["Rakan","Vi","Ahri","Sett","Sivir","Ashe","Gnar","Taric/Diana"],openers:["Blossom Opener"]},
    {name:"Invoker Ahri",type:"Fast 8",units:["Karma","Pebbles","Krug","Kog'Maw","Ahri","Sett","Sentinel","Morgana","Taric"],openers:["Blossom Opener"]},
    {name:"Juggernaut Zyra",type:"Fast 8",units:["Yorick","Rakan","Scuttlecrab","Vi","Amumu","Morgana","Zyra","Alune","Maokai"],openers:["Veigar Sprykin Opener"]},
    {name:"Soraka Flex",type:"Fast 8",units:["Yorick/Maokai","Azir","Fiddlesticks","Amumu","Malphite","Soraka","Zyra","Alune","Kennen"],openers:["Veigar Sprykin Opener"]},
    {name:"Defender Cassiopeia",type:"3-Cost Reroll",units:["Leona","Ornn","Shen","Cassiopeia","Rammus","Fiddlesticks","Lillia","Soraka"],openers:["Defender Cassiopeia Opener"]},
    {name:"Master Yi Reroll",type:"3-Cost Reroll",units:["Yorick","Krug/Gnar","Kog'Maw","Master Yi","Vi","Sett","Nidalee","Zyra"],openers:["Adaptor Yi Opener"]},
    {name:"Solar Yunara",type:"2-Cost Reroll",units:["Karma","Yorick","Leona","Kayle","LeBlanc","Sejuani","Yunara","Azir"],openers:["Blossom Yunara Opener"]},
    {name:"Akali Reroll",type:"1-Cost Reroll",units:["Akali","Camille","Ornn","Varus","Leona","Kayle","Sejuani","Amumu"],openers:["Akali Reroll Opener"]},
    {name:"Riftbeast Tempo",type:"3-Cost Reroll",units:["Cinderling","Pebbles","Murkwolf","Scuttlecrab","Krug","Brambleback","Sett/Gnar","Sentinel"],openers:["Riftbeast Opener"]},
    {name:"Pebbles Reroll",type:"1-Cost Reroll",units:["Pebbles","Teemo","Scuttlecrab","Kog'Maw","Sentinel","Morgana","Maokai/Amumu/Vi","Taric/Hecarim/Diana/Rakan"],openers:["Riftbeast Opener"]},
    {name:"Elderwood Kayle Reroll",type:"1 & 2-Cost Reroll",units:["Ornn","Xayah","Rakan","Leona","Kayle","Sejuani","Hecarim"],openers:["Solar Xayah Opener"]},
    {name:"Invoker Bramble",type:"Fast 8",units:["Pebbles","Diana","Kog'Maw","Hecarim","Brambleback","Sentinel","Morgana","Taric","Alune"],openers:["Coven Opener"]},
    {name:"Dark Ritual Coven",type:"Fast 8",units:["Elise","Diana","Cassiopeia","Hecarim","Sentinel","Morgana","Alune/LeBlanc/Lux","Ivern/Taric/Lux"],openers:["Coven Opener"]},
    {name:"Rengar Reroll",type:"3-Cost Reroll",units:["Murkwolf","Diana","Hecarim","Mama Beak","Rengar","Aphelios","Sentinel","Taric"],openers:["Rengar Rapidfire Opener"]},
    {name:"Tristana Reroll",type:"3-Cost Reroll",units:["Kobuko/Gnar","Rakan","Xayah","Tristana","Rammus","Vi","Lillia","Sivir"],openers:["Sprykin Tristana Opener"]},
    {name:"Unrivaled Kha'Zix & Rengar",type:"3-Cost Reroll",units:["LeBlanc","Diana","Hecarim","Rengar","Kha'Zix","Aphelios","Ezreal","Soraka/Alune"],openers:["Unrivaled Opener"]}
  ]
};
