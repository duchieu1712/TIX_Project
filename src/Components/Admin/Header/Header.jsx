import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./style.js";
import MenuIcon from "@material-ui/icons/Menu";
import Hidden from "@material-ui/core/Hidden";
import { NavLink } from "react-router-dom";

const Header = ({ onMobileNavOpen }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Hidden mdUp>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              onClick={() => {
                onMobileNavOpen();
              }}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <NavLink to="/">
            <Typography className={classes.title} noWrap>
              <img src="/img/web-logo.png" alt="" width="40" height="40" />
            </Typography>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
