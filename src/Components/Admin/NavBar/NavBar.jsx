import React, { useEffect } from "react";
import { shadows } from '@material-ui/system';
import TheatersIcon from "@material-ui/icons/Theaters";
import PersonIcon from "@material-ui/icons/Person";
import ListItemLink from "../ListItemLink/ListItemLink";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles,
} from "@material-ui/core";

const currentUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256,
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: "calc(100% - 64px)",
  },
  avatar: {
    cursor: "pointer",
    width: 65,
    height: 65,
  },
}));

const NavBar = ({ openMobile, onMobileClose }) => {
  const classes = useStyles();
  //   const location = useLocation();
  //   useEffect(() => {
  //     if (openMobile && onMobileClose) {
  //       onMobileClose();
  //     }
  //   }, []);

  const content = (
    <Box height="100%" display="flex" flexDirection="column" boxShadow={3}>
      <Box display="flex" flexDirection="column" alignItems="center" p={3}>
        <Avatar src="/img/avatar.png" className={classes.avatar} />
        <Typography variant="h5">{currentUser.hoTen}</Typography>
        <Typography variant="body2">Admin Page</Typography>
      </Box>

      <Divider />

      <Box>
        <List>
          <ListItemLink
            to="/admin/movie"
            primary="Quản lý phim"
            icon={<TheatersIcon />}
          />
          <ListItemLink
            to="/admin/user"
            primary="Quản lý người dùng"
            icon={<PersonIcon />}
          />
          <ListItemLink
            to="/login"
            primary="Đăng xuất"
            icon={<ExitToAppIcon />}
          />
        </List>
      </Box>
    </Box>
  );

  return (
    <div>
      <Hidden mdUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile} // đóng mở tùy thuộc vào click
          variant="temporary" // kiểu temporary có một lớp phủ mờ hiện ra cho đến khi bạn chọn xong thì Drawer mới đóng lại
        >
          {content}
        </Drawer>
      </Hidden>

      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </div>
  );
};

export default NavBar;
