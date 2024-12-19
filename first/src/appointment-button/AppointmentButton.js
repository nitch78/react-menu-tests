import "./appointment-button.scss";

export default function AppointmentButton({ onClickRDV, color }) {
  return (
    <button className="appointment-button" onClick={onClickRDV}>
      <a href="#" className={`button ${color}`}>
        Prendre RDV
      </a>
    </button>
  );
}
