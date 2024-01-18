import { Link } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">LOGO</div>
        <ul className={classes.link}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/addItem">Add Item</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
