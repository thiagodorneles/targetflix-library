import Axios from 'axios'

// const axios = Axios.create({
//   baseURL: 'https://www.googleapis.com/books/v1/'
// })

export default class BookApi {
  getBooks () {
    return Axios.get('https://www.googleapis.com/books/v1/volumes?q=domain+driven+design+eric+evans').then(r => r.data)
  }

  getCategories () {
    return new Promise((resolve) => {
      const categoriesList = [
        { title: 'Lançamentos' },
        { title: 'Mais vendidos' },
        { title: 'Infantis' },
        { title: 'Romances' },
        { title: 'Ficção cientifica' }
      ]

      // resolve vai chamar o THEN de quem está esperando a funcao (promise) terminar de ser executada
      resolve(categoriesList)
    })
  }

  search (query) {
    return Axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`).then(r => r.data)
  }
}
