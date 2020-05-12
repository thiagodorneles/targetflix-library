import { html } from 'htm/preact'
import Checkout from '../services/checkout'

export default class ButtonAddCheckout {
  constructor (book) {
    this.book = book
  }

  addToCheckout () {
    // THIS por padrão aqui, seria o BUTTON que foi clicado, e não mais a propria CLASSE
    // no javascript, o this é quem dispara a ação

    // utilizamos o BIND abaixo, para forçar quem deve ser o THIS quando essa função for executada
    // basicamente, estamos dizendo para o botão que quando ele for clicado, o this será a propria CLASSE
    console.log(this)

    const checkoutService = new Checkout()
    checkoutService.addItem(this.book)
  }

  render () {
    return html`
      <button onclick="${this.addToCheckout.bind(this)}">Add carrinho</button>
    `
  }
}
