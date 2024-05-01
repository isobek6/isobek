import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">logo</h1>
      <nav className="nav">
        <a href="#">home</a>
        <a href="#">about</a>
        <a href="#">contact</a>
      </nav>
      <button>click</button>
    </header>
  );
};

export default Header;
