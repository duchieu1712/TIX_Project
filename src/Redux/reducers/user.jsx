import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  GET_USER_LIST_REQUEST,
  GET_USER_LIST_SUCCESS,
  GET_USER_LIST_FAIL,
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_FAIL,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
} from "../constants/user";

// Lấy dữ liệu từ localStorage để đem vào reduxStore
const currentUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const inititalState = {
  currentUser: currentUser,
  userList: [],
  loading: false,
  error: null,
};

const userReducer = (state = inititalState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST: {
      return { ...state, loading: true, error: null };
    }
    case SIGNUP_SUCCESS: {
      return { ...state, loading: false };
    }
    case SIGNUP_FAIL: {
      return { ...state, loading: false, error: action.payload.error };
    }
    case LOGIN_REQUEST: {
      return { ...state, loading: true, error: null };
    }
    case LOGIN_SUCCESS: {
      return { ...state, currentUser: action.payload.data, loading: false };
    }
    case LOGIN_FAIL: {
      return { ...state, loading: false, error: action.payload.error };
    }
    case GET_USER_LIST_REQUEST: {
      return { ...state, loading: true, error: null };
    }
    case GET_USER_LIST_SUCCESS: {
      return {
        ...state,
        userList: action.payload.data,
        loading: false,
      };
    }
    case GET_USER_LIST_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }
    case ADD_USER_REQUEST: {
      return { ...state, loading: true, error: null };
    }
    case ADD_USER_SUCCESS: {
      return { ...state, loading: false };
    }
    case ADD_USER_FAIL: {
      return { ...state, loading: false, error: action.payload.error };
    }
    case UPDATE_USER_REQUEST: {
      return { ...state, loading: true, error: null };
    }
    case UPDATE_USER_SUCCESS: {
      const userUpdate = action.payload.userSelect;
      const index = state.userList.findIndex(
        (user) => user.taiKhoan === userUpdate.taiKhoan
      );
      state.userList[index] = userUpdate;
      return { ...state, loading: false };
    }
    case UPDATE_USER_FAIL: {
      return { ...state, loading: false, error: action.payload.error };
    }
    case DELETE_USER_REQUEST: {
      return { ...state, loading: true, error: null };
    }
    case DELETE_USER_SUCCESS: {
      return { ...state, loading: false };
    }
    case DELETE_USER_FAIL: {
      return { ...state, loading: false, error: action.payload.error };
    }
    default:
      return state;
  }
};

export default userReducer;
