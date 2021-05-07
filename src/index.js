const container = document.querySelector('[data-js="characters"]')
// const filterButtons = document.querySelectorAll('[data-js="filter"] > button')

let characters

getAllCharacters().then(data => {
  characters = data
  //  renderCharacters()
})

function getAllCharacters() {
  const url = 'https://hp-api.herokuapp.com/api/characters'
  return fetch(url).then(response => response.json())
}

renderCharacter()

// filterButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const selectedHouse = button.innerText
//     renderCharacters(selectedHouse)
//   })
// })

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
  //  const { name, image } = character

  const el = document.createElement('div')
  el.className = 'character'
  el.innerHTML = `
  <section class="card" data-js="characters">
  <div class="header-name">
    <h2>${character.name}</h2>
    House: ${character.house},<br>Species: ${character.species}
  </div>
  <div class="header-image">
    <img class="card-image" width="150px" src="assets/favicon.png" alt="" />
  </div>
  <p>
    ${character.name} ${character.alive ? '' : ' (deceased)'} is a
    ${character.species} of House ${character.house}, portrayed by
    ${character.actor}. ${character.gender === 'male' ? 'He' : 'She'} was born
    on ${
      character.dateOfBirth
    } is currently/was a student/staff member of Hogwarts.
    His/her patronus is ${character.patronus}.
  </p>
  <div class="wand-info">
    <ul class="wand-list">
      ${character.name}'s Wand
      <li>Type of Wood: ${character.wand.wood}</li>
      <li>Type of Core: ${character.wand.core}</li>
      <li>Length: ${character.wand.length}</li>
    </ul>
  </div>
</section>
  `
  container.append(el)
}
console.log(characters)
