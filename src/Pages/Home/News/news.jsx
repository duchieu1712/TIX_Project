import React from 'react';
import Discount from './discount';
import './news.scss';
import News24h from './news24h';
import Review from './review';
const News = () => {
    return (
        <div className="News-content" id="news">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#news24h" role="tab" aria-controls="home" aria-selected="true">Điện Ảnh 24h</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#review" role="tab" aria-controls="profile" aria-selected="false">Đánh Giá</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#discount" role="tab" aria-controls="profile" aria-selected="false">Khuyến Mãi</a>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="news24h" role="tabpanel" aria-labelledby="home-tab">
                    <News24h/>
                </div>
                <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="profile-tab">
                    <Review/>
                </div>
                <div className="tab-pane fade" id="discount" role="tabpanel" aria-labelledby="profile-tab">
                    <Discount/>
                </div>
            </div>
        </div>
    );
}

export default News;
