export default function setupSearch() {
  const searchBar = document.querySelector('[name="search"]')
  searchBar.addEventListener('change', () => {
    const text = searchBar.value
    console.log(text)
  })
}
