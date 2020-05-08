import { html } from 'htm/preact'
import BookApi from '../services/bookApi'

export default class Search {
  async doSearch (event) {
    if (event.keyCode === 13) { // 13 = ENTER
      // busca o valor que o usuario digitou no campo
      const valueToSearch = event.target.value

      // busca com base nesse valor na api do Google
      const api = new BookApi()
      const results = await api.search(valueToSearch)

      // coloca o resultado no console do browser
      console.log('Resultado da pesquisa', results)
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
