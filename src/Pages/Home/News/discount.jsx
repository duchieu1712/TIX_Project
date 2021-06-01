import React from 'react';
import bhd59k from '../../../Assets/img/bhd-59k.jpg';
import tix1k from '../../../Assets/img/tix-1k.jpg';
import dongGia1k from '../../../Assets/img/dong-gia-1k.png';
import bhd59 from '../../../Assets/img/bhd59.jpg';
import betaCine from '../../../Assets/img/beta-cineplex.png';
import ve11k from '../../../Assets/img/11k-ve.jpg';
import phim123 from '../../../Assets/img/123phim.jpg';
import mega from '../../../Assets/img/mega-gs-hoa.jpg';

const Discount = () => {
    return (
        <div className="discount content">
            <div className="row">
                <div className="col-6">
                    <img src={bhd59k} alt=""/>
                    <a href="">BHD 59K/VÉ CẢ TUẦN !!!</a>
                    <p>Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé trên TIX hoặc Mục Vé Phim trên ZaloPay.</p>
                </div>
                <div className="col-6">
                    <img src={tix1k} alt=""/>
                    <a href="">TIX 1K/VÉ NGẠI CHI GIÁ VÉ</a>
                    <p>Đồng giá 1k/vé cả tuần tất cả các rạp trên TIX + Nhận thêm 02 voucher thanh toán ZaloPay thả ga</p>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <img src={dongGia1k} alt=""/>
                    <a href="">ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX </a>
                    <p>ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX Hành trình tìm Ròm và Phúc chỉ với 1k cả tuần + nhận thêm 02 voucher khi đặt vé qua TIX.</p>
                </div>
                <div className="col-4">
                    <img src={bhd59} alt=""/>
                    <a href="">BHD STAR VÉ CHỈ 59.000Đ CẢ TUẦN!</a>
                    <p>Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé trên TIX và thanh toán bằng ZaloPay hoặc Mục Vé Phim trên ZaloPay.</p>
                </div>
                <div className="col-4">
                    <div className="item d-flex">
                        <img src={betaCine} alt=""/>
                        <a>Beta Cineplex trở lại với hàng loạt ưu đãi lớn</a>
                    </div>
                    <div className="item d-flex">
                        <img src={ve11k} alt=""/>
                        <a>[123Phim] Thứ 6 Không Đen Tối -  Ưu đãi huỷ diệt 11k/vé Anh Trai Yêu Quái</a>
                    </div>
                    <div className="item d-flex">
                        <img src={phim123} alt=""/>
                        <a>[123Phim] NHẬP MÃ 'PSM30K' - Giảm ngay 30k khi đặt vé Pháp Sư Mù: Ai Chết Giơ Tay</a>
                    </div>
                    <div className="item d-flex">
                        <img src={mega} alt=""/>
                        <a>[Mega GS] Một đoá hoa thay ngàn lời yêu</a>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <button className="btn">XEM THÊM</button>
            </div>
        </div>
    );
}

export default Discount;
