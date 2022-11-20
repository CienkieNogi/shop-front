import React from "react";
import "./index.scss";
import { ReactComponent as PhoneIcon } from "../../assets/SVG/phone.svg";
import { ReactComponent as EmailIcon } from "../../assets/SVG/mail.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__info">
        <p className="footer__title">Contact Us</p>
        <div className="footer__info--section">
          <PhoneIcon />
          <p>+48500349876</p>
        </div>
        <div className="footer__info--section">
          <EmailIcon />
          <p>Email</p>
        </div>
      </div>
      <div className="footer__menu">
        <p className="footer__title">Other</p>
        <div className="footer__info--section">
          <Link to='/profile'>My account</Link>
        </div>
        <div className="footer__info--section">
          <Link to='/shop'>Shop</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
