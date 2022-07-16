import React from "react";
import img_block_1 from "../../img/block_1.png";
import img_block_2 from "../../img/block_2.png";
import img_block_3 from "../../img/block_3.png";
import img_block_4 from "../../img/block_4.png";
import img_block_5 from "../../img/block_5.png";
import img_block_6 from "../../img/block_6.png";
import "./Receiver.scss";
import { Link } from "react-router-dom";
import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css'
import { CorruptPageTreeError } from "pdf-lib";
import { GoTextSize } from "react-icons/go";
const receiver = () => {
  return (
    <div className="receiver">
      <h1 className="receiver-title">
        HOÀN CẢNH KHÓ KHĂN
      </h1>
      <div className="receiver-row">
        <div className="receiver-block">
          <div className="receiver-block-img">
            <img src="https://vnn-imgs-f.vgcloud.vn/2022/02/24/10/nu-sinh-mo-coi-cha-mac-benh-hiem-ngheo-suot-9-nam-dang-nguy-kich-tinh-mang.jpg" alt="" />
            <div className="receiver-block-img-details">
              <div className="receiver-block-img-details-total">
                <h4>100.000</h4>
                <p>Tổng tiền</p>
              </div>
              <div className="receiver-block-img-details-chart">

              </div>
            </div>
          </div>

          <h4>Giúp đỡ cộng đồng</h4>
          <p>
            Cùng chung tay nâng đỡ những hoàn cảnh bất hạnh, khó khăn. Lá lành
            đùm lá rách
          </p>
        </div>
        <div className="receiver-block">
          <div className="receiver-block-img">
            <img src="https://vnn-imgs-f.vgcloud.vn/2022/02/24/10/nu-sinh-mo-coi-cha-mac-benh-hiem-ngheo-suot-9-nam-dang-nguy-kich-tinh-mang.jpg" alt="" />
            <div className="receiver-block-img-details">
              <div className="receiver-block-img-details-total">
                <h5>100.000</h5>
                <h6>Tổng tiền</h6>
              </div>
              <div className="receiver-block-img-details-chart">
              <CircularProgressbar
                value= {60}
                text={`60`}background
                backgroundPadding={6}
                styles={buildStyles({
                  backgroundColor: "#3e98c7",
                  textColor: "#fff",
                  pathColor: "#fff",
                  trailColor: "transparent",
                  textSize: '28px'
                })}
      />
              </div>

            </div>
          </div>
          <div className="receiver-block-describe">
            <h4>Quảng Bá Sản Phẩm</h4>
            <p>
             Tạo thêm danh tiếng cho sản phẩm, nhiều người biết đến hơn thông qua
              tính năng voucher
            </p>
            <button>
             <Link to="/donation">Ủng Hộ</Link>
            </button>
          </div>

        </div>
        <div className="receiver-block">
          <img src={img_block_3} alt="" />
          <h4>Thu hút thêm khách hàng</h4>
          <p>
            Khách hàng dùng voucher mua hàng sẽ nhìn thấy thương hiệu của bạn và
            nếu có nhu cầu thì họ sẽ tìm hiểu và mua sản phẩm của bạn.
          </p>
        </div>
      </div>
      <div className="receiver-row">
        <div className="receiver-block">
          <img src={img_block_5} alt="" />
          <h4>Đề xuất trên trang của chúng tôi</h4>
          <p>
            Chúng tôi sẽ tri ân mọi nhà tài trợ trên trang web để tôn vinh hành
            động vì mọi người
          </p>
        </div>
        <div className="receiver-block">
          <img src={img_block_6} alt="" />
          <h4>Tăng thêm hạnh phúc và cảm giác hài lòng </h4>
          <p>
            Việc cho đi sẽ khiến chúng ta hạnh phúc hơn và đồng thời tăng thêm
            tín nhiệm đối với những nhà tài trợ
          </p>
        </div>
        <div className="receiver-block">
          <img src={img_block_4} alt="" />
          <h4>Tạo thêm cách quảng bá sản phẩm mới</h4>
          <p>
            Tài trợ cho mục đích từ thiện đồng thời là 1 cách quảng bá mới nhưng
            lại không gây khó chịu mà còn đem lại sự tôn trọng cho những đối
            tượng cần quảng bá.
          </p>
        </div>
      </div>

    </div>
  );
};
export default receiver;
