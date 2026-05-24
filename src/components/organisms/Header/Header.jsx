import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <i className="fa-solid fa-bars"></i>
        <h1 className="header__title">Cinemateca</h1>
      </div>
      <i className="fa-solid fa-magnifying-glass"></i>
    </header>
  );
}

export default Header;