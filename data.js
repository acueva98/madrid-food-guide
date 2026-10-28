/* Shared by index.html (the food guide) and itinerary.html. */
var G = "https://www.google.com/";
function q(s){return encodeURIComponent(s)}
function site(n){return G+"search?q="+q(n+" Madrid carta oficial")}
function maps(n){return G+"maps/search/?api=1&query="+q(n+" Madrid")}

var DATA = [
{cat:"Impossible to book, but worth trying", hint:"Los 33 y Caja de Cerillas", items:[
 {n:"Los 33", a:"Plaza de las Salesas 9 · Salesas", f:"Impossible but worth trying", lo:45, hi:70, b:"src",
  note:"About €35–50 for food alone, closer to €70 with wine. The bar side takes no reservations; the dining room books online.",
  l:[["Michelin page","https://guide.michelin.com/hu/en/comunidad-de-madrid/madrid/restaurant/los-33"],["Press: price & waitlist","https://reportergourmet.com/en/news/9390-los-33-500-customers-a-day-and-a-two-month-waiting-list-the-70-gourmet-restaurant-in-madrid"]]},
 {n:"Caja de Cerillas", a:"Donoso Cortés 8 · Chamberí", f:"Impossible but worth trying", lo:50, hi:65, b:"src",
  note:"Around €50 before drinks per Macarfi. Tiny: about eight tables, so reserve the moment slots open.",
  l:[["Time Out","https://www.timeout.es/madrid/es/restaurantes/caja-de-cerillas"],["Macarfi","https://macarfi.com/en/mad/restaurant-card/caja-de-cerillas"],["Michelin page","https://guide.michelin.com/ar/es/comunidad-de-madrid/madrid/restaurante/caja-de-cerillas"]]}
]},
{cat:"Madrid-style food", hint:"La Maruca en Velázquez (reservar ya), Gran Café Santander, Castizo, Café Comercial", items:[
 {n:"La Maruca (Velázquez)", a:"Velázquez 54 · Salamanca", f:"Reserve now", lo:30, hi:40, b:"src",
  note:"Cantabrian cooking. Neo2/OAD puts the ticket at €30–40. Phone +34 917 81 49 69.",
  l:[["Michelin page","https://guide.michelin.com/gb/en/comunidad-de-madrid/madrid/restaurant/la-maruca?millesime=um3g85"],["Time Out","https://www.timeout.es/madrid/es/restaurantes/la-maruca"]]},
 {n:"Gran Café Santander", a:"Plaza de Santa Bárbara 4 · Chueca/Justicia", f:"", lo:20, hi:30, b:"src",
  note:"Café-restaurant from the Cañadío group, famous for its tortilla pincho. Gastroranking lists ~€20; a sit-down meal runs higher. Phone 914 457 295.",
  l:[["Guía del Ocio","https://guiadelocio.es/madrid/plan/gran-cafe-santander/"],["Venue info","https://ma.to/venue/grancafe.santander"]]},
 {n:"Castizo", a:"Madrid", f:"", lo:null, hi:null, b:"none",
  note:"The name alone matched several places, so I couldn't pin down which one or its price. Check the Maps result for the right one.", l:[]},
 {n:"Café Comercial", a:"Glorieta de Bilbao · Malasaña", f:"", lo:15, hi:25, b:"est",
  note:"Historic café; coffee, snacks and light meals. My estimate, not sourced.", l:[]},
 {n:"Casa Lucio", a:"Cava Baja 35 · La Latina", f:"", lo:50, hi:70, b:"est",
  note:"Classic Madrid tavern famous for huevos rotos (fried eggs over crisp potatoes) and solomillo from the coal oven. Time Out rates it 3 of 4 on price; range is my estimate. Ask for a table upstairs. Usually closed in August. Phone 91 365 32 52.",
  l:[["Time Out","https://www.timeout.com/madrid/restaurants-and-cafes/casa-lucio"],["ESMadrid: La Latina","https://www.esmadrid.com/en/sunday-latina-madrid"]]}
]},
{cat:"Good meat", hint:"Lana (bastante caro), Pelotari, Raza, Charrúa, Rocacho", items:[
 {n:"Lana", a:"Ponzano 59 · Chamberí", f:"Quite pricey", lo:70, hi:100, b:"est",
  note:"Argentine fire-cooking, Michelin Plate. Prices are my estimate for a steak dinner with wine.",
  l:[["Michelin meat guide","https://guide.michelin.com/es/es/best-of/los-mejores-restaurantes-de-carne-en-madrid"],["Profile","https://www.enprimeurclub.com/restaurants/lana-madrid-restaurant"]]},
 {n:"Pelotari", a:"Madrid", f:"", lo:50, hi:70, b:"est",
  note:"Classic cuts over the grill. Estimate based on the tier of similar brasa places.", l:[["Roundup mention","https://okdiario.com/coolthelifestyle/lifestyle/carne-vino-tinto-madrid-restaurantes-895859/amp"]]},
 {n:"Raza", a:"Madrid", f:"", lo:50, hi:70, b:"est",
  note:"Uruguayan-style grill. Estimate only.", l:[]},
 {n:"Charrúa", a:"Conde de Xiquena 4 · Recoletos", f:"", lo:50, hi:70, b:"src",
  note:"Diner reports range from about €40 up to €60–70, and near €100 with wine and drinks. OpenTable's \"up to €30\" tag looks outdated.",
  l:[["OpenTable","https://www.opentable.com/r/charrua-madrid?lang=es"],["Diner notes","https://mapstr.com/place/3oNyd3x5Iqg"]]},
 {n:"Rocacho", a:"Plaza del Marqués de Salamanca 9", f:"", lo:50, hi:75, b:"est",
  note:"High-end brasa and rice dishes. Estimate.", l:[["Michelin meat guide","https://guide.michelin.com/es/es/best-of/los-mejores-restaurantes-de-carne-en-madrid"]]}
]},
{cat:"Aperitivo", hint:"Bar La Mina, mi favorito de Madrid, pedir el carabinero", items:[
 {n:"Taberna La Mina", a:"General Álvarez de Castro 8 · Chamberí", f:"Order the carabinero", lo:20, hi:45, b:"src",
  note:"The tourism board lists \"up to €15\" (2023), but that's for bar snacks. Shellfish like carabinero push it up; one review reports a €170 bill for a group. I assumed this is the La Mina your friend means.",
  l:[["ESMadrid listing","https://www.esmadrid.com/restaurantes/taberna-mina"],["Spotted by Locals","https://www.spottedbylocals.com/madrid/la-mina"]]}
]},
{cat:"Full food-and-drink plan", hint:"Roostiq + Jack's Library", items:[
 {n:"Roostiq", a:"Augusto Figueroa 47 · Chueca (bar at Barquillo 40)", f:"Full plan", lo:50, hi:60, b:"src",
  note:"Torreznos, wood-fired pizza, champagne. Press says the \"~€30\" often quoted online is wrong; real tickets are about €50.",
  l:[["Official site","https://madrid.roostiq.com"],["Time Out","https://www.timeout.es/madrid/es/restaurantes/roostiq"],["Price breakdown","https://www.directoalpaladar.com/viajes/torreznos-pizzas-champan-formula-roostiq-para-hacer-llenos-diarios-madrid-teniendo-margarita-a-20-euros"]]},
 {n:"Jack's Library", a:"Madrid", f:"Drinks", lo:null, hi:null, b:"none",
  note:"I couldn't find reliable information on this one. Use the Maps link to confirm the venue and prices.", l:[]}
]},
{cat:"Top sushi", hint:"Kappo, Ikigai, Ugo Chan (muy caro), Sushita", items:[
 {n:"Kappo", a:"Bretón de los Herreros 54 · Chamberí", f:"", lo:75, hi:100, b:"src",
  note:"Omakase-style nigiri. Diners report €75–90, and about €100 with drinks and caviar.",
  l:[["Time Out list","https://www.timeout.es/madrid/es/restaurantes/los-mejores-restaurantes-japoneses-de-madrid"],["Diner notes","https://mapstr.com/place/21Q7vIGthDg"]]},
 {n:"Ikigai", a:"Velázquez branch (also Flor Baja 5)", f:"", lo:60, hi:90, b:"est",
  note:"Japanese-Spanish fish ageing. Estimate from its $$$ tier. The map pin shows the Flor Baja location.", l:[["Madrid Japanese guide","https://mesprestiges.com/de/madrid/cuisine/japanese"]]},
 {n:"Ugo Chan", a:"Chamartín", f:"Very expensive", lo:120, hi:200, b:"src",
  note:"Michelin-starred. Listed at €100–120, but tasting-menu diners report €180–200 per head with wine.",
  l:[["Diner notes","https://mapstr.com/place/fHlWVfU00U"],["Reviews","https://gastroranking.es/r/ugo-chan_291970/"]]},
 {n:"Sushita", a:"Madrid", f:"", lo:null, hi:null, b:"none",
  note:"Couldn't find a reliable price. Check the Maps result for the right location.", l:[]}
]},
{cat:"Vibe", hint:"Sala de Despiece, Casa Salesas", items:[
 {n:"Sala de Despiece", a:"Ponzano 11 · Chamberí", f:"Vibe", lo:50, hi:70, b:"src",
  note:"No reservations. Reviews mention €50+ per person, and one list says €60. Go early on weekends.",
  l:[["Time Out","https://www.timeout.es/madrid/es/restaurantes/sala-de-despiece"],["World's 50 Best","https://theworlds50best.com/discovery/Establishments/Spain/Madrid/Sala-de-Despiece.html"]]},
 {n:"Casa Salesas", a:"Calle de Fernando VI 6 · Salesas", f:"Vibe", lo:35, hi:60, b:"src",
  note:"Stylish Mediterranean bistro open from breakfast to late, with a cocktail bar and DJ later at night. OpenTable puts it at €31–50 and Vozpópuli at €35–60 depending on dishes and cocktails. Booked: Friday at 19:30 for 2 (OpenTable). Phone +34 910 054 848.",
  l:[["Book on OpenTable","https://www.opentable.ca/r/casa-salesas-madrid"],["The Infatuation","https://www.theinfatuation.com/madrid/reviews/casa-salesas"],["Time Out","https://www.timeout.es/madrid/es/restaurantes/casa-salesas"]]},
 {n:"Ten con Ten", a:"Ayala 6 · Salamanca", f:"", lo:50, hi:100, b:"src",
  note:"Stylish see-and-be-seen Spanish spot with a long wine list. Known for the Pitu empanada, tuna tacos, artichoke lasagna and apple tart. El Independiente puts a modest meal at €50–100; it goes well past that with big wines. Open daily 1 pm to midnight.",
  l:[["Time Out","https://www.timeout.com/madrid/restaurants-and-cafes/ten-con-ten"],["Price breakdown","https://www.elindependiente.com/espana/2025/05/21/precio-restaurante-jeff-bezos-madrid/"]]}
]},
{cat:"Calle Jorge Juan", hint:"\"Iría 100% a cenar a calle Jorge Juan\", Quintín is less overpriced; El Paraguas, La Máquina and Amazónico are mythical", items:[
 {n:"Ultramarinos Quintín", a:"Jorge Juan 17", f:"Friend's pick on this street", lo:40, hi:55, b:"src",
  note:"Trendencias quotes €40–50 per person. Open daily from morning to 2 am.",
  l:[["Official site","https://ultramarinosquintin.es/"],["Time Out","https://www.timeout.es/madrid/es/restaurantes/ultramarinos-quintin"]]},
 {n:"El Paraguas", a:"Jorge Juan", f:"Mythical", lo:60, hi:80, b:"est",
  note:"Same group as Quintín and Amazónico. Estimate for a dinner with wine.", l:[]},
 {n:"La Máquina", a:"Jorge Juan area", f:"Mythical", lo:50, hi:75, b:"est",
  note:"Estimate based on the street's price level.", l:[]},
 {n:"Amazónico", a:"Jorge Juan 20", f:"Mythical", lo:60, hi:90, b:"est",
  note:"Time Out rates it €€€. World's 50 Best lists an average around $49 and a tasting menu from $78, which looks dated. Expect more with cocktails. Phone +34 915 154 332.",
  l:[["Time Out","https://www.timeout.es/madrid/es/restaurantes/amazonico"],["World's 50 Best","https://www.theworlds50best.com/discovery/Establishments/Spain/Madrid/Amazónico.html"]]}
]},
{cat:"Italian", hint:"Noi, Allegra, Sottosopra", items:[
 {n:"Noi", a:"Recoletos 6", f:"", lo:60, hi:90, b:"est",
  note:"Michelin lists €€€ (contemporary Italian, from Puglia). Closed Sunday and Monday. À la carte or set menus.",
  l:[["Michelin page","https://guide.michelin.com/hu/en/comunidad-de-madrid/madrid/restaurant/noi-1186274"],["Reviews","https://gastroranking.es/r/restaurante-noi_188359/"]]},
 {n:"Allegra", a:"Salamanca", f:"", lo:60, hi:90, b:"est",
  note:"New Italian with a piano-bar feel, open late with cocktails and DJs. Estimate.", l:[["Guía del Ocio list","https://guiadelocio.es/madrid/?p=16452"]]},
 {n:"Sottosopra", a:"Calle Puigcerdá · Salamanca", f:"", lo:35, hi:45, b:"src",
  note:"Roman trattoria. Trendencias lists about €40.", l:[["Italian roundup","https://www.trendencias.com/gourmet/mejores-15-restaurantes-italianos-madrid"]]},
 {n:"Don Giovanni", a:"Paseo de la Reina Cristina 23 · Retiro", f:"", lo:50, hi:60, b:"src",
  note:"Andrea Tumbarello's Italian, all about truffle: spaghetti Bosconara, burrata millefeuille with beef carpaccio, tiramisu. El Español cites about €50; diners report around €55. Drinks run pricey. Book ahead; there's a terrace.",
  l:[["El Español review","https://elespanol.com/cocinillas/restaurantes/20180109/don-giovanni-confirmacion-tumbarello-trufa-cocina-italiana/1001103949595_31.html"],["Reviews","https://gastroranking.es/r/don-giovanni-7_54029"]]}
]},
{cat:"Mexican (worth it in Madrid)", hint:"Puntarena, Bakán, Fisher's, Ticuí", items:[
 {n:"Puntarena", a:"Alberto Aguilera 20 · Casa de México", f:"", lo:60, hi:80, b:"est",
  note:"Pacific-coast Mexican seafood, Michelin €€€. Estimate.", l:[["Michelin Mexican guide","https://guide.michelin.com/es/es/best-of/los-mejores-restaurantes-mexicanos-de-madrid"],["Profile","https://www.enprimeurclub.com/restaurants/puntarena-madrid-restaurant"]]},
 {n:"Bakán", a:"Near Puerta de Alcalá", f:"", lo:60, hi:85, b:"est",
  note:"Traditional regional Mexican. Estimate.", l:[["Review","https://okdiario.com/coolthelifestyle/lifestyle/restaurantes-mexicanos-madrid-207554/amp"]]},
 {n:"Fisher's", a:"Velázquez 41", f:"", lo:50, hi:70, b:"est",
  note:"Mexican seafood chain. Estimate.", l:[["Review","https://okdiario.com/coolthelifestyle/lifestyle/restaurantes-mexicanos-madrid-207554/amp"]]},
 {n:"Ticuí", a:"Cedaceros 6", f:"", lo:70, hi:80, b:"src",
  note:"Sister of Puntarena, Michelin Plate. Neo2 gives €70 average.",
  l:[["Michelin page","https://guide.michelin.com/ca/fr/comunidad-de-madrid/madrid/restaurant/ticui"],["Review & price","https://www.neo2.com/?p=469731"]]}
]},
{cat:"From your itinerary", hint:"Places from the trip plan, not from the friend's list", items:[
 {n:"Fismuler", a:"Calle de Sagasta 29 · Chamberí", f:"", lo:40, hi:60, b:"est", web:"https://fismuler.com/",
  note:"Booked: Friday lunch at 13:30 for 2 (the table has to be free by 15:00). Modern, seasonal Spanish cooking in a retro-industrial room; famous for a huge truffled veal cutlet to share. Michelin lists it €€; En Primeur puts it around $45 pp before wine. Phone +34 918 27 75 81.",
  l:[["Michelin page","https://guide.michelin.com/sg/en/comunidad-de-madrid/madrid/restaurant/fismuler"],["The Infatuation","https://www.theinfatuation.com/madrid/reviews/fismuler-madrid"]]},
 {n:"Casa González", a:"Calle del León 12 · Barrio de las Letras", f:"", lo:15, hi:25, b:"est", web:"https://www.casagonzalez.es/",
  note:"Optional stop if you are in Barrio de las Letras (it no longer fits Friday). Gourmet shop and cheese bar: cheese and charcuterie boards, conservas, a glass of wine. Frommer's lists half raciones at €5–13. No booking needed. Phone +34 914 29 56 18.",
  l:[["esMadrid","https://www.esmadrid.com/en/shopping/casa-gonzalez"],["Frommer's","https://www.frommers.com/destinations/madrid/restaurants/casa-gonzalez"]]},
 {n:"Casa Canito", a:"Calle de Recoletos 11 · Recoletos", f:"", lo:23, hi:35, b:"src",
  note:"Saturday dinner idea. Retro-modern tapas bar, open about 12 hours a day; Time Out puts the average at €23–35. May not take table bookings, so expect a wait or keep a backup nearby.",
  l:[["Time Out","https://www.timeout.es/madrid/es/bares-y-pubs/casa-canito"],["esMadrid","https://www.esmadrid.com/en/sharing-tapas-madrid"]]},
 {n:"Casa Dani", a:"Mercado de la Paz, Calle de Ayala 28 · Salamanca", f:"", lo:5, hi:15, b:"src",
  note:"Famous tortilla española in the Mercado de la Paz: about €4 a slice, weekday menú del día around €15. Closed Sundays and closes around 17:00 on Saturdays; the tortilla can sell out late in the day.",
  l:[["Time Out","https://www.timeout.es/madrid/es/bares-y-pubs/casa-dani"],["The Infatuation","https://www.theinfatuation.com/madrid/reviews/casa-dani"]]},
 {n:"La Duquesita", a:"Calle de Fernando VI 2 · Salesas", f:"", lo:5, hi:12, b:"est", web:"https://laduquesita.es/",
  note:"Pastry stop on the Salesas walk. Historic 1914 pastelería run by Oriol Balaguer, known for croissants; there's a tea salon next door. Hours vary by source, so check before going.",
  l:[["Time Out","https://www.timeout.com/madrid/shops/la-duquesita"],["esMadrid","https://w3.esmadrid.com/print/pdf/node/3496"]]},
 {n:"Álex Cordobés", a:"Calle de Velázquez 60 · Salamanca", f:"", lo:5, hi:25, b:"est", web:"https://alexcordobes.es/",
  note:"Go early: the cheesecakes sell out by mid-afternoon. Takeaway cheesecake bakery with no tables; eight flavours (traditional, pistachio, Lotus, dulce de leche and more), sold as single portions or whole cakes for 3, 8 or 13. Open Tue–Sat 10:00–21:00, Sun and holidays 10:00–14:00, closed Mondays.",
  l:[["esMadrid","https://www.esmadrid.com/en/shopping/alex-cordobes"],["Spotted by Locals","https://spottedbylocals.com/madrid/alex-cordobes"]]}
]}
];

/* Approximate coordinates [lat, lng, approx?]. approx = only the street or area is known.
   Places with no confirmed address are left off the map. */
var GEO = {
 "Los 33":[40.4237,-3.6952],"Caja de Cerillas":[40.4334,-3.7060],"La Maruca (Velázquez)":[40.4283,-3.6838],
 "Gran Café Santander":[40.4268,-3.6965],"Café Comercial":[40.4290,-3.7024],"Lana":[40.4436,-3.7016],
 "Charrúa":[40.4226,-3.6947],"Rocacho":[40.4302,-3.6777],"Taberna La Mina":[40.4335,-3.7020],
 "Roostiq":[40.4229,-3.6958],"Kappo":[40.4394,-3.6930],"Ikigai":[40.4226,-3.7104],
 "Sala de Despiece":[40.4388,-3.7008],"Casa Salesas":[40.42523,-3.69631],
 "Ultramarinos Quintín":[40.4232,-3.6862],"El Paraguas":[40.4229,-3.6870,1],"La Máquina":[40.4236,-3.6828,1],
 "Amazónico":[40.4234,-3.6851],"Noi":[40.4226,-3.6896],"Sottosopra":[40.4240,-3.6858],
 "Puntarena":[40.4297,-3.7097],"Bakán":[40.4207,-3.6872,1],"Fisher's":[40.4270,-3.6839],"Ticuí":[40.4170,-3.6987],
 "Casa Lucio":[40.4119,-3.7086],"Ten con Ten":[40.4253,-3.6869],"Don Giovanni":[40.4072,-3.6795],
 "Fismuler":[40.42817,-3.69752],"Casa González":[40.41399,-3.69891],"Casa Canito":[40.4217,-3.6897,1],
 "Casa Dani":[40.42717,-3.68575],"La Duquesita":[40.42568,-3.69696],"Álex Cordobés":[40.42805,-3.68370]
};

/* Trip days, the meals to plan on each, and each day's headline for the itinerary. */
var TRIP = [
  {d:"2026-10-29", l:"Thu Oct 29", meals:["lunch","dinner"], title:"Arrival day", sub:"Salamanca and cheesecake, Chamberí to Malasaña, then sunset at Debod"},
  {d:"2026-10-30", l:"Fri Oct 30", meals:["lunch","dinner"], title:"Art and matcha", sub:"Thyssen, Fismuler, matcha, Reina Sofía, then dinner at Casa Salesas"},
  {d:"2026-10-31", l:"Sat Oct 31", meals:["lunch","dinner"], title:"Match day", sub:"La Latina, Retiro and Salesas, then Betis with a Betico"},
  {d:"2026-11-01", l:"Sun Nov 1",  meals:["lunch"], title:"Easy morning", sub:"A last walk, then the 15:30 flight"}
];
