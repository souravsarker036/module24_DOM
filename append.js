// 1. parent node
const mainContainer = document.getElementById('main-container');
// console.log(mainContainer)

// 2. create child node
const placeSection = document.createElement('section');

// create h1
const h1 = document.createElement('h1')
h1.innerText ='Place i want to visit'
placeSection.appendChild(h1)

const ul = document.createElement('ul')
const li1 =document.createElement('li')
li1.innerText = 'bandorbon'

ul.appendChild(li1)
placeSection.appendChild(ul)

// 3. append placeSection to the container

mainContainer.appendChild(placeSection)