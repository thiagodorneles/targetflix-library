import { html } from 'htm/preact'
import CategoriesList from './CategoriesList'

export default class Menu {
  async render () {
    const categoriesListComponent = new CategoriesList()

    return html`
      <aside class="menu">
        <h1>Categorias</h1>
        ${await categoriesListComponent.render()}
      </aside>
    `
  }
}
