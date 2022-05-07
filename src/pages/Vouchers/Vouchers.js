import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useState } from "react";
import "./Vouchers.scss";
import Modal from "../../components/Modal/Modal";
const Vouchers = () => {
  const [modalOpen, setModalOpen] = useState(false);
  console.log(modalOpen);
  return (
    <>
      <Navbar />
      <div className="change-voucher">
        <div className="change-voucher-post">
          <div className="change-voucher-post-content">
            <h1> Phần thường chia sẻ</h1>
            <h3>Mọi sự sẻ chia đều đáng quý</h3>
            <h4> Cam on vi da den</h4>
            <p>
              Khi quyên góp và chia sẻ thông tin, để cảm ơn lòng hảo tâm của
              bạn, bạn sẽ nhận lại điểm để đổi các voucher của các nhà tài trợ,
              lựa chọn voucher bạn muốn và nhấn chữ đổi Những phần quà này tuy
              nhỏ nhưng mang đủ ý nghĩa của từ cảm ơn, cảm ơn bạn đã vì những
              cuộc đời khác, cảm ơn những nhà tài trợ đã khiến cho website phát
              triển
            </p>
            <p>Một lần nữa hãy tận hưởng những voucher dưới đây </p>
          </div>
          <div className="change-voucher-cards">
            <Sidebar />
            <div className="change-voucher-cards-grid">
              <div className="change-voucher-cards-row">
                <div className="change-voucher-cards-item">
                  <img
                    src="https://sadsindia.org/wp-content/uploads/2022/04/Airbnb_1200x1500.jpg"
                    alt=""
                  />
                  <div className="change-voucher-cards-item-info">
                    <div className="change-voucher-cards-item-price">10000</div>
                    <button className="change-voucher-cards-item-button">
                      READ MORE
                    </button>
                  </div>
                </div>
                <div className="change-voucher-cards-item">
                  <img
                    src="https://sadsindia.org/wp-content/uploads/2022/04/Airbnb_1200x1500.jpg"
                    alt=""
                  />
                  <div className="change-voucher-cards-item-info">
                    <div className="change-voucher-cards-item-price">10000</div>
                    <button
                      className="change-voucher-cards-item-button"
                      onClick={() => setModalOpen(true)}
                    >
                      READ MORE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {modalOpen && <Modal setOpenModal={setModalOpen} />}
      </div>
    </>
  );
};
export default Vouchers;
