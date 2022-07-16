import React from "react";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import "./Donation.scss";
import { Link, useNavigate } from "react-router-dom";
import { isFulfilled } from "@reduxjs/toolkit";
import ShareLink from "react-facebook-share-link";
import { toast } from "react-toastify";

const Donation = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [certificate, setCertificate] = useState("");
  const [certificateId, setCertificateId] = useState("");
  const [data, setData] = useState({
    typeDonation: "",
    cartId: "",
    money: 0,
    amount: 0,
    address: "",
    shareIdea: "",
  });

  const handleResetButton = () => {
    setData({
      typeDonation: "",
      cartId: "",
      money: 0,
      amount: 0,
      shareIdea: "",
      address: "",
    });
  };

  const handeSelected = (e) => {
    setData({ ...data, typeDonation: e.target.value });
  };

  const token = window.localStorage.getItem("token");
  const donation = async (e) => {
    try {
      let data_1 = {
        type_of_donation: data.typeDonation,
        money: data.money === "" ? 0 : Number(data.money),
        clothes_amount: data.amount === "" ? 0 : Number(data.amount),
        address: data.address,
        card_id: data.cartId,
      };
      if (token) {
        const res = await axios.post(
          "https://khoi-hi-vong.herokuapp.com/api/user/donation",
          data_1,
          {
            headers: {
              authorization: token,
            },
          }
        );
        setCertificateId(res.data.certificateId);
        setCertificate(res.data.certificate);

        toast.success(res.data.message);
      }
      setData({
        typeDonation: "",
        cartId: "",
        money: 0,
        address: "",
        amount: 0,
        shareIdea: "",
      });
    } catch (err) {
      toast.error(err.response.data.message);
      console.log(err);
    }
  };
  console.log(message);

  return (
    <>
      <Navbar />
      <div className="donation">
        <div className="donation-content">
          <div className="donation-form">
            <div className="donation-form-heading">
              <h1 className="donation-form-title">Quyên góp</h1>
              <div className="donation-form-wrapper">
                <button className="donation-form-submit">
                  <Link to="/donors">Tham gia tài trợ</Link>
                </button>
                {certificate ? (
                  <button className="donation-form-submit-share">
                    <ShareLink link={`${certificate}`}>
                      {(link) => (
                        <a href={link} target="_blank" rel="noreferrer">
                          Chia sẻ
                        </a>
                      )}
                    </ShareLink>
                  </button>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
            <div className="donation-form-row">
              <div className="donation-form-group">
                <div className="donation-form-input">
                  <label htmlFor="full_name">Loại hình quyên góp</label>
                  <select
                    id=""
                    name="donation-type"
                    className="donation-type"
                    value={data.typeDonation}
                    onChange={(e) =>
                      setData({ ...data, typeDonation: e.target.value })
                    }
                  >
                    <option value="2" className="donation-type-option">
                      Quyên góp quần áo
                    </option>
                    <option value="1" className="donation-type-option">
                      Quyên góp tiền
                    </option>
                  </select>
                </div>
                <p className="donation-form-error"></p>
                {data.typeDonation === "1" ? (
                  <div className="donation-form-input">
                    <label htmlFor="cartId">
                      Số tài khoản ngân hàng của bạn
                    </label>
                    <input
                      type="number"
                      name="cartId"
                      id="cartId"
                      className="cartId"
                      min="0"
                      value={data.cartId}
                      onChange={(e) =>
                        setData({ ...data, cartId: e.target.value })
                      }
                    />
                  </div>
                ) : (
                  <div className="donation-form-input">
                    <label htmlFor="address">Địa chỉ của bạn</label>
                    <input
                      type="text"
                      name="cartId"
                      id="address"
                      className="address"
                      value={data.address}
                      onChange={(e) =>
                        setData({ ...data, address: e.target.value })
                      }
                    />
                  </div>
                )}
                <p className="donation-form-error"></p>
                {data.typeDonation === "1" ? (
                  <div className="donation-form-input">
                    <label htmlFor="money">Số tiền</label>
                    <input
                      type="number"
                      name="money"
                      id="money"
                      className="phone"
                      value={data.money}
                      min="0"
                      onChange={(e) =>
                        setData({ ...data, money: e.target.value })
                      }
                    />
                  </div>
                ) : (
                  <div className="donation-form-input">
                    <label htmlFor="money">Số lượng</label>
                    <input
                      type="number"
                      name="money"
                      id="money"
                      className="phone"
                      min="0"
                      value={data.amount}
                      onChange={(e) =>
                        setData({ ...data, amount: e.target.value })
                      }
                    />
                  </div>
                )}

                <p className="donation-form-error"></p>
                <p className="donation-form-error"></p>
              </div>

              <div className="donation-form-group">
                <p className="donation-form-error"></p>
                <div className="donation-form-input">
                  <label htmlFor="shareIdea">
                    Hãy chia sẻ những ý tướng của bạn đến với chúng tôi
                  </label>

                  <textarea
                    name="shareIdea"
                    className="donation-form-share"
                    value={data.shareIdea}
                    onChange={(e) =>
                      setData({ ...data, shareIdea: e.target.value })
                    }
                  ></textarea>
                </div>

                <p className="donation-form-error"></p>
              </div>
            </div>
            <div className="donation-form-button">
              <button className="donation-form-submit">
                <Link
                  to={token === "" || token === null ? "/login" : " "}
                  onClick={() => donation()}
                >
                  Gửi
                </Link>
              </button>
              <button
                className="donation-form-reset"
                onClick={(e) => handleResetButton(e)}
              >
                Làm Mới
              </button>
            </div>
            {certificate ? (
              <img src={`${certificate}`} width="885px" height="626px"></img>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Donation;
