import { Link, NavLink } from "react-router-dom";
import "./SidebarAdmin.scss";
const SidebarAdmin = () => {
  return (
    
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    <a href="/admin" className="brand-link">
      <img src="/template/admin/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: .8}}/>
      <span className="brand-text font-weight-light">AdminLTE 3</span>
    </a>

    <div className="sidebar">
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src="/template/admin/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image"/>
        </div>
        <div className="info">
          <a href="#" className="d-block">Alexander Pierce</a>
        </div>
      </div>

      <div className="form-inline">
        <div className="input-group" data-widget="sidebar-search">
          <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search"/>
          <div className="input-group-append">
            <button className="btn btn-sidebar">
              <i className="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div>

      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
       
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Danh mục
                <i className="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="/admin/menu/add" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Thêm danh mục</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/admin/menu/list" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Danh sách danh mục</p>
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-images"></i>
              <p>
                Slider
                <i className="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="/admin/slider/add" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Thêm Slider</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/admin/slider/list" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Danh sách Slider</p>
                </a>
              </li>
            </ul>
          </li>
          
          
        </ul>
      </nav>
    </div>
  </aside>
  );
};
export default SidebarAdmin;
