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

const initialState = {
  movieList: {
    coming: [],
    showing: [],
  },
  loading: false,
  error: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_LIST_REQUEST: {
      return { ...state, loading: true };
    }
    case GET_MOVIE_LIST_SUCCESS: {
      if (action.payload.coming) {
        return {
          ...state,
          loading: false,
          movieList: {
            ...state.movieList,
            coming: action.payload.data,
          },
        };
      }
      return {
        ...state,
        loading: false,
        movieList: {
          ...state.movieList,
          showing: action.payload.data,
        },
      };
    }
    case GET_MOVIE_LIST_FAIL: {
      return { ...state, loading: false, error: action.payload.error };
    }
    case ADD_MOVIE_REQUEST: {
      return { ...state, loading: true };
    }
    case ADD_MOVIE_SUCCESS: {
      return { ...state, loading: false };
    }
    case ADD_MOVIE_FAIL: {
      return { ...state, loading: false, error: action.payload.error };
    }
    case UPDATE_MOVIE_REQUEST: {
      return { ...state, loading: true };
    }
    case UPDATE_MOVIE_SUCCESS: {
      return { ...state, loading: false };
    }
    case UPDATE_MOVIE_FAIL: {
      return { ...state, loading: false, error: action.payload.error };
    }
    case DELETE_MOVIE_REQUEST: {
      return { ...state, loading: true };
    }
    case DELETE_MOVIE_SUCCESS: {
      return { ...state, loading: false };
    }
    case DELETE_MOVIE_FAIL: {
      return { ...state, loading: false, error: action.payload.error };
    }
    default:
      return state;
  }
};

export default movieReducer;
