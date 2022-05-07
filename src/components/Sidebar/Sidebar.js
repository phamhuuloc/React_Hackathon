import { Link, NavLink } from "react-router-dom";
import "./Sidebar.scss";
const Sidebar = () => {
  return (
    <div className="sidebar-panel col-2">
      <div className="sidebar-panel-avatar">
        <div className="sidebar-panel--not-login">
          <Link to="/login">Login</Link>
          <p>Đăng nhập để xem số điểm của bạn</p>
        </div>
        <div className="sidebar-panel-voucher-tags">
          <ul className="sidebar-panel-voucher-nav">
            <li>
              <NavLink to="all">Tất cả</NavLink>
            </li>
            <li>
              <NavLink to=""> Mỹ phầm</NavLink>
            </li>
            <li>
              <NavLink to=""> Ăn uống</NavLink>
            </li>
            <li>
              <NavLink to=""> Quần áo</NavLink>
            </li>
            <li>
              <NavLink to="">Thể thao</NavLink>
            </li>
            <li>
              <NavLink to="">Đồ chơi</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
