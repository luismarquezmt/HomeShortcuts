

let totalStatement = document.getElementsByClassName("code-copy")
let niuwMap = new Map()

for (let statement of totalStatement) {
  let codeToCopy
  let badge
  badge = statement.children[1];
  codeToCopy = statement.children[0].innerHTML
  niuwMap.set(badge, codeToCopy)
}

niuwMap.forEach(function (value, key) {
  key.addEventListener("click", () => {
    navigator.clipboard.writeText(value)
  })
})




class card {
  constructor(idCard, cardName, imgSrc, link) {
    this.idCard = idCard
    this.cardName = cardName
    this.img = new Image
    this.img.src = imgSrc
    this.link = link
  }
}


let cards = []

let pypi = new card("Pypi", "The Python Package Index (PyPI) is a repository of software for the Python programming language.", "src/images/pypi.png", "https://pypi.org/")
let python = new card("Python", "Python is a programming language that lets you work quickly and integrate systems more effectively", "src/images/python.png", "https://www.python.org/")
let uvicorn = new card("uvicorn", "Uvicorn is an ASGI web server implementation for Python.", "src/images/uviCorn.png", "https://www.uvicorn.org/")
let fastapi = new card("FastApi", "FastAPI framework, high performance, easy to learn, fast to code, ready for production", "src/images/fastApi.png", "https://fastapi.tiangolo.com/")
let pandas = new card("Pandas", "BSD-licensed library providing high-performance, easy-to-use data structures and data analysis tools for Python.", "src/images/pandas.png", "https://pandas.pydata.org/pandas-docs/stable/index.html")
let collab = new card("Collab", "Google Collab", "src/images/collab.png", "https://colab.research.google.com/")
let maplotlib = new card("Maplotlib", "Matplotlib is a comprehensive library for creating static, animated, and interactive visualizations.", "src/images/matplotlib.png", "https://matplotlib.org/stable/")


cards.push(pypi, python, uvicorn, fastapi, maplotlib, pandas, collab)

cards.forEach(card => {
  let spanCard = `
    <div id="${card.idCard}" class="col">
      <div class="card">
        <a href="${card.link}" target="_blank">
          <img src="${card.img.src}" class="card-img-top" alt="..."></img> </a>
        <div class="card-body">
          <h5 class="card-title">${card.idCard}</h5>
          <p class="card-text">${card.cardName}</p>
        </div>
      </div>
    </div>`

  document.getElementById("span-cards-space").innerHTML += spanCard

});


//      ||=OR
console.log((2 * 5) < 8 || ((4 * 6) > (2 * 5)))
console.log((10) < 8 || ((24) > (10)))
console.log(10 < 8 || 24 > 10);
console.log(false || true)
//       OUTPUT==TRUE



//    TRUE==1 FALSE==0 &==AND 
console.log((4 + 5) < 3 & ((5 * 5) + (4 + 25 < 3)));
console.log((9) < 3 & ((25) + (29 < 3)))
console.log(9 < 3 & (25 + (29 < 3)))
console.log(false & (25 + (false)))
console.log(false & 25)
//    OUTPUT==0  0 ES IGUAL A FALSO


/*
● Suponiendo que nos encontramos descansando en una nuestra casa en una ciudad de Colombia requiero hacer un plan detallado para llegar a tiempo a mi sitio de trabajo el día siguiente. 

Para precisar los elementos de entrada de cada una de las situaciones enunciadas no olvide las preguntas guía:
● ¿Qué información es importante y necesaria para resolver el problema?
   ruta, medio de transporte, clima 
● ¿Qué información no es importante y se puede prescindir?
   estar descansando
● ¿Cuáles son los datos de entrada conocidos?
   hora de entrada  y lugar de trabajo 
● ¿Cuál es la incógnita o qué debemos calcular?
   crear un paso a paso para llegar al trabajo 
● ¿Los datos se pueden agrupar en categorías?
   si
● ¿Qué información adicional hace falta para resolver el problema?
   información de trafico y clima al momento del viaje
Para precisar los resultados esperados se recomienda utilizar las preguntas guía:
● ¿Qué información están solicitando?
   lista con pasos para llegar al trabajo
● ¿En qué formato se debe entregar esta información? 
  escrito lista
*/


// FORMULA ( °C × 9/5) + 32 =  °F
function algoritmoCtoF(celsius) {
  if (celsius > 0) {
    let Fahrenheit = 0
    Fahrenheit = (celsius * 9 / 5) + 32
    return console.log(`${celsius} Celsius are ${Fahrenheit} in Fahrenheit`)
  } else {
    return console.log("it has to be more than one grade");
  }
}
algoritmoCtoF(25)




let algoritmotoCookChicken= `
Preparar un arroz con pollo para cinco personas es un algoritmo que puedes seguir:

Ingredientes:

Para el pollo:
1 pollo entero cortado en piezas o muslos y pechugas (aproximadamente 1.5 kg)
Sal al gusto
Pimienta al gusto
2 cucharadas de aceite de oliva o vegetal

Para el arroz:
2 tazas de arroz (preferiblemente arroz de grano largo)
4 tazas de caldo de pollo (puede ser caldo preparado o caldo en cubos disueltos en agua caliente)
1 cucharada de aceite de oliva
1 cebolla picada
3 dientes de ajo picados
1 pimiento rojo picado
1 zanahoria grande cortada en cubos pequeños
1 taza de guisantes (pueden ser congelados)
1 lata de tomate triturado (400g)
1 cucharadita de pimentón
1/2 cucharadita de comino
Sal y pimienta al gusto
Opcional: azafrán o colorante alimentario para dar color al arroz

Instrucciones:
1. Preparación del pollo:
Sazona las piezas de pollo con sal y pimienta al gusto.
Calienta 2 cucharadas de aceite en una olla grande a fuego medio-alto.
Dora el pollo por ambos lados, asegurándote de que esté cocido. Retira y reserva.
2. Preparación del arroz:
En la misma olla donde doraste el pollo, añade 1 cucharada de aceite de oliva si es necesario.
Saltea la cebolla y el ajo hasta que estén transparentes.
Agrega el pimiento, la zanahoria y los guisantes, cocinando durante unos minutos hasta que estén un poco tiernos.
Añade el tomate triturado, el pimentón, el comino, la sal y la pimienta. Cocina durante unos minutos.
Agrega el arroz y mezcla bien para que se impregne de los sabores.
Vierte el caldo de pollo caliente. Añade azafrán o colorante si lo estás usando.
Lleva a ebullición, reduce el fuego a bajo, cubre y cocina durante unos 15-20 minutos o hasta que el arroz esté tierno y haya absorbido todo el líquido.
3. Combinar el arroz con el pollo:
Una vez que el arroz esté listo, coloca las piezas de pollo reservadas encima del arroz.
Cubre la olla y cocina a fuego bajo durante unos 10-15 minutos más para que el pollo se caliente y mezcle sabores con el arroz. Sirve tu delicioso arroz con pollo para cinco personas. 
`

console.log(algoritmotoCookChicken);