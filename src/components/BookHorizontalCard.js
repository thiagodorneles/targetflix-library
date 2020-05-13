import { html } from 'htm/preact'
import ButtonAddCheckout from './ButtonAddCheckout'
import ButtonDetails from './ButtonDetails'
import ButtonRemove from './ButtonRemove'

export default class BookHorizontalCard {
  constructor (book) {
    this.book = book
    this.title = book.volumeInfo.title
    this.description = book.volumeInfo.description
    this.price = book.saleInfo.retailPrice ? book.saleInfo.retailPrice.amount : 0
    this.thumbnail = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ''
  }

  render (showCheckoutButton = true, showDescription = true, removeType = '') {
    const buttonAddCheckout = new ButtonAddCheckout(this.book)
    const buttonMoreDetails = new ButtonDetails()
    const buttonRemove = new ButtonRemove(this.book, removeType)

    return html`
      <article class="book-card-horizontal">
        <div class="image">
          <img src="${this.thumbnail}" />
        </div>
        
        <div class="info">          
          <p class="book-title">${this.title}</p>
          ${showDescription && html`<p>${this.description}</p>`}
          <p class="price">R$ ${this.price}</p>
        </div>

        <div class="actions">
          ${showCheckoutButton && buttonAddCheckout.render()}
          ${buttonMoreDetails.render()}
          ${buttonRemove.render()}
        </div>

      </article>
    `
  }
}
