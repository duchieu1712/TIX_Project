import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookingTicket, getTheater } from "../../Redux/actions/theater";
import WeekendSharpIcon from "@material-ui/icons/WeekendSharp";
import WarningIcon from "@material-ui/icons/Warning";
import "./checkout.scss";
const Checkout = (props) => {
  // console.log(props);
  const { theater, loading, error } = useSelector(
    (state) => state.theaterReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    setDanhSachVe((danhSachVe) => ({
      ...danhSachVe,
      maLichChieu: props.match.params.timeId,
    }));
    dispatch(getTheater(props.match.params.timeId));
  }, [props.match.params.timeId]);
  useEffect(() => {
    document.title = `ĐẶT VÉ - ${theater.thongTinPhim?.tenPhim}`;
  }, [theater.thongTinPhim?.tenPhim]);

  // Mảng chứa các ghế được chọn
  const [seatPicking, setSeatPicking] = useState([]);
  // Mảng chứa list ghế đẩy lên server
  const currentUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  const [danhSachVe, setDanhSachVe] = useState({
    maLichChieu: "",
    danhSachVe: [],
    taiKhoanNguoiDung: currentUser.taiKhoan || "",
  });

  // Cập nhập danh sách ghế sau mỗi lần đặt
  useEffect(() => {
    setDanhSachVe((current) => ({ ...current, danhSachVe: seatPicking }));
  }, [seatPicking]);

  const [total, setTotal] = useState(0);

  // Chọn ghế và thành tiền
  const handleSelect = (seat) => {
    //  let index = seatPicking.findIndex(seatPick => seatPick.maGhe === seat.maGhe);
    //  if(index !== -1){
    //   setSeatPicking(seatPicking.splice(index,1));
    //   setTotal(total - seat.giaVe)
    //  }else{
    //   setSeatPicking(seatPicking.push(seat))
    //   setTotal(total + seat.giaVe)
    //  }
    if (seatPicking.indexOf(seat) > -1) {
      // Nếu ghế đã có trong mảng đang chọn
      setTotal(total - seat.giaVe); // trừ đi tiền của ghế vừa bỏ
      setSeatPicking(seatPicking?.filter((res) => res !== seat)); // xóa khỏi res
    } else {
      // Nếu ghế chưa có trong mảng đang chọn
      setSeatPicking((res) => [...res, seat]); // thêm vào res
      setTotal(total + seat.giaVe); // cộng thêm tiền của ghế vừa đặt
    }
  };
  // dispatch lên api danhSachVe
  const handleBooking = (danhSachVe) => {
    dispatch(bookingTicket(danhSachVe));
    setSeatPicking([]);
  };

  console.log(theater);
  return (
    <div className="backgroundTheater">
      <div className="bookingTicket">
        <div className="theater">
          <div className="infoTheater">
            <h5>{theater.thongTinPhim?.tenCumRap}</h5>
            <p>
              {theater.thongTinPhim?.ngayChieu} -{" "}
              {theater.thongTinPhim?.gioChieu} - {theater.thongTinPhim?.tenRap}
            </p>
          </div>
          <img src="/img/screen.png" />
          <div className="seatList">
            {theater.danhSachGhe?.map((item, index) => {
              // Ghế trống
              let cssEmpty = "empty";
              // Ghế đã có người đặt rồi
              let cssPicked = "";
              let disabled = false;
              if (item.daDat) {
                cssPicked = "picked";
                disabled = true;
              }
              // Ghế đang đặt
              let cssPicking = "";
              let indexPicking = seatPicking.findIndex(
                (seatPick) => seatPick.maGhe === item.maGhe
              );
              if (indexPicking !== -1) {
                cssPicking = "picking";
              }
              return (
                <button
                  className={`${cssEmpty} ${cssPicked} ${cssPicking}`}
                  disabled={disabled}
                  onClick={() => handleSelect(item)}
                  key={index}
                >
                  <WeekendSharpIcon />
                </button>
              );
            })}
          </div>
          <div className="seatType">
            <a className="empty">
              <WeekendSharpIcon />
            </a>
            <span>Ghế trống</span>
            <a className="picking">
              <WeekendSharpIcon />
            </a>
            <span>Ghế đang chọn</span>
            <a className="picked">
              <WeekendSharpIcon />
            </a>
            <span>Ghế đã có người chọn</span>
          </div>
        </div>
        <div className="payment">
          <div className="padding">
            <h2>{total}đ</h2>
            <div className="infoTicket">
              <h4>
                <span>C13</span> {theater.thongTinPhim?.tenPhim}
              </h4>
              <p>{theater.thongTinPhim?.tenCumRap}</p>
              <p>
                {theater.thongTinPhim?.ngayChieu} -{" "}
                {theater.thongTinPhim?.gioChieu} -{" "}
                {theater.thongTinPhim?.tenRap}
              </p>
            </div>
            <p className="seatPicked item">
              Ghế :{" "}
              {seatPicking.map((item) => {
                return <span> {item.tenGhe} </span>;
              })}{" "}
            </p>
            <p className="item">Email: {currentUser.email}</p>
            <p className="item">Phone: {currentUser.soDT}</p>
            <div className="noReturn">
              <p>
                <WarningIcon /> Vé đã mua không được hoàn trả
              </p>
              <p>Mã vé sẽ được gửi qua tin nhắn và email đã nhập</p>
            </div>
          </div>
          <button
            className={`${
              danhSachVe.danhSachVe[0] !== undefined ? "activeButton" : ""
            }`}
            disabled={danhSachVe.danhSachVe.length === 0 ? true : false}
            onClick={() => handleBooking(danhSachVe)}
            data-toggle="modal"
            data-target="#bookingModal"
          >
            Đặt vé
          </button>
          <div
            className="modal fade"
            id="bookingModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <h5 className="modal-title" id="exampleModalLabel">
                  Đặt vé thành công
                </h5>
                <div className="modal-body">Xin cảm ơn!!!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
