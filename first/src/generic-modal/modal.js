import React from "react";
import "./modal.scss";

function Modal({ children, onClose }) {
  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        {children}
        <button style={styles.closeButton} onClick={onClose}>
          <span className="close fat thick"></span>
        </button>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    zIndex: 10,
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    position: "relative",
    width: "80%",
    maxWidth: "500px",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "transparent",
    border: "none",
    fontSize: "18px",
    cursor: "pointer",
  },
};

export default Modal;
