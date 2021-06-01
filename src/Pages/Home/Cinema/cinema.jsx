import React, { useEffect, useState, Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getCinemaList } from "../../../Redux/actions/cinema";
import "./cinema.scss";
// import CinemaSys from "./CinemaSys.jsx/CinemaSys";

const CinemaList = () => {
  const { cinemaList } = useSelector((state) => state.cinemaReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCinemaList());
  }, []);

  const getRap = (cinemaList) => {
    return cinemaList.map((item, index) => {
      // mình tự gắn key thêm
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
          <img src={item.logo} alt="" width={50} />
        </a>
      );
    });
  };

  const getCumRap = (lstCumRap) => {
    return (
      <div className="d-flex">
        <nav>
          <div className="nav nav-tabs listRap" id="nav-tab" role="tablist">
            {lstCumRap.map((cumRap, index) => {
              // chỗ active này copy paste code trên nên mình tự check lại
              return (
                <a
                  className={`nav-link infoRap ${index === 0 ? "active" : ""}`}
                  id={`nav-${cumRap.maCumRap}-tab`}
                  data-toggle="tab"
                  href={`#nav-${cumRap.maCumRap}`}
                  role="tab"
                  aria-controls={`nav-${cumRap.maCumRap}`}
                  aria-selected="true"
                >
                  {cumRap.tenCumRap}
                  <p>{cumRap.diaChi}</p>
                </a>
              );
            })}
          </div>
        </nav>
        <div className="tab-content showTimeList" id="nav-tabContent">
          {lstCumRap.map((cumRap, indexRap) => {
            return (
              <div
                className={`tab-pane fade ${
                  indexRap === 0 ? "show active" : ""
                }`}
                id={`nav-${cumRap.maCumRap}`}
                role="tabpanel"
                aria-labelledby={`nav-${cumRap.maCumRap}-tab`}
              >
                {getLichChieu(cumRap.danhSachPhim)}
              </div>
            );
          })}
        </div>
      </div>
    );

    // return lstCumRap.map((cumRap, index) => {
    //   return (
    //     <p>{cumRap.tenCumRap}</p>
    //   )
    // })
  };

  const getLichChieu = (danhSachPhim) => {
    return danhSachPhim.map((item) => {
      let timeMovie = Math.floor(Math.random() * 100) + 80;
      let rateMovie = Math.floor(Math.random() * 5) + 5;
      return (
        <div className="showTimeItem">
          <div className="movieInfo">
            <img src={item.hinhAnh} alt="" />
            <div className="movieText">
              <h6 className="movieName">{item.tenPhim}</h6>
              <p className="timeRate">
                {timeMovie} phút - TIX {rateMovie}.0 - IMDb
              </p>
            </div>
          </div>

          <div className="movieTime">
            <h5>2D Digital</h5>
            {item.lstLichChieuTheoPhim.map((lichChieu, idxLichChieu) => {
              const string = lichChieu.ngayChieuGioChieu;
              const substring = "2019-01-01";
              if (string.includes(substring)) {
                return (
                  <NavLink to={`/checkout/${lichChieu.maLichChieu}`} className="btn" key={idxLichChieu}>
                    {lichChieu.ngayChieuGioChieu.slice(11, 16)}
                  </NavLink>
                );
              }
            })}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="cinemaList" id="cinema">
      <div className="d-flex">
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            {getRap(cinemaList)}
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          {cinemaList.map((item, indexRap) => {
            return (
              <div
                className={`tab-pane fade ${
                  indexRap === 0 ? "show active" : ""
                }`}
                id={`nav-${item.maHeThongRap}`}
                role="tabpanel"
                aria-labelledby={`nav-${item.maHeThongRap}-tab`}
              >
                {getCumRap(item.lstCumRap)}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CinemaList;
