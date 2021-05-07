import AppHeader from './components/AppHeader'

document.body.append(AppHeader('JavaScript App Template'))

const container = document.querySelector('[data-js="characters"]')
const filterButtons = document.querySelectorAll('[data-js="filter"] > button')

let characters

getAllCharacters().then(data => {
  characters = data
  renderCharacters()
})

function getAllCharacters() {
  const url = 'https://hp-api.herokuapp.com/api/characters'
  return fetch(url).then(response => response.json())
}

function renderCharacters(selectedHouse = 'All') {
  container.innerHTML = ''

  characters
    .filter(
      character => character.house === selectedHouse || selectedHouse === 'All'
    )
    .forEach(renderCharacter)
}

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedHouse = button.innerText
    renderCharacters(selectedHouse)
  })
})

// function countByHouse(characters) {
//   return characters.reduce((acc, cur) => {
//     if (cur.house) {
//       const houseCount = acc[cur.house]
//       acc[cur.house] = houseCount ? houseCount + 1 : 1
//     }
//     return acc
//   }, {})
// }

function renderCharacter(character) {
  const { name, image } = character

  const el = document.createElement('div')
  el.className = 'character'
  el.innerHTML = `
    <h2 class="character__name">${name}</h2>
    <img 
      class="character__image" 
      src="${image.replace('http', 'https')}">
  `
  container.append(el)
}
