import { render } from 'htm/preact'
import Home from './pages/Home'

const home = new Home()
const html = home.render()

render(html, document.querySelector('#app'))
