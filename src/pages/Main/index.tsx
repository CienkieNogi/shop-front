import React from "react";
import "./index.scss";
import { ReactComponent as Star } from "../../assets/SVG/star.svg";
const Main = () => {
  return (
    <div>
      <div className="main">
        <div className="hero">
          <div className="hero__bg"></div>
        </div>
        <div className="collection">
          <div className="collection__container">
            <div className="collection__item item--1"></div>
            <div className="collection__item item--2"></div>
            <div className="collection__item item--3"></div>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              perferendis harum vitae excepturi repellendus iste beatae modi.
              Ex, quo quisquam!
            </p>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              perferendis harum vitae excepturi repellendus iste beatae modi.
              Ex, quo quisquam!
            </p>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              perferendis harum vitae excepturi repellendus iste beatae modi.
              Ex, quo quisquam!
            </p>
          </div>
        </div>
        <footer className="footer">

        </footer>
      </div>
    </div>
  );
};

export default Main;
