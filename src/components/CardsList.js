import { html } from 'htm/preact'
import BookCard from './BookCard'

export default class CardsLists {
  render () {
    const bookCardComponent = new BookCard()

    return html`
      <section class="cards-list">
        <h1>Lançamentos</h1>

        <div class="books">
          ${bookCardComponent.render()}
          ${bookCardComponent.render()}
          ${bookCardComponent.render()}
          ${bookCardComponent.render()}
          ${bookCardComponent.render()}
          ${bookCardComponent.render()}
          ${bookCardComponent.render()}
          ${bookCardComponent.render()}
          ${bookCardComponent.render()}
          ${bookCardComponent.render()}
        </div>

      </section>
    `
  }
}
