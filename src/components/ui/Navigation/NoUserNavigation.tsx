import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { ReactComponent as ClientIcon } from "../../../assets/SVG/user.svg";
import Cart from "./Cart";
import "./index.scss";

const NoUserNavigation = () => {
  enum LINKS {
    LOGIN = "account/login",
    PROFILE = "profile",
    CART = "cart",
  }
  return (
    <>
      <div className="top">
        <div className="top__search-box">
        </div>
        <Link to="/">
          <img src={logo} alt="" className="top__logo" />
        </Link>
        <div className="top__user-box">
          <Link to={LINKS.LOGIN}>
            <Cart amountOfItems={0} />
          </Link>
          <Link to={ LINKS.LOGIN}>
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
          <Link to='/aboutus' className="nav__item">About us</Link>
        </ul>
      </nav>
    </>
  )
}

export default NoUserNavigation
