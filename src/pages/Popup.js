import React from "react";

const Popup = ({ handleClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <h2>Popup Title</h2>
        <p>Popup content goes here...</p>
      </div>
    </div>
  );
};

export default Popup;
