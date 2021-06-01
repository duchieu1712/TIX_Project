import React from "react";
import "./application.scss";
import Slider from "react-slick";
import slide1 from "../../../Assets/img/slide1.jpg";
import slide2 from "../../../Assets/img/slide2.jpg";
import slide3 from "../../../Assets/img/slide3.jpg";
import slide4 from "../../../Assets/img/slide4.jpg";
import slide5 from "../../../Assets/img/slide5.jpg";
import slide9 from "../../../Assets/img/slide9.jpg";

const Application = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="backGround" id="application">
      <div className="maxWidth">
        <div className="row">
          <div className="col-6 text">
            <h4>Ứng dụng tiện lợi dành cho</h4>
            <h4>người yêu điện ảnh</h4>
            <p>
              Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
              đổi quà hấp dẫn.
            </p>
            <button className="btn">
              <a href="https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197">
                App miễn phí - Tải về ngay
              </a>{" "}
            </button>
            <p>
              Tix có hai phiên bản{" "}
              <span>
                <a href="https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197">
                  iOS
                </a>
              </span>{" "}
              &{" "}
              <span>
                <a href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123">
                  Android
                </a>
              </span>
            </p>
          </div>
          <div className="col-6 app">
            <div className="mobile">
              <Slider {...settings}>
                <div>
                  <img src={slide1} alt="" />
                </div>
                <div>
                  <img src={slide2} alt="" />
                </div>
                <div>
                  <img src={slide3} alt="" />
                </div>
                <div>
                  <img src={slide4} alt="" />
                </div>
                <div>
                  <img src={slide5} alt="" />
                </div>
                <div>
                  <img src={slide9} alt="" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
