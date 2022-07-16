import React from "react";
import img_block_1 from "../../img/block_1.png";
import img_block_2 from "../../img/block_2.png";
import img_block_3 from "../../img/block_3.png";
import img_block_4 from "../../img/block_4.png";
import img_block_5 from "../../img/block_5.png";
import img_block_6 from "../../img/block_6.png";
import blockchain from "../../img/blockchain.png"
import charity from "..//../img/charity.png"
import "./WhyTrust.scss";
import { Link } from "react-router-dom";
const WhyTrust = () => {
  return (
    <div className="why-trust">
      <h1 className="why-trust-title">
        TẠI SAO BẠN NÊN TIN TƯỞNG CHÚNG TÔI?
      </h1>
      <div className="why-trust-container">
        <div className="why-trust-container-reason">
          <div className="why-trust-container-reason-img">
            <img src={charity}></img>
          </div>
          <div className="why-trust-container-reason-content">
            <h4>Các Hoàn Cảnh Được Lựa Chọn Nghiêm Ngặt</h4>
            <p>Để tránh các trường hợp lợi dụng lòng tốt để kiếm lời, trước khi đăng bài kêu gọi ủng hộ cho một hoàn cảnh, chúng tôi sẽ đến tận nơi để xem xét tình hình. Sau đó, các hình ảnh và
              liệu sẽ được đăng tải cùng với bài kêu gọi để tăng tính xác thực.
            </p>
          </div>
        </div>
        <div className="why-trust-container-reason">

          <div className="why-trust-container-reason-content">
            <h4>Xác Thực Bằng Công Nghệ BlockChain</h4>
            <p>
              Các giao dịch sẽ được lưu thông qua
              <a href="https://www.binance.com/vi/blog/all/c%C3%B4ng-ngh%C3%AA%CC%A3-blockchain-l%C3%A0-g%C3%AC-nh%E1%BB%AFng-th%C3%B4ng-tin-chi-ti%E1%BA%BFt-v%E1%BB%81-blockchain-421499824684901963"> công nghệ BlockChain</a>.
              Từ đó, các giao dịch luôn được công bố minh bạch. Sau mỗi lần kêu gọi ủng hộ, chúng tôi cũng sẽ đăng tải các bài thống kê tổng hợp để bạn dễ dàng theo dõi. Hãy tin tưởng chúng tôi nhé!
            </p>

          </div>
          <div className="why-trust-container-reason-img">
            <img src={blockchain} className="blockchain"></img>
          </div>

        </div>
      </div>

      <button>
        <Link to="/donors">THAM GIA TÀI TRỢ</Link>
      </button>
    </div>
  );
};
export default WhyTrust;
