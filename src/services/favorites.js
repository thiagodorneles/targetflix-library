export default class Favorites {
  addItem (book) {
    const items = this.getItems()
    items.push(book)

    const arrayAsString = JSON.stringify(items)

    window.localStorage.setItem('favoriteItems', arrayAsString)
  }

  getItems () {
    return JSON.parse(window.localStorage.getItem('favoriteItems')) || []
  }
}
