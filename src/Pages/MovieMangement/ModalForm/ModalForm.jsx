import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {
  MenuItem,
  InputLabel,
  Select,
  FormControl,
  Button,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";
import "./ModalForm.scss";
import { addMovie, updateMovie } from "../../../Redux/actions/movie";

const ModalForm = (props) => {
  const { movieUpdate, onChangeIsUpdate, onReset } = props;
  const [movie, setMovie] = useState({
    tenPhim: movieUpdate.tenPhim || "",
    biDanh: movieUpdate.biDanh || "",
    trailer: movieUpdate.trailer || "",
    hinhAnh: movieUpdate.hinhAnh || {},
    moTa: movieUpdate.moTa || "",
    maNhom: movieUpdate.maNhom || "GP01",
    ngayKhoiChieu: movieUpdate.ngayKhoiChieu || "",
    danhGia: movieUpdate.danhGia || "",
  });
  useEffect(() => {
    setMovie(movieUpdate);
  }, [movieUpdate]);
  const dispatch = useDispatch();

  const handleChange = (type) => (event) => {
    if (type === "hinhAnh") {
      setMovie((movie) => ({
        ...movie,
        hinhAnh: event.target.file[0]
      }));
    } else {
      setMovie({ ...movie, [type]: event.target.value });
    }
  };
  // Hàm đóng và reset form
  const handleClose = () => {
    onReset();
  };
  // Hàm handle button update và add movie 
  const handleMovie = (movie) => {
    if (onChangeIsUpdate) {
      // UPDATE
      dispatch(updateMovie(movie));
    } else {
      // ADD
      dispatch(addMovie(movie));
    }
    // làm trống ô input để tránh bị đè movie trước
    onReset();
  };

  return (
    <div className="modalForm">
      <h3>{onChangeIsUpdate ? "Cập nhập phim" : "Thêm phim"}</h3>
      <div className="modalFormContent">
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Tên phim"
              variant="outlined"
              className="text"
              value={movie.tenPhim}
              onChange={handleChange("tenPhim")}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Bí danh"
              variant="outlined"
              className="text"
              value={movie.biDanh}
              onChange={handleChange("biDanh")}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Mô tả"
              variant="outlined"
              className="text"
              value={movie.moTa}
              onChange={handleChange("moTa")}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              // label="Hình ảnh"
              variant="outlined"
              className="text"
              type="file"
              onChange={handleChange("hinhAnh")}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Đánh giá"
              variant="outlined"
              className="text"
              value={movie.danhGia}
              onChange={handleChange("danhGia")}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Trailer"
              variant="outlined"
              className="text"
              value={movie.trailer}
              onChange={handleChange("trailer")}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl variant="outlined" className="text">
              <InputLabel id="demo-simple-select-outlined-label">
                Mã nhóm
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={movie.maNhom}
                onChange={handleChange("maNhom")}
                label="Mã nhóm"
                className="text"
              >
                <MenuItem value="">
                  <em>Mã nhóm</em>
                </MenuItem>
                <MenuItem value="GP01">GP01</MenuItem>
                <MenuItem value="GP02">GP02</MenuItem>
                <MenuItem value="GP03">GP03</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Ngày khởi chiếu"
              variant="outlined"
              className="text"
              value={movie.ngayKhoiChieu}
              onChange={handleChange("ngayKhoiChieu")}
            />
          </Grid>
        </Grid>
        <Grid container justify="space-between" p={2}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={onChangeIsUpdate ? <SaveIcon/> : <AddIcon />}
            onClick={() => handleMovie(movie)}
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
      </div>
    </div>
  );
};

export default ModalForm;
