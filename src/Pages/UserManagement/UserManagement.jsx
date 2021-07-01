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
import { Button, MuiThemeProvider } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Dialog from "@material-ui/core/Dialog";
import { deleteUser, getUserList } from "../../Redux/actions/user";
import ModalForm from "./ModalForm/ModalForm";

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
  { id: "taiKhoan", label: "Tài khoản", minWidth: 120 },
  {
    id: "matKhau",
    label: "Mật khẩu",
    minWidth: 120,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "hoTen",
    label: "Họ Tên",
    minWidth: 120,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "email",
    label: "Email",
    minWidth: 120,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "soDt",
    label: "Số điện thoại",
    minWidth: 120,
    align: "center",
    format: (value) => value.toFixed(2),
  },
  {
    id: "maLoaiNguoiDung",
    label: "Loại người dùng",
    minWidth: 120,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "tuyChinh",
    label: "Tùy chỉnh",
    minWidth: 120,
    align: "center",
    format: (value) => value.toFixed(2),
  },
];

const UserManagement = () => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [valueTarget, setValueTarget] = useState("");
  const [open, setOpen] = useState(false);
  const [userSelect, setUserSelect] = useState({});
  const [isUpdate, setIsUpdate] = useState(false);

  const { userList, error } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserList());
  }, []);
  useEffect(() => {
    document.title = "TIX - Quản lý người dùng";
  }, []);
  // Hàm chỉnh dòng/trang
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  // Hàm bật/tắt modal
  const handleModal = () => {
    setOpen(!open);
  };

  const addUser = () => {
    setUserSelect({
      maNhom: "GP01",
    });
    handleModal();
  };

  const handleUpdate = (user) => {
    setIsUpdate(!isUpdate);
    setUserSelect(user);
    handleModal();
  };
  const handleClose = () => {
    // tắt modal
    handleModal();
    setUserSelect({});
    setIsUpdate(false);
  };

  const handleDelete = (taiKhoan) => {
    dispatch(deleteUser(taiKhoan))
  };
  return (
    <MuiThemeProvider>
      <Paper className={classes.root}>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => addUser()}
            >
              Thêm người dùng
            </Button>
          </Grid>
          <Grid item>
            <h4>Quản lý người dùng: {error ? error : null}</h4>
          </Grid>
          <Grid item>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Tìm kiếm người dùng..."
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
              {userList
                .filter((user) => {
                  return (
                    user.taiKhoan
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
                      key={row.taiKhoan}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        if (column.id === "tuyChinh") {
                          return (
                            <TableCell align={column.align}>
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <EditIcon onClick={() => handleUpdate(row)} />
                              </IconButton>
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <DeleteIcon
                                  onClick={() => {
                                    handleDelete(row.taiKhoan);
                                  }}
                                />
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
          count={userList.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <Dialog open={open}>
        <ModalForm
          userUpdate={userSelect}
          onChangeIsUpdate={isUpdate}
          onReset={handleClose}
        />
      </Dialog>
    </MuiThemeProvider>
  );
};

export default UserManagement;
