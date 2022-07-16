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
  const [topDonate, setTopDonate] = useState(initialFormData);
  const [listCurrentTop, setListCurrentTop] = useState(
    topDonate.topDonationsMonth
  );
  const [showTopMonth, setShowTopMonth] = useState(true);

  useEffect(() => {
    const getListTopDonate = async () => {
      const topDonationList = await axios.get(
        "https://khoi-hi-vong.herokuapp.com/api/donation/list/top"
      );
      console.log(topDonationList);

      setTopDonate({
        topDonationsMonth: topDonationList.data.topDonationsMonth,
        topDonationsYear: topDonationList.data.topDonationsYear,
      });

      setListCurrentTop(topDonationList.data.topDonationsMonth);
    };
    getListTopDonate();
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
              setListCurrentTop(topDonate.topDonationsMonth);
              setShowTopMonth(true);
            }}
            className={showTopMonth ? "active" : ""}
          >
            Xếp theo tháng
          </button>
          <button
            onClick={() => {
              setListCurrentTop(topDonate.topDonationsYear);
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
        {topDonate.topDonationsMonth.length > 0 ? (
          topDonate.topDonationsMonth.map((item) => {
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
