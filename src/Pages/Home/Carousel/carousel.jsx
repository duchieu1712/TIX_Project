import React, { useState } from "react";
import { carouselData } from "../../../Redux/constants/movie";
import "./carousel.scss";
import PopupTrailer from "../../../Components/Home/popupTrailer/popupTrailer";

const Carousel = () => {
  const [trailer,setTrailer] = useState("");
  const [open,setOpen] = useState(false);
  const handleTrailer = (trailer) => {
    setTrailer(trailer)
    setOpen(!open)
  }
  const handleClose = (close) => {
    setOpen(close)
  }
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        {carouselData.map((item, index) => {
          return (
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to={index}
              className={`${index === 0 ? "active" : ""}`}
            />
          );
        })}
      </ol>
      <div className="carousel-inner">
        {carouselData.map((itemInner, indexInner) => {
          return (
            <div
              className={`carousel-item ${indexInner === 0 ? "active" : ""}`}
            >
              <img
                src={itemInner.hinhAnh}
                className="d-block w-100"
                alt="..."
              />
              <button
                type="button"
                className="play-btn"
                onClick={() => handleTrailer(itemInner.trailer)}
              >
                <img src="img/play-video.png" alt="" />
              </button>
              <PopupTrailer trailer={trailer} open={open} onHandleClose={handleClose}/>
            </div>
          );
        })}
      </div>

      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="control">
          <img className="left" src="img/back-session.png" alt="" />
        </span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="control">
          <img className="right" src="img/next-session.png" alt="" />
        </span>
      </a>
    </div>
  );
};

export default Carousel;
