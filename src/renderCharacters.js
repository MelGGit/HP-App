import renderCharacter from './renderCharacter'
import { characters, container } from './index.js'

export default function renderCharacters(selectedHouse = 'All') {
  container.innerHTML = ''

  characters
    .filter(
      character => character.house === selectedHouse || selectedHouse === 'All'
    )
    .forEach(renderCharacter)
}
