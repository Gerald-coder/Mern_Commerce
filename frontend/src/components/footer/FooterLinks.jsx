import "./FooterLinks.scss";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

/* eslint-disable */

export const Logo = (
  <div className="logo">
    <Link to="/">
      <h2>
        Gerry/<span>Mart</span>
      </h2>
    </Link>
  </div>
);

function NavLinks({ heading, one, two, three, four }) {
  return (
    <div className="footer-menu">
      <p className="link-heading">{heading}</p>
      <ul className="nav-ul footer-links">
        <li>
          <a href="">{one} </a>
        </li>
        <li>
          <a href="">{two}</a>
        </li>
        <li>
          <a href="">{three}</a>
        </li>
        <li>
          <a href="">{four}</a>
        </li>
      </ul>
    </div>
  );
}
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
          <NavLinks
            heading={"Feature"}
            one={"Link Shortening"}
            two={"Branded Links"}
            three={"Analytics"}
            four={"Blog"}
          />
          <NavLinks
            heading={"Resources"}
            one={"Blog"}
            two={"Developer"}
            three={"Support"}
            four={"Docs"}
          />
          <NavLinks
            heading={"Companies"}
            one={"About"}
            two={"Our Team"}
            three={"Carrier"}
            four={"Contact"}
          />
          <NavLinks
            heading={"Partners"}
            one={"About"}
            two={"Our Team"}
            three={"Carrier"}
            four={"Contact"}
          />
        </div>
      </section>
    </>
  );
}

export default FooterLinks;
