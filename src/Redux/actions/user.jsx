import {
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL
    
} from '../constants/user';
import axios from '../../Utils/axiosClient'

export const userSignUp = (values) => {
    return (dispatch) => {
        dispatch({
            type: SIGNUP_REQUEST
        })
        axios 
            .post(
                "QuanLyNguoiDung/DangKy",values
            )
            .then(result => {
                dispatch({
                    type: SIGNUP_SUCCESS,
                    payload: {data: result.data}
                })
            })
            .catch(error => {
                dispatch({
                    type: SIGNUP_FAIL,
                    payload: {error: error.response.data}
                })
            })

    }
}

export const userLogin = (values) => {
    return (dispatch) => {
        dispatch({
            type: LOGIN_REQUEST
        })
        axios 
            .post(
                "QuanLyNguoiDung/DangNhap",values
            )
            .then(result => {
                // Lưu thông tin user xuống localStorage
                localStorage.setItem('user',JSON.stringify(result.data));
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: {data: result.data}
                })
            })
            .catch(error => {
                dispatch({
                    type: LOGIN_FAIL,
                    payload: {error: error.response.data}
                })
            })

    }
}


