import { html } from 'htm/preact'
import ButtonAddCheckout from './ButtonAddCheckout'
import ButtonDetails from './ButtonDetails'

export default class BookHorizontalCard {
  constructor (book) {
    this.title = book.volumeInfo.title
    this.description = book.volumeInfo.description
    this.price = book.saleInfo.retailPrice ? book.saleInfo.retailPrice.amount : 0
    this.thumbnail = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ''
  }

  render () {
    const buttonAddCheckout = new ButtonAddCheckout()
    const buttonMoreDetails = new ButtonDetails()

    return html`
      <article class="book-card-horizontal">
        <div class="image">
          <img src="${this.thumbnail}" />
        </div>
        
        <div class="info">          
          <p class="book-title">${this.title}</p>
          <p>${this.description}</p>
          <p class="price">R$ ${this.price}</p>
        </div>

        <div class="actions">
          ${buttonAddCheckout.render()}
          ${buttonMoreDetails.render()}
        </div>

      </article>
    `
  }
}
