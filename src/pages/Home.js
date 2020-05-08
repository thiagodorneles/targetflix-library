import { html } from 'htm/preact'
import Header from '../components/Header'
import Menu from '../components/Menu'
import CardsLists from '../components/CardsList'

export default class Home {
  async render () {
    const headerComponent = new Header()
    const menuComponent = new Menu()
    const cardsListComponent = new CardsLists()

    return html`
      <div>        
        ${headerComponent.render()}

        <main>
          ${await menuComponent.render()}

          <section class="content">
              ${await cardsListComponent.render()}
          </section>

        </main>
        
      </div>
    `
  }
}
