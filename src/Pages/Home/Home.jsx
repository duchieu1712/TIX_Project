import React, { useEffect } from "react";
import Carousel from "./Carousel/carousel";
import Cinema from "./Cinema/cinema";
import News from "./News/news";
import Showtime from "./Showtime/showtime";
import Application from "./Application/application";
import LoadingPage from "../../Components/LoadingPage/LoadingPage";
import { useSelector, useDispatch } from "react-redux";
import { getCinemaList } from "../../Redux/actions/cinema";
const Home = () => {
  useEffect(() => {
    document.title = "TIX - Trang chủ";
    window.scrollTo(0, 0);
  }, [window.scrollTo(0, 0)]);

  const { cinemaList, loading, error } = useSelector(
    (state) => state.cinemaReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCinemaList());
  }, []);
  if (loading) {
    return <LoadingPage />;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Carousel />
      <Showtime />
      <Cinema cinemaList={cinemaList} />
      <News />
      <Application />
    </div>
  );
};

export default Home;
