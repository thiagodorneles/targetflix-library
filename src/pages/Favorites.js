import { html } from 'htm/preact'
import FavoritesService from './../services/favorites'
import BookHorizontalCard from './../components/BookHorizontalCard'

export default class Favorites {
  render () {
    const favoritesService = new FavoritesService()

    const items = favoritesService.getItems()

    return html`
      <section class="checkout">
        <h1>Meus favoritos</h1>

        ${items.map(bookItem => {
          const bookCardHorizontalItemComponent = new BookHorizontalCard(bookItem)
          return bookCardHorizontalItemComponent.render(true, true, 'favorite')
        })}

      </section>
    `
  }
}
