
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

let react = new card("React", "The library for web and native user interfaces", "src/images/REACT.png", "https://reactjs.org/")
let nodejs= new card("NodeJs", "Node.js® is an open-source, cross-platform JavaScript runtime environment.", "src/images/NODEJS.png", "https://nodejs.org/en/")
let npm = new card("Npm", "Build amazing things", "src/images/npm.png", "https://www.npmjs.com/")
let primereact = new card("PrimeReact", "PrimeReact is a rich set of open source UI components for React.", "src/images/primereact.png", "https://www.primefaces.org/primereact/#/panel")
let reactBootstrap = new card("ReactBootstrap", "The most popular front-end framework, rebuilt for React.", "src/images/reactbootstrap.png", "https://react-bootstrap.github.io/")
let express = new card("Express", "Fast, unopinionated, minimalist web framework for Node.js", "src/images/Express.png", "https://expressjs.com/")
let reactstrap = new card("Reactstrap", "Reactstrap is a React component library for Bootstrap", "src/images/reactstrap.png", "https://reactstrap.github.io/?path=/story/home-installation--page")


cards.push(nodejs,react,npm,express,reactBootstrap,reactstrap,primereact)


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

