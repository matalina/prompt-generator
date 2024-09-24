import { getRandomItem } from "./random";

export let generalTopics = [
  '**Personal Experiences**: Share moments from his past that shaped his current beliefs or personality.',
  '**Philosophical Musings**: Reflect on broader themes like courage, fear, loyalty, and trust.',
  '**Strange Places**: Describe curious locations he’s visited, with detailed descriptions that convey how they fected him emotionally or mentally.',
  '**Local Customs**: Discuss customs or rituals from different cultures and his opinions on them—either appreciative or critical.',
  '**Mythical Creatures**: Write about encounters or knowledge of various monsters or beings, along with his personal take on them.',
  '**Rumors and Gossip**: Share exaggerated rumors about himself or others, with a humorous or cynical twist.',
  '**Dreams & Visions**: Describe strange dreams or visions he’s had, interpreting their meaning or impact on his decisions.',
  '**Advice for Adventurers**: Offer humorous or cynical advice for new adventurers based on his own experiences.',
  '**Survival Tips**: Give practical or sarcastic survival tips for dealing with monsters, treacherous terrains, or noying companions.',
  '**Dealing with Authority**: His take on dealing with different authorities, like guild leaders, local lords, or pernatural entities.',
  '**Personal Collection**: Write about various items he’s collected over time and their stories.',
  '**Legendary Relics**: Discuss famous artifacts, his thoughts on their true value, and the lengths people go to obtain them.',
  '**Cursed Items**: Explore his fascination or aversion to cursed items and the lessons he’s learned from them.',
  '**Mysterious Phenomena**: Reflect on strange occurrences in the world, how they defy explanation, and his thoughts on them.',
  '**Forbidden Knowledge**: Dive into what he knows about hidden or forbidden lore and why such knowledge is dangerous or alluring.',
  '**Hidden Agendas**: Speculate on the hidden agendas of factions, powerful entities, or even his companions.',
  '**Rants on Societal Norms**: His take on societal expectations, adventuring rules, or the behavior of his peers.',
  '**Controversial Topics**: Dive into controversial issues within his world, offering his unique perspective.',
  '**Ethical Dilemmas**: Reflect on morally ambiguous situations he’s faced and how he feels about them now.',
  '**Setting**: Describe the vibrant cityscape around him, highlighting the magical elements and urban quirks that influence his daily life and experiences.',
  '**Characters**: Introduce intriguing individuals he meets, revealing their backgrounds and how they challenge or resonate with his own beliefs and journey.',
  '**Random Image**: What does the image inspire?',
];

export let postTypes = [
  '**Diary Entries**: Make diary-style posts revealing his internal conflicts, doubts, and personal growth.',
  '**Letters Never Sent**: Write letters to people in his life, revealing what he wishes he could say but never does.',
  '**Monologues**: Post internal monologues where he debates his choices, questions his motives, or wrestles with his darker nature.',
  '**Interviews**: Faux interviews where the character answers questions about their experiences, beliefs, or thoughts on magic and the supernatural.',
  '**Listicles**: Fun or serious lists related to topics of interest (e.g., “Top 5 Most Bizarre Encounters” or “Things I Wish I Knew About Magic”).',
  '**Dialogue**: Conversations he imagines having with others, either as a way to express his thoughts or to explore hypothetical scenarios.',
  '**Creative Writing**: Short stories, poems, or fictional pieces that reflect his emotions or experiences in a more artistic form.',
];

export let personalExperiences = [
  '**Holidays & Celebrations**: Reflect on unique holidays or festivals from his world, including the traditions and how he feels about them.',
  '**Lessons Learned**: Talk about a moment when he learned a hard lesson, either through failure or unexpected success.',
  '**Family Traditions**: Share stories or memories related to traditions passed down in his family, or the lack thereof.',
  '**Life-Changing Decisions**: Reflect on a critical choice he made in his past that changed the course of his life.',
  '**First Day in a New Place**: Describe his first day in a new city, guild, or group and his initial impressions or misadventures.',
  '**Personal Quests**: Discuss a personal quest he undertook, not for glory but for his own reasons—maybe to find closure or peace.',
  '**Near-Death Experiences**: Recall a moment when he narrowly escaped death, how it changed his perspective, or if it didn\'t at all.',
  '**Unlikely Mentors**: Talk about individuals who, knowingly or unknowingly, taught him important lessons.',
  '**Foolhardy Adventures**: Reflect on a time when he took on an impossible challenge or dangerous mission for the thrill of it.',
  '**First Love or Heartbreak**: Share thoughts or memories about his first love, a great heartbreak, or his views on love in general.',
  '**Misunderstood Moments**: Describe a situation where he was misunderstood or falsely accused and how he dealt with it.',
  '**Moments of Doubt**: Delve into times when he doubted himself, his abilities, or his path in life.',
  '**Unwanted Fame or Infamy**: Talk about a time when he gained fame or infamy for something he did or didn’t do, and his feelings about it.',
  '**First Encounters**: Describe his first meeting with a significant person, place, or creature that had a lasting impact on him.',
  '**Unexpected Friendships**: Narrate a time when he befriended someone unexpected, like an enemy, a rival, or even a monster.',
];

export let philosphicalMusings = [
  '**The Nature of Good and Evil**: Contemplating what it truly means to be good or evil, and whether those concepts even have a place in the world anymore.',
  '**The Value of Freedom**: Reflecting on the price of freedom, both personal and societal, and whether it\'s worth the sacrifices made to obtain it.',
  '**The Role of Fate and Free Will**: Pondering whether events in life are predestined or if individuals have the power to change their own destinies.',
  '**The Illusion of Power**: Questioning what true power is and whether those who seem powerful are often just prisoners of their own influence.',
  '**Life and Death**: Meditating on the meaning of life and the inevitability of death, and whether fearing it gives life more or less meaning.',
  '**The Burden of Knowledge**: Considering whether knowing too much can be a curse, and if ignorance truly is bliss in certain situations.',
  '**Heroism and Sacrifice**: Reflecting on what it means to be a hero, and whether the sacrifices heroes make are ever truly worth it.',
  '**Change and Stagnation**: Contemplating the necessity of change for growth, and the dangers of becoming too attached to the way things are.',
  '**The Masks People Wear**: Musing on how people present themselves to the world versus who they truly are, and whether it\'s possible to ever truly know someone.',
  '**Conflict and Peace**: Debating whether true peace can ever exist, or if conflict is an inherent part of life and progress.',
  '**The Nature of Reality**: Questioning what is real, and whether perception shapes reality more than facts or truths do.',
  '**The Pursuit of Happiness**: Considering what happiness truly is, and if it\'s something that can be pursued, or if it comes when least expected.',
  '**The Weight of Guilt and Regret**: Reflecting on past mistakes and whether it\'s possible to move forward without being weighed down by guilt or regret.',
  '**The Limits of Loyalty**: Pondering how far loyalty should go, and whether there’s a point at which it becomes more harmful than helpful.',
  '**The Purpose of Suffering**: Questioning whether suffering has a purpose or is merely a cruel aspect of existence, and if it\'s possible to find meaning in pain.',
];

let genericPlaces = [
  'Diner',
  'Museum',
  'Library',
  'Warehouse',
  'Cave',
  'Temple',
  'Marketplace',
  'Garden',
  'Tavern',
  'Alleyway',
  'Theater',
  'Observatory',
  'Laboratory',
  'Manor',
  'Bridge',
];

let adjectivePlaces = [
  'Haunted',
  'Run-down',
  'Forgotten',
  'Abandoned',
  'Ethereal',
  'Twisted',
  'Frozen',
  'Crimson',
  'Shifting',
  'Labyrinthine',
  'Overgrown',
  'Silent',
  'Shattered',
  'Flickering',
  'Veiled',
];

export function strangePlaces() {
  let place = getRandomItem(genericPlaces);
  let adjective = getRandomItem(adjectivePlaces);
  return `${adjective} ${place}`;
}

export let localCustoms = [
  '**Coming-of-Age Rituals**: Unique ceremonies or challenges that mark the transition from childhood to adulthood, possibly involving tests of strength, wisdom, or endurance.',
  '**Seasonal Festivals**: Annual celebrations tied to specific seasons, such as harvest festivals, winter solstice feasts, or spring renewal ceremonies.',
  '**Honorific Gestures**: Specific ways of greeting, showing respect, or acknowledging someone\'s presence, like bowing, touching foreheads, or exchanging tokens.',
  '**Marriage Ceremonies**: Distinctive wedding traditions, possibly involving symbolic objects, dances, or the sharing of special food or drink.',
  '**Funerary Rites**: The unique ways in which different communities honor their dead, such as sky burials, cremation rituals, or planting a tree for each departed soul.',
  '**Blessings and Curses**: Commonly used blessings for good fortune or curses for ill luck, possibly tied to local beliefs or superstitions.',
  '**Trade and Barter Customs**: Specific ways in which goods and services are exchanged, such as rituals of haggling, gifting before bargaining, or the use of unusual currencies.',
  '**Hospitality Rules**: Traditions around welcoming guests, including special foods or drinks offered, specific seating arrangements, or protective gestures.',
  '**Superstitions and Omens**: Widely held beliefs about signs of good or bad luck, such as particular animals crossing your path, specific weather patterns, or odd sounds.',
  '**Naming Ceremonies**: Special events held to name a newborn, often with rituals meant to bestow blessings or protections upon the child.',
  '**Storytelling Evenings**: Regular gatherings where people come together to share stories, folklore, and legends, often accompanied by music or specific foods.',
  '**Guardian Totems**: The creation and veneration of guardian figures or totems, believed to protect a village, family, or individual from harm.',
  '**Feats of Skill or Strength**: Periodic competitions showcasing specific skills or strengths, like archery, wrestling, or riddle contests, with winners gaining local prestige.',
  '**Mourning Colors**: The wearing of specific colors or adornments to show grief, often differing from the standard black, like white robes, purple sashes, or even dyed hair.',
  '**Courtship Displays**: Unique customs for courtship and wooing, such as the exchange of crafted gifts, public declarations, or the performance of daring deeds.',
];

export let mythicalCreatures = [
  'Charred',
  'Frozen',
  'Shredded',
  'Paralyzed',
  'Dismembered',
  'Mummified',
  'Emaciated',
  'Crystallized',
  'Petrified',
  'Desiccated',
  'Drained of life',
  'Swollen',
  'Skeletal',
  'Burned with acid',
  'Suffocated',
];

let sourcesRumors = [
  'Neighborhood Busybody',
  'Online Forum Post',
  'Social Media Influencer',
  'Conspiracy Theorist Podcast',
  'Tabloid News Article',
  'Office Water Cooler Chat',
  'Local Radio DJ',
  'Text Message from a Friend',
  'Taxi Driver\'s Stories',
  'Coffee Shop Barista',
  'University Student Group',
  'Anonymous Email Tip',
  'Celebrity Gossip Blog',
  'Reality TV Show',
  'Underground Club Promoter',
];

let rumorTopics = [
  'Disappearance of a Person',
  'Secret Project',
  'Haunted Building',
  'Corporate Scandal',
  'Hidden Fortune',
  'Underground Network',
  'Illegal Activity',
  'Cover-up or Conspiracy',
  'Mysterious Illness',
  'Controversial Relationship',
  'Unexplained Phenomenon',
  'New Cult Forming',
  'Lost Document or Artifact',
  'Scandalous Affair',
  'Secret Identity',
];

export function rumorsAndGossip() {
  let source = getRandomItem(sourcesRumors);
  let topic = getRandomItem(rumorTopics);
  return `According to **${source}**, there's a rumor going around about a **${topic}**. What do you think?`;
}

export let dreamsAndVisions = [
  '**An Apocalyptic Event**: Foretelling a catastrophic event like a natural disaster, societal collapse, or even a world-ending scenario.',
  '**A Mysterious Stranger**: Encountering an unknown figure who provides cryptic guidance or warnings, often disappearing before questions can be asked.',
  '**A Lost Loved One**: Seeing someone from the past who imparts a message, guidance, or closure on unresolved issues.',
  '**Endless Falling**: A vision of falling through darkness or space, representing loss of control, fear of failure, or an impending downfall.',
  '**A Fork in the Road**: Facing a critical choice or crossroads, symbolizing a major decision that will change the course of the dreamer’s life.',
  '**An Ancient Symbol**: Repeatedly seeing a symbol or glyph with no apparent meaning, hinting at something that needs to be discovered or deciphered.',
  '**A Gathering Storm**: A vision of a storm on the horizon, representing impending danger, internal conflict, or a powerful force that’s about to be unleashed.',
  '**A Shattered Mirror**: Seeing one’s own reflection break apart, symbolizing identity crisis, hidden truths, or an upcoming revelation.',
  '**An Endless Corridor**: Walking through a seemingly endless hallway with doors that lead to different, confusing scenarios, representing uncertainty or feeling trapped.',
  '**Speaking with Animals**: Communicating with animals that convey warnings, wisdom, or hints about upcoming events or hidden dangers.',
  '**A Mysterious City**: A vision of an unknown city, filled with unfamiliar people or strange architecture, possibly hinting at a place that needs to be found or avoided.',
  '**Eternal Light or Darkness**: Being surrounded by blinding light or engulfed in total darkness, symbolizing clarity, enlightenment, or complete ignorance and fear.',
  '**The Voice of the Unseen**: Hearing a voice without a source, delivering prophecies, instructions, or warnings that are difficult to interpret or believe.',
  '**A Timeless Cycle**: Witnessing events repeating themselves endlessly, suggesting a cycle that needs to be broken or a lesson that hasn’t been learned.',
  '**A World Transformed**: Seeing the familiar world completely changed—cities submerged underwater, forests turned to desert—indicating a drastic shift, either internal or external.',
];

export let adviceForAdventurers = [
  '**Trust Your Instincts**: Rely on your intuition when faced with uncertain situations; sometimes gut feelings are your best guide.',
  '**Always Have a Backup Plan**: Prepare for failure as much as for success; a well-thought-out contingency can save lives.',
  '**Stay Vigilant**: Never let your guard down, even in seemingly safe places. Danger often comes when least expected.',
  '**Know When to Retreat**: Sometimes the best strategy is to live to fight another day. Recognizing when you’re outmatched can be the key to survival.',
  '**Respect Local Customs**: Understanding and adhering to the customs of different cultures can be the difference between making allies and enemies.',
  '**Pack Light, But Smart**: Carry essentials, but don’t overload yourself. Prioritize items like healing supplies, versatile tools, and survival gear.',
  '**Keep Your Allies Close**: Trustworthy companions are invaluable. Look out for them, and they’ll do the same for you.',
  '**Always Scout Ahead**: Knowledge of your surroundings is crucial. Send someone ahead or use magic or technology to avoid traps and ambushes.',
  '**Stay Well-Rested**: Fatigue can cloud judgment and slow reactions. Make sure to get adequate rest whenever possible.',
  '**Beware of Strange Contracts**: Whether it\'s magical pacts or dubious deals, always read the fine print and be wary of hidden costs.',
  '**Ask the Right Questions**: Curiosity is a tool; use it wisely. Knowing what to ask can reveal hidden dangers or opportunities.',
  '**Keep Your Gear in Top Condition**: Maintain your weapons, armor, and tools. A faulty piece of equipment can spell disaster in critical moments.',
  '**Beware of Overconfidence**: Confidence is good, but arrogance can be deadly. Never underestimate your foes or overestimate your own abilities.',
  '**Blend In When Necessary**: Sometimes it\'s better to be unnoticed. Learn to adapt to your environment, whether in a bustling city or an unfamiliar wilderness.',
  '**Remember Your Mission**: It’s easy to get sidetracked, but never lose sight of your primary objective. Stay focused and committed to your goals.',
];

export let survivalTips = [
  '**Find Water First**: Water is essential. Locate a clean water source before anything else; it’s more critical than food in the short term.',
  '**Build a Shelter**: Protect yourself from the elements. Even a simple structure can make a huge difference in extreme weather conditions.',
  '**Stay Calm and Assess**: Panic leads to mistakes. Take a moment to assess your surroundings, resources, and immediate threats.',
  '**Signal for Help**: If you’re lost or stranded, create visible signals—like fires, ground markings, or reflective objects—to attract rescuers.',
  '**Learn to Start a Fire**: Fire provides warmth, protection, and a means to cook food. Always carry multiple methods of starting one.',
  '**Avoid Dangerous Terrain**: Steer clear of unstable ground, avalanche-prone areas, or dense vegetation that can trap you.',
  '**Know Edible Plants**: Learn to identify local edible and medicinal plants, but always err on the side of caution—some can be poisonous.',
  '**Watch the Weather**: Pay attention to changes in weather. Storms, extreme heat, or cold can be as dangerous as predators or lack of resources.',
  '**Conserve Energy**: Move efficiently and avoid unnecessary exertion. Fatigue and dehydration can creep up quickly and leave you vulnerable.',
  '**Protect Against Insects**: Insects can spread disease or cause painful bites. Use repellents, cover exposed skin, and avoid stagnant water.',
  '**Travel by Day, Rest by Night**: Unless it\'s too hot during the day, visibility is better, and you’re less likely to stumble into danger.',
  '**Plan Your Escape Route**: Always have a way out. Whether it\'s from a dangerous city or a hazardous forest, know your exits.',
  '**Keep a First Aid Kit**: A basic first aid kit with bandages, antiseptic, and pain relief can be the difference between life and death.',
  '**Stay Warm and Dry**: Hypothermia is a real threat. Keep yourself warm and dry, and change out of wet clothes as soon as possible.',
  '**Stay Alert**: Stay aware of your surroundings at all times. Watch for signs of predators, dangerous individuals, or shifting weather conditions. ',
];
export let dealingWithAuthority = [
  '**Governmental**: Elected officials, law enforcement, and bureaucratic organizations that maintain public order and implement laws.',
  '**Religious**: Clergy, spiritual leaders, and religious institutions that provide moral guidance and enforce spiritual laws.',
  '**Military**: Armed forces, militias, and paramilitary groups responsible for defense and security, often wielding considerable power.',
  '**Corporate**: CEOs, board members, and business conglomerates that influence economies and policies through financial means.',
  '**Criminal**: Crime syndicates, mafia bosses, and underground networks that operate outside the law, enforcing their own code of conduct.',
  '**Magical or Supernatural**: Mages, supernatural beings, or organizations with mystical powers that enforce rules beyond human comprehension.',
  '**Cultural**: Community elders, traditional leaders, or influential artists who uphold cultural norms and values.',
  '**Academic**: University boards, renowned scholars, or secret societies within educational institutions that dictate knowledge and research.',
  '**Environmental**: Conservation organizations, druidic circles, or eco-activist groups that enforce protection of nature and wildlife.',
  '**Judicial**: Judges, lawyers, and court systems that interpret and enforce laws, often serving as the final arbiters of justice.',
  '**Technological**: Inventors, hackers, or tech corporations that control advanced technology or information, shaping society\'s progress.',
  '**Diplomatic**: Ambassadors, consulates, or international organizations that mediate conflicts and uphold treaties between nations.',
  '**Medical**: Health boards, leading doctors, or pharmaceutical companies that dictate medical practices and public health policies.',
  '**Economic**: Banks, investment groups, or trade unions that control wealth distribution and influence economic stability.',
  '**Media**: Journalists, news corporations, or social media influencers who control information flow and public opinion.',
];

export let personalCollection = [
  '**Gear**: Equipment, tools, or gadgets collected for specific activities or purposes, such as camping gear or tech gadgets.',
  '**Art**: Paintings, sculptures, or any form of visual art collected for aesthetic appreciation or investment.',
  '**Books**: A collection of novels, reference books, or rare editions, reflecting diverse genres or subjects.',
  '**Clothing**: Fashion items, vintage pieces, or culturally significant attire gathered over time.',
  '**Trophies**: Awards, medals, or memorabilia from competitions, achievements, or significant events.',
  '**Souvenirs**: Mementos from travels, events, or special occasions, often carrying sentimental value.',
  '**Photos**: Photographs from different times, places, or events, either physical prints or digital albums.',
  '**Toys**: Collectible toys, action figures, or plushies, either as nostalgic items or investments.',
  '**Tools**: Specialized or vintage tools for crafting, construction, or hobbies, collected for use or admiration.',
  '**Musical Instruments**: A variety of instruments, from common to rare, collected for playing or display.',
  '**Coins**: Currency from different countries or historical periods, collected for their value or history.',
  '**Gems and Minerals**: Precious stones, crystals, or rare minerals, appreciated for their beauty and rarity.',
  '**Documents**: Important papers, letters, or historical documents kept for their significance or historical value.',
  '**Vehicles**: Cars, motorcycles, or other means of transport collected for their uniqueness, performance, or nostalgia.',
  '**Plants**: A collection of houseplants, rare species, or garden plants grown and nurtured for their beauty or uniqueness.',
];

let form = [
  '**Sword**: A blade that may have unique designs or materials, representing strength or honor.',
  '**Amulet**: A pendant or talisman worn around the neck, often symbolizing protection or power.',
  '**Scroll**: A piece of parchment containing ancient knowledge or spells, typically unrolled for use.',
  '**Ring**: A circular band worn on the finger, often granting hidden powers or enhancements.',
  '**Staff**: A long rod used by spellcasters, imbued with magical properties and often a focus for spells.',
  '**Shield**: A defensive item that not only protects but may also have special abilities to ward off attacks.',
  '**Cloak**: A garment that can grant stealth, invisibility, or other forms of concealment.',
  '**Boots**: Footwear that enhances speed, agility, or allows for extraordinary movement.',
  '**Belt**: A waist accessory that can boost strength or grant other physical enhancements.',
  '**Gems**: Precious stones that can contain magical properties or amplify certain abilities when carried.',
  '**Gloves**: Handwear that enhances dexterity, strength, or magical abilities.',
  '**Horn**: A wind instrument that can summon creatures or invoke powerful effects when blown.',
  '**Book**: A tome of ancient knowledge that may grant access to spells or forbidden knowledge.',
  '**Mask**: A facial covering that can alter the wearer’s appearance or grant unique powers.',
  '**Gemstone**: A rare gem that can store spells or provide enhancements when used in rituals.',
]

let abilities = [
  '**Fire Manipulation**: Control over flames, allowing the user to create or extinguish fire.',
  '**Telepathy**: The ability to read minds or communicate mentally with others.',
  '**Invisibility**: The power to become unseen by others, evading detection.',
  '**Teleportation**: The ability to instantly transport oneself to another location.',
  '**Healing**: The capacity to mend wounds or cure ailments through magical means.',
  '**Weather Control**: The power to influence atmospheric conditions, such as summoning storms.',
  '**Time Manipulation**: The ability to slow down, speed up, or briefly rewind time.',
  '**Illusions**: The power to create deceptive images or sounds, misleading others.',
  '**Animal Communication**: The ability to understand and speak with animals.',
  '**Enhanced Strength**: Amplifying physical power beyond normal human limits.',
  '**Elemental Control**: The ability to manipulate one or more natural elements (earth, air, water).',
  '**Mind Control**: The power to influence or dominate the thoughts and actions of others.',
  '**Shape-shifting**: The ability to transform into another being or object.',
  '**Barrier Creation**: The capacity to create protective barriers against attacks or harm.',
  '**Aura Manipulation**: The ability to project emotions or influence others through one’s presence.',
];

let curses = [
  '**Bloodlust**: The user feels an uncontrollable urge to harm others or engage in violence.',
  '**Obsession**: The cursed item leads the user to become fixated on a particular goal or object, often to their detriment.',
  '**Uncontrollable Magic**: Spells may go awry or cause unintended consequences when the item is used.',
  '**Debt to Dark Powers**: The user must pay a price for the item’s benefits, often leading to servitude or sacrifice.',
  '**Corruption of Intent**: The user’s motives become tainted, leading to malicious or selfish actions.',
  '**Backfire**: Any protective measures taken may cause harm to the user instead.',
  '**Isolation**: The wearer becomes invisible or undetectable to allies, leading to loneliness and despair.',
  '**Compulsion to Wander**: The user feels an incessant need to travel, often leading to danger or misdirection.',
  '**Drain of Vitality**: The item slowly saps the user’s strength, health, or life force.',
  '**Misfortune**: Bad luck follows the user, causing accidents or negative events to occur around them.',
  '**Clumsiness**: The user suffers from frequent accidents or mishaps, often when using the item.',
  '**Summoning Dangers**: Instead of allies, the item calls forth threats or enemies to the user.',
  '**Madness**: Exposure to the item leads to insanity or extreme paranoia, distorting reality.',
  '**Hostility**: The user becomes the target of aggression from others, often without provocation.',
  '**Tragic Fate**: The user is bound to experience calamities or disasters that affect their life significantly.',
];

export function legendaryRelics() {
  let item = getRandomItem(form);
  let ability = getRandomItem(abilities);
  return `${item}<br/>${ability}`;
}

export function cursedItems() {
  let item = getRandomItem(form);
  let curse = getRandomItem(curses);
  return `${item}<br/>${curse}`;
}

export let mysteriousPhenomena = [
  '**Magical Storm**: A tempest that brings unnatural weather patterns, including strange lightning or altered rain.',
  '**Missing Persons**: Individuals disappearing without a trace, often last seen near unusual locations or events.',
  '**Haunting**: Locations plagued by ghostly apparitions, strange noises, or unsettling sensations.',
  '**Temporal Distortion**: Areas where time behaves erratically, causing time loops or rapid aging.',
  '**Dream Manifestations**: People experiencing vivid dreams that affect reality, leading to physical changes or occurrences.',
  '**Cursed Objects**: Items that bring misfortune or strange occurrences to those who possess them.',
  '**Rifts in Reality**: Cracks in the fabric of space that lead to other dimensions or bizarre landscapes.',
  '**Animal Behavior Changes**: Local fauna acting unusually, exhibiting strange behaviors or disappearing altogether.',
  '**Unexplained Lights**: Mysterious orbs or lights appearing in the sky or around certain areas, often linked to paranormal activity.',
  '**Eldritch Sounds**: Unnatural sounds, like whispers or melodic tones, emanating from locations with no clear source.',
  '**Disappearing Structures**: Buildings or landmarks that vanish overnight, leaving no evidence of their existence.',
  '**Sudden Growths**: Rapidly expanding flora or fauna that seem unnatural or possess strange properties.',
  '**Mirages or Illusions**: Visual phenomena that create false images or environments, leading travelers astray.',
  '**Anomalous Weather Patterns**: Unseasonable weather events that defy logic, such as snow in summer or rain with no clouds.',
  '**Sudden Spells of Silence**: Areas where sound abruptly ceases, leaving a haunting stillness that disorients those within.',
];

export let forbiddenKnowledge = [
  '**Blood Magic**: The manipulation of life force through the use of blood, often requiring sacrifices.',
  '**Dark Magic**: Arcane practices that draw upon malevolent forces or entities, often leading to corruption.',
  '**Necromancy**: The art of communicating with or raising the dead, often shunned for its moral implications.',
  '**Eldritch Lore**: Knowledge of ancient beings or cosmic entities that defy human understanding.',
  '**Curses and Hexes**: Spells that bring harm or misfortune upon others, often requiring complex rituals.',
  '**Time Manipulation**: The understanding and ability to alter the flow of time, leading to dangerous consequences.',
  '**Demonology**: The study of demons and the summoning of infernal beings for power or knowledge.',
  '**Forbidden Texts**: Ancient tomes that contain dangerous spells, rituals, or secrets that can lead to madness.',
  '**Psychic Manipulation**: Techniques for influencing or controlling the minds of others, often considered unethical.',
  '**Alchemical Secrets**: Knowledge of transmuting substances or creating elixirs with perilous side effects.',
  '**Reality Warping**: Understanding how to alter the very fabric of reality, often leading to catastrophic outcomes.',
  '**Elemental Corruption**: Practices that twist natural elements into destructive forces.',
  '**Prophetic Knowledge**: The ability to foresee the future, often accompanied by dire consequences for those who know.',
  '**Spirit Binding**: The practice of capturing and controlling spirits, often leading to hauntings or unrest.',
  '**Infernal Pacts**: Agreements made with dark forces that grant power at a terrible cost.',
];

let agendas = [
  'Search for a lost artifact',
  'Planning a hostile takeover',
  'Secretly funding a cult',
  'Establishing a new territory',
  'Covering up unethical experiments',
  'Manipulating public perception',
  'Disrupting a major event',
  'Enacting a prophecy',
  'Pursuing an ancient prophecy',
  'Overthrowing a government',
  'Summoning a dark entity',
  'Implementing oppressive laws',
  'Seeking personal gain from ruins',
  'Funding secret experiments',
  'Exposing a scandal',
];

export function hiddenAgendas() {
  let authorities = getRandomItem(dealingWithAuthority);
  let source = getRandomItem(sourcesRumors);
  let topic = getRandomItem(agendas);
  return `**${authorities}** are rumored to be **${topic}** according to **${source}**. What do you think?`;
};

export let rantOnSocietalNorms = [
  '**Caution Around Magic**: People may develop a general wariness of magic, treating it with skepticism and fear due to its unknown consequences.',
  '**Divided Beliefs**: Society could split into factions based on beliefs about magic, with some embracing it as a tool for progress while others reject it as dangerous or unnatural.',
  '**Curiosity and Exploration**: A norm of curiosity might arise, encouraging individuals to explore magical phenomena and seek out knowledge about its origins and uses.',
  '**New Education Systems**: Institutions may adapt by including magic studies alongside traditional subjects, creating specialized schools for learning magic or understanding supernatural beings.',
  '**Stigma Against Practitioners**: Practitioners of magic might face discrimination or suspicion, leading to the emergence of underground communities or secret societies.',
  '**Legal Regulations**: Governments may implement laws regulating the use of magic, similar to how dangerous substances are controlled, creating a legal framework for magical practices.',
  '**Cultural Integration**: Art, literature, and entertainment might increasingly incorporate magical themes, influencing cultural expressions and societal values.',
  '**Mental Health Awareness**: The psychological impact of the revelation may lead to increased focus on mental health, with discussions about coping with the stress of living in a newly magical world.',
  '**Supernatural Rights**: Movements advocating for the rights of supernatural beings (like spirits or magical creatures) could emerge, sparking debates on ethics and coexistence.',
  '**Collective Memory**: Stories and folklore regarding magic might shift, leading to a reevaluation of historical events and legends as people search for explanations.',
  '**Empathy and Understanding**: As communities face supernatural challenges, norms of empathy and collaboration could develop, encouraging individuals to work together to address common fears and problems.',
  '**Rituals and Traditions**: New rituals might emerge around magic, whether as a means of protection, celebration, or connection to the supernatural.',
  '**Increased Security**: As fear of the unknown grows, there may be a push for enhanced security measures to protect against potential magical threats.',
  '**Economic Shifts**: The emergence of magic could lead to new industries and jobs focused on magical services, education, or security, reshaping the economy.',
  '**Debates on Morality**: Discussions about the ethical implications of using magic—such as its effects on free will, consent, and the natural order—might become commonplace in societal discourse.',
];

export let controversialTopics = [
  '**Magic Regulation**: Debates over how much regulation is needed for the practice of magic and who should enforce these rules.',
  '**Supernatural Rights**: Discussions on the rights of supernatural beings and whether they deserve legal protections or representation.',
  '**Ethics of Magic Use**: Controversy surrounding the moral implications of using magic, particularly in areas like health, warfare, and privacy.',
  '**Access to Magic**: Disagreements over who should have access to magical knowledge and practices, and whether it should be restricted to certain groups.',
  '**Cultural Appropriation**: Tensions arising from the adoption of magical practices from different cultures without proper understanding or respect.',
  '**Education and Curriculum**: Conflicts about how magic should be integrated into educational systems, including debates over its validity and importance.',
  '**Fear of the Unknown**: Societal divisions between those who embrace magic and those who fear it, leading to potential discrimination and social unrest.',
  '**Scientific vs. Magical Explanations**: Debates over the validity of scientific methods in understanding magic, leading to conflicts between rationalists and mystics.',
  '**Health Risks of Magic**: Controversies regarding the potential dangers of using magic, such as side effects or the risk of addiction.',
  '**Exploitation of Magic**: Discussions about the potential exploitation of magical beings or resources for profit, raising ethical concerns.',
  '**Religious Interpretations**: Conflicting interpretations of religious texts regarding the existence and use of magic, leading to sectarian tensions.',
  '**Historical Revisions**: Debates over how history should be rewritten to incorporate the newfound knowledge of magic, leading to conflicts over cultural narratives.',
  '**Use of Magic in Law Enforcement**: Controversy surrounding the use of magic in policing and security, including concerns about privacy and abuse of power.',
  '**Environmental Impact of Magic**: Discussions about how the use of magic affects the environment, including concerns over magical pollution or destruction of natural habitats.',
  '**Mental Health and Magic**: Controversy surrounding the psychological effects of exposure to magic, including debates on how to support those struggling with the transition.',
];

export let ethicalDilemmas = [
  '**Innocent Creatures vs. Dangerous Beasts**: Deciding whether to hunt a creature that poses a threat to society, knowing it may be innocent or misunderstood.',
  '**Bounty vs. Morality**: Weighing the financial benefits of accepting a bounty for killing a rare magical creature against the ethical implications of extinction.',
  '**Collaboration with Supernatural Beings**: Facing the choice of partnering with supernatural entities for assistance in hunting, despite their potentially malevolent nature.',
  '**Dealing with Corruption**: Navigating the murky waters of a corrupt organization that employs unethical methods to achieve its goals, even if they hunt dangerous creatures.',
  '**Protecting the Vulnerable**: Choosing between saving a town from a monster and protecting the creature’s habitat or family, knowing that both cannot be saved.',
  '**Loyalty to Guilds or Communities**: Balancing loyalty to a guild that demands ruthless methods with personal beliefs about mercy and justice towards supernatural beings.',
  '**Use of Forbidden Knowledge**: Contemplating the use of dark or forbidden magic to gain an advantage in hunting, despite knowing it could corrupt their soul.',
  '**Post-Hunt Consequences**: Grappling with the consequences of a hunt, such as collateral damage to the environment or innocent bystanders affected by the creature\'s death.',
  '**Seeking Redemption**: Encountering a former monster hunter who has turned to hunting people or engaging in immoral practices, forcing a choice between aiding them or stopping them.',
  '**Cultural Sensitivity**: Addressing the ethics of hunting creatures that are revered or considered sacred by certain cultures, leading to potential backlash.',
  '**Emotional Detachment vs. Empathy**: Struggling with the emotional toll of killing creatures that may have families or lives, while trying to maintain a detached professional demeanor.',
  '**Truth vs. Reputation**: Deciding whether to expose the truth about a misunderstood creature\'s behavior or to maintain the narrative that justifies its hunting for the sake of public safety.',
  '**Sacrificing the Few for the Many**: Facing the moral dilemma of sacrificing a small number of supernatural beings to save a larger population from imminent danger.',
  '**Intervention vs. Non-Intervention**: Debating whether to intervene in a conflict between two supernatural factions, risking involvement in a war that could escalate.',
  '**Redemption for Monsters**: Encountering creatures that can be rehabilitated or redeemed instead of killed, leading to the question of whether they deserve a',
];

export let setting = [
  '**City Districts**: Various neighborhoods with unique magical characteristics or communities (e.g., a bustling market district, a magical arts district).',
  '**Skyscrapers and Landmarks**: Iconic buildings that serve as hubs of magic or supernatural activity (e.g., a tower with a magical observatory).',
  '**Underground Areas**: Subways or tunnels that house magical creatures or hidden societies.',
  '**Parks and Green Spaces**: Urban parks that hold magical secrets or serve as meeting points for supernatural beings.',
  '**Magical Nightlife**: Clubs, bars, or venues where magic is openly practiced or celebrated.',
  '**Public Squares**: Gathering places for events, protests, or celebrations related to magic and the supernatural.',
  '**Cultural Institutions**: Museums or galleries showcasing magical artifacts or the history of magic in the city.',
  '**Transport Hubs**: Bus stations or train terminals with magical connections or enchantments.',
  '**Crime Scenes**: Locations of recent supernatural incidents that stir public interest and fear.',
  '**Hidden Shops**: Stores that sell magical items or potions, often found in unexpected places.',
  '**Rooftop Gardens**: Elevated green spaces that serve as refuge or meeting points for magic users.',
  '**Historical Sites**: Areas that highlight the city’s magical history, including battles or major events.',
  '**Supernatural Agencies**: Offices or headquarters for organizations dedicated to managing magical affairs.',
  '**Community Centers**: Places where residents gather to learn about and discuss magic-related issues.',
  '**Event Venues**: Spaces where magical tournaments, exhibitions, or conferences take place.',
];

export let characters = [
  '**Urban Monster Hunters**: Individuals who patrol the city, specializing in hunting magical creatures that threaten urban safety.',
  '**Street Magicians**: Performers who use real magic to entertain or deceive, often operating in public spaces.',
  '**Government Officials**: Individuals in charge of regulating magic use and managing supernatural affairs.',
  '**Cultural Icons**: Celebrities or influencers who embody the city\'s magical culture and shape public opinion.',
  '**Urban Legends**: Characters based on or embodying local myths, adding depth to the city’s folklore.',
  '**Informants and Spies**: Characters who gather information about magical happenings for various factions.',
  '**Activists**: Individuals advocating for the rights of magical beings or against the misuse of magic.',
  '**Corporate Leaders**: Executives of companies that profit from magic, pushing ethical boundaries for gain.',
  '**Streetwise Guides**: Locals with deep knowledge of the city’s magical underbelly and hidden secrets.',
  '**Politicians**: Figures navigating the complexities of magic regulation and public perception.',
  '**Gangs and Syndicates**: Groups that operate in the shadows, often dealing in magical contraband or services.',
  '**Mentors**: Experienced magic users who guide newcomers in navigating the urban magical landscape.',
  '**Former Heroes**: Characters with a history of fighting against magical threats who are now disillusioned or retired.',
  '**Supernatural Investigators**: Detectives specializing in solving magical crimes or mysteries.',
  '**Bystanders**: Ordinary citizens who find themselves unexpectedly drawn into the world of magic and the supernatural.',
];


export async function getPrompt(index: number) {
  return getRandomImage();

  switch (index) {
    case 0: return getRandomItem(personalExperiences);
    case 1: return getRandomItem(philosphicalMusings);
    case 2: return strangePlaces();
    case 3: return getRandomItem(localCustoms);
    case 4: return `Victims are **${getRandomItem(mythicalCreatures)}**`;
    case 5: return rumorsAndGossip();
    case 6: return getRandomItem(dreamsAndVisions);
    case 7: return getRandomItem(adviceForAdventurers);
    case 8: return getRandomItem(survivalTips);
    case 9: return getRandomItem(dealingWithAuthority);
    case 10: return getRandomItem(personalCollection);
    case 11: return legendaryRelics();
    case 12: return cursedItems();
    case 13: return getRandomItem(mysteriousPhenomena);
    case 14: return getRandomItem(forbiddenKnowledge);
    case 15: return hiddenAgendas();
    case 16: return getRandomItem(rantOnSocietalNorms);
    case 17: return getRandomItem(controversialTopics);
    case 18: return getRandomItem(ethicalDilemmas);
    case 19: return getRandomItem(setting);
    case 20: return getRandomItem(characters);
    case 21: return getRandomImage();
  }
}

export async function getRandomImage() {
  const response = await fetch ('https://prompt.aj-hunter.com/.netlify/functions/random-image', {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    }
  });
  const data = await response.json();

}
