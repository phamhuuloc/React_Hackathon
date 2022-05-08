import React, { useState, useEffect } from "react";
import axios from "axios";

const initialFormData = {
    description: "",
    category: "",
    supplier_name: "",
    point_cost: "",
    image: "",
};

const ListVoucher = () => {
    const [formData, setFormData] = useState(initialFormData);
    const [filters, setFilters] = useState({});

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get(
                    "https://adventure-charity.herokuapp.com/api/voucher/list?page=1"
                );
                setFormData(res.data.vouchers);
                console.log(formData);
            } catch (error) {
                console.log(error.message);
            }
        })();
    }, []);
    // const table         // formData.vouchers.reduce((oldTable, voucher) => {
    //     oldTable += `
    //         <tr>
    //             <td>${voucher.description}</td>
    //             <td>${voucher.category}</td>
    //             <td>${voucher.supplier_name}</td>
    //             <td>${voucher.point_cost}</td>
    //             <td>
    //                 <a className="btn btn-primary btn-sm" href="/admin/menus/edit/' . $menu->id . '">
    //                     <i className="fas fa-edit"></i>
    //                 </a>
    //                 <a href="#" className="btn btn-danger btn-sm"
    //                     onclick="removeRow(' . $menu->id . ', \'/admin/menus/destroy\')">
    //                     <i className="fas fa-trash"></i>
    //                 </a>
    //             </td>
    //         </tr>
    //     `
    // }, "")
    // `a`;

    return (
        <>
            <div className="card-header">
                <h3 className="card-title">Danh sách voucher</h3>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Mô tả</th>
                        <th>Loại voucher</th>
                        <th>Nhà tài trợ</th>
                        <th>Số điểm</th>
                        <th style={{ width: 100 }}>&nbsp;</th>
                    </tr>
                </thead>
                {formData.map((voucher) => {
                    return (
                        <tr>
                            <td>{voucher.description}</td>
                            <td>{voucher.category}</td>
                            <td>{voucher.supplier_name}</td>
                            <td>{voucher.point_cost}</td>
                        </tr>
                    );
                })}
                {/* <tbody>
                    {
                        table
                    }
                </tbody> */}
            </table>
        </>
    );
};
export default ListVoucher;
