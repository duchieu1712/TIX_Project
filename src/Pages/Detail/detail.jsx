import Button from "@material-ui/core/Button";
import React, { useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Rating from "@material-ui/lab/Rating";
import { useSelector, useDispatch } from "react-redux";
import "./detail.scss";
import ShowtimeMovie from "./ShowtimeMovie/showtimeMovie";
import InfoMovie from "./InfoMovie/infoMovie";
import ReviewMovie from "./ReviewMovie/reviewMovie";
import backapp from '../../Assets/img/backapp.jpg';
import playVideo from '../../Assets/img/play-video.png';
import close from '../../Assets/img/close.png';
import { getCinemaByMovie } from "../../Redux/actions/cinema";
import LoadingPage from "../../Components/LoadingPage/LoadingPage";
// import LoadingPage from "../../Components/LoadingPage/LoadingPage";

const Detail = (props) => {
  const {cinemaByMovie} = useSelector(state => state.cinemaReducer)
  const dispatch = useDispatch();
  useEffect (() => {
    dispatch(getCinemaByMovie(props.match.params.movieId));
  },[])
  useEffect (() => {
    document.title = `CHI TIẾT - ${cinemaByMovie.tenPhim}`
  },[cinemaByMovie.tenPhim])

  let timeMovie = Math.floor(Math.random() * 100) + 80;
  let rateMovie = Math.floor(Math.random() * 5) + 5;
  return (
    <div className="movieDetail">
      <img className="backGroundBlur" src={backapp} alt="" />
      <div className="introDetail row">
        <div className="col-3">
          <a
            className="play-btn"
            data-toggle="modal"
            data-target="#exampleModal3"
          >
            <img src={playVideo} alt />
          </a>
          <div
            className="modal fade"
            id="exampleModal3"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  {/* <h5 className="modal-title" id="exampleModalLabel">Modal title</h5> */}
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">
                      <img src={close} alt="" />
                    </span>
                  </button>
                </div>
                <div className="modal-body">
                  <iframe
                    width="898"
                    height="530"
                    src={cinemaByMovie.trailer}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <img className="introImg" src={cinemaByMovie.hinhAnh} alt="" />
        </div>
        <div className="col-6">
          <div className="introContent">
            <p>{cinemaByMovie.ngayKhoiChieu?.slice(0,10)}</p>
            <h4>{cinemaByMovie.tenPhim}</h4>
            <p className="timeRate">
                {timeMovie} phút - TIX {rateMovie}.0 - IMDb
            </p>
            <Button variant="contained" color="secondary" size="large">
              MUA VÉ
            </Button>
          </div>
        </div>
        <div className="col-3">
          <div className="introRate">
            <p>{cinemaByMovie.danhGia}</p>
            <CircularProgress
              className="circleProgress"
              variant="determinate"
              value={cinemaByMovie.danhGia * 10}
            />
            <Rating
              name="size-medium"
              value={cinemaByMovie.danhGia / 2}
              precision={0.5}
            />
          </div>
        </div>
      </div>

      <div className="detailContent">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <a
              className="nav-link active"
              id="home-tab"
              data-toggle="tab"
              href="#showtimeDetail"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Lịch Chiếu
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="profile-tab"
              data-toggle="tab"
              href="#infoDetail"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Thông Tin
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="profile-tab"
              data-toggle="tab"
              href="#reviewDetail"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Đánh Giá
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="showtimeDetail"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <ShowtimeMovie cinemaByMovie={cinemaByMovie}/>
          </div>
          <div
            className="tab-pane fade"
            id="infoDetail"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <InfoMovie descrip={cinemaByMovie.moTa} />
          </div>
          <div
            className="tab-pane fade"
            id="reviewDetail"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <ReviewMovie />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
