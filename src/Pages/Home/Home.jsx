import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import Carousel from './Carousel/carousel';
import Cinema from './Cinema/cinema';
import News from './News/news';
import Showtime from './Showtime/showtime';
import Application from './Application/application';
import { useSelector } from 'react-redux';
// import {getMovieList} from '../../Redux/actions/movie';
import LoadingPage from '../../Components/LoadingPage/LoadingPage';
const Home = () => {

    useEffect(() => {
        document.title = 'TIX - Trang chủ'
    },[])

    // const { loading,error} = useSelector(state => state.theaterReducer);
    // if(loading) {
    //     return <LoadingPage/>
    // }
    // if(error) {
    //     return <div>{error}</div>
    // }

    return (
        <div>
            <Carousel/>
            <Showtime/>
            <Cinema/>
            <News/>
            <Application/>
        </div>
    );
}

export default Home;
