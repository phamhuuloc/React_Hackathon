import { Link, NavLink } from "react-router-dom";
import { useEffect } from "react";
import "./Sidebar.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCategory } from "../../redux/reducer/voucherSlice";
import { useState } from "react";
import axios from "axios";
const Sidebar = () => {
  const token = window.localStorage.getItem("token");
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const [categoryVoucher, setCategoryVoucher] = useState("tatca");

  let user = useSelector((state) => state.user.value);
  dispatch(setCategory(data));
  console.log(categoryVoucher);
  const getListVouchers = async (categoryVoucher) => {
    if (categoryVoucher === "tatca") {
      const res = await axios.get(
        "https://adventure-charity.herokuapp.com/api/voucher/list?page=1"
      );
      setData(res.data.vouchers);
    } else {
      const res = await axios.get(
        ` https://adventure-charity.herokuapp.com/api/voucher/category/${categoryVoucher}`
      );
      setData(res.data.vouchers);
    }
  };

  dispatch(setCategory(data));
  return (
    <div className="sidebar-panel col-2">
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
            <li>Tất cả </li>
            <li
              onClick={() => {
                // setCategoryVoucher("mypham");
                getListVouchers("mypham");
              }}
            >
              Mỹ phầm{" "}
            </li>
            <li
              onClick={() => {
                // setCategoryVoucher("anuong");
                getListVouchers("anuong");
              }}
            >
              Ăn uống
            </li>
            <li
              onClick={() => {
                // setCategoryVoucher("quanao");
                getListVouchers("quanao");
              }}
            >
              Quần áo
            </li>
            <li
              onClick={() => {
                getListVouchers("thethao");
              }}
            >
              Thể thao
            </li>
            <li
              onClick={() => {
                getListVouchers("dochoi");
              }}
            >
              Đồ chơi{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
