
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
let pandas = new card("Pandas", "pandas is an open source, BSD-licensed library providing high-performance, easy-to-use data structures and data analysis tools for the Python programming language.", "src/images/pandas.png", "https://pandas.pydata.org/pandas-docs/stable/index.html")
let collab = new card("Collab", "Google Collab", "src/images/collab.png", "https://colab.research.google.com/")


cards.push(pypi, python, uvicorn, fastapi, pandas,collab)

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


