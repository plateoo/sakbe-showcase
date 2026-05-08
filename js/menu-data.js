/* Sakbé — source de données menu (67 plats, 8 catégories)
 * Modifiable depuis admin.html (sauvegarde localStorage).
 * Lecture en priorité depuis localStorage, fallback sur ces valeurs. */
window.SAKBE_MENU = {
  version: 1,
  categories: [
    { id: "mezzes-froids", roman: "I",    name: "Mezzés froids",       subtitle: "" },
    { id: "mezzes-chauds", roman: "II",   name: "Mezzés chauds",       subtitle: "" },
    { id: "grillades",     roman: "III",  name: "Sakbé Grillades",     subtitle: "Service de 18h à 22h" },
    { id: "signatures",    roman: "IV",   name: "Saveurs authentiques", subtitle: "" },
    { id: "sauces",        roman: "V",    name: "Sauces maison",       subtitle: "" },
    { id: "mocktails",     roman: "VI",   name: "Mocktails",           subtitle: "" },
    { id: "boissons",      roman: "VII",  name: "Boissons",            subtitle: "" },
    { id: "desserts",      roman: "VIII", name: "Desserts",            subtitle: "" }
  ],
  dishes: [
    // I · Mezzés froids
    { id: "houmous",            category: "mezzes-froids", name: "Houmous",                          desc: "Houmous crémeux à base de pois chiches et tahini, agrémenté d'huile d'olive de qualité, servi avec du pain oriental chaud.", price: 7.50, allergens: ["vegan","vegetarien","sans-lactose"], photo: "img/houmous.jpg", featured: true },
    { id: "baba-ganoush",       category: "mezzes-froids", name: "Baba Ganoush",                     desc: "Purée d'aubergines grillées, tahini, citron et huile d'olive, servie avec du pain syrio-libanais chaud.", price: 6.50, allergens: ["vegan","vegetarien","sans-lactose"], photo: "img/ganoush.jpg", featured: true },
    { id: "moutable",           category: "mezzes-froids", name: "Caviar d'aubergine (Moutable)",    desc: "Aubergines frites mélangées à du tahini, du jus de citron et de l'ail, pour une purée onctueuse et savoureuse.", price: 7.00, allergens: ["vegan","vegetarien","sans-lactose"], photo: null },
    { id: "mouhamara",          category: "mezzes-froids", name: "Mouhamara",                        desc: "Tartinade de poivrons rouges grillés, noix concassées, mélasse de grenade et chapelure, parfumée aux épices.", price: 7.50, allergens: ["vegetarien"], photo: null },
    { id: "yalnji",             category: "mezzes-froids", name: "Yalnji",                           desc: "Délice d'héritage ottoman : feuilles de vigne roulées à la main, farcies de riz parfumé aux herbes et nappées d'huile d'olive.", price: 5.50, allergens: ["vegan","vegetarien"], photo: null },
    { id: "fattouch",           category: "mezzes-froids", name: "Fattouch",                         desc: "Salade colorée de légumes frais (salade, tomate, concombre), agrémentée de croûtons de pain libanais croustillants pour une texture et un goût uniques.", price: 7.00, allergens: ["vegetarien"], photo: "img/fatoush.jpg", featured: true },
    { id: "taboule",            category: "mezzes-froids", name: "Taboulé",                          desc: "Salade fraîche à base de persil, menthe, tomates et oignons, enrichie de boulghour et assaisonnée d'huile d'olive et de jus de citron.", price: 7.50, allergens: ["vegan","vegetarien"], photo: "img/taboule.jpg", featured: true },
    { id: "kisir",              category: "mezzes-froids", name: "Kisir",                            desc: "Salade turque à base de boulghour fin, tomates, oignons rouges, menthe, citron, concentré de tomate et épices.", price: 6.50, allergens: ["vegan","vegetarien"], photo: null },
    { id: "salade-betteraves",  category: "mezzes-froids", name: "Salade aux betteraves",            desc: "Betteraves fondantes finement assaisonnées, relevées d'herbes fraîches, pour une note élégante et colorée dans l'assiette.", price: 8.00, allergens: [], photo: null },
    { id: "salade-grecque",     category: "mezzes-froids", name: "Salade Grecque",                   desc: "Un classique méditerranéen : tomates, concombres, feta et olives noires, relevés d'origan et d'huile d'olive, pour un voyage gourmand en Grèce.", price: 7.50, allergens: ["vegetarien"], photo: null },
    { id: "salade-yaourt",      category: "mezzes-froids", name: "Salade au Yaourt",                 desc: "Préparation traditionnelle à base de yaourt onctueux, concombre et menthe fraîche, idéale pour accompagner des plats épicés.", price: 4.00, allergens: ["vegetarien"], photo: null },

    // II · Mezzés chauds
    { id: "falafel",            category: "mezzes-chauds", name: "Falafel",                          desc: "Falafels végétariens croustillants à base de pois chiches et d'épices, servis par 2 avec une sauce au sésame.", price: 3.50, allergens: ["vegan","vegetarien","sans-gluten","sans-lactose"], photo: "img/falafel.jpg", featured: true },
    { id: "kebbe",              category: "mezzes-chauds", name: "Kebbé",                            desc: "Boulettes de viande hachée aux épices, enrobées de blé concassé et frites, dorées et croustillantes à l'extérieur, tendres à l'intérieur, servies à l'unité.", price: 2.50, allergens: ["halal"], photo: "img/kebbe.png", featured: true },
    { id: "cheese-samoussa",    category: "mezzes-chauds", name: "Cheese Samoussa",                  desc: "Samoussas croustillants au fromage fondant épicé, servis par 2 pièces.", price: 4.00, allergens: ["vegetarien"], photo: null },
    { id: "samoussa-legumes",   category: "mezzes-chauds", name: "Samoussa aux légumes",             desc: "Samoussas croustillants, servis par 2 pièces.", price: 4.00, allergens: ["vegetarien"], photo: null },
    { id: "samoussa-poulet",    category: "mezzes-chauds", name: "Samoussa au poulet",               desc: "Samoussas croustillants, servis par 2 pièces.", price: 4.50, allergens: ["halal"], photo: null },
    { id: "fatteh-aubergines",  category: "mezzes-chauds", name: "Fatteh d'Aubergines (Fatteh Makdous)", desc: "Aubergines rôties sur pain libanais grillé, garnies de yaourt à l'ail, viande hachée et pignons grillés, un plat savoureux aux textures croustillantes et onctueuses.", price: 7.50, allergens: ["halal"], photo: null },
    { id: "moujadara",          category: "mezzes-chauds", name: "Moujadara",                        desc: "Mélange de lentilles et boulgour, garni d'oignons frits croustillants, un plat végétarien savoureux et équilibré.", price: 5.50, allergens: ["vegan","vegetarien","sans-lactose"], photo: null },
    { id: "waffle-fries",       category: "mezzes-chauds", name: "Waffle Fries",                     desc: "Savoureuses waffle fries, gaufres de pommes de terre croustillantes aux épices maison, idéales même en livraison.", price: 6.00, allergens: ["vegetarien"], photo: null },
    { id: "frites-epicees",     category: "mezzes-chauds", name: "Frites épicées",                   desc: "Croustillantes aux épices maison.", price: 4.50, allergens: ["vegetarien"], photo: null },
    { id: "riz-sakbe",          category: "mezzes-chauds", name: "Riz Sakbé",                        desc: "Une généreuse portion de riz à grains longs, parfaitement cuit et épicé.", price: 5.00, allergens: ["vegetarien"], photo: null },
    { id: "soupe-lentilles",    category: "mezzes-chauds", name: "Soupe de lentilles",               desc: "", price: 4.50, allergens: ["vegan","vegetarien"], photo: null },

    // III · Sakbé Grillades (servies avec riz parfumé, salade coleslaw, sauce ail, biwaz, waffle fries, pain syro-libanais à la muhammara)
    { id: "ailes-poulet",       category: "grillades", name: "Sakbé Ailes de Poulet",                desc: "", price: 15.50, allergens: ["halal"], photo: null },
    { id: "shich-tawok",        category: "grillades", name: "Sakbé Shich Tawok",                    desc: "", price: 17.50, allergens: ["halal"], photo: null },
    { id: "demi-poulet-roti",   category: "grillades", name: "Sakbé 1/2 poulet rôti",                desc: "Demi-poulet rôti, frites épicées croustillantes, sauce coleslaw et sauce à l'ail.", price: 18.00, allergens: ["halal"], photo: null },
    { id: "kabab",              category: "grillades", name: "Sakbé Kabab",                          desc: "", price: 18.50, allergens: ["halal"], photo: null },
    { id: "brochette-boeuf",    category: "grillades", name: "Sakbé Brochette de Bœuf",              desc: "", price: 19.00, allergens: ["halal"], photo: null },
    { id: "cote-agneau",        category: "grillades", name: "Sakbé Côte d'agneau",                  desc: "", price: 22.00, allergens: ["halal"], photo: null },
    { id: "mixte",              category: "grillades", name: "Sakbé Mixte",                          desc: "", price: 27.00, allergens: ["halal"], photo: null },

    // IV · Saveurs authentiques
    { id: "maqlouba",           category: "signatures", name: "Maqlouba",                            desc: "Plat traditionnel de riz parfumé, bœuf tendre, aubergines grillées et épices, cuit en marmite et servi avec une salade de yaourt au concombre. Une version végane est également disponible.", price: 17.50, allergens: ["halal"], photo: null },
    { id: "mahndi-boeuf",       category: "signatures", name: "Sakbé Mahndi Bœuf",                   desc: "Bœuf tendre mijoté lentement, servi avec un riz parfumé aux épices orientales, légèrement fumé au charbon, et accompagné d'une sauce maison.", price: 19.00, allergens: ["halal"], photo: null },
    { id: "mahndi-poulet",      category: "signatures", name: "Sakbé Mahndi Poulet",                 desc: "Servi avec riz parfumé aux épices orientales, légèrement fumé au charbon, et accompagné d'une sauce maison.", price: 18.00, allergens: ["halal"], photo: null },
    { id: "sakbe-crispy",       category: "signatures", name: "Sakbé Crispy",                        desc: "Poulet mariné croustillant fait maison, servi avec sauce maison et waffle fries.", price: 13.50, allergens: ["halal"], photo: "img/crispy.jpg" },
    { id: "sakbe-shawrma",      category: "signatures", name: "Sakbé Shawrma",                       desc: "Poulet mariné grillé dans un pain syro-libanais, avec pickles, sauce à l'ail et waffle fries croustillantes.", price: 14.00, allergens: ["halal"], photo: null },
    { id: "sakbe-falafel",      category: "signatures", name: "Sakbé Falafel",                       desc: "Quatre falafels maison croustillants, accompagnés de sauce au sésame, houmous et légumes frais.", price: 12.50, allergens: ["vegan","vegetarien"], photo: "img/falafel.jpg" },

    // V · Sauces maison
    { id: "sauce-coleslaw",     category: "sauces", name: "Sauce coleslaw",                          desc: "Faite maison.", price: 1.50, allergens: [], photo: null },
    { id: "sauce-ail",          category: "sauces", name: "Sauce Ail",                               desc: "Faite maison.", price: 1.50, allergens: [], photo: null },
    { id: "sauce-sesame",       category: "sauces", name: "Sauce Sésame",                            desc: "Faite maison.", price: 1.50, allergens: [], photo: null },
    { id: "spicy-sauce",        category: "sauces", name: "Spicy Sauce",                             desc: "Faite maison.", price: 1.50, allergens: [], photo: null },
    { id: "sauce-mayo",         category: "sauces", name: "Sauce Mayo",                              desc: "", price: 1.00, allergens: [], photo: null },
    { id: "sauce-ketchup",      category: "sauces", name: "Sauce ketchup",                           desc: "", price: 1.00, allergens: [], photo: null },

    // VI · Mocktails
    { id: "mojito-classique",   category: "mocktails", name: "Mojito Classique",                     desc: "", price: 7.50, allergens: [], photo: null },
    { id: "tropical-mocktail",  category: "mocktails", name: "Tropical Mocktail",                    desc: "", price: 8.00, allergens: [], photo: null },
    { id: "violete",            category: "mocktails", name: "Violete",                              desc: "", price: 7.50, allergens: [], photo: null },
    { id: "sunny-peche",        category: "mocktails", name: "Sunny Pêche",                          desc: "", price: 8.00, allergens: [], photo: null },
    { id: "strawberry-mocktail",category: "mocktails", name: "Strawberry Mocktail",                  desc: "", price: 7.50, allergens: [], photo: null },
    { id: "mangue-mocktail",    category: "mocktails", name: "Mangue Mocktail",                      desc: "", price: 7.50, allergens: [], photo: null },
    { id: "pasteque-mocktail",  category: "mocktails", name: "Pastèque Mocktail",                    desc: "", price: 7.50, allergens: [], photo: null },
    { id: "pina-colada",        category: "mocktails", name: "Piña Colada",                          desc: "", price: 7.50, allergens: [], photo: null },
    { id: "pina-colada-fraise", category: "mocktails", name: "Piña Colada à la fraise",              desc: "", price: 8.00, allergens: [], photo: null },
    { id: "pina-colada-passion",category: "mocktails", name: "Piña Colada Passion",                  desc: "", price: 8.00, allergens: [], photo: null },
    { id: "pina-colada-mangue", category: "mocktails", name: "Piña Colada Mangue",                   desc: "", price: 8.00, allergens: [], photo: null },
    { id: "icetea-fraise",      category: "mocktails", name: "Ice-Tea Fraise Maison",                desc: "", price: 5.00, allergens: [], photo: null },
    { id: "icetea-peche",       category: "mocktails", name: "Ice-Tea Pêche Maison",                 desc: "", price: 5.00, allergens: [], photo: null },
    { id: "icetea-mangue",      category: "mocktails", name: "Ice-Tea Mangue Maison",                desc: "", price: 5.00, allergens: [], photo: null },

    // VII · Boissons
    { id: "ayran",              category: "boissons", name: "Ayran",                                  desc: "Boisson traditionnelle au yaourt, délicatement salée, offrant une fraîcheur subtile qui sublime les plats épicés et les grillades.", price: 4.50, allergens: ["vegetarien"], photo: null },
    { id: "jus-orange",         category: "boissons", name: "Jus d'orange pressé",                    desc: "", price: 4.50, allergens: [], photo: null },
    { id: "cola",               category: "boissons", name: "Cola",                                   desc: "", price: 3.50, allergens: [], photo: null },
    { id: "cola-zero",          category: "boissons", name: "Cola Zéro",                              desc: "", price: 3.50, allergens: [], photo: null },
    { id: "cola-melon",         category: "boissons", name: "Cola Melon",                             desc: "", price: 3.50, allergens: [], photo: null },
    { id: "spa-orange",         category: "boissons", name: "Spa Orange",                             desc: "", price: 3.50, allergens: [], photo: null },
    { id: "eau-plate",          category: "boissons", name: "Eau plate 1/2 L",                        desc: "", price: 4.00, allergens: [], photo: null },
    { id: "eau-petillante",     category: "boissons", name: "Eau pétillante 1/2 L",                   desc: "", price: 4.00, allergens: [], photo: null },

    // VIII · Desserts
    { id: "riz-au-lait",        category: "desserts", name: "Riz au Lait",                            desc: "Riz au lait parfumé à la fleur d'oranger et garni de pistaches croquantes.", price: 4.00, allergens: ["vegetarien"], photo: null },
    { id: "feuilletes-creme",   category: "desserts", name: "Feuilletés à la crème (warbat bil ashta)", desc: "Un feuilleté croustillant, garni d'une crème pâtissière et parsemé de pistaches croquantes, pour une douceur raffinée et gourmande.", price: 4.00, allergens: ["vegetarien"], photo: null },
    { id: "knafeh",             category: "desserts", name: "Knafeh",                                 desc: "Pâte de kataïf dorée et croustillante, fourrée de crème, nappée de sirop à la fleur d'oranger et parsemée de pistaches — كنافة", price: 7.00, allergens: ["vegetarien"], photo: null },
    { id: "basbousa",           category: "desserts", name: "Basbousa",                               desc: "Gâteau de semoule imbibé de sirop parfumé, garni de noix de coco et de pistaches.", price: 3.50, allergens: ["vegetarien"], photo: null }
  ]
};
