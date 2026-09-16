(() => {
  const W = {
    "Sivir Hunters": [
      {name:"Fae Emblem",type:"Emblem",target:"Sivir"},
      {name:"Rolling For Days",type:"Augment"},{name:"Slice of Life",type:"Augment"},{name:"Epic Rolldown",type:"Augment"},{name:"Explosive Growth",type:"Augment"},{name:"Money Hungry",type:"Augment"},{name:"Patient Study",type:"Augment"},{name:"Slammin'",type:"Augment"},{name:"Commerce Core",type:"Augment"},{name:"Shopping Spree",type:"Augment"}
    ],
    "Draven Fast 9": [
      {name:"Late Game Scaling",type:"Augment"},{name:"Win Streak",type:"Other"}
    ],
    "Nidalee Aphelios": [
      {name:"Gold Collector",type:"Artifact",target:"Aphelios"},{name:"Focused Fire",type:"Augment"},{name:"Swordsmith",type:"Augment"},{name:"Deadlier Blades",type:"Augment"},{name:"Ravager Emblem",type:"Emblem",target:"Nidalee"},{name:"Silvermere Dawn",type:"Artifact",target:"Nidalee"}
    ],
    "Sivir Nidalee": [
      {name:"Swordsmith",type:"Augment"},{name:"Sword Overflow",type:"Augment"},{name:"Lightshield Crest",type:"Artifact",target:"Malphite"}
    ],
    "Rapidfire Bramble": [
      {name:"Rapidfire Emblem",type:"Emblem",target:"Brambleback",required:true},
      {name:"Rolling For Days",type:"Augment"},{name:"Slice of Life",type:"Augment"},{name:"Cooking Pot",type:"Augment"},{name:"Epic Rolldown",type:"Augment"},{name:"Explosive Growth",type:"Augment"},{name:"Money Hungry",type:"Augment"},{name:"Patient Study",type:"Augment"},{name:"Slammin'",type:"Augment"},{name:"Commerce Core",type:"Augment"},{name:"Shopping Spree",type:"Augment"}
    ],
    "Elderwood Aphelios": [
      {name:"Gold Collector",type:"Artifact",target:"Aphelios"},{name:"Elderwood Emblem",type:"Emblem"},{name:"Rapidfire Emblem",type:"Emblem"},{name:"Branching Out",type:"Augment"},{name:"Branching Out+",type:"Augment"},{name:"One, Two, Five!",type:"Augment"},{name:"Rolling For Days",type:"Augment"},{name:"Epic Rolldown",type:"Augment"}
    ],
    "Blossom Fast 9": [
      {name:"Radiant Striker's Flail",type:"Radiant Item"},{name:"Radiant Rabadon's Deathcap",type:"Radiant Item"},{name:"Eternal Pact",type:"Artifact"}
    ],
    "Invoker Ahri": [
      {name:"Invoker Emblem",type:"Emblem",target:"Ahri"},{name:"Radiant Striker's Flail",type:"Radiant Item",target:"Ahri"},{name:"Radiant Rabadon's Deathcap",type:"Radiant Item",target:"Ahri"},{name:"Eternal Pact",type:"Artifact",target:"Ahri"},{name:"Radiant Adaptive Helm",type:"Radiant Item",target:"Ahri"},{name:"Radiant Blue Buff",type:"Radiant Item",target:"Ahri"},{name:"Blighting Jewel",type:"Artifact",target:"Morgana"},{name:"Luden's Tempest",type:"Artifact",target:"Ahri"}
    ],
    "Juggernaut Zyra": [
      {name:"Executioner Emblem",type:"Emblem",target:"Zyra"},{name:"Juggernaut Emblem",type:"Emblem"},{name:"Boxing Lessons",type:"Augment"},{name:"Bodyguard Training",type:"Augment"},{name:"Seraphim's Staff",type:"Artifact",target:"Zyra"},{name:"Hold the Line",type:"Augment"},{name:"Blighting Jewel",type:"Artifact"}
    ],
    "Soraka Flex": [
      {name:"Dawncore",type:"Artifact",target:"Soraka"},{name:"Lich Bane",type:"Artifact",target:"Soraka"},{name:"Executioner Emblem",type:"Emblem",target:"Zyra"},{name:"Item Extraction",type:"Augment"},{name:"Seraphim's Staff",type:"Artifact",target:"Zyra"},{name:"Solo Plate",type:"Augment"},{name:"Wand Overflow",type:"Augment"},{name:"Lightshield Crest",type:"Artifact",target:"Malphite"},{name:"Aegis of Dawn",type:"Artifact",target:"Malphite"},{name:"Eternal Pact",type:"Artifact",target:"Soraka"},{name:"Radiant Spear of Shojin",type:"Radiant Item",target:"Soraka"},{name:"Spellweaver Emblem",type:"Emblem",target:"Soraka"}
    ],
    "Defender Cassiopeia": [
      {name:"Blighting Jewel",type:"Artifact",target:"Cassiopeia"},{name:"Defender Emblem",type:"Emblem"},{name:"Radiant Archangel's Staff",type:"Radiant Item",target:"Cassiopeia"},{name:"Find Your Center",type:"Augment"},{name:"Baron's Lair",type:"Augment"},{name:"Giant and Mighty",type:"Augment"},{name:"Hold the Line",type:"Augment"},{name:"Dawncore",type:"Artifact",target:"Cassiopeia"},{name:"Eternal Pact",type:"Artifact",target:"Cassiopeia"}
    ],
    "Master Yi Reroll": [
      {name:"Wit's End",type:"Artifact",target:"Master Yi"},{name:"Hellfire Hatchet",type:"Artifact",target:"Master Yi"},{name:"Rapid Firecannon",type:"Artifact",target:"Master Yi"},{name:"Flickerblades",type:"Artifact",target:"Master Yi"},{name:"Brawler Emblem",type:"Emblem",target:"Master Yi"},{name:"Radiant Guinsoo's Rageblade",type:"Radiant Item",target:"Rengar"},{name:"Fishbones",type:"Artifact",target:"Master Yi"},{name:"Mittens",type:"Artifact",target:"Rengar"},{name:"Find Your Center",type:"Augment"}
    ],
    "Solar Yunara": [
      {name:"Gold Collector",type:"Artifact",target:"Yunara"},{name:"Dawncore",type:"Artifact",target:"Yunara"},{name:"Radiant Deathblade",type:"Radiant Item",target:"Yunara"},{name:"Radiant Spear of Shojin",type:"Radiant Item",target:"Yunara"},{name:"Radiant Giant Slayer",type:"Radiant Item",target:"Yunara"},{name:"Radiant Striker's Flail",type:"Radiant Item",target:"Yunara"},{name:"Executioner Emblem",type:"Emblem",target:"LeBlanc"},{name:"Fishbones",type:"Artifact",target:"Yunara"}
    ],
    "Akali Reroll": [
      {name:"Lich Bane",type:"Artifact",target:"Akali"},{name:"Early Learnings",type:"Augment"},{name:"Missed Connections",type:"Augment"},{name:"NO SCOUT NO PIVOT",type:"Augment"},{name:"Prismatic Ticket",type:"Augment"},{name:"Retribution",type:"Augment"},{name:"Rapid Firecannon",type:"Artifact",target:"Akali"},{name:"Seeker's Armguard",type:"Artifact",target:"Akali"}
    ],
    "Riftbeast Tempo": [
      {name:"Radiant Archangel's Staff",type:"Radiant Item",target:"Pebbles"},{name:"Pandora's Bench",type:"Augment"},{name:"Verticality I",type:"Augment"},{name:"Omega Riftbeast",type:"Augment"},{name:"Verticality II",type:"Augment"},{name:"Verticality III",type:"Augment"},{name:"Radiant Blue Buff",type:"Radiant Item",target:"Pebbles"},{name:"Radiant Infinity Edge",type:"Radiant Item",target:"Cinderling"},{name:"Radiant Bramble Vest",type:"Radiant Item",target:"Krug"},{name:"Find Your Center",type:"Augment"},{name:"Missed Connections",type:"Augment"}
    ],
    "Pebbles Reroll": [
      {name:"Radiant Blue Buff",type:"Radiant Item",target:"Pebbles"},{name:"Radiant Archangel's Staff",type:"Radiant Item",target:"Pebbles"},{name:"Invoker Emblem",type:"Emblem",target:"Ivern"},{name:"Vanguard Emblem",type:"Emblem"},{name:"Juggernaut Emblem",type:"Emblem"},{name:"Blighting Jewel",type:"Artifact",target:"Morgana"},{name:"Missed Connections",type:"Augment"},{name:"Patience Is A Virtue",type:"Augment"},{name:"Seraphim's Staff",type:"Artifact"}
    ],
    "Elderwood Kayle Reroll": [
      {name:"Flickerblades",type:"Artifact",target:"Kayle"},{name:"Wit's End",type:"Artifact",target:"Kayle"},{name:"Seeker's Armguard",type:"Artifact",target:"Kayle"},{name:"Prismatic Ticket",type:"Augment"},{name:"Radiant Guinsoo's Rageblade",type:"Radiant Item",target:"Kayle"},{name:"Gambler's Blade",type:"Artifact",target:"Kayle"},{name:"Radiant Jeweled Gauntlet",type:"Radiant Item",target:"Kayle"},{name:"Radiant Rabadon's Deathcap",type:"Radiant Item",target:"Kayle"}
    ],
    "Invoker Bramble": [
      {name:"Invoker Emblem",type:"Emblem",target:"Alune"},{name:"Blighting Jewel",type:"Artifact",target:"Morgana"},{name:"Spellweaver Emblem",type:"Emblem",target:"Morgana"},{name:"Rolling For Days",type:"Augment"},{name:"Slice of Life",type:"Augment"},{name:"Small Grab Bag",type:"Augment"},{name:"Big Grab Bag",type:"Augment"},{name:"Epic Rolldown",type:"Augment"},{name:"Exclusive Customization",type:"Augment"},{name:"Explosive Growth",type:"Augment"},{name:"Commerce Core",type:"Augment"},{name:"Shopping Spree",type:"Augment"}
    ],
    "Dark Ritual Coven": [
      {name:"Dark Ritual",type:"Augment",required:true}
    ],
    "Rengar Reroll": [
      {name:"Radiant Guinsoo's Rageblade",type:"Radiant Item",target:"Rengar"},{name:"Rapidfire Emblem",type:"Emblem",target:"Rengar"},{name:"Solo Leveling",type:"Augment"},{name:"Mittens",type:"Artifact",target:"Rengar"},{name:"Rapid Firecannon",type:"Artifact",target:"Rengar"},{name:"Flickerblades",type:"Artifact",target:"Mama Beak"},{name:"Fishbones",type:"Artifact",target:"Rengar"},{name:"Hellfire Hatchet",type:"Artifact",target:"Rengar"},{name:"Ravager Emblem",type:"Emblem",target:"Rengar"},{name:"Prismatic Ticket",type:"Augment"}
    ],
    "Tristana Reroll": [
      {name:"Flickerblades",type:"Artifact",target:"Tristana"},{name:"Fae Emblem",type:"Emblem"},{name:"Vanguard Emblem",type:"Emblem"},{name:"Swordsmith",type:"Augment"},{name:"U.R.F",type:"Augment"},{name:"Urf's Grab Bag",type:"Augment"},{name:"Gold Collector",type:"Artifact",target:"Tristana"},{name:"Radiant Giant Slayer",type:"Radiant Item",target:"Tristana"},{name:"Brawler Emblem",type:"Emblem",target:"Vi"},{name:"Rapidfire Emblem",type:"Emblem",target:"Tristana"},{name:"Patience Is A Virtue",type:"Augment"}
    ],
    "Unrivaled Kha'Zix & Rengar": [
      {name:"Radiant Guinsoo's Rageblade",type:"Radiant Item",target:"Rengar"},{name:"Lich Bane",type:"Artifact",target:"Kha'Zix"},{name:"Seeker's Armguard",type:"Artifact",target:"Kha'Zix"},{name:"Executioner Emblem",type:"Emblem",target:"Aphelios"},{name:"Rapidfire Emblem",type:"Emblem",target:"Rengar"}
    ]
  };
  if(!window.TFT_DATA) return;
  window.TFT_DATA.comps.forEach(c=>{c.winCons=W[c.name]||[]});
})();
