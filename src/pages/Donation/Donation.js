import React from "react";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Donation.scss";
const Donation = () => {
  const [data, setData] = useState({
    typeDonation: "",
    cartId: "",
    amount: "",
    address: "",
    shareIdea: "",
  });
  const handleButtonSubmit = () => {
    console.log(data);
    setData({
      typeDonation: "",
      cartId: "",
      money: "",
      address: "",
      amount: "",
      shareIdea: "",
    });
  };
  const handleResetButton = () => {
    setData({
      typeDonation: "",
      cartId: "",
      money: "",
      amount: "",
      shareIdea: "",
    });
  };
  const handeSelected = (e) => {
    setData({ ...data, typeDonation: e.target.value });
  };
  return (
    <>
      <Navbar />
      <div className="donation">
        <div className="donation-content">
          <div className="donation-form">
            <div className="donation-form-heading">
              <h1 className="donation-form-title">Quyên góp</h1>
              <button className="donation-form-submit">Tham gia tài trợ</button>
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
                    <option value="clothes" className="donation-type-option">
                      Quyên góp quần áo
                    </option>
                    <option value="money" className="donation-type-option">
                      Quyên góp tiền
                    </option>
                  </select>
                </div>
                <p className="donation-form-error"></p>
                {data.typeDonation === "money" ? (
                  <div className="donation-form-input">
                    <label htmlFor="email">
                      Số tài khoản ngân hàng của bạn
                    </label>
                    <input
                      type="text"
                      name="cartId"
                      id="cartId"
                      className="cartId"
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
                <div className="donation-form-input">
                  <label htmlFor="phone">
                    {data.typeDonation === "money" ? "SỐ tiền" : "Số lượng"}
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="phone"
                    value={data.amount}
                    onChange={(e) =>
                      setData({ ...data, amount: e.target.value })
                    }
                  />
                </div>

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
              <button
                className="donation-form-submit"
                onClick={() => handleButtonSubmit()}
              >
                SUBMIT
              </button>
              <button
                className="donation-form-reset"
                onClick={() => handleResetButton()}
              >
                RESET
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Donation;
