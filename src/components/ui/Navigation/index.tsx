import React from "react";
import { ReactComponent as ClientIcon } from "../../../assets/SVG/user.svg";
import { ReactComponent as SearchIcon } from "../../../assets/SVG/magnifying-glass.svg";
import { ReactComponent as CartIcon } from "../../../assets/SVG/shopping-cart.svg";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import "./index.scss";

const Navigation = () => {
  enum LINKS{
    LOGIN ='account/login',
    PROFILE = 'profile'
  }
  return (
    <>
      <div className="top">
        <div className="top__search-box">
          <input
            type="text"
            className="top__search-box--input"
            placeholder="Search"
          />
          <div className="top__search-box--icon --center-flex">
            <SearchIcon />
          </div>
        </div>
        <img src={logo} alt="" className="top__logo" />
        <div className="top__user-box">
          <div className="top__user-box--profile --center-flex">
            <CartIcon />
          </div>
          <Link to={"/account/login"} className="top__user-box--cart --center-flex">
            <ClientIcon />
          </Link>
        </div>
      </div>
      <nav className="nav">
        <ul className="nav__container">
          <li className="nav__item">Category1</li>
          <li className="nav__item">Category2</li>
          <li className="nav__item">Category3</li>
          <li className="nav__item">Category4</li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
