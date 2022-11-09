import React from "react";
import { ReactComponent as ClientIcon } from "../../../assets/SVG/user.svg";
import { ReactComponent as SearchIcon } from "../../../assets/SVG/magnifying-glass.svg";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import "./index.scss";
import { useAppSelector } from "../../../redux/app/hooks";
import { selectLoggedState } from "../../../pages/Auth/authSlice";
import Cart from "./Cart";
import { UseGetCart } from "../../../hooks/useCartHook";

const Navigation = () => {
  const islogged = useAppSelector(selectLoggedState);
  const cartResults = UseGetCart();
  const { items } = cartResults;

  enum LINKS {
    LOGIN = "account/login",
    PROFILE = "profile",
    CART = "cart",
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
        <Link to="/">
          <img src={logo} alt="" className="top__logo" />
        </Link>
        <div className="top__user-box">
          <Link to={islogged ? LINKS.CART : LINKS.LOGIN}>
            <Cart amountOfItems={items} />
          </Link>
          <Link to={islogged ? LINKS.PROFILE : LINKS.LOGIN}>
            <div className="top__user-box--cart --center-flex">
              <ClientIcon />
            </div>
          </Link>
        </div>
      </div>
      <nav className="nav">
        <ul className="nav__container">
          <Link to="/shop" className="nav__item">
            Shop
          </Link>
          <li className="nav__item">Category2</li>
          <li className="nav__item">Category3</li>
          <li className="nav__item">Category4</li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
