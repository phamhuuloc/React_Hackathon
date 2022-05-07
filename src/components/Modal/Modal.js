import React from "react";
import "./Modal.scss";
const Modal = ({ setOpenModal }) => {
  console.log(setOpenModal);
  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal-close-btn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="modal-title">
          <h1>Are You Sure You Want to Continue?</h1>
        </div>
        <div className="modal-body">
          <p>The next page looks amazing. Hope you want to go there!</p>
        </div>
        <div className="modal-footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
            className="modal-cancel-btn"
          >
            Cancel
          </button>
          {/* <button className="modal-">Continue</button> */}
        </div>
      </div>
    </div>
  );
};
export default Modal;
