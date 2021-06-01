import {
  GET_MOVIE_LIST_REQUEST,
  GET_MOVIE_LIST_SUCCESS,
  GET_MOVIE_LIST_FAIL,
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
        movieList:{
          ...state.movieList,
          showing: action.payload.data
        }
      };
    }
    case GET_MOVIE_LIST_FAIL: {
      return { ...state, loading: false, error: action.payload.error };
    }
    default:
      return state;
  }
};

export default movieReducer;
