import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { FiGift } from "react-icons/fi";
import logo from "../../img/logo.png";
import "./Navbar.scss";
const Navbar = () => {
  const isUser = true;
  const navigate = useNavigate;

  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link className="navbar-logo" to="/">
          <img src={logo} alt="" />
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-menu-item">
            <Link to="/story">Giới thiệu</Link>
            <ul className="navbar-submenu">
              <li>
                <Link to="/story">Câu chuyện của chúng tôi!</Link>
              </li>
              <li>
                <Link to="/work">Cách chùng tôi hoạt động!</Link>
              </li>
            </ul>
          </li>
          <li className="navbar-menu-item">
            <Link to="/donation">Quyên góp</Link>
          </li>
          <li className="navbar-menu-item">
            <Link to="/history">Lịch sử quyên góp</Link>
          </li>
          <li className="navbar-menu-item">
            <Link to="/vouchers">Đổi voucher</Link>
          </li>
          <li className="navbar-menu-item">
            <Link to="/donors">Nhà tài trợ</Link>
            <ul className="navbar-submenu">
              <li>Giới thiệu</li>
              <li>Tham gia tài trợ</li>
            </ul>
          </li>
        </ul>
        <ul className="navbar-menu-icons">
          {isUser ? (
            <>
              <li className="navbar-menu-icon">
                <Link to="/user">
                  <AiOutlineUser />
                </Link>
                <ul className="navbar-submenu navbar-submenu-user">
                  <li>Đăng xuất</li>
                  <li>Thông tin cá nhân</li>
                </ul>
              </li>
              <li className="navbar-menu-icon-score">
                <span>Điểm:</span> 20
              </li>

              <li className="navbar-menu-icon">
                <Link to="/myvoucher">
                  <FiGift />
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="navbar-register">
                <Link to="/register">Đăng nhập</Link>
              </li>
              <li className="navbar-login">
                <Link to="/login">Đăng ký</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
