import * as yup from 'yup';
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
export default signupUserSchema;