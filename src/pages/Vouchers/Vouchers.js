import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import "./Vouchers.scss";
import Modal from "../../components/Modal/Modal";
import axios from "axios";
import { AiFillYuque } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Vouchers = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [dataVoucher, setDataVoucher] = useState({});
  const token = window.localStorage.getItem("token");
  const navigate = useNavigate();

  let vourches = useSelector((state) => state.category.value);
  // useEffect(() => {
  //   console.log(vourches);
  // });

  useEffect(() => {
    const getListVouchers = async () => {
      const res = await axios.get(
        "http://adventure-charity.herokuapp.com/api/voucher/list?page=1"
      );
      setData(res.data.vouchers);
    };
    getListVouchers();
  }, []);
  const getVoucher = async (id) => {
    try {
      let idVoucher = { voucher_id: id };

      if (token) {
        const res = await axios.post(
          "http://adventure-charity.herokuapp.com/api/user/voucher",
          idVoucher,
          {
            headers: {
              authorization: token,
            },
          }
        );
        alert(res.data.message);
      } else {
        navigate("/login");
      }
    } catch (err) {
      alert(err.response.data.message);
      console.log(err);
    }
  };
  const getVocherId = (voucher) => {
    let voucherInfo = vourches.find((item) => item._id === voucher._id);
    setDataVoucher(voucherInfo);
  };
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
                {data.map((voucher) => {
                  return (
                    <div
                      className="change-voucher-cards-item"
                      key={voucher._id}
                    >
                      <img src={voucher.image} alt="voucher img" />
                      <div className="change-voucher-cards-item-info">
                        <div className="change-voucher-cards-item-price">
                          <span>Điểm:</span>
                          {voucher.point_cost}
                        </div>
                        <div className="change-voucher-cards-item-option">
                          <button
                            className="change-voucher-cards-item-option-read"
                            onClick={() => {
                              getVocherId(voucher);
                              setModalOpen(true);
                            }}
                          >
                            Xem thêm
                          </button>
                          <button
                            className="change-voucher-cards-item-option-get"
                            onClick={() => {
                              getVoucher(voucher._id);
                            }}
                          >
                            Đổi voucher
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {modalOpen && <Modal setOpenModal={setModalOpen} data={dataVoucher} />}
      </div>
    </>
  );
};
export default Vouchers;
