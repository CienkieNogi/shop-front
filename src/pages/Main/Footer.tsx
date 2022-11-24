import React from "react";
import "./index.scss";
import { ReactComponent as PhoneIcon } from "../../assets/SVG/phone.svg";
import { ReactComponent as EmailIcon } from "../../assets/SVG/mail.svg";
import { ReactComponent as ShopIcon } from "../../assets/SVG/shop.svg";
import { ReactComponent as ProfileIcon } from "../../assets/SVG/user.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__info">
        <p className="footer__title">Contact Us</p>
        <div className="footer__info--section">
          <PhoneIcon />
          <a href='tel:+48100100100'>+48100100100</a>
        </div>
        <div className="footer__info--section">
          <EmailIcon />
          <a href='mailto:someone@example.com?body=My custom body&&subject=test'>Email</a>
        </div>
      </div>
      <div className="footer__menu">
        <p className="footer__title">Other</p>
        <div className="footer__info--section">
          <ProfileIcon/>
          <Link to='/profile'>My account</Link>
        </div>
        <div className="footer__info--section">
          <ShopIcon/>
          <Link to='/shop'>Shop</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
