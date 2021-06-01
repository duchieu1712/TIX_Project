import React from 'react';
import review5 from '../../../Assets/img/review5.png';
import review2 from '../../../Assets/img/review2.png';
import review1 from '../../../Assets/img/review1.jpg';
import review3 from '../../../Assets/img/review3.jpg';
import review4 from '../../../Assets/img/review4.png';
import blackk from '../../../Assets/img/blackkkk.png';
import snipper from '../../../Assets/img/american-snip.png';
import covid from '../../../Assets/img/covid-19.jpg';
const Review = () => {
    return (
        <div className="review content">
            <div className="row">
                <div className="col-6">
                    <img src={review5} alt=""/>
                    <a href="">Review: Tàn Tích Quỷ Ám (Relic) - Ba thế hệ và mối liên kết </a>
                    <p>Điểm nhấn của phim kinh dị năm 2020 chính là Tàn Tích Quỷ Ám</p>
                </div>
                <div className="col-6">
                    <img src={review2} alt=""/>
                    <a href="">Review: Dinh Thự Oan Khuất (Ghost Of War)</a>
                    <p>Tuy là một bộ phim có chất lượng tốt, nhưng có vẻ Dinh Thự Oan Khuất vẫn chưa đủ để đem khán giả trở lại phòng vé!</p>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <img src={blackk} alt=""/>
                    <a href="">‘BlacKkKlansman’ - cốc nước lạnh để người Mỹ thức tỉnh</a>
                    <p>Tác phẩm nhận đề cử Phim truyện xuất sắc tại Oscar 2019 của đạo diễn Spike Lee là một lát cắt nữa về nạn phân biệt chủng tộc - nỗi đau gây nhức nhối nước Mỹ cho tới tận hôm nay.</p>
                </div>
                <div className="col-4">
                    <img src={snipper} alt=""/>
                    <a href="">American Sniper - Chính nghĩa hay phi nghĩa?</a>
                    <p>American Sniper khắc họa một tay súng bắn tỉa “huyền thoại” của Hải quân Mỹ với 4 lần tham chiến ở Trung Đông. Câu chuyện phim chậm rãi đưa người xem qua từng thời khắc khác nhau của Kyle, từ thửa nhỏ, thiếu niên, rồi gia nhập quân đội, rồi tham chiến. Từng khoảnh khắc bắt đầu nhẹ nhàng...</p>
                </div>
                <div className="col-4">
                    <div className="item d-flex">
                        <img src={review4} alt=""/>
                        <a>Review: Spider-Man: Into The Spider-Vesre </a>
                    </div>
                    <div className="item d-flex">
                        <img src={covid} alt=""/>
                        <a>COVID-19 là bản chính thức của MEV-1 phim contagion (2011)</a>
                    </div>
                    <div className="item d-flex">
                        <img src={review3} alt=""/>
                        <a>[Review] Siêu Vệ Sĩ Sợ Vợ - Giải cứu Tổng thống chưa bao giờ lầy lội và hài hước đến thế</a>
                    </div>
                    <div className="item d-flex">
                        <img src={review1} alt=""/>
                        <a>[Review] Bloodshot - Mở màn ấn tượng cho Vũ trụ Siêu anh hùng Valiant</a>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <button className="btn">XEM THÊM</button>
            </div>
        </div>
    );
}

export default Review;
