import React, { useState, useEffect } from "react";
import axios from "axios";

const initialFormData = {
    _id: "",
    voucher_code: [],
    description : "",
    category : "",
    supplier_name: "",
    point_cost: "",
    image: "",
};

const ListVoucher = () => {
    const [data, setData] = useState(initialFormData);
    const [filters, setFilters] = useState({});

    const token = window.localStorage.getItem("token");

    useEffect(() => {
        const getListVouchers = async () => {
          const res = await axios.get(
            "http://adventure-charity.herokuapp.com/api/voucher/list?page=1"
          );
          setData(res.data.vouchers);
        };
        getListVouchers();
    }, []);

    async function removeVoucher(id) {
        const deleteVoucher = async () => {
            const res = await axios.delete(
              `http://adventure-charity.herokuapp.com/api/voucher/delete/${id}`,
              {
                headers: {
                  authorization: token,
                },
              }
            );
          };
          deleteVoucher();
    }

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

                <tbody>
                    {   
                        data.length ? (data.map((voucher) => (
                            (
                                <tr>
                                    <td>{voucher.description}</td>
                                    <td>{voucher.category}</td>
                                    <td>{voucher.supplier_name}</td>
                                    <td>{voucher.point_cost}</td>
                                    <td>
                                        <a className="btn btn-primary btn-sm" href={`/admin/voucher/edit/${voucher._id}`} >
                                            <i className="fas fa-edit"></i>
                                        </a>
                                        <a href="#" className="btn btn-danger btn-sm"
                                            onClick={() => removeVoucher(voucher._id)} key={voucher._id}>
                                            <i className="fas fa-trash"></i>
                                        </a>
                                    </td>
                                </tr>
                            )
                        ))) : <div></div>
                    }
                </tbody>
            </table>
        </>
    );
};
export default ListVoucher;
