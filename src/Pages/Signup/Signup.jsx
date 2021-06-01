import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { userSignUp } from '../../Redux/actions/user';
import './Signup.scss';
// Validation
const signupUserSchema = yup.object().shape({
    taiKhoan: yup.string().required("* Vui lòng không bỏ trống !!!"),
    matKhau: yup
        .string()
        .required("* Vui lòng không bỏ trống !!!")
        .min(8, "Mật khẩu dài hơn 8 ký tự !!")
        .max(16, "Mật khẩu ngắn hơn 16 ký tự !!"),
    hoTen: yup.string().required("* Vui lòng không bỏ trống !!!"),
    email: yup
        .string()
        .required("* Vui lòng không bỏ trống !!!")
        .email("* Email không hợp lệ !"),
    soDt: yup
        .string()
        .required("* Vui lòng không bỏ trống !!!")
        .matches(/^[0-9]+$/, "* Số điện thoại không hợp lệ"),
    maNhom: yup.string().required("*Vui lòng không bỏ trống !!!"),
    maLoaiNguoiDung: yup.string().required("*Vui lòng không bỏ trống !!!")
})

const Signup = () => {
    const dispatch = useDispatch();
    const _handleSubmit = values => {
        console.log(values)
        dispatch(userSignUp(values));
    };
    return (
        <div className="backGroundSignup">
            <Formik
                initialValues={{
                    taiKhoan: '',
                    matKhau: '',
                    hoTen: '',
                    email: '',
                    soDt: '',
                    maNhom: '',
                    maLoaiNguoiDung: '',
                }}
                validationSchema={signupUserSchema}
                onSubmit={_handleSubmit}
                render={(formikProps) => (
                    <Form>
                        <h1 className="text-center">
                            Đăng ký
                        </h1>
                        <div className="form-group">
                            <Field type="text" placeholder="Tài khoản" className="form-control" name="taiKhoan" onChange={formikProps.handleChange} />
                            <ErrorMessage name="taiKhoan">
                                {/* custom style  */}
                                {msg => <div className="errorMsg">{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="form-group">                            
                            <Field type="password" placeholder="Mật khẩu" className="form-control" name="matKhau" onChange={formikProps.handleChange} />
                            <ErrorMessage name="matKhau">
                                {/* custom style  */}
                                {msg => <div className="errorMsg">{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="form-group">                           
                            <Field type="text" placeholder="Họ Tên" className="form-control" name="hoTen" onChange={formikProps.handleChange} />
                            <ErrorMessage name="hoTen">
                                {/* custom style  */}
                                {msg => <div className="errorMsg">{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="form-group">                          
                            <Field type="email" placeholder="Email" className="form-control" name="email" onChange={formikProps.handleChange} />
                            <ErrorMessage name="email">
                                {/* custom style  */}
                                {msg => <div className="errorMsg">{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="form-group">                           
                            <Field type="text" placeholder="Số điện thoại" className="form-control" name="soDt" onChange={formikProps.handleChange} />
                            <ErrorMessage name="soDt">
                                {/* custom style  */}
                                {msg => <div className="errorMsg">{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="form-group">                            
                            <Field className="form-control" component="select" name="maNhom" onChange={formikProps.handleChange}>
                                <option>Chọn mã nhóm</option>
                                <option>GP01</option>
                                <option>GP02</option>
                            </Field>
                            <ErrorMessage name="maNhom">
                                {/* custom style  */}
                                {msg => <div className="errorMsg">{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="form-group">                           
                            <Field className="form-control" component="select" name="maLoaiNguoiDung" onChange={formikProps.handleChange}>
                                <option>Loại</option>
                                <option>Admin</option>
                                <option>User</option>
                            </Field>
                            <ErrorMessage name="maLoaiNguoiDung">
                                {/* custom style  */}
                                {msg => <div className="errorMsg">{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-success">Đăng ký</button>
                        </div>
                    </Form>
                )}
            />
        </div>
    );
}

export default Signup;