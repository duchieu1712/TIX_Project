import React from 'react';
import ComingFilms from './ComingFilms/comingFilms';
import ShowingFilms from './ShowingFilms/showingFilms';
import './showtime.scss';

const Showtime = () => {
    
    return (
        <div className="Showtime-content" id="showTime"> 
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#showing" role="tab" aria-controls="home" aria-selected="true">Đang Chiếu</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#coming" role="tab" aria-controls="profile" aria-selected="false">Sắp Chiếu</a>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="showing" role="tabpanel" aria-labelledby="home-tab">
                    <ShowingFilms/>
                </div>
                <div className="tab-pane fade" id="coming" role="tabpanel" aria-labelledby="profile-tab">
                    <ComingFilms/>
                </div>
            </div>
            <div className="Showtime-footer"></div>
        </div>
    );
}

export default Showtime;
