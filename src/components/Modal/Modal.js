import React from "react";
import "./Modal.scss";
const Modal = (prop) => {
  console.log(prop);
  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal-img">
          <img src={prop.data.image} alt="" />
        </div>

        <div className="modal-close-btn">
          <button
            onClick={() => {
              prop.setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="modal-title">
          <h3>Nhà cung cấp:{prop.data.supplier_name}</h3>
        </div>
        <div className="modal-body">
          <p>
            <strong>Loại: </strong> {prop.data.category}
          </p>
          <p>
            <strong>Mô tả:</strong> {prop.data.description}
          </p>
          <p>
            <strong>Điểm quy đổi: </strong> {prop.data.point_cost}
          </p>
        </div>
        <div className="modal-footer">
          <button
            onClick={() => {
              prop.setOpenModal(false);
            }}
            id="cancelBtn"
            className="modal-cancel-btn"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
