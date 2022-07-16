import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
const initialFormData = {};

const MyVouchers = () => {
  const [formData, setFormData] = useState(initialFormData);
  const token = window.localStorage.getItem("token");
  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("token");
      if (token === null) {
        localStorage.setItem("token", "");
        token = "";
      }
      if (token) {
        const userResponse = await axios.get(
          "https://khoi-hi-vong.herokuapp.com/api/user/voucher",
          {
            headers: {
              authorization: token,
            },
          }
        );
        setFormData(userResponse.data.vouchersList);
      }
    };

    checkLoggedIn();
  }, []);
  console.log(formData);
  return (
    <>
      <Navbar />
      <div className="card-header">
        <h3 className="card-title">Voucher Của Tôi</h3>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Mã</th>
            <th>Loại</th>
            <th>Nhà cung cấp</th>
            <th>Số điểm</th>
          </tr>
        </thead>
        {formData.length > 0 ? (
          formData.map((item) => {
            return (
              <tr>
                <td>{item.voucher_code}</td>
                <td>{item.category}</td>
                <td>{item.supplier_name}</td>
                <td>{item.point_cost}</td>
              </tr>
            );
          })
        ) : (
          <div></div>
        )}
      </table>
    </>
  );
};
export default MyVouchers;
