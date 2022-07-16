import React from "react";
import { Link } from "react-router-dom";
import step_1 from "../../img/step_1.png";
import step_2 from "../../img/step_2.png";
import step_3 from "../../img/step_3.png";
import "./WorkSection.scss";
const WorkSection = () => {
  return (
    <div className="work-section">
      <h1 className="work-section-title">Chúng Tôi Hoạt Động Như Thế Nào</h1>
      <div className="work-section-container">
        <div className="work-section-item">
          <img src={step_1} alt="" />
          <h4 className="work-section-item-title">Tạo Tài Khoản Và Nạp Tiền</h4>
          <p>
            Bạn có thể quyên góp bằng tiền đã được nạp vào tài khoản do chính bạn tạo để giúp đỡ cho những hoàn cảnh khó khăn
          </p>
        </div>
        <div className="work-section-item">
          <img src={step_2} alt="" />
          <h4 className="work-section-item-title">
            Lựa Chọn Hoàn Cảnh Để Ủng Hộ
          </h4>
          <p>
            Hằng tháng, chúng tôi sẽ cập nhật danh sách các hoàn cảnh khó khăn. Bạn có thể ủng hộ bất kì
          </p>
        </div>
        <div className="work-section-item">
          <img src={step_3} alt="" />
          <h4 className="work-section-item-title"></h4>
          <p>
            Những nhà tài trợ sẽ gửi đến những người quyên góp các voucher của
            những sản phẩm nhằm tri ân những điều tốt đẹp của người quyên góp
            mang lại cho cộng đồng
          </p>
        </div>
      </div>
      <Link to="/donation">
        <button>Quyên góp</button>
      </Link>
    </div>
  );
};
export default WorkSection;
