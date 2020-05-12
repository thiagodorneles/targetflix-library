import { html } from 'htm/preact'
import Favorites from '../services/favorites'

export default class ButtonAddFavorite {
  constructor (book) {
    this.book = book
  }

  addFavorite () {
    // THIS por padrão aqui, seria o BUTTON que foi clicado, e não mais a propria CLASSE
    // no javascript, o this é quem dispara a ação

    // utilizamos o BIND abaixo, para forçar quem deve ser o THIS quando essa função for executada
    // basicamente, estamos dizendo para o botão que quando ele for clicado, o this será a propria CLASSE
    console.log(this)

    const favoritesService = new Favorites()
    favoritesService.addItem(this.book)
  }

  render () {
    return html`
      <button onclick="${this.addFavorite.bind(this)}">Add Favorito</button>
    `
  }
}
