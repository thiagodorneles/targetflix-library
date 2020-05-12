export default class Checkout {
  addItem (book) {
    const items = this.getItems()
    items.push(book)

    const arrayAsString = JSON.stringify(items)

    window.localStorage.setItem('checkoutItems', arrayAsString)
  }

  getItems () {
    return JSON.parse(window.localStorage.getItem('checkoutItems')) || []
  }
}
