export default function setupHeader() {
  const headerEl = document.createElement('header')

  headerEl.innerHTML = `
    <nav class="header__filter" data-js="filter">
      <button class="header__buttons">All</button>
      <button class="header__buttons">Gryffindor</button>
      <button class="header__buttons">Slytherin</button>
      <button class="header__buttons">Hufflepuff</button>
      <button class="header__buttons">Ravenclaw</button>
    </nav>
    <label class="header__searchbar">
      Search
      <input
        class="header__searchbar"
        type="text"
        name="search"
        placeholder="Enter search"
      />
    </label>`

  document.body.prepend(headerEl)
}
