import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { FiGift } from "react-icons/fi";
import logo from "../../img/logo.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/reducer/userSlice";
import "./Navbar.scss";
import axios from "axios";
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const navigate = useNavigate;

  let user = useSelector((state) => state.user.value);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    console.log("run.....");
    user = "";
    window.localStorage.removeItem("token");
    dispatch(setUser(user));
    navigate("/login");
  };
  let token = window.localStorage.getItem("token");
  // useEffect and the context API to check if a user i logged in and protect a
  // route

  //
  const [userData, setUserData] = useState({
    token: "",
    user: {},
  });
  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("token");
      if (token === null) {
        localStorage.setItem("token", "");
        token = "";
      }
      if (token) {
        const userResponse = await axios.get(
          "https://adventure-charity.herokuapp.com/api/user",
          {
            headers: {
              authorization: token,
            },
          }
        );
        dispatch(setUser(userResponse.data));
        setUserData({
          token,
          user: userResponse.data,
        });
      }
    };

    checkLoggedIn();
  }, []);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link className="navbar-logo" to="/">
          <img src={logo} alt="" />
        </Link>
        <ul className={`navbar-menu ${navbarOpen ? "is-show" : ""}`}>
          <span className="closeToggle" onClick={handleToggle}>
            <i className="fa fa-times"></i>
          </span>
          <li className="navbar-menu-item">
            <Link to="/story">Giới thiệu</Link>
            <ul className="navbar-submenu">
              <li>
                <Link to="/story">Câu chuyện của chúng tôi!</Link>
              </li>
              <li>
                <Link to="/work">Cách chúng tôi hoạt động!</Link>
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
            {/* <ul className="navbar-submenu"> */}
            {/*   <li> */}
            {/*     <Link to="/donors">Giới thiệu</Link> */}
            {/*   </li> */}
            {/*   <li></li> */}
            {/* </ul> */}
          </li>
        </ul>
        <ul className="navbar-menu-icons">
          {token !== null && token !== "" ? (
            <>
              <li className="navbar-menu-icon">
                <Link to="/user">
                  <AiOutlineUser />
                </Link>
                <ul className="navbar-submenu navbar-submenu-user">
                  <li>
                    <Link to="/login" onClick={() => handleLogOut()}>
                      Đăng xuất
                    </Link>
                  </li>
                  <li>
                    <Link to="/userinfo">Thông tin cá nhân</Link>
                  </li>
                  {userData.user.role === "admin" ? (
                    <li>
                      <Link to="/admin/voucher/add">Trang admin</Link>
                    </li>
                  ) : (
                    <div></div>
                  )}
                </ul>
              </li>
              <li className="navbar-menu-icon-score">
                <span>Điểm:</span> {userData.user.point}
              </li>
              <li className="navbar-menu-icon-score">
                <span>Tiền:</span> {userData.user.wallet_balance}
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
                <Link to="/login">Đăng nhập</Link>
              </li>
              <li className="navbar-login">
                <Link to="/register">Đăng ký</Link>
              </li>
            </>
          )}
          <span className="openToggle" onClick={handleToggle}>
            <i className="fa fa-bars"></i>
          </span>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
