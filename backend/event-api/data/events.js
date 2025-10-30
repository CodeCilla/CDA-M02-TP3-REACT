const events = [
  // RENNES - Soirées
  {
    id: "1",
    name: "Foam Party XXL",
    date: "2025-11-15",
    location: "Le Diapason",
    city: "Rennes",
    category: "soirée",
    description: "La plus grosse soirée mousse de l'année ! DJ international, 3 pistes de danse, animations jusqu'au bout de la nuit.",
    image: "https://picsum.photos/seed/foam1/400/250",
    map: "https://www.google.com/maps?q=Le+Diapason+Rennes&ll=48.1155,-1.6366&z=17"
  },
  {
    id: "2",
    name: "Nuit Électro - Winter Edition",
    date: "2025-11-22",
    location: "L'Étage",
    city: "Rennes",
    category: "soirée",
    description: "Soirée électro avec les meilleurs DJ's de la scène rennaise. Ambiance garantie !",
    image: "https://picsum.photos/seed/electro1/400/250",
    map: "https://www.google.com/maps?q=L'Étage+Rennes&ll=48.1143,-1.6738&z=17"
  },
  {
    id: "3",
    name: "Soirée Années 80",
    date: "2025-11-28",
    location: "Le Liberté",
    city: "Rennes",
    category: "soirée",
    description: "Revivez les tubes des années 80 ! Dress code : fluo obligatoire. Concours de dance en milieu de soirée.",
    image: "https://picsum.photos/seed/80s1/400/250",
    map: "https://www.google.com/maps?q=Le+Liberté+Rennes&ll=48.1101,-1.6818&z=17"
  },
  {
    id: "4",
    name: "Halloween Party",
    date: "2025-10-31",
    location: "Le Pyg",
    city: "Rennes",
    category: "soirée",
    description: "La soirée d'Halloween la plus terrifiante de Rennes. Déguisement obligatoire, élection du meilleur costume !",
    image: "https://picsum.photos/seed/halloween1/400/250",
    map: "https://www.google.com/maps?q=Le+Pyg+Rennes&ll=48.1120,-1.6660&z=17"
  },
  {
    id: "5",
    name: "Latino Night",
    date: "2025-12-05",
    location: "Le Backstage",
    city: "Rennes",
    category: "soirée",
    description: "Enflammez la piste sur des rythmes latinos : salsa, bachata, reggaeton. Cours d'initiation à 21h.",
    image: "https://picsum.photos/seed/latino1/400/250",
    map: "https://www.google.com/maps?q=Le+Backstage+Rennes&ll=48.1090,-1.6700&z=17"
  },

  // RENNES - Concerts
  {
    id: "6",
    name: "Rock Night : The Strokes Tribute",
    date: "2025-11-18",
    location: "L'Ubu",
    city: "Rennes",
    category: "concert",
    description: "Tribute band des Strokes pour une soirée rock endiablée. Petit prix étudiant !",
    image: "https://picsum.photos/seed/rock1/400/250",
    map: "https://www.google.com/maps?q=L'Ubu+Rennes&ll=48.1145,-1.6735&z=17"
  },
  {
    id: "7",
    name: "Jazz au Liberté",
    date: "2025-11-25",
    location: "Le Liberté",
    city: "Rennes",
    category: "concert",
    description: "Soirée jazz intimiste avec le quartet de Marc Dupont. Ambiance feutrée, cocktails d'exception.",
    image: "https://picsum.photos/seed/jazz1/400/250",
    map: "https://www.google.com/maps?q=Le+Liberté+Rennes&ll=48.1101,-1.6818&z=17"
  },
  {
    id: "8",
    name: "Rap Game : Scène Ouverte",
    date: "2025-12-01",
    location: "Le Jardin Moderne",
    city: "Rennes",
    category: "concert",
    description: "Scène ouverte pour les rappeurs en herbe. Battles, freestyles, ambiance Hip-Hop authentique.",
    image: "https://picsum.photos/seed/rap1/400/250",
    map: "https://www.google.com/maps?q=Le+Jardin+Moderne+Rennes&ll=48.1290,-1.6530&z=17"
  },
  {
    id: "9",
    name: "Indie Pop Festival Indoor",
    date: "2025-12-08",
    location: "La Cité",
    city: "Rennes",
    category: "concert",
    description: "3 groupes indie pop émergents pour une soirée découverte. Bar local et foodtrucks sur place.",
    image: "https://picsum.photos/seed/indie1/400/250",
    map: "https://www.google.com/maps?q=La+Cité+Rennes&ll=48.1095,-1.6680&z=17"
  },

  // RENNES - Festivals
  {
    id: "10",
    name: "Trans Musicales de Rennes",
    date: "2025-12-12",
    location: "Parc Expo",
    city: "Rennes",
    category: "festival",
    description: "LE festival incontournable de découvertes musicales. 3 jours, 70 concerts, tous styles confondus.",
    image: "https://picsum.photos/seed/trans1/400/250",
    map: "https://www.google.com/maps?q=Parc+Expo+Rennes&ll=48.0925,-1.6802&z=17"
  },
  {
    id: "11",
    name: "Mythos Festival",
    date: "2025-11-20",
    location: "Esplanade Charles de Gaulle",
    city: "Rennes",
    category: "festival",
    description: "Festival de musiques du monde. Découvrez des sonorités venues des 4 coins de la planète.",
    image: "https://picsum.photos/seed/mythos1/400/250",
    map: "https://www.google.com/maps?q=Esplanade+Charles+de+Gaulle+Rennes&ll=48.1080,-1.6805&z=17"
  },

  // RENNES - Open-air
  {
    id: "12",
    name: "Sunset Open-Air",
    date: "2025-11-10",
    location: "Prairies Saint-Martin",
    city: "Rennes",
    category: "open-air",
    description: "Open-air au coucher du soleil. Techno, house, ambiance chill. BYO (Bring Your Own) autorisé.",
    image: "https://picsum.photos/seed/sunset1/400/250",
    map: "https://www.google.com/maps?q=Prairies+Saint-Martin+Rennes&ll=48.1005,-1.6390&z=17"
  },
  {
    id: "13",
    name: "Rave in the Woods",
    date: "2025-12-15",
    location: "Forêt de Brocéliande (départ Rennes)",
    city: "Rennes",
    category: "open-air",
    description: "Rave en pleine nature. Sound-system XXL, DJ's techno hardcore. Navettes depuis Rennes.",
    image: "https://picsum.photos/seed/rave1/400/250",
    map: "https://www.google.com/maps?q=Forêt+de+Brocéliande&ll=48.0020,-2.2500&z=12"
  },

  // LE MANS - Soirées
  {
    id: "14",
    name: "Soirée Mousse Géante",
    date: "2025-11-16",
    location: "Le Zinc",
    city: "Le Mans",
    category: "soirée",
    description: "Plongez dans une mer de mousse ! DJ résident, boissons à prix réduit jusqu'à minuit.",
    image: "https://picsum.photos/seed/foam2/400/250",
    map: "https://www.google.com/maps?q=Le+Zinc+Le+Mans&ll=48.0075,0.2005&z=17"
  },
  {
    id: "15",
    name: "Nuit Blanche Étudiante",
    date: "2025-11-23",
    location: "Le Reflet",
    city: "Le Mans",
    category: "soirée",
    description: "Soirée 100% étudiante avec tarif préférentiel sur présentation de la carte. 3 ambiances, 3 salles.",
    image: "https://picsum.photos/seed/blanche1/400/250",
    map: "https://www.google.com/maps?q=Le+Reflet+Le+Mans&ll=48.0100,0.1980&z=17"
  },
  {
    id: "16",
    name: "Disco Fever",
    date: "2025-11-29",
    location: "Le VIP Room",
    city: "Le Mans",
    category: "soirée",
    description: "Retour dans les années disco ! Boule à facettes, paillettes et funk. DJ Funkmaster aux platines.",
    image: "https://picsum.photos/seed/disco1/400/250",
    map: "https://www.google.com/maps?q=VIP+Room+Le+Mans&ll=48.0085,0.2020&z=17"
  },
  {
    id: "17",
    name: "Soirée Karaoké Géant",
    date: "2025-12-06",
    location: "Le Barock",
    city: "Le Mans",
    category: "soirée",
    description: "Montez sur scène et chantez vos tubes préférés ! Blind test musical à 23h avec cadeaux à gagner.",
    image: "https://picsum.photos/seed/karaoke1/400/250",
    map: "https://www.google.com/maps?q=Le+Barock+Le+Mans&ll=48.0060,0.1995&z=17"
  },
  {
    id: "18",
    name: "Techno Warehouse",
    date: "2025-12-13",
    location: "Hangar 24",
    city: "Le Mans",
    category: "soirée",
    description: "Soirée techno underground dans un hangar industriel. Line-up surprise, entrée gratuite avant minuit.",
    image: "https://picsum.photos/seed/warehouse1/400/250",
    map: "https://www.google.com/maps?q=Hangar+24+Le+Mans&ll=48.0120,0.2100&z=17"
  },

  // LE MANS - Concerts
  {
    id: "19",
    name: "Metal Night",
    date: "2025-11-19",
    location: "L'Oasis",
    city: "Le Mans",
    category: "concert",
    description: "Soirée métal avec 3 groupes locaux. Mosh pit garanti ! Bar rock avec bières artisanales.",
    image: "https://picsum.photos/seed/metal1/400/250",
    map: "https://www.google.com/maps?q=L'Oasis+Le+Mans&ll=48.0095,0.1960&z=17"
  },
  {
    id: "20",
    name: "Acoustic Sessions",
    date: "2025-11-26",
    location: "Le Café du Port",
    city: "Le Mans",
    category: "concert",
    description: "Concert acoustique intimiste. Folk, indie, chanson française. Ambiance cosy et chaleureuse.",
    image: "https://picsum.photos/seed/acoustic1/400/250",
    map: "https://www.google.com/maps?q=Le+Café+du+Port+Le+Mans&ll=48.0070,0.1930&z=17"
  },
  {
    id: "21",
    name: "Reggae Vibration",
    date: "2025-12-02",
    location: "Le Noctambule",
    city: "Le Mans",
    category: "concert",
    description: "Soirée reggae avec un groupe jamaïcain en tournée. Bonne humeur et vibes positives garanties.",
    image: "https://picsum.photos/seed/reggae1/400/250",
    map: "https://www.google.com/maps?q=Le+Noctambule+Le+Mans&ll=48.0115,0.2035&z=17"
  },
  {
    id: "22",
    name: "Électro Expérimental",
    date: "2025-12-09",
    location: "Le Pixel",
    city: "Le Mans",
    category: "concert",
    description: "Concert d'électro expérimentale avec projections vidéo. Pour les amateurs d'avant-garde.",
    image: "https://picsum.photos/seed/experimental1/400/250",
    map: "https://www.google.com/maps?q=Le+Pixel+Le+Mans&ll=48.0080,0.2000&z=17"
  },

  // LE MANS - Festivals
  {
    id: "23",
    name: "L'Épau en Musique",
    date: "2025-11-21",
    location: "Abbaye de l'Épau",
    city: "Le Mans",
    category: "festival",
    description: "Festival dans le cadre magique de l'abbaye. Musiques classiques et contemporaines se rencontrent.",
    image: "https://picsum.photos/seed/epau1/400/250",
    map: "https://www.google.com/maps?q=Abbaye+de+l'Épau+Le+Mans&ll=48.0375,0.2215&z=17"
  },
  {
    id: "24",
    name: "Festival Hop Pop Hop",
    date: "2025-12-14",
    location: "Esplanade J. Rueff",
    city: "Le Mans",
    category: "festival",
    description: "Festival pop-rock avec des groupes régionaux. 2 jours de concerts, village associatif, animations.",
    image: "https://picsum.photos/seed/hophop1/400/250",
    map: "https://www.google.com/maps?q=Esplanade+Jean+Rueff+Le+Mans&ll=48.0060,0.1905&z=17"
  },

  // LE MANS - Open-air
  {
    id: "25",
    name: "Open-air des 24h",
    date: "2025-11-11",
    location: "Circuit Bugatti",
    city: "Le Mans",
    category: "open-air",
    description: "Open-air sur le mythique circuit des 24h du Mans. Techno, trance, ambiance de folie jusqu'au levé du soleil.",
    image: "https://picsum.photos/seed/circuit1/400/250",
    map: "https://www.google.com/maps?q=Circuit+Bugatti+Le+Mans&ll=47.9370,0.2256&z=17"
  },
  {
    id: "26",
    name: "Nature & Beats",
    date: "2025-12-16",
    location: "Forêt de Bercé",
    city: "Le Mans",
    category: "open-air",
    description: "Open-air écolo en pleine forêt. House music, food-trucks bio, respect de l'environnement.",
    image: "https://picsum.photos/seed/nature1/400/250",
    map: "https://www.google.com/maps?q=Forêt+de+Bercé&ll=47.9500,0.4500&z=12"
  },

  // NANTES - Culture & Expositions
  {
    id: "27",
    name: "Expo Street Art Nantes",
    date: "2025-11-20",
    location: "Les Machines de l’Île",
    city: "Nantes",
    category: "exposition",
    description: "Une expo en plein air dédiée au street art et graffiti, avec des artistes locaux et internationaux. Entrée gratuite !",
    image: "https://picsum.photos/seed/streetart1/400/250",
    map: "https://www.google.com/maps?q=Les+Machines+de+l'Île+Nantes&ll=47.2060,-1.5640&z=17"
  },
  {
    id: "28",
    name: "Festival du Film d’Auteur",
    date: "2025-11-27",
    location: "Cinéma Le Katorza",
    city: "Nantes",
    category: "culture",
    description: "Projections de films indépendants et rencontres avec les réalisateurs. Cérémonie de clôture et remise de prix.",
    image: "https://picsum.photos/seed/film1/400/250",
    map: "https://www.google.com/maps?q=Cinéma+Le+Katorza+Nantes&ll=47.2145,-1.5585&z=17"
  },
  {
    id: "29",
    name: "Salon du Goût et des Saveurs",
    date: "2025-12-03",
    location: "Parc de la Beaujoire",
    city: "Nantes",
    category: "gastronomie",
    description: "Dégustations, ateliers de cuisine, et stands de producteurs locaux. Un vrai paradis pour les gourmets !",
    image: "https://picsum.photos/seed/gout1/400/250",
    map: "https://www.google.com/maps?q=Parc+de+la+Beaujoire+Nantes&ll=47.2560,-1.5250&z=17"
  },
  {
    id: "30",
    name: "Théâtre Impro Party",
    date: "2025-12-10",
    location: "Théâtre Graslin",
    city: "Nantes",
    category: "théâtre",
    description: "Une soirée d’improvisation hilarante où le public choisit les thèmes ! Rires garantis toute la soirée.",
    image: "https://picsum.photos/seed/impro1/400/250",
    map: "https://www.google.com/maps?q=Théâtre+Graslin+Nantes&ll=47.2160,-1.5625&z=17"
  },
];

module.exports = events;