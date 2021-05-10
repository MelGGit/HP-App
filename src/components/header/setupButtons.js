import renderCharacters from '../../renderCharacters'

export default function setupButtons() {
  const filterButtons = document.querySelectorAll('[data-js="filter"] > button')

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const selectedHouse = button.innerText
      renderCharacters(selectedHouse)
    })
  })
}
