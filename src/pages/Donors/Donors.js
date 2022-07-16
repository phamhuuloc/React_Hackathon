import React from "react";
import ListDonors from "../../components/ListDonors/ListDonors";
import Navbar from "../../components/Navbar/Navbar";
import TopDonate from "../../components/TopDonate/TopDonate";
import "./Donors.scss";
const Donors = () => {
  return (
    <>
      <Navbar />
      <div className="donors">
        <div className="donors-content">
          <h1>Nhà Tài Trợ</h1>
          <p>
            Nhà tài trợ đóng một vai trò cực kỳ quan trọng không thể thiếu trong
            ý tưởng từ thiện táo bạo của chúng tôi, nhà tài trợ có thể trợ giúp
            cộng đồng và đồng thời thúc đẩy bán hàng bằng cách gửi những voucher
            cho mặt hàng của các bạn. Các nhà tài trợ có thể tham gia tại đây
          </p>
          <p>
            Xin cảm ơn những nhà tài trợ dưới đây đã chia sẻ, tham gia cùng với
            chúng tôi:
          </p>

          <ListDonors />
          <div>
            <h2>Khối Hy Vọng</h2>
            {/* <h3>Thành viên nhóm</h3> */}
            <h3>
              Để tham gia tài trợ bạn có thể liên lạc với những thành viên sau{" "}
            </h3>
            <div className="donors-mentor">
              <div className="donors-mentor-member">
                <strong>Phạm Hữu Lộc</strong>{" "}
                <span>Email: loc281202@gmail.com</span>
              </div>
              <div className="donors-mentor-member">
                <strong>Nguyễn Văn Khang</strong>{" "}
                <span>Email: khang@gmail.com</span>
              </div>
              <div className="donors-mentor-member">
                <strong>Trần Duy Khánh</strong>{" "}
                <span>Email: duykhanh@gmail.com</span>
              </div>
              <div className="donors-mentor-member">
                <strong>Nguyễn Xuân Tuấn Kiệt</strong>{" "}
                <span>Email: tuankiet@gmail.com</span>
              </div>
              <div className="donors-mentor-member">
                <strong>Tô Thái Duy</strong>
                <span>Email: thaiduy@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Donors;
