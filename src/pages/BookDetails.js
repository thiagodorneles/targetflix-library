import { html } from 'htm/preact'

export default class BookDetails {
  async render () {
    return html`
      <article class="book-details">
        <div className="image">
          <img src="" alt=""/>
        </div>

        <div className="book-content">
          <div className="top">
            <div className="info">
              <h1>Título do livro</h1>
            </div>
            <div className="actions">
              adicionar aos favoritos
              <br>
              comprar
            </div>
          </div>
          <div className="description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam error facere suscipit quidem, doloremque ex? Corrupti velit eaque, repellendus nulla libero hic cumque fugiat, earum optio quaerat perspiciatis accusamus ad.
          </div>
          <hr/>
          <section className="comments">
            <h2>Comentários</h2>
          </section>

        </div>

      </article>
    `
  }
}
