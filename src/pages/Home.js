import { html } from 'htm/preact'
import CardsLists from '../components/CardsList'

export default class Home {
  async render () {
    const cardsListComponent = new CardsLists()

    return html`
      <section class="home">
          ${await cardsListComponent.render()}
      </section>
    `
  }
}
