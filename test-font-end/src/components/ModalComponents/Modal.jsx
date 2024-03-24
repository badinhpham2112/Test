import React, { useState } from "react";
import './Modal.scss'
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;