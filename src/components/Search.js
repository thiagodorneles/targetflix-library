import { html } from 'htm/preact'

export default class Search {
  async doSearch (event) {
    if (event.keyCode === 13) { // 13 = ENTER
      // busca o valor que o usuario digitou no campo
      const valueToSearch = event.target.value

      const valueReplaced = valueToSearch.replace(/\s/g, '+')

      global.router.navigateTo(`pesquisa/${valueReplaced}`)
    }
  }

  render () {
    return html`
      <input type="search" 
             placeholder="Digite aqui sua pesquisa..."
             onkeyup="${this.doSearch}" />
    `
  }
}
