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
import axios from "../../Utils/axiosClient";

export const userSignUp = (values) => {
  return (dispatch) => {
    dispatch({
      type: SIGNUP_REQUEST,
    });
    axios
      .post("QuanLyNguoiDung/DangKy", values)
      .then((result) => {
        dispatch({
          type: SIGNUP_SUCCESS,
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: SIGNUP_FAIL,
          payload: { error: error.response.data },
        });
      });
  };
};

export const userLogin = (values) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN_REQUEST,
    });
    axios
      .post("QuanLyNguoiDung/DangNhap", values)
      .then((result) => {
        // Lưu thông tin user xuống localStorage
        localStorage.setItem("user", JSON.stringify(result.data));
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: LOGIN_FAIL,
          payload: { error: error.response.data },
        });
      });
  };
};

export const getUserList = () => {
  return (dispatch) => {
    dispatch({ type: GET_USER_LIST_REQUEST });
    axios
      .get("QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01")
      .then((result) => {
        dispatch({
          type: GET_USER_LIST_SUCCESS,
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_USER_LIST_FAIL,
          payload: { error: error.response.data },
        });
      });
  };
};

export const addUser = (values) => {
  return (dispatch) => {
    dispatch({ type: ADD_USER_REQUEST });
    axios
      .post("QuanLyNguoiDung/ThemNguoiDung", values)
      .then((result) => {
        dispatch({
          type: ADD_USER_SUCCESS,
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: ADD_USER_FAIL,
          payload: { error: error.response.data },
        });
      });
  };
};

export const updateUser = (user) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_USER_REQUEST });
    axios
      .put("QuanLyNguoiDung/CapNhatThongTinNguoiDung", user)
      .then((result) => {
        dispatch({
          type: UPDATE_USER_SUCCESS,
          payload: { data: result.data, userSelect: user },
        });
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_USER_FAIL,
          payload: { error: error.response.data },
        });
      });
  };
};

export const deleteUser = (taiKhoan) => {
  return (dispatch) => {
    dispatch({ type: DELETE_USER_REQUEST });
    axios
      .delete(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`)
      .then((result) => {
        dispatch({
          type: DELETE_USER_SUCCESS,
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: DELETE_USER_FAIL,
          payload: { error: error.response.data },
        });
      });
  };
};
