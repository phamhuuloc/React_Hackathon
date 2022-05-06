import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { FiGift } from "react-icons/fi";
import logo from "../../img/logo.png";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link className="navbar-logo" to="/">
          <img src={logo} alt="" />
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-menu-item">Giới thiệu</li>
          <li className="navbar-menu-item">
            Quyên góp
            <ul className="navbar-submenu">
              <li>Quyên góp quần áo</li>
              <li>Quyên góp tiền</li>
            </ul>
          </li>
          <li className="navbar-menu-item">Lịch sử quyên góp</li>
          <li className="navbar-menu-item">Đổi voucher</li>
          <li className="navbar-menu-item">Nhà tài trợ</li>
        </ul>
        <ul className="navbar-menu-icons">
          <li className="navbar-menu-icon">
            <span>Diểm:</span> 20
          </li>
          <li className="navbar-menu-icon">
            <AiOutlineUser />
          </li>
          <li className="navbar-menu-icon">
            <FiGift />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
