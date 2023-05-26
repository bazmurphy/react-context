import Link from "next/link";

const Header = () => {
  return (
    <header className="header-container">
      <Link href="/" className="header-logo-link">
        <h2 className="header-logo-title">Baz React Context & Reducer</h2>
      </Link>
      <nav className="header-nav-container">
        <ul>
          <li>
            <Link href="/01-use-state">1. useState</Link>
          </li>
          <li>
            <Link href="/02-context-use-state">2. useContext & useState</Link>
          </li>
          <li>
            <Link href="/03-context-use-reducer">
              3. useContext & useReducer
            </Link>
          </li>
          <li>
            <Link href="/04-use-state-done-right">4. useState done right</Link>
          </li>
          <li>
            <Link href="/05-context-customhooks">
              5. useContext & customHooks
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
