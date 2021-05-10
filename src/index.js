import setupButtons from './components/header/setupButtons'
import setupHeader from './components/header/setupHeader'
import setupSearch from './components/header/setupSearch'
import renderCharacters from './renderCharacters.js'

export let characters

getAllCharacters().then(data => {
  characters = data
  renderCharacters()
})

function getAllCharacters() {
  const url = 'https://hp-api.herokuapp.com/api/characters'
  return fetch(url).then(response => response.json())
}

setupHeader()
setupButtons()
setupSearch()
