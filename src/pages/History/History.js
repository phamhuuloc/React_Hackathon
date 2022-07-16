import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import "./History.scss";
const initialFormData = {};

const History = () => {
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
                    "https://khoi-hi-vong.herokuapp.com/api/user/donation",
                    {
                        headers: {
                            authorization: token,
                        },
                    }
                );
                setFormData(userResponse.data.donationList);
            }
        };

        checkLoggedIn();
    }, []);
    console.log(formData);
    return (
        <>
            <Navbar />
            <div className="history-donation-header">
                <h3 className="history-donation-title">Lịch sử quyên góp</h3>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Loại</th>
                        <th>Số lượng</th>
                        <th>Ngày</th>
                        <th>Số điểm</th>
                    </tr>
                </thead>
                {formData.length > 0 ? (
                    formData.reverse().map((item) => {
                        return (
                            <tr>
                                <td>
                                    {item.type_of_donation == 1
                                        ? "Tiền"
                                        : "Quần áo"}
                                </td>
                                <td>
                                    {item.type_of_donation == 1
                                        ? item.money
                                        : item.clothes_amount}
                                </td>
                                <td>{item.createdAt.slice(0, 10)}</td>
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
export default History;
