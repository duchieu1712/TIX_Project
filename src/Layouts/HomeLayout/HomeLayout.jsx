import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../../Components/Home/Footer/Footer";
import Header from "../../Components/Home/Header/Header";
import LoadingPage from "../../Components/LoadingPage/LoadingPage";
import {getCinemaList} from "../../Redux/actions/cinema";
const HomeLayout = (props) => {
//   const { cinemaList, loading, error } = useSelector(
//     (state) => state.cinemaReducer
//   );
//   // useDispatch: dispatch action lấy api movieList và đẩy data trả về lên store ( đi 2 chiều)
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getCinemaList());
//   }, []);
//   if (loading) {
//     return <LoadingPage />;
//   }
//   if (error) {
//     return <div>{error}</div>;
//   }
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default HomeLayout;
