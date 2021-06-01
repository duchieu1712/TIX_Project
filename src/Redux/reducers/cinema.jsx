import {
  GET_CINEMA_LIST_REQUEST,
  GET_CINEMA_LIST_SUCCESS,
  GET_CINEMA_LIST_FAIL,
  GET_CINEMA_BY_MOVIE_REQUEST,
  GET_CINEMA_BY_MOVIE_SUCCESS,
  GET_CINEMA_BY_MOVIE_FAIL,
} from "../constants/cinema";

const initialState = {
  cinemaList: [],
  cinemaByMovie: {},
  loading: false,
  error: null,
};

const cinemaReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CINEMA_LIST_REQUEST: {
      return { ...state, loading: true };
    }
    case GET_CINEMA_LIST_SUCCESS: {
      return { ...state, loading: false, cinemaList: action.payload.data };
    }
    case GET_CINEMA_LIST_FAIL: {
      return { ...state, loading: false, error: action.payload.error };
    }
    case GET_CINEMA_BY_MOVIE_REQUEST: {
      return { ...state, loading: true };
    }
    case GET_CINEMA_BY_MOVIE_SUCCESS: {
      return { ...state, loading: false, cinemaByMovie: action.payload.data };
    }
    case GET_CINEMA_BY_MOVIE_FAIL: {
      return { ...state, loading: false, error: action.payload.error };
    }
    default:
      return state;
  }
};
export default cinemaReducer;
