import { html } from 'htm/preact'
import BookHorizontalCard from './../components/BookHorizontalCard'
import CheckoutService from './../services/checkout'

export default class Checkout {
  render () {
    const checkoutService = new CheckoutService()

    const items = checkoutService.getItems()

    return html`
      <section class="checkout">
        <h1>Carrinho de compras</h1>

        ${items.map(bookItem => {
          const bookCardHorizontalItemComponent = new BookHorizontalCard(bookItem)
          return bookCardHorizontalItemComponent.render(false, false, 'checkout')
        })}

      </section>
    `
  }
}
