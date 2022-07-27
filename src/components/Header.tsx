import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light container-fluid">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page">
              Отгадать слово
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ChooseWord" className="nav-link active" aria-current="page">
              Загадать слово
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
