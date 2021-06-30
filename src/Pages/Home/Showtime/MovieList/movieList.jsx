import React, { useEffect, useState, Component } from 'react';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {getMovieList} from '../../../../Redux/actions/movie';
import Slider from "react-slick";
import "./movieList.scss";
const MovieList = (props) => {
    
    const { movieList } = useSelector(state => state.movieReducer);
    const dispatch = useDispatch();
    const myMovieList = props.showingOrComing ? movieList.coming : movieList.showing;

    useEffect(() => {
        dispatch(getMovieList(props.showingOrComing));
    }, [props.showingOrComing]);

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, backgroundImage: `url("/img/next-session.png")`, backgroundSize: "cover", width: "50px", height:"50px"}}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, backgroundImage: `url("/img/back-session.png")`, backgroundSize: "cover", width: "50px", height:"50px"}}
            onClick={onClick}
          />
        );
      }
    
    let settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        rows: 2,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Slider {...settings}>
            {myMovieList.map((item) => {
                let timeMovie = Math.floor(Math.random() * 100) + 80;
                return (
                    <NavLink to={`/detail/${item.maPhim}`} className="text-decoration-none">
                        <div className="card" key={item.maPhim}>
                            <img className="img-fluid card-img-top" src={item.hinhAnh} alt />                           
                            <p className="card-title">{item.tenPhim}</p>
                            <p className="time">{timeMovie} phút</p>
                            <Button variant="contained" color="secondary" size="large">MUA VÉ</Button>
                        </div>
                    </NavLink>
                )
            })}
        </Slider>
    );
}

export default MovieList;


