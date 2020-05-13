import { html } from 'htm/preact'

export default class ButtonDetails {
  constructor (bookId) {
    this.bookId = bookId
  }

  goToDetails () {
    global.router.navigateTo(`detalhes/${this.bookId}`)
  }

  render () {
    return html`
      <button onclick="${this.goToDetails.bind(this)}">Ver detalhes</button>
    `
  }
}
