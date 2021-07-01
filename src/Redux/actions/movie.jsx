import {
  GET_MOVIE_LIST_REQUEST,
  GET_MOVIE_LIST_SUCCESS,
  GET_MOVIE_LIST_FAIL,
  DELETE_MOVIE_REQUEST,
  DELETE_MOVIE_SUCCESS,
  DELETE_MOVIE_FAIL,
  UPDATE_MOVIE_REQUEST,
  UPDATE_MOVIE_SUCCESS,
  UPDATE_MOVIE_FAIL,
  ADD_MOVIE_REQUEST,
  ADD_MOVIE_SUCCESS,
  ADD_MOVIE_FAIL,
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

export const addMovie = (movie) => {
  // Có hinhAnh là file nên phải chuyển formData
  const formData = new FormData();
  for (const key in movie) {
    formData.append(key, movie[key]);
  }
  return (dispatch) => {
    dispatch({
      type: ADD_MOVIE_REQUEST,
    });
    axios
      .post("QuanLyPhim/ThemPhimUploadHinh", formData)
      .then((result) => {
        dispatch({
          type: ADD_MOVIE_SUCCESS,
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: ADD_MOVIE_FAIL,
          payload: { error: error.response.data },
        });
      });
  };
};
export const updateMovie = (movie) => {
  const formData = new FormData();
  for(const key in movie){
    formData.append(key, movie[key])
  }
  return (dispatch) => {
    dispatch({type: UPDATE_MOVIE_REQUEST})
    axios
      .post("QuanLyPhim/CapNhatPhimUpload", formData)
      .then(result => {
        dispatch({
          type: UPDATE_MOVIE_SUCCESS,
          payload: {data: result.data}
        })
      })
      .catch(error => {
        dispatch({
          type: UPDATE_MOVIE_FAIL,
          payload: {error: error.response.data}
        })
      })
  }
}



export const deleteMovie = (movieId) => {
  return (dispatch) => {
    dispatch({ type: DELETE_MOVIE_REQUEST });
    axios
      .delete(`QuanLyPhim/XoaPhim?MaPhim=${movieId}`)
      .then((result) => {
        dispatch({
          type: DELETE_MOVIE_SUCCESS,
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: DELETE_MOVIE_FAIL,
          payload: { error: error.response.data },
        });
      });
  };
};
