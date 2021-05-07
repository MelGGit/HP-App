import container from './index.js'

export default function renderCharacter(character) {
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
