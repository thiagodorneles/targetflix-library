import { html } from 'htm/preact'
import Checkout from '../services/checkout'
import Favorites from '../services/favorites'

export default class ButtonRemoveCheckout {
  constructor (book, removeType) {
    this.book = book
    this.removeType = removeType
  }

  remove () {
    const checkoutServices = new Checkout()
    const favoriteServices = new Favorites()

    switch (this.removeType) {
      case 'checkout':
        checkoutServices.removeItem(this.book)
        break

      case 'favorite':
        favoriteServices.removeItem(this.book)
        break

      default:
        console.error('funcao inesperada')
    }
  }

  render () {
    return html`
      <button onclick="${this.remove.bind(this)}">Remover</button>
    `
  }
}
