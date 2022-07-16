import React from "react";
import AddVoucher from "../../components/AdminContent/Voucher/AddVoucher";
import AddSupplier from "../../components/AdminContent/Supplier/AddSupplier";
import ListVoucher from "../../components/AdminContent/Voucher/ListVoucher";
import AddReceiver from "../../components/AdminContent/Receiver/AddReceiver";
import ListReceiver from "../../components/AdminContent/Receiver/ListReceiver";
import Navbar from "../../components/Navbar/Navbar";
import SidebarAdmin from "../../components/SidebarAdmin/SidebarAdmin";
import "./Admin.scss";
import EditVoucher from "../../components/AdminContent/Voucher/EditVoucher.";

const Admin = ({ route }) => {
    const body = (
        <>
            {route === "/admin/voucher/add" && <AddVoucher />}
            {route === "/admin/voucher/list" && <ListVoucher />}
            {route === "/admin/supplier/add" && <AddSupplier />}
            {route === "/admin/voucher/edit" && <EditVoucher />}
            {route === "/admin/receiver/add" && <AddReceiver />}
            {route === "/admin/receiver/list" && <ListReceiver />}
        </>
    );
    return (
        <>
            <Navbar />
            <div className="wrapper  ">
                <nav className="main-header mt-3 navbar navbar-expand navbar-white navbar-light z-index-n1">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                data-widget="pushmenu"
                                href="#"
                                role="button"
                            >
                                <i className="fas fa-bars"></i>
                            </a>
                        </li>
                    </ul>

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                data-widget="fullscreen"
                                href="#"
                                role="button"
                            >
                                <i className="fas fa-expand-arrows-alt"></i>
                            </a>
                        </li>
                    </ul>
                </nav>

                <SidebarAdmin />

                <div className="content-wrapper">
                    <section className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card card-primary">
                                        {body}
                                    </div>
                                </div>
                                <div className="col-md-6"></div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};
export default Admin;
