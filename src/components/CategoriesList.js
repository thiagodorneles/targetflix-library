import { html } from 'htm/preact'
import BookApi from '../services/bookApi'

export default class CategoriesList {
  async render () {
    const api = new BookApi()
    const categories = await api.getCategories()

    return html`
      <ul>
        ${categories.map(category => {
          return html`<li>
            <a href="#">${category.title}</a>
          </li>`
        })}

      </ul>
    `
  }
}
