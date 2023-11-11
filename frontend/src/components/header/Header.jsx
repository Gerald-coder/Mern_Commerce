import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

export const Logo = (
  <div className={styles.logo}>
    <Link to="/">
      <h2>
        Gerry/<span>Mart</span>
      </h2>
    </Link>
  </div>
);

const Header = () => {
  return (
    <header>
      <div className={styles.header}>{Logo}</div>
    </header>
  );
};

export default Header;
