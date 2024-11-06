import "./appointment-button.scss";

export default function AppointmentButton({ onClickRDV }) {
  return (
    <button className="appointment-button" onClick={onClickRDV}>
      <a href="#" className="button">
        Prendre RDV
      </a>
    </button>
  );
}
