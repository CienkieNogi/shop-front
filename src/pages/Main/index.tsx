import { ReactComponent as Star } from "../../assets/SVG/star.svg";
import Footer from "./Footer";
import "./index.scss";
import MainSection from "./MainSection";

const Main = () => {
  return (
    <div>
      <div className="main">
        <div className="hero">
          <div className="hero__bg"></div>
        </div>
        <div className="collection">
          <div className="collection__container">
            <MainSection
              mainTitle="Tender Steaks"
              sectionClassNumber="item--1"
              category="Beef"
            />
            <MainSection
              mainTitle="Fresh Pork"
              sectionClassNumber="item--2"
              category="Pork"
            />
            <MainSection
              mainTitle="Local Chicken"
              sectionClassNumber="item--3"
              category="Poultry"
            />
          </div>
        </div>
        <div className="reviews">
          <div className="reviews__single">
            <div className="reviews__star">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <p>
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              perferendis harum vitae excepturi repellendus iste beatae modi.
              Ex, quo quisquam! "
            </p>
            <p className="reviews__author">Jim L</p>
          </div>
          <div className="reviews__single">
            <div className="reviews__star">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <p>
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              perferendis harum vitae excepturi repellendus iste beatae modi.
              Ex, quo quisquam! "
            </p>
            <p className="reviews__author">Dorothy W.</p>
          </div>
          <div className="reviews__single">
            <div className="reviews__star">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <p>
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              perferendis harum vitae excepturi repellendus iste beatae modi.
              Ex, quo quisquam! "
            </p>
            <p className="reviews__author">Arthur K.</p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
