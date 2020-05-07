import { html } from 'htm/preact'
import Header from '../components/Header'
import Menu from '../components/Menu'
import CardsLists from '../components/CardsList'

export default class Home {
  render () {
    const headerComponent = new Header()
    const menuComponent = new Menu()
    const cardsListComponent = new CardsLists()

    return html`
      <div>        
        ${headerComponent.render()}

        <main>
          ${menuComponent.render()}

          <section class="content">
              ${cardsListComponent.render()}
          </section>

        </main>
        
      </div>
    `
  }
}
