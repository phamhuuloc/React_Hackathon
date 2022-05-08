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
          <h4 className="work-section-item-title">Lựa chọn cách quyên góp</h4>
          <p>
            Bạn có thể quyên góp bằng tiền hoặc quần áo nếu quyên góp quần áo
            thì hãy nựa chọn địa điểm gửi hàng hoặc bạn có thể mang đến trụ sở
            gần nhất
          </p>
        </div>
        <div className="work-section-item">
          <img src={step_2} alt="" />
          <h4 className="work-section-item-title">
            Để đồ quyên góp trước cửa nhà
          </h4>
          <p>
            Chúng tôi sẽ đến nhà và thu gom những sản phẩm mà bạn đã quyên góp
            ,những vật phẩm này sẽ được giao cho tổ chức của chính phủ , để họ
            có thể chuyển nó đến những người có hoàn cảnh khó khăn.
          </p>
        </div>
        <div className="work-section-item">
          <img src={step_3} alt="" />
          <h4 className="work-section-item-title">Nhận phần thưởng</h4>
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
