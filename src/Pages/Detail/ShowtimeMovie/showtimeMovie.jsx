import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./showtimeMovie.scss";

const ShowtimeMovie = (props) => {
  const cinemaByMovie = props;
  const [dateArr, setDate] = useState([]);

  const createDates = () => {
    let count = 10;
    let tmpArr = [];
    const today = new Date("2018-12-31");
    for (let i = 0; i < count; i++) {
      let tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + i + 1);
      tmpArr.push(tomorrow.toISOString().split("T")[0]);
      // dayName.push(showDay(tomorrow));
    }
    setDate(tmpArr);
    // setDay(dayName);
  };
  // const showDay = (day) => {
  //   // Lấy số thứ tự của ngày hiện tại
  //   let currentDay = day.getDay();
  //   // Biến lưu tên của thứ
  //   var dayName = "";

  //   // Lấy tên thứ của ngày hiện tại
  //   switch (currentDay) {
  //     case 0:
  //       dayName = "Chủ nhật";
  //       break;
  //     case 1:
  //       dayName = "Thứ 2";
  //       break;
  //     case 2:
  //       dayName = "Thứ 3";
  //       break;
  //     case 3:
  //       dayName = "Thứ 4";
  //       break;
  //     case 4:
  //       dayName = "Thứ 5";
  //       break;
  //     case 5:
  //       dayName = "Thứ 6";
  //       break;
  //     case 6:
  //       dayName = "Thứ 7";
  //   }
  //   return dayName;
  // };

  useEffect(() => {
    createDates();
  }, []);
  const getCinemaList = (cinemaByMovie) => {
    return cinemaByMovie.cinemaByMovie.heThongRapChieu?.map((item, index) => {
      return (
        <a
          key={index}
          className={`nav-link ${index === 0 ? "active" : ""}`}
          id={`nav-${item.maHeThongRap}-tab`}
          data-toggle="tab"
          href={`#nav-${item.maHeThongRap}`}
          role="tab"
          aria-controls={`nav-${item.maHeThongRap}`}
          aria-selected="true"
        >
          <img src={item.logo} alt="" width={50} height={50} />
          <p>{item.tenHeThongRap}</p>
        </a>
      );
    });
  };

  const showDate = (cumRapChieu) => {
    return dateArr.map((item, index) => {
      return (
        <div className="listTime">
          <p key={index}>{item}</p>
          {cumRapChieu.map((cumRap, indexCumRap) => {
            return (
              <div key={indexCumRap}>
                {cumRap.lichChieuPhim?.map((lstLichChieu, indexLichChieu) => {
                  if (lstLichChieu.ngayChieuGioChieu?.slice(0, 10) == item)
                    return (
                      <NavLink
                        to={`/checkout/${lstLichChieu.maLichChieu}`}
                        className="btn"
                        key={indexLichChieu}
                      >
                        {lstLichChieu.ngayChieuGioChieu?.slice(11, 16)}
                      </NavLink>
                    );
                })}
              </div>
            );
          })}
        </div>
      );
    });
  };

  return (
    <div className="showtimeMovie" id="cinema">
      <div className="d-flex">
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            {getCinemaList(cinemaByMovie)}
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          {cinemaByMovie.cinemaByMovie.heThongRapChieu?.map(
            (item, indexRap) => {
              return (
                <div
                  key={indexRap}
                  className={`tab-pane fade ${
                    indexRap === 0 ? "show active" : ""
                  }`}
                  id={`nav-${item.maHeThongRap}`}
                  role="tabpanel"
                  aria-labelledby={`nav-${item.maHeThongRap}-tab`}
                >
                  {showDate(item.cumRapChieu)}
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowtimeMovie;
