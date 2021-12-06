export default function Sidebar() {
  return (
    <aside className="side-bar">
      <div className="main-suggestion">
        <img src="images/catanacomics 1.png" />
        <div className="user-name">
          <p>catanacomics</p>
          <span>Catana</span>
        </div>
      </div>

      <div className="suggestions">
        <div className="suggestions-top">
          <p>Sugestões para você</p>
          <strong>Ver tudo</strong>
        </div>
        <div className="suggestion">
          <div className="user">
            <img src="images/badvibesmemes 1.png" />
            <div className="description">
              <p className="name">bad.vibes.memes</p>
              <p className="status">Segue você</p>
            </div>
          </div>
          <strong>Seguir</strong>
        </div>
        <div className="suggestion">
          <div className="user">
            <img src="images/chibirdart 1.png" />
            <div className="description">
              <p className="name">chibirdart</p>
              <p className="status">Segue você</p>
            </div>
          </div>
          <strong>Seguir</strong>
        </div>
        <div className="suggestion">
          <div className="user">
            <img src="images/razoesparaacreditar 1.png" />
            <div className="description">
              <p className="name">razoesparaacreditar</p>
              <p className="status">Novo no Instagram</p>
            </div>
          </div>
          <strong>Seguir</strong>
        </div>
        <div className="suggestion">
          <div className="user">
            <img src="images/adorableanimals 1.png" />
            <div className="description">
              <p className="name">adorable_animals</p>
              <p className="status">Segue você</p>
            </div>
          </div>
          <strong>Seguir</strong>
        </div>
        <div className="suggestion">
          <div className="user">
            <img src="images/smallcutecats 1.png" />
            <div className="description">
              <p className="name">smallcutecats</p>
              <p className="status">Segue você</p>
            </div>
          </div>
          <strong>Seguir</strong>
        </div>
      </div>
    </aside>
  );
}
