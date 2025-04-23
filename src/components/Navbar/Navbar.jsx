import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={style["navbar-container"]}>
      <div className={style["navbar-content"]}>
        <Link to="/">Shop</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </div>
  );
};

export default Navbar;
