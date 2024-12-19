import { useState } from "react";
import Modal from "./../generic-modal/modal";
import "./navbar.scss";

import AppointmentButton from "./../appointment-button/AppointmentButton";
import AppointmentModalContent from "./../appointment-modal-content/AppointmentModalContent";
import { menuData } from "../data";

export default function Navbar({ children, activeMenuIndex }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <AppointmentModalContent />
        </Modal>
      )}
      <div className={`navbar-desktop navbar`}>
        <AppointmentButton
          onClickRDV={() => setIsModalOpen(true)}
          color={menuData[activeMenuIndex].color}
        />

        {/* Children is the left part of the navbar */}
        {children}
      </div>
    </>
  );
}
