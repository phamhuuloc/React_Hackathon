import { Link, NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCategory } from "../../redux/reducer/voucherSlice";
import { useState } from "react";
import axios from "axios";
import { menuItem } from "./menuItem";
import "./Sidebar.scss";

const Sidebar = () => {
  const token = window.localStorage.getItem("token");
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const [categoryVoucher, setCategoryVoucher] = useState();
  let user = useSelector((state) => state.user.value);
  dispatch(setCategory(data));

  // handle envent when sidebar button clicked
  const getListVouchers = async (categoryVoucher) => {
    if (categoryVoucher === "tatca") {
      const res = await axios.get(
        "https://adventure-charity.herokuapp.com/api/voucher/list?page=1"
      );
      setData(res.data.vouchers);
    } else {
      const res = await axios.get(
        `https://adventure-charity.herokuapp.com/api/voucher/category/${categoryVoucher}`
      );
      setData(res.data.vouchers);
    }
  };
  // update state category  on redux store
  dispatch(setCategory(data));
  const [activeItem, setActiveItem] = useState(1);
  const handleClick = (id) => {
    setActiveItem(id);
  };

  return (
    <div className="sidebar-panel ">
      <div className="sidebar-panel-avatar">
        {token ? (
          <div className="sidebar-panel--login">
            <h2>{user.fullname}</h2>
            <p>
              <strong>Điểm: </strong>
              {user.point}
            </p>
          </div>
        ) : (
          <div className="sidebar-panel--not-login">
            <Link to="/login">Login</Link>
            <p>Đăng nhập để xem số điểm của bạn</p>
          </div>
        )}
        <div className="sidebar-panel-voucher-tags">
          <ul className="sidebar-panel-voucher-nav">
            {menuItem.options.map((item) => {
              return (
                <li
                  className={
                    item.class + (item.id === activeItem ? "active" : " ")
                  }
                  onClick={() => {
                    // setCategoryVoucher("mypham");
                    handleClick(item.id);
                    getListVouchers(item.value);
                  }}
                >
                  {item.textOption}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
