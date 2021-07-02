import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import logo from "../../../Assets/img/web-logo.png";
import avatar from "../../../Assets/img/avatar.png";

const Header = () => {
  const { currentUser } = useSelector((state) => state.userReducer);

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand pt-0" to="/">
        <img src={logo} alt="" />
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="true"
        aria-label="Toggle navigation"
      >
        <span className="custom-toggler-icon bar1" />
        <span className="custom-toggler-icon bar2" />
        <span className="custom-toggler-icon bar3" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#showTime">
              Lịch chiếu
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#cinema">
              Cụm rạp
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#news">
              Tin tức
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#application">
              Ứng dụng
            </a>
          </li>
        </ul>
      </div>
      <div className="signIn">
        {currentUser ? (
          <div className="loginSuccess">
            <a
              data-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <img src={avatar} alt />
              <p>
                Hi, <span>{currentUser.hoTen}</span>
              </p>
            </a>
            <div class="collapse" id="collapseExample">
              <a onClick={logout}>Đăng xuất</a>
            </div>
          </div>
        ) : (
          <NavLink to="/login">
            <img src={avatar} alt />
            <span>Đăng nhập</span>
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Header;
