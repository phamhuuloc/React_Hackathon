import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import description_work from "../../img/description.png";
import "./HowWeWork.scss";
const HowWeWork = () => {
  return (
    <>
      <Navbar />
      <div className="how-we-work">
        <div className="how-we-work-content">
          <h1>Cam on vi da den</h1>
          <p>
            "Cam on vi da den" giúp bạn từ thiện thông qua tiền mặt và quần áo mà
            bạn muốn cho đi khiến chúng có thể làm ấm được một cuộc đời khác.
            Thông qua hành vi vì mọi người ủa bạn, bạn sẽ nhận được điểm để đổi
            voucher từ những nhà tài trợ cao cả. Giúp bạn có thể sắm thêm những
            sản phẩm bạn cần với giá cả tốt hơn thị trường. Mọi người cùng có
            cảm xúc tích cực
          </p>
          <h3>Cách trang web hoạt động</h3>
          <ol>
            <li>Tới mục từ thiện, điền vào thông tin và chọn cach từ thiện</li>
            <li>
              Khi từ thiện hoàn thành bạn nhận điểm share thông tin để những nhà
              hảo tâm khác biết về trang web cũng như hành động san sẻ của bạn
              đồng thời nhận thêm điểm
            </li>
            <li> Chọn voucher ở mục voucher mà bạn muốn</li>
            <li> Mua hàng với giá tốt từ nhà tài trợ</li>
            <li> Cảm thấy hạnh phúc và tiếp thêm năng lượng tích cực</li>
          </ol>
          <p>Hãy sống để sẻ chia</p>
        </div>
        <div className="how-we-work-img">
          <img src={description_work} alt=""/>
        </div>
      </div>
    </>
  );
};
export default HowWeWork;
