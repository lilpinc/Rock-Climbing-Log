import { Link, useLocation } from 'react-router-dom';
import '/public/css/Header.css'
import Auth from '../../utils/auth'


// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
export default function Header() {
  const currentPage = useLocation().pathname;
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
    window.location.replace('/')
  };

  return (
    <>
      <header className="navbar">
        <h1 className="bold" id="company">
          <Link
            to="/" id="navigation"
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === '/' ? 'nav-link active text-white' : 'nav-link text-white'}
          >
            <img id="logo" src="/logo/logo.png" alt="logo" />
          </Link>
        </h1>
        {Auth.loggedIn() ? (

          <ul className="nav">
            <li className="nav-item">
              <Link
                to="/" id="navigation" onClick={logout}
                // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                className={currentPage === '/' ? 'nav-link active text-white' : 'nav-link text-white'}
              >
                Logout
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/MyTraining" id="navigation"
                // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === '/MyTraining' ? 'nav-link active text-white' : 'nav-link text-white'}
              >
                Training Log
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/MyClimbs" id="navigation"
                // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === '/MyClimbs' ? 'nav-link active text-white' : 'nav-link text-white'}
              >
                Climbing Log
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/" id="navigation"
                // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                className={currentPage === '/' ? 'nav-link active text-white' : 'nav-link text-white'}
              >
                Home
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="nav">
            <li className="nav-item">
              <Link id="navigation"
                to="/Signup"
                className={currentPage === '/' ? 'nav-link active text-white' : 'nav-link text-white'}
              >
                Sign-up
              </Link>
            </li>
            <li className="nav-item">
              <Link id="navigation"
                to="/Login"
                className={currentPage === '/' ? 'nav-link active text-white' : 'nav-link text-white'}
              >
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/" id="navigation"
                // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                className={currentPage === '/' ? 'nav-link active text-white' : 'nav-link text-white'}
              >
                Home
                </Link>
                </li>
          </ul>
        )}
      </header>
    </>
  );
}

