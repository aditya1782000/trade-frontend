import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";

function Navigation() {
  return (
    <header className={classes.header}>
      <nav className={classes.navbar}>
        <ul className={classes.list}>
          <li>
            <Link
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Niner Traders
            </Link>
          </li>
          <li>
            <Link
              to="/user/login"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              LogIn
            </Link>
          </li>
          <li>
            <Link
              to="/user/Signup"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Signup
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Start Trading
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Trades
            </Link>
          </li>
          <li>
            <Link
              to="/user/profile"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
