import "./FooterLinks.scss";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Logo = (
  <div className="logo">
    <Link to="/">
      <h2>
        Gerry/<span>Mart</span>
      </h2>
    </Link>
  </div>
);
function FooterLinks() {
  return (
    <>
      <section className="contact-section">
        <div className="container contact">
          <div className="contact-icon">
            <FaFacebook className="i" />
            <FaTwitter className="i" />
            <FaInstagram className="i" />
            <FaYoutube className="i" />
          </div>
          <h2>let&apos;s Talk</h2>
          <a href="#home" className="btn">
            Know More
          </a>
        </div>
      </section>
      <section className="footer-section">
        <div className="container footer">
          <div className="footer-logo">{Logo}</div>
        </div>
      </section>
    </>
  );
}

export default FooterLinks;
