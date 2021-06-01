import {
  GET_THEATER_REQUEST,
  GET_THEATER_SUCCESS,
  GET_THEATER_FAIL,
  BOOKING_REQUEST,
  BOOKING_SUCCESS,
  BOOKING_FAIL,
} from "../constants/theater";

const initialState = {
  theater: {},
  seatList: [],
  loading: false,
  error: null,
};

const theaterReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_THEATER_REQUEST: {
      return { ...state, loading: true };
    }
    case GET_THEATER_SUCCESS: {
      return { ...state, loading: false, theater: action.payload.data };
    }
    case GET_THEATER_FAIL: {
      return { ...state, loading: false, error: action.payload.error };
    }
    case BOOKING_REQUEST: {
      return {...state, loading: true}
    }
    case BOOKING_SUCCESS: {
      const gheDaChon = action.payload.seatSelected;
      gheDaChon.map(seat => {
        const index = state.seatList.danhSachGhe.findIndex(seatCustom => seatCustom.maGhe === seat.maGhe)
        state.seatList.danhSachGhe[index].daDat = true;
      })
      return {
        ...state,
        loading: false
      }
    }
    case BOOKING_FAIL: {
      return{
        ...state,
        error: action.payload.error,
        loading: false
      }
    }

    default:
      return state;
  }
};

export default theaterReducer;
