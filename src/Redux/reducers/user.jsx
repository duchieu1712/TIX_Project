import {
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from '../constants/user';

// Lấy dữ liệu từ localStorage để đem vào reduxStore
const currentUser = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    :null;

const inititalState = {
    currentUser: currentUser,
    loading: false,
    error: null
}

const userReducer = (state = inititalState, action) => {
    switch (action.type) {
        case SIGNUP_REQUEST: {
            return { ...state, loading: true, error: null };
        }
        case SIGNUP_SUCCESS: {
            return { ...state, loading: false }
        }
        case SIGNUP_FAIL: {
            return { ...state, loading: false, error: action.payload.error }
        }
        case LOGIN_REQUEST: {
            return { ...state, loading: true, error: null };
        }
        case LOGIN_SUCCESS: {
            return { ...state,currentUser:action.payload.data, loading: false }
        }
        case LOGIN_FAIL: {
            return { ...state, loading: false, error: action.payload.error }
        }
        default:
            return state;
    }
}

export default userReducer;
