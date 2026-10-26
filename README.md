# BioLab · Tema 1 de Biología · 1.º ESO

Aplicación estática para repasar unidades, factores de conversión, microscopio, experimentación, magnitudes y trabajo de campo. Diseñada para ordenador e iPad, sin cuentas, servidores, dependencias ni servicios de IA.

## Publicar en GitHub Pages

1. Crea un repositorio nuevo, por ejemplo `biologia-malena`. Para publicar con GitHub Free, el repositorio debe ser público.
2. Sube el contenido de esta carpeta al repositorio. Debe quedar `docs/index.html`, no una carpeta adicional que contenga todo el proyecto.
3. En **Settings → Pages → Build and deployment**, selecciona **Deploy from a branch**.
4. Elige la rama **main** y la carpeta **/docs**, y guarda.
5. GitHub mostrará la dirección publicada en esa página cuando termine. Habitualmente será `https://TU-USUARIO.github.io/biologia-malena/`.

No requiere comandos de compilación ni GitHub Actions propios. También puede probarse abriendo `docs/index.html` en un ordenador, aunque conviene usar siempre la dirección de GitHub Pages para conservar un único cuaderno.

## Progreso

Se guarda en `localStorage` con la clave `biolab-tema1-v1`. No se envían respuestas a ningún servidor. El progreso pertenece al navegador y al origen web, por lo que no se comparte entre dispositivos, navegación privada, archivos locales y la versión publicada. En **Mi cuaderno** se puede descargar/restaurar una copia JSON y borrar el progreso. Las respuestas libres se guardan automáticamente y se autoevalúan con modelos e ideas esenciales. No se corrigen automáticamente ni puntúan como aciertos.

El banco incluye 52 preguntas razonadas, 11 conversiones basadas en los materiales, ejercicios aleatorios de las cinco escaleras, nueve piezas del microscopio y 35 respuestas breves. Las preguntas falladas de cuestionario tienen prioridad al repetir. Los ejercicios numéricos muestran su solución y quedan contabilizados para repaso si se pide la respuesta. Se admiten coma y punto decimal, sin separadores de miles.

## Actualización del punto 2.2

El bloque 04 incluye una introducción explícita al punto 2 y el apartado 2.2 de laboratorio: ensayo virtual de suelo, normas de seguridad con sus motivos, preguntas y respuestas breves. Los resultados de la simulación son ficticios y cualitativos. Se conservan los identificadores anteriores y la clave de progreso.

## Materiales y precisión

Basado en la presentación local `Biologia 1.pptx` (cinco imágenes de páginas del tema) y en las fotografías de los apuntes de factores y escalera de conversión. El juego transforma el contenido en explicaciones y actividades propias. No publica las fotografías personales ni las páginas escaneadas.

Se aclara que el litro es una unidad aceptada para uso con el SI, mientras que el metro cúbico es su unidad de volumen. La unidad de masa del SI es el kilogramo. Se distingue muestreo probabilístico de su caso aleatorio simple con igual probabilidad. En Redi se consideran larvas de mosca sobre la carne: puede haber huevos o larvas sobre la gasa. Las explicaciones de variables, fases del método y práctica de enfoque amplían didácticamente los materiales.

## Archivos

- `docs/index.html`: estructura accesible.
- `docs/style.css`: estilos adaptables sin recursos externos.
- `docs/content.js`: banco de contenido.
- `docs/app.js`: actividades, navegación y progreso.
- `docs/icon.svg`: icono.

Para añadir otros temas conviene conservar esta versión como Tema 1 y añadir nuevas secciones con claves de progreso independientes.

## Refuerzo del movimiento de la coma

La zona 01 comienza por el valor posicional y el cálculo con potencias de diez. Incluye 9 ejemplos con pasos a demanda y 32 ejercicios en cuatro niveles, desde multiplicar o dividir entre 10 hasta aplicarlo a superficie y volumen. Cada ejercicio comprueba dirección, número de lugares y resultado; muestra soluciones razonadas y guarda los intentos con identificadores propios. `docs/decimals.js` contiene esta ampliación. Los identificadores y respuestas anteriores se conservan.
