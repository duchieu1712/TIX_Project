import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container footer_content">
                <div className="row footer_info pt-4 px-4">
                    <div className="col-md-4 col-xs-12 footer_TIX">
                        <p className="title">TIX</p>
                        <div className="row">
                            <div className="col-md-6 col-xs-6 pr-0 footer_FAQ">
                                <a href="#">FAQ</a>
                                <a href="#">Brand Guidelines</a>
                            </div>
                            <div className="col-md-6 p-0 col-xs-12 footer_use">
                                <a href="#">Thoả thuận sử dụng</a>
                                <a href="#">Chính sách bảo mật</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-xs-12 footer_Partner">
                        <p className="title">ĐỐI TÁC</p>
                        <div>
                            <div className="row">
                                <div className="col-12">
                                    <a href="https://www.cgv.vn/" target="_blank">
                                        <img src="/img/cgv.jpg" alt="CGV" />
                                    </a>
                                    <a href="http://bhdstar.vn/" target="_blank">
                                        <img src="/img/BHDStart.png" alt="BHD" />
                                    </a>
                                    <a href="http://galaxycine.vn//" target="_blank">
                                        <img src="/img/galaxycine.jfif" alt="galaxy" />
                                    </a>
                                    <a href="http://cinestar.com.vn/" target="_blank">
                                        <img src="/img/cinestar.png" alt="cinestar" />
                                    </a>
                                    <a href="http://lottecinemavn.com/" target="_blank">
                                        <img
                                            src="/img/lottecinema.jpg"
                                            alt="lotte cinema"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-12">
                                    <a href="https://www.megagscinemas.vn/" target="_blank">
                                        <img src="/img/mega.png" alt="MegaGS" />
                                    </a>
                                    <a
                                        href="https://www.betacinemas.vn/home.htm"
                                        target="_blank"
                                    >
                                        <img src="/img/beta.jpg" alt="Beta" />
                                    </a>
                                    <a href="http://ddcinema.vn/" target="_blank">
                                        <img src="/img/ddc.png" alt="DDC" />
                                    </a>
                                    <a href="https://touchcinema.com/" target="_blank">
                                        <img
                                            src="/img/touchcine.jfif"
                                            alt="touch cinema"
                                        />
                                    </a>
                                    <a href="https://cinemaxvn.com/" target="_blank">
                                        <img src="/img/cnx.jpg" alt="cinemax" />
                                    </a>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-12">
                                    <a href="https://starlight.vn/" target="_blank">
                                        <img src="/img/starlight.png" alt="Startlight" />
                                    </a>
                                    <a href="https://www.dcine.vn/" target="_blank">
                                        <img src="/img/dcine.png" alt="Dcine" />
                                    </a>
                                    <a href="https://zalopay.vn/" target="_blank">
                                        <img src="/img/zalopay-logo.png" alt="Zalopay" />
                                    </a>
                                    <a href="https://www.payoo.vn/" target="_blank">
                                        <img src="/img/payoo.jpg" alt="Payoo" />
                                    </a>
                                    <a
                                        href="https://portal.vietcombank.com.vn/Pages/Home.aspx"
                                        target="_blank"
                                    >
                                        <img src="/img/VCB.png" alt="Vietcombank" />
                                    </a>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-12">
                                    <a href="https://www.agribank.com.vn/" target="_blank">
                                        <img src="/img/agribank.jpg" alt="Agribank" />
                                    </a>
                                    <a
                                        href="https://www.vietinbank.vn/web/home/vn/index.html"
                                        target="_blank"
                                    >
                                        <img
                                            src="/img/VIETTINBANK.png"
                                            alt="Vietinbank"
                                        />
                                    </a>
                                    <a href="https://www.indovinabank.com.vn/" target="_blank">
                                        <img src="/img/IVB (1).png" alt="IVB" />
                                    </a>
                                    <a href="https://webv3.123go.vn/" target="_blank">
                                        <img src="/img/123go.png" alt="123go" />
                                    </a>
                                    <a href="https://laban.vn/" target="_blank">
                                        <img src="/img/laban.png" alt="Laban" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-2 col-xs-12 footer_Mobile">
                        <p className="title">MOBILE APP</p>
                        <a
                            href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197"
                            target="_blank"
                        >
                            <img src="/img/apple-logo.png" alt="Apple" />
                        </a>
                        <a
                            href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                            target="_blank"
                        >
                            <img src="/img/android-logo.png" alt="Android" />
                        </a>
                    </div>
                    <div className="col-md-2 col-xs-12 footer_Social">
                        <p className="title">SOCIAL</p>
                        <a
                            href="https://www.facebook.com/tix.vn"
                            target="_blank"
                        >
                            <img src="/img/facebook-logo.png" alt="Facebook" />
                        </a>
                        <a
                            href="https://www.facebook.com/tix.vn"
                            target="_blank"
                        >
                            <img src="/img/zalo-logo.png" alt="Zalo" />
                        </a>
                    </div>
                </div>
                <hr className="footer_hr" />
                <div className="row footer_aboutTIX">
                    <div className="col-md-2 col-xs-12 p-0 text-center">
                        <img
                            src="/img/zion-logo.jpg"
                            className="vngIcon ml-3"
                            alt=""
                        />
                    </div>
                    <div className="col-md-8 col-xs-12 p-0 mb-2 footer_small">
                        <p className="title">TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</p>
                        <p>
                            Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
                            Chí Minh, Việt Nam.
              </p>
                        <p>
                            Giấy chứng nhận đăng ký kinh doanh số: 0101659783,
                <br />
                đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế
                hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
              </p>
                        <p>Số Điện Thoại (Hotline): 1900 545 436</p>
                        <p>
                            Email: <a href="mailto:support@tix.vn">support@tix.vn</a>
                        </p>
                    </div>
                    <div className="col-md-2 col-xs-12 text-center mb-3">
                        <img
                            className="bct"
                            src="/img/bocongthuong.png"
                            alt="bct"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
