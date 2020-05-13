import { html } from 'htm/preact'
import BookApi from '../services/bookApi'
import ButtonAddCheckout from './../components/ButtonAddCheckout'
import ButtonAddFavorite from './../components/ButtonAddFavorite'

export default class BookDetails {
  async fetchDetails (bookId) {
    const api = new BookApi()
    return api.getBookDetails(bookId)
  }

  async render (bookId) {
    const book = await this.fetchDetails(bookId)

    const title = book.volumeInfo.title
    const description = book.volumeInfo.description
    const price = book.saleInfo.retailPrice ? book.saleInfo.retailPrice.amount : 0
    const thumbnail = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ''

    const buttonAddCheckoutComponent = new ButtonAddCheckout(book)
    const buttonAddFavoriteComponent = new ButtonAddFavorite(book)

    return html`
      <article class="book-details">
        <h1>Página de detalhes</h1>
        <div class="top">
          <div class="image">
            <img src="${thumbnail}" alt=""/>
          </div>
          <div class="info">
            <h1>${title}</h1>
            <div class="price">
              R$ ${price}
            </div>
          </div>
          <div class="actions">
            ${buttonAddFavoriteComponent.render()}
            ${buttonAddCheckoutComponent.render()}
          </div>
        </div>
        <div class="description">
          ${description}
          </div>
      </article>
    `
  }
}
