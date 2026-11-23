'use strict';
// Fuente: las nueve fotos de los apuntes de geosfera. Los números remiten a las fotos.
const GEO_TOPICS = [
 {title:'El origen de la Tierra',source:1,icon:'🌍',intro:'De los materiales de una nebulosa a un planeta con capas.',cards:[
 ['Una historia en seis pasos','Hace 4600 millones de años se originó el Sol en una nebulosa. A su alrededor se formó un remolino de materiales. Estos chocaron y formaron cuerpos mayores: los planetesimales. Su acreción dio origen a los planetas. La Tierra primitiva tenía gran actividad volcánica por su calor interno. Al enfriarse, los materiales más densos, como el hierro, quedaron en el interior por la gravedad. El interior terrestre sigue muy caliente.'],
 ['Cuatro capas de la Tierra','Atmósfera: capa gaseosa. Hidrosfera: agua en sus tres estados. Geosfera: parte sólida. Biosfera: donde se desarrolla la vida. La Tierra es el tercer planeta más cercano al Sol.']],recall:'Explica qué es la acreción de planetesimales.',model:'Los materiales chocan y forman cuerpos mayores, llamados planetesimales. Su acreción origina los planetas.'},
 {title:'Las capas del interior terrestre',source:2,icon:'◎',intro:'Desde la superficie hacia el centro: corteza, manto y núcleo.',cards:[
 ['Corteza','Es la capa superficial, fina y menos densa. La continental tiene entre 10 y 70 km de espesor y contiene granito, arcilla y pizarra. La oceánica tiene entre 6 y 10 km, forma los fondos oceánicos y contiene abundante basalto.'],
 ['Manto','Está formado principalmente por peridotitas. El superior es sólido, aunque hay zonas parcialmente fundidas. El inferior es más denso y contiene materiales sólidos.'],
 ['Núcleo','Es la capa más interna y densa. Contiene principalmente hierro y también níquel. El externo tiene material fundido en movimiento. El interno es sólido por las fuertes presiones, aunque tiene la temperatura más alta.'],
 ['Discontinuidades','Son las zonas que separan las capas. Mohorovicic: corteza y manto. Repetti: manto superior e inferior (670 km). Gutenberg: manto y núcleo (2900 km). Lehmann: núcleo externo e interno (5120 km). El esquema sitúa el centro a 6370 km.']],recall:'¿Por qué el núcleo interno es sólido si está tan caliente?',model:'Por las fuertes presiones a las que están sometidos sus materiales.'},
 {title:'¿Qué es un mineral?',source:3,icon:'◇',intro:'Recuerda sus características, una por una.',cards:[
 ['Cinco características','Los minerales son sustancias sólidas, inorgánicas, de origen natural, de composición química definida y, generalmente, con estructura cristalina.'],
 ['Sólidos, inorgánicos y naturales','Son sólidos a temperatura ambiente. El esquema explica que no los producen los seres vivos y que no son fabricados por el ser humano.'],
 ['Composición y estructura','Los elementos químicos se combinan en una proporción definida para constituir el mismo mineral. En la estructura cristalina, las partículas siguen una organización geométrica que se repite. Cuando esa ordenación se observa a simple vista, hablamos de cristales.']],recall:'Explica la diferencia entre origen natural y estructura cristalina.',model:'Natural significa que no ha sido fabricado por el ser humano. Cristalina describe la organización geométrica repetida de sus partículas.'},
 {title:'Propiedades de los minerales',source:4,icon:'✧',intro:'Color, brillo, dureza, exfoliación y densidad.',cards:[
 ['Color','Galena: gris plomo. Azufre: amarillo. Magnetita: negro. El cuarzo puede presentar distintos colores: blanco, gris, violeta o ser transparente.'],
 ['Brillo','Es el aspecto de la superficie al reflejar la luz. Metálico: como los metales (magnetita). Vítreo: como el vidrio (fluorita). Nacarado: como las perlas. Adamantino: como el diamante. Mate: sin brillo (limonita).'],
 ['Dureza y escala de Mohs','Dureza es la resistencia a ser rayado. El mineral rayado es más blando que el que lo raya. La escala va de 1 a 10: talco, yeso, calcita, fluorita, apatito, feldespato, cuarzo, topacio, corindón y diamante. El talco es el más blando y el diamante ocupa el 10.'],
 ['Exfoliación','Es la división del mineral que deja superficies planas y mantiene la forma del cristal. La galena forma cubos; el yeso, láminas.'],
 ['Densidad','Densidad = masa / volumen. Se expresa en kg/m³. Es una propiedad específica del mineral e independiente del tamaño de la muestra.']],recall:'¿Qué diferencia hay entre dureza y exfoliación?',model:'La dureza es la resistencia a ser rayado. La exfoliación es la división que deja superficies planas y mantiene la forma del cristal.'},
 {title:'¿Para qué sirven los minerales?',source:5,icon:'💎',intro:'Metales, materias primas y gemas.',cards:[
 ['Menas y minerales nativos','Las menas son minerales de los que se extraen metales. Los nativos o nobles se encuentran en estado puro en la naturaleza: oro, plata y platino.'],
 ['De la mena al metal','Bauxita: aluminio. Blenda: cinc. Calcopirita: cobre. Casiterita: estaño. Cinabrio: mercurio. Galena: plomo. Hematites: hierro.'],
 ['Materias primas','Uraninita: de ella se obtiene uranio utilizado como combustible nuclear. Cuarzo: producción de vidrio y placas solares. Yeso: fabricación de escayola, alabastro, fertilizantes y explosivos.'],
 ['Gemas','Su belleza y escasez les dan gran valor económico. Se utilizan en joyería, normalmente tras tallado y pulido. Ejemplos: diamante, rubí y zafiro.']],recall:'Explica qué es una mena y da un ejemplo.',model:'Es un mineral del que se extrae un metal. Por ejemplo, de la galena se extrae plomo.'},
 {title:'¿Qué es una roca?',source:7,icon:'▧',intro:'Los minerales forman las rocas.',cards:[
 ['Definición y composición','Las rocas son agregados naturales formados por uno o varios minerales. Su composición depende del conjunto de minerales que las forman.'],
 ['Simples o compuestas','Las simples u homogéneas tienen un solo mineral: el ejemplo del libro es la caliza, formada por calcita. Las compuestas o heterogéneas tienen varios: el granito contiene cuarzo, feldespato y mica.'],
 ['Textura','Describe el tamaño y la forma en que se disponen los minerales en la roca. No siempre se observa a simple vista.'],
 ['Las excepciones del libro','La página presenta el carbón y el petróleo como excepciones de origen orgánico: proceden de restos de animales y plantas. Describe el petróleo como una roca líquida a temperatura ambiente.']],recall:'¿Qué diferencia hay entre composición y textura?',model:'Composición: qué minerales forman la roca. Textura: su tamaño y cómo se disponen.'},
 {title:'Rocas según su origen',source:6,icon:'🌋',intro:'Estudia los tipos que aparecen en esta fotografía.',cards:[
 ['Ígneas o magmáticas','Se forman al enfriarse y solidificarse el magma: minerales fundidos mezclados con gases y agua.'],
 ['Volcánicas o extrusivas','El magma sale al exterior como lava, que se enfría rápidamente y cristaliza mal. Algunas tienen oquedades originadas por gases. Ejemplos: obsidiana, pumita o piedra pómez y basalto.'],
 ['Plutónicas o intrusivas','El magma se enfría lentamente en el interior de la corteza. Están bien cristalizadas y se ven mejor sus cristales. Ejemplos: granito, sienita y gabro. Las filonianas se forman al solidificarse magma en grietas, formando diques o filones.'],
 ['Metamórficas','Proceden de otras rocas modificadas por elevada presión y altas temperaturas. El proceso se llama metamorfismo. Foliadas: pizarra, esquisto, gneis y migmatita. No foliadas: mármol y cuarcita. La foliación es una organización en láminas aproximadamente paralelas.']],recall:'Compara una roca volcánica con una plutónica.',model:'Volcánica: enfriamiento rápido de lava en el exterior, mala cristalización. Plutónica: enfriamiento lento del magma en el interior, buena cristalización.'},
 {title:'Rocas sedimentarias',source:9,icon:'▤',intro:'Sigue el camino de los sedimentos y distingue los dos tipos de rocas sedimentarias.',cards:[
 ['De dónde vienen los sedimentos','El agua y el viento transportan materiales, como fragmentos de rocas y materia orgánica. Cuando se depositan, los sedimentos se acumulan en una cuenca sedimentaria.','litificacion'],
 ['Litificación o diagénesis','Primero se acumulan los sedimentos. Después, el peso de las capas superiores reduce su volumen y sale agua: es la compactación. Finalmente, unos cristales ocupan espacios entre los granos y los unen como un cemento: es la cementación.'],
 ['Cómo se puede formar un fósil','Una concha, un hueso, una semilla o una huella pueden quedar entre los sedimentos. Cuando estos se convierten en roca, esos restos o huellas pueden conservarse como fósiles.'],
 ['Detríticas · fragmentos de otras rocas','Los conglomerados tienen fragmentos de más de 2 mm. Las areniscas están hechas de granos de arena de menos de 2 mm. Las partículas de la arcilla son tan finas que se distinguen al microscopio.','detriticas'],
 ['No detríticas · otros orígenes','Pueden proceder de esqueletos de seres vivos marinos, de sales minerales o de restos orgánicos que no se han descompuesto por completo. En la foto aparecen la caliza, el yeso y el carbón.','no-detriticas']
 ],recall:'¿Cómo se convierten unos sedimentos sueltos en una roca sedimentaria?',model:'Se acumulan, se compactan por el peso de las capas de encima y los cristales cementan los granos.'},
 {title:'El ciclo de las rocas',source:8,icon:'↻',intro:'Una roca puede convertirse en otra siguiendo distintos caminos. El ciclo también se llama ciclo litológico.',cards:[
 ['Sigue las flechas del ciclo','Busca primero los sedimentos, la roca sedimentaria, la metamórfica y el magma. Después, fíjate en qué proceso aparece en cada flecha.','ciclo'],
 ['De cualquier roca a una sedimentaria','En la superficie, la meteorización altera y fragmenta las rocas. El agua y el viento pueden transportar y depositar esos materiales. La litificación convierte los sedimentos en roca sedimentaria.'],
 ['De una roca a una metamórfica','En el interior de la Tierra, la presión alta, la temperatura alta o ambas pueden transformar una roca mientras sigue sólida. Ese cambio es el metamorfismo.'],
 ['De una roca a una ígnea','Si una roca se funde, se forma magma. Al enfriarse y solidificarse en el interior, da lugar a una roca ígnea plutónica. Si el material fundido sale y se solidifica en el exterior, da lugar a una roca ígnea volcánica.'],
 ['Dos recorridos para practicar','Sedimentaria → metamorfismo → metamórfica → fusión → magma → solidificación en el interior → plutónica. Metamórfica expuesta en superficie → meteorización, transporte y depósito → sedimentos → litificación → sedimentaria.']
 ],recall:'¿Cómo puede llegar una roca metamórfica a convertirse en sedimentaria?',model:'En la superficie se meteoriza. Los materiales se transportan y depositan. La litificación de esos sedimentos forma una roca sedimentaria.'}
];
const GEO_Q=[];
function geoQ(t,q,correct,wrong,why){GEO_Q.push({id:`geo-${t}-${GEO_Q.length}`,topic:t,group:'geologia',q,correct,options:[correct,...wrong],why:why||correct});}
geoQ(0,'¿Cómo se llama la formación de planetas por unión de planetesimales?','Acreción de planetesimales',['Exfoliación','Metamorfismo'],'Los materiales chocan, forman planetesimales y su acreción da origen a los planetas.');
geoQ(0,'¿Hace cuánto se originó el Sol, según el esquema?','4600 millones de años',['670 millones de años','6370 millones de años']);
geoQ(0,'¿Por qué los materiales más densos quedaron en el interior terrestre?','Por la fuerza de la gravedad',['Por la exfoliación','Por el brillo']);
for(const [a,b] of [['Atmósfera','Capa gaseosa'],['Hidrosfera','Agua en los tres estados'],['Geosfera','Parte sólida'],['Biosfera','Donde se desarrolla la vida']])geoQ(0,`¿Qué describe la ${a.toLowerCase()}?`,b,['Capa gaseosa','Agua en los tres estados','Parte sólida','Donde se desarrolla la vida'].filter(x=>x!==b),`${a}: ${b.toLowerCase()}.`);
geoQ(0,'¿Qué causaba la gran actividad volcánica de la Tierra primitiva?','El calor almacenado en su interior',['La dureza del cuarzo','La exfoliación de la galena']);
geoQ(1,'¿Cuál es el orden desde la superficie hasta el centro?','Corteza, manto, núcleo',['Núcleo, corteza, manto','Manto, núcleo, corteza']);
geoQ(1,'¿Qué capa es la menos densa?','Corteza',['Manto inferior','Núcleo']);
geoQ(1,'¿Cuál es el espesor de la corteza continental en la página?','Entre 10 y 70 km',['Entre 6 y 10 km','Entre 670 y 2900 km']);
geoQ(1,'¿Cuál es el espesor de la corteza oceánica?','Entre 6 y 10 km',['Entre 10 y 70 km','Entre 5120 y 6370 km']);
geoQ(1,'¿Qué roca abunda en la corteza oceánica?','Basalto',['Granito','Peridotita']);
geoQ(1,'¿Qué rocas forman principalmente el manto?','Peridotitas',['Granitos','Arcillas']);
geoQ(1,'¿Cómo es el núcleo externo?','Material fundido en movimiento',['Sólido por las fuertes presiones','La capa menos densa']);
geoQ(1,'¿Por qué el núcleo interno es sólido?','Por las fuertes presiones',['Porque es la capa más fría','Porque está en la superficie']);
geoQ(1,'¿Qué metales se mencionan en el núcleo?','Hierro y níquel',['Aluminio y cinc','Plomo y mercurio']);
for(const [name,pair] of [['Mohorovicic','Corteza y manto'],['Repetti','Manto superior e inferior'],['Gutenberg','Manto y núcleo'],['Lehmann','Núcleo externo e interno']])geoQ(1,`¿Qué separa la discontinuidad de ${name}?`,pair,['Corteza y manto','Manto superior e inferior','Manto y núcleo','Núcleo externo e interno'].filter(x=>x!==pair));
geoQ(2,'¿Qué conjunto corresponde a la definición de mineral?','Sólido, inorgánico y natural',['Líquido, orgánico y natural','Sólido, inorgánico y fabricado']);
geoQ(2,'¿Qué describe la estructura cristalina?','Partículas en una organización geométrica repetida',['El metal que se extrae','La resistencia al rayado']);
geoQ(2,'¿Qué significa composición química definida?','Elementos combinados en una proporción definida',['Cualquier mezcla de minerales','Que siempre es transparente']);
geoQ(2,'Según el esquema, ¿qué significa origen natural?','No fabricado por el ser humano',['Fabricado por el ser humano','Siempre con brillo metálico']);
geoQ(2,'¿Qué estado tienen los minerales a temperatura ambiente?','Sólido',['Líquido','Gaseoso']);
geoQ(3,'¿Qué propiedad es la resistencia a ser rayado?','Dureza',['Brillo','Exfoliación']);
geoQ(3,'Si un mineral raya a otro, ¿cuál es más blando?','El que resulta rayado',['El que lo raya','Siempre tienen igual dureza']);
geoQ(3,'¿Qué propiedad describe la superficie al reflejar la luz?','Brillo',['Densidad','Dureza']);
geoQ(3,'¿Qué propiedad permite a la galena dividirse en cubos?','Exfoliación',['Dureza','Color']);
geoQ(3,'¿Cómo se calcula la densidad?','Masa dividida entre volumen',['Volumen dividido entre masa','Masa multiplicada por volumen']);
geoQ(3,'¿En qué unidad se expresa la densidad en la página?','kg/m³',['km','m³/kg']);
geoQ(3,'¿La densidad depende del tamaño de la muestra del mismo mineral?','No, es independiente del tamaño',['Sí, siempre aumenta con el tamaño','Sí, siempre disminuye con el tamaño']);
geoQ(3,'¿Qué mineral se cita como ejemplo de distintos colores?','Cuarzo',['Azufre','Magnetita']);
for(const [m,c] of [['Galena','Gris plomo'],['Azufre','Amarillo'],['Magnetita','Negro']])geoQ(3,`¿Qué color caracteriza a la ${m==='Azufre'?'muestra de azufre':m.toLowerCase()}?`,c,['Gris plomo','Amarillo','Negro'].filter(x=>x!==c));
for(const [m,b] of [['Magnetita','Metálico'],['Fluorita','Vítreo'],['Limonita','Mate']])geoQ(3,`¿Qué brillo presenta la ${m.toLowerCase()} en los ejemplos?`,b,['Metálico','Vítreo','Mate'].filter(x=>x!==b));
const GEO_MOHS=['Talco','Yeso','Calcita','Fluorita','Apatito','Feldespato','Cuarzo','Topacio','Corindón','Diamante'];
GEO_MOHS.forEach((m,i)=>geoQ(3,`¿Qué valor tiene ${m.toLowerCase()} en la escala de Mohs?`,String(i+1),[String((i+3)%10+1),String((i+6)%10+1)],`${m} ocupa el ${i+1} en la escala de Mohs.`));
const GEO_ORES=[['Bauxita','Aluminio'],['Blenda','Cinc'],['Calcopirita','Cobre'],['Casiterita','Estaño'],['Cinabrio','Mercurio'],['Galena','Plomo'],['Hematites','Hierro']];
GEO_ORES.forEach(([m,metal],i)=>geoQ(4,`¿Qué metal se extrae de ${m.toLowerCase()}?`,metal,[GEO_ORES[(i+1)%7][1],GEO_ORES[(i+3)%7][1]],`La tabla relaciona ${m.toLowerCase()} con ${metal.toLowerCase()}.`));
geoQ(4,'¿Qué es una mena?','Un mineral del que se extrae un metal',['Una roca formada por láminas','Una medida de dureza']);
geoQ(4,'¿Qué ejemplos de minerales nativos aparecen?','Oro, plata y platino',['Cuarzo, yeso y fluorita','Granito, sienita y gabro']);
geoQ(4,'¿Qué mineral se utiliza para producir vidrio y placas solares?','Cuarzo',['Galena','Cinabrio']);
geoQ(4,'¿De qué mineral se obtiene uranio?','Uraninita',['Blenda','Casiterita']);
geoQ(4,'¿Qué mineral se utiliza para fabricar escayola?','Yeso',['Magnetita','Galena']);
geoQ(4,'¿Qué ejemplos de gemas cita la página?','Diamante, rubí y zafiro',['Talco, yeso y calcita','Bauxita, blenda y hematites']);
geoQ(4,'¿Qué dos cualidades dan gran valor a las gemas?','Belleza y escasez',['Masa y volumen','Presión y temperatura']);
geoQ(5,'¿Qué es una roca?','Un agregado natural de uno o varios minerales',['Siempre un único elemento químico','Siempre una sustancia líquida']);
geoQ(5,'¿Qué describe la composición de una roca?','Los minerales que la forman',['Solo su tamaño','Solo el brillo de su superficie']);
geoQ(5,'¿Qué describe la textura de una roca?','El tamaño y disposición de sus minerales',['El metal que se extrae','Solo su densidad']);
geoQ(5,'¿Qué minerales componen el granito?','Cuarzo, feldespato y mica',['Talco, yeso y calcita','Oro, plata y platino']);
geoQ(5,'Según el ejemplo del libro, ¿qué mineral forma la caliza?','Calcita',['Cuarzo','Mica']);
geoQ(5,'¿Qué significa roca homogénea en estos apuntes?','Formada por un solo mineral',['Formada por varios minerales diferentes','Que no tiene textura']);
geoQ(5,'¿Qué significa roca heterogénea?','Formada por varios minerales diferentes',['Formada por un solo mineral','Siempre formada por lava']);
geoQ(5,'¿Siempre se observa la textura a simple vista?','No, no siempre',['Sí, siempre','Solo si tiene brillo metálico']);
geoQ(6,'¿Cómo se forman las rocas ígneas?','Al enfriarse y solidificarse el magma',['Por la exfoliación de la galena','Solo por presión sobre otras rocas']);
geoQ(6,'¿Cómo se enfría la lava de las rocas volcánicas?','Rápidamente en el exterior',['Lentamente en el interior','Sin solidificarse']);
geoQ(6,'¿Por qué las plutónicas están bien cristalizadas?','Por el enfriamiento lento en el interior',['Por el enfriamiento rápido en el exterior','Por su exfoliación']);
geoQ(6,'¿Qué origina las oquedades de algunas rocas volcánicas?','Los gases',['El tallado','La escala de Mohs']);
geoQ(6,'¿Dónde se forman las rocas filonianas?','En grietas, formando diques o filones',['Solo en el núcleo interno','En la atmósfera']);
geoQ(6,'¿Qué factores originan el metamorfismo?','Elevada presión y altas temperaturas',['Color y brillo','Tallado y pulido']);
geoQ(6,'¿Qué es la foliación?','Organización en láminas aproximadamente paralelas',['Resistencia al rayado','Solidificación en grietas']);
for(const [type,rocks] of [['Volcánica',['Obsidiana','Pumita','Basalto']],['Plutónica',['Granito','Sienita','Gabro']],['Metamórfica foliada',['Pizarra','Esquisto','Gneis','Migmatita']],['Metamórfica no foliada',['Mármol','Cuarcita']]])for(const rock of rocks)geoQ(6,`¿Cómo se clasifica ${rock.toLowerCase()} en la fotografía?`,type,['Volcánica','Plutónica','Metamórfica foliada','Metamórfica no foliada'].filter(x=>x!==type));
geoQ(7,'¿Qué agentes pueden transportar y depositar los sedimentos?','El agua y el viento',['La presión y el calor del interior','Los cristales que unen los granos']);
geoQ(7,'¿Dónde se acumulan los sedimentos en el esquema?','En una cuenca sedimentaria',['En una cámara magmática','En los cristales de una roca']);
geoQ(7,'¿Qué dos nombres recibe la transformación de sedimentos en roca?','Diagénesis o litificación',['Fusión o solidificación','Meteorización o metamorfismo']);
geoQ(7,'¿Qué sucede cuando las capas superiores aplastan los sedimentos de abajo?','Pierden volumen',['Se funden y forman magma','Sus granos aumentan de tamaño'],'El peso de las capas superiores compacta los sedimentos y reduce su volumen.');
geoQ(7,'¿Qué une los granos durante la cementación?','Cristales que ocupan espacios entre los granos',['El viento que transporta los granos','Los huecos que deja el agua']);
geoQ(7,'¿Qué orden sigue el esquema de formación de una roca sedimentaria?','Acumulación → compactación → cementación',['Cementación → acumulación → compactación','Compactación → cementación → acumulación']);
geoQ(7,'¿Podría conservarse una huella como fósil?','Sí, si queda marcada en los sedimentos que se litifican',['Solo si contiene un hueso','Solo si los sedimentos se funden']);
geoQ(7,'¿Qué tienen en común las rocas sedimentarias detríticas?','Están formadas por fragmentos de otras rocas',['Están formadas solo por sales minerales','Se forman al solidificarse el magma']);
geoQ(7,'¿Qué roca se reconoce por sus fragmentos de más de 2 mm?','Conglomerado',['Arenisca','Arcilla']);
geoQ(7,'¿Qué roca detrítica está formada por granos de arena?','Arenisca',['Conglomerado','Arcilla']);
geoQ(7,'¿En cuál de estos ejemplos se distinguen las partículas al microscopio?','Arcilla',['Conglomerado','Arenisca']);
geoQ(7,'¿Qué tres ejemplos aparecen en la fila de rocas no detríticas?','Caliza, yeso y carbón',['Conglomerado, arenisca y arcilla','Caliza, conglomerado y arenisca']);
geoQ(7,'¿Qué origen pueden tener los sedimentos de una roca no detrítica?','Esqueletos marinos, sales minerales o restos orgánicos',['Solo granos de arena','Solo fragmentos de otras rocas']);
geoQ(7,'Una capa de 2,5 cm pierde el 90 % de su espesor al compactarse. ¿Cuánto queda?','0,25 cm',['2,25 cm','2,40 cm'],'Queda el 10 % de 2,5 cm. Divide entre 10 y obtendrás 0,25 cm.');
geoQ(8,'¿Qué describe el ciclo de las rocas?','Los procesos por los que una roca puede transformarse en otra',['Los tamaños de los granos de arena','La clasificación de los minerales por dureza']);
geoQ(8,'¿Qué proceso altera y fragmenta una roca expuesta en la superficie?','Meteorización',['Cementación','Metamorfismo']);
geoQ(8,'En el esquema, ¿qué proceso une los sedimentos con la roca sedimentaria?','Litificación',['Fusión','Metamorfismo']);
geoQ(8,'¿Qué condiciones pueden producir metamorfismo?','Alta presión, alta temperatura o ambas, sin fundir la roca',['Fusión completa y enfriamiento','Transporte y depósito por agua o viento']);
geoQ(8,'¿Tiene que ser sedimentaria la roca de partida para que ocurra metamorfismo?','No. Una roca ígnea también puede sufrir metamorfismo',['Sí. Todas las metamórficas empiezan como sedimentos','Sí. Una roca ígnea solo puede fundirse']);
geoQ(8,'¿Qué se forma cuando una roca se funde?','Magma',['Sedimentos compactados','Una roca metamórfica']);
geoQ(8,'¿Qué roca se forma cuando el magma se solidifica en el interior?','Ígnea plutónica',['Ígnea volcánica','Sedimentaria']);
geoQ(8,'¿Qué roca se forma si el material fundido se solidifica en el exterior?','Ígnea volcánica',['Ígnea plutónica','Metamórfica']);
geoQ(8,'Una roca sedimentaria sufre metamorfismo. ¿Cómo podría terminar siendo plutónica?','Se funde y el magma se solidifica en el interior',['Se compacta y los granos se cementan','Se funde y el material se solidifica en el exterior']);
geoQ(8,'¿Qué recorrido puede convertir una roca metamórfica en sedimentaria?','Meteorización, transporte, depósito y litificación',['Fusión y solidificación en el interior','Aumento de presión y temperatura sin fusión']);
geoQ(8,'¿Qué distingue el metamorfismo de la fusión?','Durante el metamorfismo la roca sigue sólida',['Durante el metamorfismo la roca siempre se vuelve magma','Durante la fusión la roca se convierte en sedimentos']);
geoQ(8,'Si en el recorrido aparece magma antes de una roca ígnea, ¿qué proceso ocurre entre ambos?','Solidificación',['Meteorización','Litificación']);

const GEO_FIGURES = {
 litificacion: ['Tres etapas de la litificación: acumulación, compactación y cementación.', 'Del sedimento suelto a la roca sedimentaria.'],
 detriticas: ['Muestras de conglomerado, arenisca y arcilla, de izquierda a derecha.', 'Conglomerado · Arenisca · Arcilla'],
 'no-detriticas': ['Muestras de caliza, yeso y carbón, de izquierda a derecha.', 'Caliza · Yeso · Carbón'],
 ciclo: ['Esquema del ciclo de las rocas con sedimentos, rocas sedimentarias, metamórficas, ígneas y magma.', 'Las flechas conectan los materiales y los procesos que los transforman.']
};
const GEO_CHALLENGE_SIZE = GEO_TOPICS.length * 2;

function geoFigure(key){
 if(!key)return '';
 const [alt,caption]=GEO_FIGURES[key];
 const src=`rocas/${key}.jpg`;
 return `<figure class="geo-figure"><a href="${src}" target="_blank" rel="noopener" aria-label="Ampliar en otra pestaña. ${esc(alt)}"><img src="${src}" alt="${esc(alt)}"></a><figcaption>${esc(caption)} · Pulsa la imagen para ampliarla.</figcaption></figure>`;
}

function geologyPage(){
 tab ||= 'teoria';
 const s=stats('geologia');
 $('#main').innerHTML=`<div class="page-head"><div class="eyebrow">TEMA 2 / LA GEOSFERA</div><h1>La Tierra por dentro.<br>Minerales y rocas.</h1><p class="lead muted">Estudia en pasos cortos y comprueba lo que recuerdas.</p></div><div class="note">${s.right} aciertos de ${s.attempts} intentos · ${s.review} preguntas para repasar. Cada acierto suma 5 puntos a tu cuaderno.</div>`+tabs([['teoria','1 · Estudiar'],['practica','2 · Practicar por apartado'],['reto-geo',`3 · Reto de ${GEO_CHALLENGE_SIZE} preguntas`],['repaso-geo','4 · Repasar mis fallos']])+`<div id="geo-zone"></div>`;
 if(tab==='teoria'){
 $('#geo-zone').innerHTML=`<div class="cards">${GEO_TOPICS.map((t,i)=>`<article class="card"><span class="card-number">${t.icon} ${i+1} /</span><h3>${esc(t.title)}</h3><p>${esc(t.intro)}</p><button data-geo-topic="${i}">Estudiar →</button></article>`).join('')}</div><div id="geo-lesson" class="spaced"></div>`;
 $$('[data-geo-topic]').forEach(b=>b.onclick=()=>geoLesson(+b.dataset.geoTopic));geoLesson(0,false);
 }else if(tab==='practica'){
 $('#geo-zone').innerHTML=`<div class="panel"><label for="geo-select">Elige qué quieres practicar</label><select id="geo-select">${GEO_TOPICS.map((t,i)=>`<option value="${i}">${i+1} · ${esc(t.title)}</option>`).join('')}</select><button class="primary spaced" id="geo-start">Comenzar</button><p class="tiny">Hasta 8 preguntas. Cambian la selección y el orden de las respuestas.</p></div><div id="geo-quiz"></div>`;
 $('#geo-start').onclick=()=>startQuiz(GEO_Q.filter(q=>q.topic===+$('#geo-select').value),'#geo-quiz',8);
 }else if(tab==='reto-geo'){
 $('#geo-zone').innerHTML=`<div class="panel"><h2>Un poco de cada apartado</h2><p>${GEO_CHALLENGE_SIZE} preguntas, dos de cada bloque. Al terminar verás tus aciertos y podrás volver a intentarlo.</p><button class="primary" id="geo-challenge">Comenzar el reto</button></div><div id="geo-quiz"></div>`;
 $('#geo-challenge').onclick=()=>geoChallenge();
 }else{
 const pool=GEO_Q.filter(q=>state.records[q.id]?.last===false);
 $('#geo-zone').innerHTML=pool.length?'<div id="geo-quiz"></div>':'<div class="panel"><h2>No tienes fallos pendientes</h2><p>Practica un apartado o prueba el reto para comprobar lo que recuerdas.</p></div>';
 if(pool.length)startQuiz(pool,'#geo-quiz',10);
 }
}
function geoLesson(i,reveal=true){const t=GEO_TOPICS[i];$('#geo-lesson').innerHTML=`<section class="panel" tabindex="-1" id="geo-lesson-content"><div class="eyebrow">APARTADO ${i+1} DE ${GEO_TOPICS.length} · FOTO ${t.source}</div><h2>${esc(t.title)}</h2><p class="lead">${esc(t.intro)}</p>${t.cards.map(([h,p,figure])=>`<div class="note spaced"><h3>${esc(h)}</h3><p>${esc(p)}</p>${geoFigure(figure)}</div>`).join('')}${i===3?`<ol class="geo-mohs">${GEO_MOHS.map(m=>`<li>${esc(m)}</li>`).join('')}</ol>`:''}<details class="spaced"><summary>Sin mirar: ${esc(t.recall)}</summary><p class="spaced">${esc(t.model)}</p></details><div class="row spaced"><button id="geo-prev" ${i===0?'disabled':''}>← Anterior</button><button id="geo-lesson-practice" class="primary">Practicar este apartado</button><button id="geo-next" ${i===GEO_TOPICS.length-1?'disabled':''}>Siguiente →</button></div></section><div id="geo-quiz"></div>`;$('#geo-prev').onclick=()=>geoLesson(i-1);$('#geo-next').onclick=()=>geoLesson(i+1);$('#geo-lesson-practice').onclick=()=>{startQuiz(GEO_Q.filter(q=>q.topic===i),'#geo-quiz',8);$('#geo-quiz').scrollIntoView({block:'start'});};$$('[data-geo-topic]').forEach(b=>{const selected=+b.dataset.geoTopic===i;b.setAttribute('aria-pressed',String(selected));b.classList.toggle('primary',selected);});if(reveal){$('#geo-lesson-content').focus({preventScroll:true});$('#geo-lesson').scrollIntoView({block:'start',behavior:'instant'});}}
function geoChallenge(){const qs=shuffle(GEO_TOPICS.flatMap((_,i)=>shuffle(GEO_Q.filter(q=>q.topic===i)).slice(0,2)));startQuiz(qs,'#geo-quiz',GEO_CHALLENGE_SIZE);session.repeat=geoChallenge;}
