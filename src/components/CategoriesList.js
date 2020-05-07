import { html } from 'htm/preact'

export default class CategoriesList {
  render () {
    return html`
      <ul>
          <li>
            <a href="#">Lançamentos</a>
          </li>

          <li>
            <a href="#">Mais vendidos</a>
          </li>

          <li>
            <a href="#">Ficção</a>
          </li>

          <li>
            <a href="#">Tecnologia</a>
          </li>

          <li>
            <a href="#">Romances</a>
          </li>

        </ul>
    `
  }
}
