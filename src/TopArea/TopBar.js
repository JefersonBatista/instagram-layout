export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="logo">
        <div className="icon">
          <ion-icon name="logo-instagram"></ion-icon>
        </div>
        <img src={"./images/logo.png"} alt="Logo do Instagram" />
      </div>
      <input type="search" placeholder="Pesquisar" />
      <nav className="navigation">
        <ion-icon name="paper-plane-outline"></ion-icon>
        <ion-icon name="compass-outline"></ion-icon>
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="person-outline"></ion-icon>
      </nav>
    </div>
  );
}
