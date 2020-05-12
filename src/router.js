import Router from 'vanilla-router'
import { html, render } from 'htm/preact'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Header from './components/Header'
import Menu from './components/Menu'

const router = new Router({
  mode: 'hash'
})

router.add('', renderHome)
router.add(/pesquisa\/([(\w+)]+)/i, renderSearchResults)

router.addUriListener()
router.navigateTo('')

// DEFININDO O ROUTER COMO GLOBAL DENTRO DA NOSSA APLICACAO
// NAO É O IDEAL
global.router = router

async function renderMain (contentHtml) {
  const headerComponent = new Header()
  const menuComponent = new Menu()

  const finalHtml = html`
    <div>        
      ${headerComponent.render()}
      <main>
        ${await menuComponent.render()}
        <section class="content">
          ${contentHtml}            
        </section>
      </main>
    </div>
  `

  render(finalHtml, document.querySelector('#app'))
}

async function renderHome () {
  const homePage = new Home()
  const homeHtml = await homePage.render()
  renderMain(homeHtml)
}

async function renderSearchResults (query) {
  const searchResultsPage = new SearchResults()
  const searchHtml = await searchResultsPage.render(query)
  renderMain(searchHtml)
}
