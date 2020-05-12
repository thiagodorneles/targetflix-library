import { html } from 'htm/preact'
import ButtonDetails from './ButtonDetails'
import ButtonAddFavorite from './ButtonAddFavorite'
import ButtonAddCheckout from './ButtonAddCheckout'

export default class BookCard {
  constructor (book) {
    this.book = book

    this.title = book.volumeInfo.title
    this.price = book.saleInfo.retailPrice ? book.saleInfo.retailPrice.amount : 0
    this.thumbnail = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ''
  }

  render () {
    const buttonDetailsComponent = new ButtonDetails()
    const buttonAddFavorite = new ButtonAddFavorite(this.book)
    const buttonAddCheckout = new ButtonAddCheckout(this.book)

    return html`
      <article class="book-card">
        <img src="${this.thumbnail}" />
        
        <div class="info">
          <p class="book-title">${this.title}</p>
          <p class="book-price">R$ ${this.price}</p>
        </div>

        <div class="actions">
            ${buttonDetailsComponent.render()}
            ${buttonAddFavorite.render()}
            ${buttonAddCheckout.render()}
        </div>

      </article>
    `
  }
}
