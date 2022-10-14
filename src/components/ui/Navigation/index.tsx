import React from "react";
import { ReactComponent as ClientIcon } from "../../../assets/SVG/user.svg";
import { ReactComponent as SearchIcon } from "../../../assets/SVG/magnifying-glass.svg";
import { ReactComponent as CartIcon } from "../../../assets/SVG/shopping-cart.svg";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import "./index.scss";
import { useAppSelector } from "../../../redux/app/hooks";
import { selectLoggedState } from "../../../pages/Auth/authSlice";

const Navigation = () => {
  const islogged=useAppSelector(selectLoggedState)
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
        <Link to='/' >

        <img src={logo} alt="" className="top__logo" />
        </Link>
        <div className="top__user-box">
          <div className="top__user-box--profile --center-flex">
            <CartIcon />
          </div>
          <Link  to={islogged?LINKS.PROFILE:LINKS.LOGIN} className="top__user-box--cart --center-flex">
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
