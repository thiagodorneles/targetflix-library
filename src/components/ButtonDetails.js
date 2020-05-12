import { html } from 'htm/preact'

export default class ButtonDetails {
  goToDetails () {
    global.router.navigateTo('detalhes/123')
  }

  render () {
    return html`
      <button onclick="${this.goToDetails}">Ver detalhes</button>
    `
  }
}
