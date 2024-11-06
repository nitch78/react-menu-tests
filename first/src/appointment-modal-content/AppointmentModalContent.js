import { menuData } from "../data";
import "./appointment-modal.scss";

export default function AppointmentModalContent() {
  return (
    <div className="appointment-modal-container">
      <h3>Veuillez choisir votre rendez-vous 😊</h3>
      {menuData
        .filter((x) => x.hasRDV)
        .map((x) => (
          <a
            key={x.label}
            href={x.RDVPath}
            target="_blank"
            className={`rdv-button-${x.color} rdv-button`}
          >
            {x.label}
          </a>
        ))}
    </div>
  );
}
