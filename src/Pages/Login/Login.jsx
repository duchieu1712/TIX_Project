import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { Form, Formik, Field } from 'formik';
import { userLogin } from '../../Redux/actions/user';
import './Login.scss';
const Login = () => {
    const { currentUser, loading, error } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    const _handleSubmit = values => {
        console.log(values);
        dispatch(userLogin(values));
    }
    useEffect (() => {
        document.title = "TIX - ĐĂNG KÝ/ĐĂNG NHẬP"
    },[])
    // Nếu currentUser có data => đã đăng nhập => redirect qua trang home
    if (currentUser) {
        return <Redirect to='/' />
    }
    return (
        <div className="backGroundLogin">
            <Formik
                initialValues={{
                    taiKhoan: '',
                    matKhau: ''
                }}
                onSubmit={_handleSubmit}
                render={({ handleChange }) => (
                    <Form>
                        <h1 className="text-center">
                            Đăng nhập
                        </h1>
                        <div className="form-group">
                            <Field
                                placeholder="Tài khoản"
                                type="text"
                                name="taiKhoan"
                                className="form-control"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <Field
                                placeholder="Mật khẩu"
                                type="password"
                                name="matKhau"
                                className="form-control"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <button
                                disabled={loading}
                                className="btn btn-success">Đăng nhập
                            </button>

                            {error ? (
                                <div className="errorMes">
                                    <span>{error}</span>
                                </div>
                            ) : null}
                        </div>
                        <div>
                            Bạn chưa có tài khoản ? Đăng ký 
                            <span>
                                <NavLink className="signup" to="/signup">
                                    tại đây
                                </NavLink>
                            </span>
                        </div>

                    </Form>
                )}
            />
        </div>

    );
}

export default Login;
