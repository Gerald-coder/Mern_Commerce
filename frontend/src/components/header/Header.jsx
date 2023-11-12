import styles from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/Fi";

export const Logo = (
  <div className={styles.logo}>
    <Link to="/">
      <h2>
        Gerry/<span>Mart</span>
      </h2>
    </Link>
  </div>
);

const cart = (
  <span className={styles.cart}>
    <Link to={"/cart"}>
      Cart
      <FiShoppingCart size={20} />
      <p>0</p>
    </Link>
  </span>
);

const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");

const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        {Logo}{" "}
        <nav>
          <ul>
            <li>
              <NavLink to="/shop" className={activeLink}>
                Store
              </NavLink>
            </li>
          </ul>
          <div className={styles["header-right"]}>
            <span className={styles.links}>
              <NavLink to={"login"} className={activeLink}>
                Login
              </NavLink>
              <NavLink to="/register" className={activeLink}>
                Register
              </NavLink>
              <NavLink to="/order-history" className={activeLink}>
                Order
              </NavLink>
            </span>
            {cart}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
