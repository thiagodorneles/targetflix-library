import { html } from 'htm/preact'

export default class Header {
  render () {
    return html`
      <header>
        <h1>Livraria da TargetTrust</h1>

        <input type="search" />

        <a href="#">Favoritos</a>

      </header>
    `
  }
}
