import React, { useState } from "react";
import { makeStyles } from '@material-ui/core';
import Header from "../../Components/Admin/Header/Header";
import NavBar from "../../Components/Admin/NavBar/NavBar";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256
    }
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
  }
}));

const AdminLayout = (props) => {
  const classes = useStyles();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  console.log(mobileNavOpen);
  return (
    <div>
      <Header onMobileNavOpen={() => {setMobileNavOpen(true)}} />
      <NavBar
        openMobile={mobileNavOpen}
        onMobileClose={() => {setMobileNavOpen(false)}}
      />
      
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
