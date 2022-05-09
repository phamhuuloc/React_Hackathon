import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./ListDonors.scss";
import "./ListDonors.scss";
const initialFormData = {};
const ListDonors = () => {
  const [formData, setFormData] = useState(initialFormData);
  const token = window.localStorage.getItem("token");

  useEffect(() => {
    const getListDonors = async () => {
      const listDonors = await axios.get(
        "https://adventure-charity.herokuapp.com/api/supplier/list?page=1"
      );
      setFormData(listDonors.data.suppliers);
    };

    getListDonors();
  }, []);
  console.log(formData);
  return (
    <>
      <div className="card-header">
        <h3 className="card-title">Danh Sách Nhà Tài Trợ</h3>
        {/* <div className="card-header-button"></div> */}
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Logo</th>
            <th>Tên</th>
          </tr>
        </thead>
        {formData.length > 0 ? (
          formData.map((item) => {
            return (
              <tr>
                <td>
                  <img src={item.image} alt="" />
                </td>
                <td>{item.supplier_name}</td>
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
export default ListDonors;
