import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { ReactComponent as ClientIcon } from "../../../assets/SVG/user.svg";
import { UseGetCart } from "../../../hooks/useCartHook";
import { selectLoggedState } from "../../../pages/Auth/authSlice";
import { useAppSelector } from "../../../redux/app/hooks";
import { LINKS } from "../../../types";
import Cart from "./Cart";
import "./index.scss";

const Navigation = () => {
  const islogged = useAppSelector(selectLoggedState);
  const cartResults = UseGetCart();
  const { items } = cartResults;


  return (
    <>
      <div className="top">
        <div className="top__search-box">
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
          <Link to='/aboutus' className="nav__item">About us</Link>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
