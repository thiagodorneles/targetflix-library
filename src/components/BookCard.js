import { html } from 'htm/preact'
import ButtonDetails from './ButtonDetails'
import ButtonAddFavorite from './ButtonAddFavorite'
import ButtonAddCheckout from './ButtonAddCheckout'

export default class BookCard {
  render () {
    const buttonDetailsComponent = new ButtonDetails()
    const buttonAddFavorite = new ButtonAddFavorite()
    const buttonAddCheckout = new ButtonAddCheckout()

    return html`
      <article class="book-card">
        <img src="" />
        
        <div class="info">
          <p class="book-title">Nome do livro</p>
          <p class="book-price">R$ 10,00</p>
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
