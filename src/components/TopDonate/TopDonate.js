import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import "./TopDonate.scss";
const initialFormData = {
  topDonationsMonth: [],
  topDonationsYear: [],
};

const TopDonate = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [listCurrentTop, setListCurrentTop] = useState(
    formData.topDonationsMonth
  );
  const token = window.localStorage.getItem("token");
  const [showTopMonth, setShowTopMonth] = useState(true);
  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("token");
      if (token === null) {
        localStorage.setItem("token", "");
        token = "";
      }
      if (token) {
        const topDonationList = await axios.get(
          "https://adventure-charity.herokuapp.com/api/donation/list/top",
          {
            headers: {
              authorization: token,
            },
          }
        );
        setFormData({
          topDonationsMonth: topDonationList.data.topDonationsMonth,
          topDonationsYear: topDonationList.data.topDonationsYear,
        });
        setListCurrentTop(topDonationList.data.topDonationsMonth);
      }
    };

    checkLoggedIn();
  }, []);
  return (
    <>
      <div className="card-header">
        <h3 className="card-title">
          Top Donate {showTopMonth ? "tháng" : "năm"}
        </h3>
        <div className="card-header-button">
          <button
            onClick={() => {
              setListCurrentTop(formData.topDonationsMonth);
              setShowTopMonth(true);
            }}
            className={showTopMonth ? "active" : ""}
          >
            Xếp theo tháng
          </button>
          <button
            onClick={() => {
              setListCurrentTop(formData.topDonationsYear);
              setShowTopMonth(false);
            }}
            className={showTopMonth ? "" : "active"}
          >
            Xếp theo năm
          </button>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Tên</th>
            <th>Email</th>
            <th>Số điểm</th>
          </tr>
        </thead>
        {formData.topDonationsMonth.length > 0 ? (
          formData.topDonationsMonth.map((item) => {
            return (
              <tr>
                <td>{item.user.fullname}</td>
                <td>{item.user.email}</td>
                <td>{item.total_point}</td>
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
export default TopDonate;
