import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles, fade } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Grid from "@material-ui/core/Grid";
import { Button,MuiThemeProvider } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import VideoCallIcon from '@material-ui/icons/VideoCall';
import { deleteMovie, getMovieList } from "../../Redux/actions/movie";
import Dialog from "@material-ui/core/Dialog";
import ModalForm from "./ModalForm/ModalForm";
import ModalFormShowtime from "./ModalForm/ModalFormShowtime";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    border: "1px solid #bebebe",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  container: {
    height: 600,
  },
}));

const columns = [
  { id: "tenPhim", label: "Tên phim", minWidth: 170 },
  {
    id: "hinhAnh",
    label: "Hình ảnh",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "moTa",
    label: "Mô tả",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "ngayKhoiChieu",
    label: "Ngày khởi chiếu",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "danhGia",
    label: "Đánh giá",
    minWidth: 170,
    align: "center",
    format: (value) => value.toFixed(2),
  },
  {
    id: "tuyChinh",
    label: "Tùy chỉnh",
    minWidth: 200,
    align: "center",
    format: (value) => value.toFixed(2),
  },
];

const MovieManagement = () => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [open, setOpen] = useState(false);
  const [movieSelect,setMovieSelect] = useState({})
  const [isUpdate,setIsUpdate] = useState(false);
  const [valueTarget, setValueTarget] = useState("");
  const [openShowtime, setOpenShowtime] = useState(false);
  const [movieAddShowtime, setMovieAddShowtime] = useState(0);

  const { movieList,error } = useSelector((state) => state.movieReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieList(false));
  }, []);
  useEffect(() => {
    document.title = "TIX - Quản lý phim";
  }, []);

  // Của phim
  const handleModal = () => {
    setOpen(!open);
  };

  // Của lịch chiếu
  const handleModalShowtime = () => {
    setOpenShowtime(!openShowtime)
  }

  // Hàm chỉnh dòng/trang
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // Hàm để mở modal
  const addMovie = () => {
    setMovieSelect({
      maNhom: "GP01",
    });
    handleModal();
  };
  // hàm để nhận movie truyền xuống modal
  const handleUpdate = (movie) => {
    setMovieSelect(movie)
    handleModal();
    setIsUpdate(!isUpdate)
  }
  // hàm tắt modal đồng thời reset ô input
  const handleClose = () => {
    // tắt modal 
    handleModal()
    // làm trống ô input
    setIsUpdate(false)
    setMovieSelect({})
  }
  // hàm xóa phim
  const handleDelete = (movieId) => {
    dispatch(deleteMovie(movieId))
  }

  // hàm mở modal thêm lịch chiếu
  const handleAddShowtime = (movieId) => {
    handleModalShowtime()
    setMovieAddShowtime(movieId)
  }
  // hàm tắt modal lịch chiếu
  const handleCloseShowtime = () => {
    handleModalShowtime()
    setMovieAddShowtime(0)
  }

  return (
    <MuiThemeProvider>
      <Paper className={classes.root}>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => addMovie()}
            >
              Thêm phim
            </Button>
          </Grid>
          <Grid item>
            <h4>Quản lý phim: {error ? error : null}</h4>
          </Grid>
          <Grid item>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Tìm kiếm phim..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
                onChange={(event) => setValueTarget(event.target.value)}
              />
            </div>
          </Grid>
        </Grid>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Chức năng search */}
              {movieList.showing
                ?.filter((movie) => {
                  return (
                    movie.tenPhim
                      .toLowerCase()
                      .trim()
                      .indexOf(valueTarget.toLowerCase().trim()) !== -1
                  );
                })
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.maPhim}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        if (column.id === "hinhAnh") {
                          return (
                            <TableCell align={column.align}>
                              <img
                                style={{ width: "100px", height: "100px" }}
                                src={
                                  typeof value === "object"
                                    ? window.URL.createObjectURL(value)
                                    : value
                                }
                                alt="IMG"
                              />
                            </TableCell>
                          );
                        }
                        if (column.id === "ngayKhoiChieu") {
                          const date = value.split("T");
                          return (
                            <TableCell align={column.align}>
                              <p>{date[0]}</p>
                            </TableCell>
                          );
                        }
                        if (column.id === "tuyChinh") {
                          return (
                            <TableCell align={column.align}>
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <EditIcon onClick={() => handleUpdate(row)}/>
                              </IconButton>
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <DeleteIcon onClick={() => {handleDelete(row.maPhim)}}/>
                              </IconButton>
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <VideoCallIcon onClick={() => {handleAddShowtime(row.maPhim)}}/>
                              </IconButton>
                            </TableCell>
                          );
                        }
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50]}
          component="div"
          count={movieList.showing?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>

      <Dialog
        open={open}
      >
        <ModalForm movieUpdate={movieSelect} onChangeIsUpdate={isUpdate} onReset={handleClose}/>
      </Dialog>
      
      <Dialog open={openShowtime}>
        <ModalFormShowtime idMovieAdd={movieAddShowtime} onReset={handleCloseShowtime}/>
      </Dialog>

    </MuiThemeProvider>
  );
};

export default MovieManagement;
