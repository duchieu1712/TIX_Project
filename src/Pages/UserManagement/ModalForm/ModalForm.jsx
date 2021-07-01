import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {
  InputLabel,
  FormControl,
  Button,
  OutlinedInput,
} from "@material-ui/core";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SaveIcon from "@material-ui/icons/Save";
import CloseIcon from "@material-ui/icons/Close";
import signupUserSchema from "../../../Utils/validation";
import { useDispatch } from "react-redux";
import { addUser, updateUser } from "../../../Redux/actions/user";
import "./ModalForm.scss";
const ModalForm = (props) => {
  const { userUpdate, onChangeIsUpdate, onReset } = props;
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    if (onChangeIsUpdate) {
      dispatch(updateUser(values));
    } else {
      dispatch(addUser(values));
    }
    onReset();
  };
  const handleClose = () => {
    onReset();
  };
  return (
    <div className="modalForm">
      <h3>{onChangeIsUpdate ? "Cập nhập người dùng" : "Thêm người dùng"}</h3>
      <Formik
        initialValues={{
          taiKhoan: userUpdate.taiKhoan || "",
          matKhau: userUpdate.matKhau || "",
          hoTen: userUpdate.hoTen || "",
          email: userUpdate.email || "",
          soDt: userUpdate.soDt || "",
          maNhom: userUpdate.maNhom || "",
          maLoaiNguoiDung: userUpdate.maLoaiNguoiDung || "",
        }}
        validationSchema={signupUserSchema}
        onSubmit={handleSubmit}
        render={(formikProps) => (
          <Form className="modalFormContent">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <FormControl className="text" variant="outlined">
                  <InputLabel>Tài khoản</InputLabel>
                  <Field
                    label="Tài Khoản"
                    variant="outlined"
                    name="taiKhoan"
                    onChange={formikProps.handleChange}
                    as={OutlinedInput}
                  />
                  <ErrorMessage name="taiKhoan">
                    {(msg) => (
                      <div style={{ color: "red", fontSize: "13px" }}>
                        {msg}
                      </div>
                    )}
                  </ErrorMessage>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl className="text" variant="outlined">
                  <InputLabel>Mật khẩu</InputLabel>
                  <Field
                    label="Mật khẩu"
                    variant="outlined"
                    name="matKhau"
                    onChange={formikProps.handleChange}
                    as={OutlinedInput}
                  />
                  <ErrorMessage name="matKhau">
                    {(msg) => (
                      <div style={{ color: "red", fontSize: "13px" }}>
                        {msg}
                      </div>
                    )}
                  </ErrorMessage>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl className="text" variant="outlined">
                  <InputLabel>Họ Tên</InputLabel>
                  <Field
                    label="Họ Tên"
                    variant="outlined"
                    name="hoTen"
                    onChange={formikProps.handleChange}
                    as={OutlinedInput}
                  />
                  <ErrorMessage name="hoTen">
                    {(msg) => (
                      <div style={{ color: "red", fontSize: "13px" }}>
                        {msg}
                      </div>
                    )}
                  </ErrorMessage>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl className="text" variant="outlined">
                  <InputLabel>Email</InputLabel>
                  <Field
                    label="Email"
                    variant="outlined"
                    name="email"
                    onChange={formikProps.handleChange}
                    as={OutlinedInput}
                  />
                  <ErrorMessage name="email">
                    {(msg) => (
                      <div style={{ color: "red", fontSize: "13px" }}>
                        {msg}
                      </div>
                    )}
                  </ErrorMessage>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl className="text" variant="outlined">
                  <InputLabel>Số điện thoại</InputLabel>
                  <Field
                    label="Số điện thoại"
                    variant="outlined"
                    name="soDt"
                    onChange={formikProps.handleChange}
                    as={OutlinedInput}
                  />
                  <ErrorMessage name="soDt">
                    {(msg) => (
                      <div style={{ color: "red", fontSize: "13px" }}>
                        {msg}
                      </div>
                    )}
                  </ErrorMessage>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl className="text" variant="outlined">
                  <Field
                    label="Mã nhóm"
                    variant="outlined"
                    name="maNhom"
                    onChange={formikProps.handleChange}
                    as={TextField}
                    select
                  >
                    <option value="GP01">GP01</option>
                    <option value="GP02">GP02</option>
                    <option value="GP03">GP03</option>
                  </Field>
                  <ErrorMessage name="maNhom">
                    {(msg) => (
                      <div style={{ color: "red", fontSize: "13px" }}>
                        {msg}
                      </div>
                    )}
                  </ErrorMessage>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl className="text" variant="outlined">
                  <Field
                    label="Mã loại người dùng"
                    variant="outlined"
                    name="maLoaiNguoiDung"
                    onChange={formikProps.handleChange}
                    as={TextField}
                    select
                  >
                    <option value="quanTri">Quản trị</option>
                    <option value="khachHang">Người dùng</option>
                  </Field>
                  <ErrorMessage name="maLoaiNguoiDung">
                    {(msg) => (
                      <div style={{ color: "red", fontSize: "13px" }}>
                        {msg}
                      </div>
                    )}
                  </ErrorMessage>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container justify="space-between" p={2}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={onChangeIsUpdate ? <SaveIcon /> : <PersonAddIcon />}
                type="submit"
              >
                {onChangeIsUpdate ? "Lưu" : "Thêm"}
              </Button>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                startIcon={<CloseIcon />}
                onClick={() => handleClose()}
              >
                Đóng
              </Button>
            </Grid>
          </Form>
        )}
      />
    </div>
  );
};

export default ModalForm;
