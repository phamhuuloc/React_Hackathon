import React from "react";
import "./DonateSection.scss";
import donation_money from "../../img/money.png";
import donation_clothes from "../../img/clothes.png";
const DonateSection = () => {
  return (
    <div className="donate-anything">
      <h1 className="donate-anything-title" >QUYÊN GÓP TIỀN VÀ QUẦN ÁO</h1>
      <div className="donate-row"></div>
      <div className="donate-row">
        <div className="donate-type-block">
          <img src={donation_money} alt="" />
          <h6>Quyên góp tiền</h6>
        </div>
        <div className="donate-type-block">
          <img src={donation_clothes} alt="" />
          <h6>Quyên góp quần áo</h6>
        </div>
      </div>
    </div>
  );
};
export default DonateSection;
