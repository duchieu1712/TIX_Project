import {
  GET_CINEMA_LIST_REQUEST,
  GET_CINEMA_LIST_SUCCESS,
  GET_CINEMA_LIST_FAIL,
  GET_CINEMA_BY_MOVIE_REQUEST,
  GET_CINEMA_BY_MOVIE_SUCCESS,
  GET_CINEMA_BY_MOVIE_FAIL,
} from "../constants/cinema";

// import axios from "/VSCode/ReactJS_Movie/movie-project/src/Utils/axiosClient";
import axios from "../../Utils/axiosClient";
export const getCinemaList = () => {
  return (dispatch) => {
    dispatch({ type: GET_CINEMA_LIST_REQUEST });
    axios
      .get("QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP02")
      .then((result) => {
        dispatch({
          type: GET_CINEMA_LIST_SUCCESS,
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_CINEMA_LIST_FAIL,
          payload: { error: error.response.data },
        });
      });
  };
};

export const getCinemaByMovie = (movieId) => {
  return (dispatch) => {
    dispatch({type: GET_CINEMA_BY_MOVIE_REQUEST});
    axios
      .get(`/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`)
      .then(result => {
        dispatch({
          type: GET_CINEMA_BY_MOVIE_SUCCESS,
          payload: {data: result.data}
        })
      })
      .catch(error => {
        dispatch({
          type: GET_CINEMA_BY_MOVIE_FAIL,
          payload: {error: error.response.data}
        })
      })
  }
}
