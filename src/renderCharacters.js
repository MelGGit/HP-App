import renderCharacter from './renderCharacter'
import { characters } from './index.js'

export default function renderCharacters(selectedHouse = 'All') {
  const container = document.querySelector('[data-js="characters"]')
  container.innerHTML = ''

  characters
    .filter(
      character => character.house === selectedHouse || selectedHouse === 'All'
    )
    .forEach(renderCharacter)
}
