import React from 'react';
import './infoMovie.scss';

const InfoMovie = (props) => {
    return (
        <div className="infoContent row">
            <div className="infoDetail col-6">
                <table className="table table-borderless">
                    <tbody>
                        <tr>
                            <td>Ngày công chiếu</td>
                            <td>15.01.2021</td>
                        </tr>
                        <tr>                          
                            <td>Đạo diễn</td>
                            <td>Tony Stark</td>
                        </tr>
                        <tr>
                            <td>Diễn viên</td>
                            <td>Steve Roger</td>
                        </tr>
                        <tr>
                            <td>Thể loại</td>
                            <td>Hành động, Giả tưởng</td>
                        </tr>
                        <tr>
                            <td>Định dạng</td>
                            <td>2D/3D</td>
                        </tr>
                        <tr>
                            <td>Quốc Gia</td>
                            <td>Mỹ</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="description col-6">
                <h6>Nội dung</h6>
                <p>{props.descrip}</p>
            </div>
        </div>

    );
}

export default InfoMovie;
