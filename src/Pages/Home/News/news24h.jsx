import React from 'react';
import latMat from '../../../Assets/img/lat-mat.png';
import mortalCombat from '../../../Assets/img/mortal-combat.png';
import youngWoman from '../../../Assets/img/young-woman.png';
import banTayDietQuy from '../../../Assets/img/ban-tay-diet-quy.png';
import khaiTruong from '../../../Assets/img/khai-truong.jpg';
import bocTem from '../../../Assets/img/boc-tem.png';
import tiecTrangMau from '../../../Assets/img/tiec-trang-mau.png';
import vinaman from '../../../Assets/img/vinaman.jpg';


const News24h = () => {
    return (
        <div className="news24h content">
            <div className="row">
                <div className="col-6">
                    <img src={latMat} alt=""/>
                    <a href="">Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất </a>
                    <p>Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi gay cấn thót tim fans hâm mộ</p>
                </div>
                <div className="col-6">
                    <img src={mortalCombat} alt=""/>
                    <a href="">[MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ] -  GỌI TÊN NHỮNG PHIM ĐIỆN ẢNH NỔI TIẾNG ĐƯỢC CHUYỂN THỂ TỪ CÁC TỰA GAME ĐÌNH ĐÁM</a>
                    <p>Bên cạnh những kịch bản gốc mới mẻ và đầy bất ngờ, Hollywood cũng không thiếu những tác phẩm đình đám được chuyển thể từ tiểu thuyết, phim hoạt hình, hay thậm chí là cả trò chơi điện tử.  </p>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <img src={youngWoman} alt=""/>
                    <a href="">PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan và màn trả thù đàn ông để đời</a>
                    <p>Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan ở hạng mục nữ chính xuất sắc nhất cho vai diễn "đẫm máu" nhất sự nghiệp của cô trong phim Promising Young Woman (tựa Việt: Cô Gái Trẻ Hứa Hẹn). </p>
                </div>
                <div className="col-4">
                    <img src={banTayDietQuy} alt=""/>
                    <a href="">VỪA ĐẸP LẠI VỪA TÀI NĂNG, DÀN SAO NAM CỦA PHIM “BÀN TAY DIỆT QUỶ” ĐẢM BẢO ĐỐN TIM HỘI CHỊ EM</a>
                    <p>Quy tụ 3 nam tài tử vừa điển trai, vừa được đánh giá cao về năng lực diễn xuất là Park Seo Joon, Woo Do Hwan và Choi Woo Sik, tác phẩm kinh dị – hành động “Bàn Tay Diệt Quỷ” hứa hẹn sẽ làm cho hội chị em phải mê mẩn vào tháng tới. </p>
                </div>
                <div className="col-4">
                    <div className="item d-flex">
                        <img src={khaiTruong} alt=""/>
                        <a>Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn</a>
                    </div>
                    <div className="item d-flex">
                        <img src={bocTem} alt=""/>
                        <a>“Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành</a>
                    </div>
                    <div className="item d-flex">
                        <img src={tiecTrangMau} alt=""/>
                        <a>Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công chiếu </a>
                    </div>
                    <div className="item d-flex">
                        <img src={vinaman} alt=""/>
                        <a>NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT KẾ TRANG PHỤC CHO SIÊU ANH HÙNG ĐẦU TIÊN CỦA VIỆT NAM – VINAMAN</a>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <button className="btn">XEM THÊM</button>
            </div>
        </div>
    );
}

export default News24h;
