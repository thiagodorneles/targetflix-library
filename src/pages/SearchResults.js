import { html } from 'htm/preact'
import BookHorizontalCard from '../components/BookHorizontalCard'
import BookApi from './../services/bookApi'

export default class SearchResults {
  async render (valueToSearch) {
    const api = new BookApi()

    const results = await api.search(valueToSearch)

    return html`
      <section class="search-results">
        <h1>Resultados da pesquisa</h1>
        
        ${results.items.map(book => {
          const bookHorizontalCardComponent = new BookHorizontalCard(book)
          return bookHorizontalCardComponent.render()
        })}
      </section>
    `
  }
}
