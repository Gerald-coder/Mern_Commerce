import { useState } from "react";
import styles from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/Fi";
import { RiMenu5Fill } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";

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
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleBar = () => {
    setToggleMenu(!toggleMenu);
    console.log(toggleMenu);
  };
  const hideToggle = () => {
    setToggleMenu(false);
  };

  return (
    <header>
      <div className={styles.header}>
        {Logo}{" "}
        <nav
          className={
            toggleMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`
          }
        >
          <div
            className={
              toggleMenu
                ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`
                : `${styles["nav-wrapper"]}`
            }
            onClick={hideToggle}
          ></div>
          <ul>
            <li className={styles["logo-mobile"]}>
              {Logo}
              <FaTimes size={20} color="white" onClick={hideToggle} />
            </li>
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
        <div className={styles["menu-icon"]}>
          {cart}
          <RiMenu5Fill size={25} onClick={toggleBar} />
        </div>
      </div>
    </header>
  );
};

export default Header;
