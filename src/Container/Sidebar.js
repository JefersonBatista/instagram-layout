const loggedUser = {
  userName: "catanacomics",
  name: "Catana",
  image: "catanacomics 1.png",
};

const suggestions = [
  {
    userName: "bad.vibes.memes",
    image: "badvibesmemes 1.png",
    status: "Segue você",
  },
  {
    userName: "chibirdart",
    image: "chibirdart 1.png",
    status: "Segue você",
  },
  {
    userName: "razoesparaacreditar",
    image: "razoesparaacreditar 1.png",
    status: "Novo no Instagram",
  },
  {
    userName: "adorable_animals",
    image: "adorableanimals 1.png",
    status: "Segue você",
  },
  {
    userName: "smallcutecats",
    image: "smallcutecats 1.png",
    status: "Segue você",
  },
];

export default function Sidebar() {
  return (
    <aside className="side-bar">
      <LoggedUser
        userName={loggedUser.userName}
        name={loggedUser.name}
        image={loggedUser.image}
      />

      <div className="suggestions">
        <div className="suggestions-top">
          <p>Sugestões para você</p>
          <strong>Ver tudo</strong>
        </div>
        {suggestions.map((suggestion) => (
          <Suggestion
            userName={suggestion.userName}
            image={suggestion.image}
            status={suggestion.status}
          />
        ))}
      </div>

      <Links />
      <Copyright />
    </aside>
  );
}

function LoggedUser({ userName, name, image }) {
  return (
    <div className="logged-user">
      <img src={`images/${image}`} alt="Usuário logado." />
      <div className="user-name">
        <p>{userName}</p>
        <span>{name}</span>
      </div>
    </div>
  );
}

function Suggestion({ userName, image, status }) {
  return (
    <div className="suggestion">
      <div className="user">
        <img src={`images/${image}`} alt="Sugestão para seguir" />
        <div className="description">
          <p className="name">{userName}</p>
          <p className="status">{status}</p>
        </div>
      </div>
      <strong>Seguir</strong>
    </div>
  );
}

function Links() {
  return (
    <div class="links">
      <a href="#">Sobre</a> • <a href="#">Ajuda</a> •<a href="#">Imprensa</a> •{" "}
      <a href="#">API</a> •<a href="#">Carreiras</a> •{" "}
      <a href="#">Privacidade</a> •<a href="#">Termos</a> •{" "}
      <a href="#">Localizações</a> •<a href="#">Contas mais relevantes</a> •{" "}
      <a href="#">Hashtags</a> •<a href="#">Idioma</a>
    </div>
  );
}

function Copyright() {
  return <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>;
}
