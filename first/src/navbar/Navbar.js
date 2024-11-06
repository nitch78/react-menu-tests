import { useState } from "react";
import Modal from "./../generic-modal/modal";
import "./navbar.scss";

import AppointmentButton from "./../appointment-button/AppointmentButton";
import AppointmentModalContent from "./../appointment-modal-content/AppointmentModalContent";

export default function Navbar({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <AppointmentModalContent />
        </Modal>
      )}
      <div className={`navbar-desktop navbar`}>
        <AppointmentButton onClickRDV={() => setIsModalOpen(true)} />
        {children}
      </div>
    </>
  );
}
