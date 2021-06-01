import {
  GET_MOVIE_LIST_REQUEST,
  GET_MOVIE_LIST_SUCCESS,
  GET_MOVIE_LIST_FAIL,
} from "../constants/movie";
// import axios from 'axios'
// import axios from "/VSCode/ReactJS_Movie/movie-project/src/Utils/axiosClient";
import axios from "../../Utils/axiosClient";
export const getMovieList = (showingOrComing) => {
  let url = "QuanLyPhim/LayDanhSachPhim?maNhom=GP02";
  let coming = false;
  if (showingOrComing) {
    coming = true;
    url = "QuanLyPhim/LayDanhSachPhim?maNhom=GP01";
  }

  return (dispatch) => {
    dispatch({ type: GET_MOVIE_LIST_REQUEST });
    axios
      .get(url)
      .then((result) => {
        dispatch({
          type: GET_MOVIE_LIST_SUCCESS,
          payload: {
            data: result.data,
            coming,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_MOVIE_LIST_FAIL,
          payload: { error: error.response.data },
        });
      });
  };
};

