const recipes = [
  {
    title: "Apfelstrudel",
    description: "Dessert • Mittel • 2 Std. 5 Min.",
    img: "/images/apfelstrudel.png",
    url: "apfelstrudel.html"
  },
  {
    title: "Bananenbrot",
    description: "Kuchen • Mittel • 1 Std. 5 Min. ",
    img: "/images/bananenbrot.png",
    url: "bananenbrot.html"
  },
  {
    title: "Brokkolisuppe",
    description: "Veggie • Leicht • 45 Min.",
    img: "/images/brokkolisuppe.png",
    url: "brokkolisuppe.html"
  },
  {
    title: "Tomatensuppe",
    description: "Veggie • Leicht • 20 Min.",
    img: "/images/tomatensuppe.png",
    url: "tomatensuppe.html"
  },
  {
    title: "Thai Curry Suppe",
    description: "Veggie • Leicht • 30 Min.",
    img: "/images/thaicurrysuppe.png",
    url: "thaisuppe.html"
  },
  {
    title: "Fleischbällchen Toskana",
    description: "Veggie/Fleisch • Leicht • 55 Min.",
    img: "/images/toskana.png",
    url: "toskana.html"
  },
  {
    title: "Gefüllte Paprika mit Hack",
    description: "Veggie/Flesich • Mittel • 1 Std. 15 Min.",
    img: "/images/gefülltepaprika.png",
    url: "gefuelltepaprikahack.html"
  },
  {
    title: "Tortellini Auflauf",
    description: "Veggie/Fleisch • Mittel • 50 Min.",
    img: "/images/tortelliniauflauf.png",
    url: "tortelliniauflauf.html"
  },
  {
    title: "Kartoffelgulasch mit Würstchen",
    description: "Veggie/Fleisch • Mittel • 25 Min.",
    img: "/images/kartoffelgulasch.png",
    url: "kartoffelgulasch_mit_wuerstchen.html"
  },
  {
    title: "Würstchengulasch",
    description: "Fleisch • Leicht • 20 Min.",
    img: "/images/wuerstchengulasch.png",
    url: "wuerstchengulasch.html"
  },
  {
    title: "Paprika-Reispfanne mit Joghurtsauce",
    description: "Veggie/Fleisch • Mittel • 45 Min.",
    img: "/images/reispfanne.png",
    url: "reispfanne.html"
  },
  {
    title: "Currysuppe",
    description: "Veggie • Leicht • 15 Min.",
    img: "/images/currysuppe.png",
    url: "currysuppe.html"
  },
  {
    title: "Zitronenrisotto",
    description: "Veggie • Mittel • 29 Min.",
    img: "/images/zitronenrisotto.png",
    url: "zitronenrisotto.html"
  },
  {
    title: "Gnocchi Auflauf",
    description: "Veggie/Fleisch • Mittel • 35 Min.",
    img: "/images/gnocchiauflauf.png",
    url: "gnocchiauflauf.html"
  },
  {
    title: "Portobello Caprese",
    description: "Veggie • Leicht • 20 Min.",
    img: "/images/portobello.png",
    url: "portobello.html"
  },
  {
    title: "Bandnudeln mit Spinat und Lachs",
    description: "Fisch • Leicht • 20 Min.",
    img: "/images/pastalachsspinat.png",
    url: "bandnudelnlachsspinat.html"
  },
  {
    title: "Spaghetti mit Kirschtomaten und Garnelen",
    description: "Fisch • Leicht • 30 Min.",
    img: "/images/pastagarnelen.png",
    url: "spaghettigarnelen.html"
  },
  {
    title: "Wirsingrouladen",
    description: "Veggie • Mittel • 55 Min.",
    img: "/images/wirsingroulade.png",
    url: "wirsingroulade.html"
  },
  {
    title: "Spitzkohlcurry",
    description: "Veggie • Leicht • 25 Min.",
    img: "/images/spitzkohlcurry.png",
    url: "spitzkohlcurry.html"
  },
  {
    title: "Cannelloni mit Spargel",
    description: "Veggie/Fleisch • Leicht • 30 Min.",
    img: "/images/cannellonispargel.png",
    url: "cannellonispargel.html"
  },
  {
    title: "Pasta mit Wirsing",
    description: "Veggie • Leicht • 30 Min.",
    img: "/images/wirsingpasta.png",
    url: "wirsingpasta.html"
  },
  {
    title: "Albondigas",
    description: "Veggie/Fleisch • Leicht • 30 Min.",
    img: "/images/albondigas.png",
    url: "albondigas.html"
  },
  {
    title: "Pilzrisotto",
    description: "Veggie • Mittel • 20 Min.",
    img: "/images/pilzrisotto.png",
    url: "pilzrisotto.html"
  },
  {
    title: "Tomate Mozzarella Gnocchi",
    description: "Veggie • Leicht • 20 Min.",
    img: "/images/gnocchimozzarella.png",
    url: "gnocchitomatemozarella.html"
  },
  {
    title: "Fenchel nepalesisch",
    description: "Veggie • Leicht • 20 Min.",
    img: "/images/fenchelnepalesisch.png",
    url: "fenchelnepalesisch.html"
  },
  {
    title: "Spargel in rosa Basilikum-Sauce",
    description: "Veggie/Fleisch • Leicht • 30 Min.",
    img: "/images/spargelkaesebasilikum.png",
    url: "spargelkaesesauce.html"
  },
  {
    title: "Auberginen-Curry mit Joghurtsauce",
    description: "Veggie • Leicht • 20 Min.",
    img: "/images/aubergerinencurry.png",
    url: "auberginencurry.html"
  },
  {
    title: "Couscouspfanne",
    description: "Veggie • Leicht • 25 Min.",
    img: "/images/couscouspfanne.png",
    url: "couscouspfanne.html"
  },
  {
    title: "Borsch",
    description: "Veggie/Fleisch • Mittel • 35 Min.",
    img: "/images/borsch.png",
    url: "borsch.html"
  },
  {
    title: "Kohlrabi mit Sahnesauce",
    description: "Veggie • Leicht • 40 Min.",
    img: "/images/kohlrabigemuese.png",
    url: "kohlgemuese.html"
  },
  {
    title: "Ratatouille",
    description: "Veggie • Mittel • 30 Min.",
    img: "/images/ratatouille.png",
    url: "ratatouille.html"
  },
  {
    title: "Reibekuchen / Kartoffelpuffer",
    description: "Veggie • Leicht • 30 Min.",
    img: "/images/kartoffelpuffer.png",
    url: "reibekuchen.html"
  },
  {
    title: "Frikadellen",
    description: "Veggie • Leicht • 25 Min.",
    img: "/images/frikadelle.png",
    url: "frikadellen.html"
  },
  {
    title: "Spargelcremesuppe",
    description: "Veggie • Mittel • 30 Min.",
    img: "/images/spargelcremesuppe.png",
    url: "spargelcremesuppe.html"
  },
  {
    title: "Feine Linsensuppe",
    description: "Fleisch • Mittel • 50 Min.",
    img: "/images/linsensuppe.png",
    url: "linsensuppe.html"
  },
  {
    title: "Enchiladas",
    description: "Veggie/Fleisch • Mittel • 1 Std. 15 Min.",
    img: "/images/enchiladas.png",
    url: "enchiladas.html"
  },
  {
    title: "Spargelrisotto",
    description: "Veggie • Mittel • 55 Min.",
    img: "/images/spargelrisotto.png",
    url: "spargelrisotto.html"
  },
  {
    title: "Buntes Ofengemüse",
    description: "Veggie • Leicht • 55 Min.",
    img: "/images/ofengemuese.png",
    url: "buntesofengemuese.html"
  },
  {
    title: "Pasta Spargel",
    description: "Veggie • Leicht • 25 Min.",
    img: "/images/pastaspargel.png",
    url: "spargelpasta.html"
  },
  {
    title: "Würziger Couscoussalat",
    description: "Veggie • Leicht • 35 Min.",
    img: "/images/couscoussalat.png",
    url: "couscoussalat.html"
  },
  {
    title: "Inkasalat mit Avocado und Quinoa",
    description: "Veggie • Mittel • 35 Min.",
    img: "/images/inkasalat.png",
    url: "inkasalat.html"
  },
  {
    title: "Mediterraner Kichererbsensalat",
    description: "Veggie • Mittel • 20 Min.",
    img: "/images/kichererbsensalat.png",
    url: "kichererbsensalat.html"
  },
  {
    title: "Tortellinisalat",
    description: "Veggie/Fleisch • Mittel • 30 Min.",
    img: "/images/tortelonisalat.png",
    url: "tortellinisalat.html"
  },
  {
    title: "Bulgursalat",
    description: "Veggie • Leicht • 1 Std. 30 Min.",
    img: "/images/bulgursalat.png",
    url: "bulgursalat.html"
  },
  {
    title: "Guacamole",
    description: "Veggie • Leicht • 15 Min.",
    img: "/images/guacamole.png",
    url: "guacamole.html"
  },
  {
    title: "Rote Bete mit Schafskäse",
    description: "Veggie • Leicht • 15 Min.",
    img: "/images/rotebeteschafskaese.png",
    url: "rotebeteschafskaese.html"
  },
  {
    title: "Kartoffelsalat",
    description: "Veggie • Mittel • 40 Min.",
    img: "/images/kartoffelsalat.png",
    url: "kartoffelsalat.html"
  },
  {
    title: "Tzatziki",
    description: "Veggie • Leicht • 10 Min.",
    img: "/images/tzaziki.png",
    url: "tzatziki.html"
  },
  {
    title: "Rhabarber Kompott",
    description: "Dessert • Leicht • 20 Min.",
    img: "/images/rhababerkompott.png",
    url: "rhabarberkompott.html"
  },
  {
    title: "Apple Crumble",
    description: "Dessert • Leicht • 20 Min.",
    img: "/images/applecrumble.png",
    url: "applecrumble.html"
  },
  {
    title: "Spaghetti-Eis Dessert",
    description: "Dessert • Leicht • 30 Min.",
    img: "/images/spaghettieisdessert.png",
    url: "spaghettieisdessert.html"
  },
  {
    title: "Raffaello-Creme",
    description: "Dessert • Leicht • 30 Min.",
    img: "/images/raffaellocreme.png",
    url: "raffaellocreme.html"
  },
  {
    title: "Gebackene Banane",
    description: "Dessert • Leicht • 10 Min.",
    img: "/images/gebackenebanane.png",
    url: "gebackenebanane.html"
  },
  {
    title: "Käsekuchen",
    description: "Leicht •  1 Std 30 Min.",
    img: "/images/kasekuchen.png",
    url: "kaesekuchen.html"
  },
  {
    title: "Donauwelle",
    description: "Kuchen • Mittel • 1 Std. 35 Min.",
    img: "/images/daunauwelle.png",
    url: "donauwelle.html"
  },
  {
    title: "Möhrenkuchen",
    description: "Mittel • 1 Std. 15 Min.",
    img: "/images/moehrenkuchen.png",
    url: "moehrenkuchen.html"
  },
  {
    title: "Bienenstich",
    description: "Kuchen • Mittel • 1 Std. 5Min.",
    img: "/images/bienenstich.png",
    url: "bienenstich.html"
  },
  {
    title: "Rhabarberkuchen",
    description: "Mittel • 1 Std. 20 Min.",
    img: "/images/rhababerkuchen.png",
    url: "rhabarberkuchen.html"
  },
  {
    title: "Kirschkuchen mit Streuseln",
    description: "Mittel • 1 Std. 30 Min.",
    img: "/images/kirschstreusel.png",
    url: "streuselkirschkuchen.html"
  },
  {
    title: "Zimtschnecken",
    description: "Mittel • 1 Std. 30 Min.",
    img: "/images/zimtschnecken.png",
    url: "zimtschnecken.html"
  },
  {
    title: "Schokokuchen",
    description: "Leicht • 50 Min.",
    img: "/images/klassischschokokuchen.png",
    url: "klassischschokokuchen.html"
  },
  {
    title: "Apfelkuchen mit Streuseln",
    description: "Leicht • 1 Std. 20 Min.",
    img: "/images/apfelstreusel.png",
    url: "apfelkuchenstreusel.html"
  },
  {
    title: "Russischer Zufpkuchen",
    description: "Leicht • 1 Std. 35 Min.",
    img: "/images/zupfkuchen.png",
    url: "zupfkuchen.html"
  },
  {
    title: "Windebeutel-Torte",
    description: "Schwer • 1 Std. 35 Min.",
    img: "/images/windbeuteltorte.png",
    url: "windbeuteltorte.html"
  },
  {
    title: "Kürbiskuchen / Pumpkin Pie",
    description: "Mittel • 2 Std. 30 Min.",
    img: "/images/kuerbiskuchen.png",
    url: "kuerbiskuchen.html"
  },
  {
    title: "Saftiger Apfelkuchen",
    description: "Leicht • 1 Std. 35 Min.",
    img: "/images/apfelsaftig.png",
    url: "apfelkuchen.html"
  },
  {
    title: "Schwarzwälder Kirschtorte",
    description: "Schwer • 1 Std. 35 Min.",
    img: "/images/schwarzwaelderkirsch.png",
    url: "schwarzwaelderkirschtorte.html"
  },
  {
    title: "Zitronenkuchen",
    description: "Leicht • 55 Min.",
    img: "/images/Zitronenkuchen.png",
    url: "zitronenkuchen.html"
  },
  {
    title: "Giotto Torte",
    description: "Leicht • 30 Min.",
    img: "/images/giottotorte.png",
    url: "giottotorte.html"
  },
  {
    title: "Yogurette Torte",
    description: "Schwer • 1 Std. 0 Min.",
    img: "/images/yogurettetorte.png",
    url: "yogurettetorte.html"
  },
  {
    title: "Zimtschnecken Kekse",
    description: "Mittel • 1 Std. 50 Min.",
    img: "/images/zimtkekse.png",
    url: "zimtschneckenkekse.html"
  },
  {
    title: "Saftiger Schokokuchen",
    description: "Leicht • 55 Min.",
    img: "/images/schokosaftig.png",
    url: "schokokuchensaftig.html"
  },
  {
    title: "Fantakuchen",
    description: "Leicht • 1 Std. 55 Min.",
    img: "/images/fantakuchen.png",
    url: "fantakuchen.html"
  },
  {
    title: "Erdbeer-Mascarpone Torte",
    description: "Mittel • 1 Std. 45 Min.",
    img: "/images/erdbeermascarpone.png",
    url: "erdbeermascarpone.html"
  },
  {
    title: "Philadelphia Torte",
    description: "Mittel • 1 Std. 15 Min.",
    img: "/images/philadelphia.png",
    url: "philadelphiatorte.html"
  },
  {
    title: "Zwetschgenkuchen",
    description: "Mittel • 1 Std. 15 Min.",
    img: "/images/zwetschgenkuchen.png",
    url: ".zwetschgenkuchenhtml"
  },
  {
    title: "Vanillekipferl",
    description: "Kekse • Mittel • 1 Std. 50 Min.",
    img: "/images/vanillekipferl.png",
    url: "vanillekipferl.html"
  },
  {
    title: "Zitronentorte",
    description: "Schwer • 1 Std. 55 Min.",
    img: "/images/Zitronentorte.png",
    url: "zitronentorte.html"
  },
  {
    title: "Red Velvet Kuchen",
    description: "Schwer • 1 Std. 15 Min.",
    img: "/images/redvelvet.png",
    url: "redvelvet.html"
  },
  {
    title: "Mandarinen-Schmandkuchen",
    description: "Mittel • 1 Std. 30 Min.",
    img: "/images/mandarineschmand.png",
    url: "schmandmandarine.html"
  },
  {
    title: "Kokosmakronen",
    description: "Kekse • Mittel • 1 Std. 20 Min.",
    img: "/images/kokosmakronen.png",
    url: "kokosmakronen.html"
  },
  {
    title: "Tarte au Chokolat / Schokokuchen",
    description: "Leicht • 55 Min.",
    img: "/images/TarteauChokolat.png",
    url: "tarteauchocolat.html"
  },
  {
    title: "Schoko-Birnen-Kuchen",
    description: "Mittel • 2 Std. 10 Min.",
    img: "/images/schokobirne.png",
    url: "schokobirne.html"
  },
  {
    title: "Blinis / Russische Crepes ",
    description: "Dessert • Leicht • 30 Min.",
    img: "/images/blinis.png",
    url: "blinis.html"
  },
  {
    title: "Waffeln",
    description: "Dessert • Leicht • 45 Min.",
    img: "/images/waffeln.png",
    url: "waffeln.html"
  },
  {
    title: "Glutenfreie Waffeln",
    description: "Dessert • Leicht • 45 Min.",
    img: "/images/waffelnglutenfrei.png",
    url: "waffelnglutenfrei.html"
  },
  {
    title: "Vegane Waffeln",
    description: "Dessert • Leicht • 45 Min.",
    img: "/images/waffelnvegan.png",
    url: "waffelnvegan.html"
  },
  {
    title: "Feiner Apfelkuchen",
    description: "Leicht • 55 Min.",
    img: "/images/apfelkuchenfein.png",
    url: "feiner_apfelkuchen.html"
  },
  {
    title: "Quark-Streuselkuchen",
    description: "Mittel • 55 Min.",
    img: "/images/quarkstreusel.png",
    url: "quarkstreusel.html"
  },
  {
    title: "Buttermilch-Kokos Kuchen",
    description: "Leicht • 45 Min.",
    img: "/images/kokosbuttermilch.png",
    url: "buttermilchkokos.html"
  },
  {
    title: "Kirsch-Schmand-Kuchen",
    description: "Mittel • 1 Std. 0 Min.",
    img: "/images/kirschschmand.png",
    url: "kirschschmand.html"
  },
  {
    title: "Maulwurfkuchen",
    description: "Mittel • 1 Std. 15 Min.",
    img: "/images/maulwurfkuchen.png",
    url: "maulwurfkuchen.html"
  },
  {
    title: "Heidesand",
    description: "Kekse • Mittel • 1 Std. 50 Min.",
    img: "/images/heidesand.png",
    url: "heidesand.html"
  },
  {
    title: "Engelsaugen",
    description: "Kekse • Mittel • 1 Std. 50 Min.",
    img: "/images/engelsaugen.png",
    url: "engelsaugen.html"
  },
  {
    title: "Syrniki / Russische Quark-Pfannkuchen",
    description: "Dessert • Leicht • 30 Min.",
    img: "/images/syrniki.png",
    url: "syrniki.html"
  },
  {
    title: "Oreschki / Russische Zaubernüsse",
    description: "Dessert • Mittel • XX Min.",
    img: "/images/oreschki.png",
    url: "oreschki.html"
  },
  {
    title: "Quinoa-Power-Salat mit Avocado",
    description: "Veggie • Mittel • 30 Min.",
    img: "/images/quinoapower.png",
    url: "quinoapower.html"
  },
  {
    title: "Belugalinsen Salat",
    description: "Veggie • Leicht • 20 Min.",
    img: "/images/belugasalat.png",
    url: "belugasalat.html"
  },
  {
    title: "Nudelsalat",
    description: "Veggie • Mittel • 20 Min.",
    img: "/images/nudelsalat.png",
    url: "nudelsalat.html"
  },
  {
    title: "Salat mit rote Linsen und rote Bete",
    description: "Veggie • Mittel • 35 Min.",
    img: "/images/linsenbetesalat.png",
    url: "linsenbetesalat.html"
  },
  {
    title: "Okroschka",
    description: "Veggie/Fleisch • Leicht • 30 Min.",
    img: "/images/okroschka.png",
    url: "okroschka.html"
  },
  {
    title: "Kürbissuppe",
    description: "Veggie • Mittel • 50 Min.",
    img: "/images/kuerbissuppe.png",
    url: "kuerbissuppe.html"
  },
];
 

