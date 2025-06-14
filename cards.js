const recipes = [
  {
    title: "Apfelstrudel",
    description: "Mittel • 2 Std. 5 Min.",
    img: "/images/apfelstrudel.png",
    url: "apfelstrudel.html"
  },
  {
    title: "Bananenbrot",
    description: "Mittel • 1 Std. 5 Min. ",
    img: "/images/bananenbrot.png",
    url: "bananenbrot.html"
  },
  {
    title: "Brokkolisuppe",
    description: "Leicht • 45 Min.",
    img: "/images/brokkolisuppe.png",
    url: "brokkolisuppe.html"
  },
  {
    title: "Tomatensuppe",
    description: "Leicht • 20 Min.",
    img: "/images/tomatensuppe.png",
    url: "tomatensuppe.html"
  },
  {
    title: "Thai Curry Suppe",
    description: "Leicht • 30 Min.",
    img: "/images/thaicurrysuppe.png",
    url: "thaisuppe.html"
  },
  {
    title: "Fleischbällchen Toskana",
    description: "Leicht • 55 Min.",
    img: "/images/toskana.png",
    url: "toskana.html"
  },
  {
    title: "Gefüllte Paprika mit Hack",
    description: "Mittel • 1 Std. 15 Min.",
    img: "/images/gefülltepaprika.png",
    url: "gefuelltepaprikahack.html"
  },
  {
    title: "Tortellini Auflauf",
    description: "Mittel • 50 Min.",
    img: "/images/tortelliniauflauf.png",
    url: "tortelliniauflauf.html"
  },
  {
    title: "Kartoffelgulasch mit Würstchen",
    description: "Mittel • 25 Min.",
    img: "/images/kartoffelgulasch.png",
    url: "kartoffelgulasch_mit_wuerstchen.html"
  },
  {
    title: "Würstchengulasch",
    description: "Leicht • 20 Min.",
    img: "/images/wuerstchengulasch.png",
    url: "wuerstchengulasch.html"
  },
  {
    title: "Paprika-Reispfanne mit Joghurtsauce",
    description: "Mittel • 45 Min.",
    img: "/images/reispfanne.png",
    url: "reispfanne.html"
  },
  {
    title: "Currysuppe",
    description: "Leicht • 15 Min.",
    img: "/images/currysuppe.png",
    url: "currysuppe.html"
  },
  {
    title: "Zitronenrisotto",
    description: "Mittel • 29 Min.",
    img: "/images/zitronenrisotto.png",
    url: "zitronenrisotto.html"
  },
  {
    title: "Gnocchi Auflauf",
    description: "Mittel • 35 Min.",
    img: "/images/gnocchiauflauf.png",
    url: "gnocchiauflauf.html"
  },
  {
    title: "Portobello Caprese",
    description: "Leicht • 20 Min.",
    img: "/images/portobello.png",
    url: "portobello.html"
  },
  {
    title: "Bandnudeln mit Spinat und Lachs",
    description: "Leicht • 20 Min.",
    img: "/images/pastalachsspinat.png",
    url: "bandnudelnlachsspinat.html"
  },
  {
    title: "Spaghetti mit Kirschtomaten und Garnelen",
    description: "Leicht • 30 Min.",
    img: "/images/pastagarnelen.png",
    url: "spaghettigarnelen.html"
  },
  {
    title: "Wirsingrouladen",
    description: "Mittel • 55 Min.",
    img: "/images/wirsingroulade.png",
    url: "wirsingroulade.html"
  },
  {
    title: "Spitzkohlcurry",
    description: "Leicht • 25 Min.",
    img: "/images/spitzkohlcurry.png",
    url: "spitzkohlcurry.html"
  },
  {
    title: "Cannelloni mit Spargel",
    description: "Leicht • 30 Min.",
    img: "/images/cannellonispargel.png",
    url: "cannellonispargel.html"
  },
  {
    title: "Pasta mit Wirsing",
    description: "Leicht • 30 Min.",
    img: "/images/wirsingpasta.png",
    url: "wirsingpasta.html"
  },
  {
    title: "Albondigas",
    description: "Leicht • 30 Min.",
    img: "/images/albondigas.png",
    url: "albondigas.html"
  },
  {
    title: "Pilzrisotto",
    description: "Mittel • 20 Min.",
    img: "/images/pilzrisotto.png",
    url: "pilzrisotto.html"
  },
  {
    title: "Tomate Mozzarella Gnocchi",
    description: "Leicht • 20 Min.",
    img: "/images/gnocchimozzarella.png",
    url: "gnocchitomatemozarella.html"
  },
  {
    title: "Fenchel nepalesisch",
    description: "Leicht • 20 Min.",
    img: "/images/fenchelnepalesisch.png",
    url: "fenchelnepalesisch.html"
  },
  {
    title: "Spargel in rosa Basilikum-Sauce",
    description: "Leicht • 30 Min.",
    img: "/images/spargelkaesebasilikum.png",
    url: "spargelkaesesauce.html"
  },
  {
    title: "Auberginen-Curry mit Joghurtsauce",
    description: "Leicht • 20 Min.",
    img: "/images/aubergerinencurry.png",
    url: "auberginencurry.html"
  },
  {
    title: "Couscouspfanne",
    description: "Leicht • 25 Min.",
    img: "/images/couscouspfanne.png",
    url: "couscouspfanne.html"
  },
  {
    title: "Borsch",
    description: "Mittel • 35 Min.",
    img: "/images/borsch.png",
    url: "borsch.html"
  },
  {
    title: "Kohlrabi mit Sahnesauce",
    description: "Leicht • 40 Min.",
    img: "/images/kohlrabigemuese.png",
    url: "kohlgemuese.html"
  },
  {
    title: "Ratatouille",
    description: "Mittel • 30 Min.",
    img: "/images/ratatouille.png",
    url: "ratatouille.html"
  },
  {
    title: "Reibekuchen / Kartoffelpuffer",
    description: "Leicht • 30 Min.",
    img: "/images/kartoffelpuffer.png",
    url: "reibekuchen.html"
  },
  {
    title: "Frikadellen",
    description: "Leicht • 25 Min.",
    img: "/images/frikadelle.png",
    url: "frikadellen.html"
  },
  {
    title: "Spargelcremesuppe",
    description: "Mittel • 30 Min.",
    img: "/images/spargelcremesuppe.png",
    url: "spargelcremesuppe.html"
  },
  {
    title: "Feine Linsensuppe",
    description: "Mittel • 50 Min.",
    img: "/images/linsensuppe.png",
    url: "linsensuppe.html"
  },
  {
    title: "Enchiladas",
    description: "Mittel • 1 Std. 15 Min.",
    img: "/images/enchiladas.png",
    url: "enchiladas.html"
  },
  {
    title: "Spargelrisotto",
    description: "Mittel • 55 Min.",
    img: "/images/spargelrisotto.png",
    url: "spargelrisotto.html"
  },
  {
    title: "Buntes Ofengemüse",
    description: "Leicht • 55 Min.",
    img: "/images/ofengemuese.png",
    url: "buntesofengemuese.html"
  },
  {
    title: "Pasta Spargel",
    description: "Leicht • 25 Min.",
    img: "/images/pastaspargel.png",
    url: "spargelpasta.html"
  },
  {
    title: "Würziger Couscoussalat",
    description: "Leicht • 35 Min.",
    img: "/images/couscoussalat.png",
    url: "couscoussalat.html"
  },
  {
    title: "Inkasalat mit Avocado und Quinoa",
    description: "Mittel • 35 Min.",
    img: "/images/inkasalat.png",
    url: "inkasalat.html"
  },
  {
    title: "Mediterraner Kichererbsensalat",
    description: "Mittel • 20 Min.",
    img: "/images/kichererbsensalat.png",
    url: "kichererbsensalat.html"
  },
  {
    title: "Tortellinisalat",
    description: "Mittel • 30 Min.",
    img: "/images/tortelonisalat.png",
    url: "tortellinisalat.html"
  },
  {
    title: "Bulgursalat",
    description: "Leicht • 1 Std. 30 Min.",
    img: "/images/bulgursalat.png",
    url: "bulgursalat.html"
  },
  {
    title: "Guacamole",
    description: "Leicht • 15 Min.",
    img: "/images/guacamole.png",
    url: "guacamole.html"
  },
  {
    title: "Rote Bete mit Schafskäse",
    description: "Leicht • 15 Min.",
    img: "/images/rotebeteschafskaese.png",
    url: "rotebeteschafskaese.html"
  },
  {
    title: "Kartoffelsalat",
    description: "Mittel • 40 Min.",
    img: "/images/kartoffelsalat.png",
    url: "kartoffelsalat.html"
  },
  {
    title: "Tzatziki",
    description: "Leicht • 10 Min.",
    img: "/images/tzaziki.png",
    url: "tzatziki.html"
  },
  {
    title: "Rhabarber Kompott",
    description: "Leicht • 20 Min.",
    img: "/images/rhababerkompott.png",
    url: "rhabarberkompott.html"
  },
  {
    title: "Apple Crumble",
    description: "Leicht • 20 Min.",
    img: "applecrumble.png",
    url: "applecrumble.html"
  },
    {
    title: "Spaghetti-Eis Dessert",
    description: "Leicht • 30 Min.",
    img: "spaghettieisdessert.png",
    url: "spaghettieisdessert.html"
  },
  {
    title: "Raffaello-Creme",
    description: "Leicht • 30 Min.",
    img: "raffaellocreme.png",
    url: "raffaellocreme.html"
  },
  {
    title: "Gebackene Banane",
    description: "Leicht • 10 Min.",
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
    description: "Mittel • 1 Std. 35 Min.",
    img: "/images/danauwelle.png",
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
    description: "Mittel • 1 Std. 5Min.",
    img: "/images/bienenstich.png",
    url: "bienenstich.html"
  },
  {
    title: "Rhabarberkuchen",
    description: "Mittel • 1 Srd. 20 Min.",
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
    title: "",
    description: "Leicht •  Min.",
    img: "/images/",
    url: ".html"
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
    img: "/images/zitronenkuchen.png",
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
    title: "",
    description: "Schwer • 1 Std. 35 Min.",
    img: "/images/.png",
    url: ".html"
  },
  {
    title: "",
    description: "Schwer • 1 Std. 35 Min.",
    img: "/images/.png",
    url: ".html"
  },
  {
    title: "",
    description: "Schwer • 1 Std. 35 Min.",
    img: "/images/.png",
    url: ".html"
  },
  {
    title: "",
    description: "Schwer • 1 Std. 35 Min.",
    img: "/images/.png",
    url: ".html"
  },
  {
    title: "",
    description: "Schwer • 1 Std. 35 Min.",
    img: "/images/.png",
    url: ".html"
  },
  {
    title: "",
    description: "Schwer • 1 Std. 35 Min.",
    img: "/images/.png",
    url: ".html"
  },

];
 

