import { html } from 'htm/preact'
import BookCard from './BookCard'
import BookApi from './../services/bookApi'

export default class CardsLists {
  fetchBooks () {
    const api = new BookApi()
    return api.getBooks()
  }

  async render () {
    // no react é utilizado o STATE para gerenciar
    // o ciclo de vida de um componente
    const books = await this.fetchBooks()

    return html`
      <section class="cards-list">
        <h1>Lançamentos</h1>

        <div class="books">
          
          ${books.items.map(book => {
            const bookCardComponent = new BookCard(book)
            return bookCardComponent.render()
          })}

        </div>

      </section>
    `
  }
}
