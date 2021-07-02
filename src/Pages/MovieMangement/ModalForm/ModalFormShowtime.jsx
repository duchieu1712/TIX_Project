import React from "react";
import { Formik, Form, Field } from "formik";
import Grid from "@material-ui/core/Grid";
import {
  InputLabel,
  FormControl,
  Button,
  OutlinedInput,
} from "@material-ui/core";
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch } from "react-redux";
import { addShowtime } from "../../../Redux/actions/theater";

const ModalFormShowtime = (props) => {
  const { idMovieAdd, onReset } = props;
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    dispatch(addShowtime(values));
    onReset()
  };
  const handleClose = () => {
    onReset()
  }
  return (
    <div className="modalForm">
      <h3>Thêm lịch chiếu</h3>
      <Formik
        initialValues={{
          maPhim: idMovieAdd,
          ngayChieuGioChieu: "",
          maRap: "",
          giaVe: "",
        }}
        onSubmit={handleSubmit}
        render={(formikProps) => (
          <Form className="modalFormContent">
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <FormControl className="text" variant="outlined">
                  <InputLabel>Mã phim</InputLabel>
                  <Field
                    type="number"
                    label="Mã phim"
                    variant="outlined"
                    name="maPhim"
                    disabled={true}
                    onChange={formikProps.handleChange}
                    as={OutlinedInput}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl className="text" variant="outlined">
                  <InputLabel>Mã rạp</InputLabel>
                  <Field
                    type="number"
                    label="Mã rạp"
                    variant="outlined"
                    name="maRap"
                    onChange={formikProps.handleChange}
                    as={OutlinedInput}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl className="text" variant="outlined">
                  <InputLabel>Ngày chiếu giờ chiếu</InputLabel>
                  <Field
                    label="Ngày chiếu giờ chiếu"
                    variant="outlined"
                    name="ngayChieuGioChieu"
                    placeholder="VD: 01/01/2020 01:01:00"
                    onChange={formikProps.handleChange}
                    as={OutlinedInput}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl className="text" variant="outlined">
                  <InputLabel>Giá vé</InputLabel>
                  <Field
                    label="Giá vé"
                    variant="outlined"
                    name="giaVe"
                    onChange={formikProps.handleChange}
                    as={OutlinedInput}
                  />
                </FormControl>
              </Grid>
            </Grid>

            <Grid container justify="space-between" p={2}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<LibraryAddIcon/>}
                type="submit"
              >
                Thêm
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

export default ModalFormShowtime;
