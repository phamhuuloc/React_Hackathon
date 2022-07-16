import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { GoDiffAdded } from "react-icons/go";
import { RiArrowDropDownLine } from "react-icons/ri";
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
  const [showSubmenu, setShowSubMenu] = useState(false);
  const [showSubmenuUser, setShowSubMenuUser] = useState(false);
  const handleLogOut = () => {
    user = "";
    window.localStorage.removeItem("token");
    dispatch(setUser(user));
    navigate("/login");
  };
  let token = window.localStorage.getItem("token");
  // useEffect and the context API to check if a user i logged in and protect a
  // route

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
          "https://khoi-hi-vong.herokuapp.com/api/user",
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
  const handleToggleSubmenu = (e) => {
    console.log(e);
    e.target.classList.contains("isShowSubmenu");
  };
  console.log(showSubmenu);
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
          {token ? (
            <li className="navbar-menu-item navbar-menu-item-user">
              <span onClick={() => setShowSubMenuUser(!showSubmenuUser)}>
                {userData.user.fullname}
              </span>
              <i>
                <RiArrowDropDownLine />
              </i>

              <ul
                className={
                  showSubmenuUser
                    ? "navbar-submenu-user showUserMenu"
                    : "navbar-submenu-user"
                }
              >
                <li>
                  <span>Điểm:</span> {userData.user.point}
                </li>
                <li>
                  <span>Tiền:</span> {userData.user.wallet_balance}
                </li>
                <li>
                  <Link to="/myvoucher">
                    Voucher của tôi
                    <i>
                      <FiGift />
                    </i>
                  </Link>
                </li>

                <li>
                  <Link to="/recharge">
                    Nạp Tiền
                    <i>
                      <GoDiffAdded />
                    </i>
                  </Link>
                </li>
                <li onClick={() => handleLogOut()}>
                  <button>Đăng xuất</button>
                </li>
              </ul>
            </li>
          ) : (
            <div></div>
          )}
          <li className="navbar-menu-item">
            <div>
              <span onClick={() => setShowSubMenu(!showSubmenu)}>
                Giới thiệu
              </span>
              <i>
                <RiArrowDropDownLine />
              </i>
            </div>
            <ul
              className={
                showSubmenu ? "navbar-submenu isShowSubmenu" : "navbar-submenu"
              }
            >
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
            <Link to={token ? "/history" : "/login"}>Lịch sử quyên góp</Link>
          </li>
          <li className="navbar-menu-item">
            <Link to="/vouchers">Đổi voucher</Link>
          </li>
          <li className="navbar-menu-item">
            <Link to="/donors">Nhà tài trợ</Link>
          </li>
        </ul>
        <ul className="navbar-menu-icons">
          {token !== null && token !== "" ? (
            <>
              <li className="navbar-menu-icon">
                <Link to="/user">
                  <i>
                    <AiOutlineUser />
                  </i>
                </Link>
                <ul
                  className={
                    showSubmenu
                      ? "navbar-submenu isShowSubmenu navbar-submenu-user"
                      : "navbar-submenu navbar-submenu-user"
                  }
                >
                  <li>
                    <Link to="/login" onClick={() => handleLogOut()}>
                      Đăng xuất
                    </Link>
                  </li>
                  <li>
                    <Link to="/user">Thông tin cá nhân</Link>
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
                <Link to="/recharge">
                  <i>
                    <GoDiffAdded />
                  </i>
                </Link>
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
