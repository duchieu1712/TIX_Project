import React from "react";
import Footer from "../../Components/Home/Footer/Footer";
import Header from "../../Components/Home/Header/Header";

const HomeLayout = (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default HomeLayout;
