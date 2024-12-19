import React, { useState } from "react";
import "./footer.scss";
import ContactForm from "../contact-me-modal/contact-me";
import Modal from "../generic-modal/modal";

function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mailTo, setMailTo] = useState(null);

  const handleClickOnMail = (mailTo) => {
    // THIS IS FOR LATER
    console.log(mailTo);
    //setIsModalOpen(true);
    //setMailTo(mailTo);
  };
  return (
    <footer className="footer">
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <ContactForm mailTo={mailTo} />
        </Modal>
      )}

      <div className="footer-map-contact">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.980263609521!2d4.880288176837841!3d45.731490615564006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c1f187b4e53d%3A0x3732f7f6a6cce919!2s3%20Rue%20de%20la%20Moselle%2C%2069008%20Lyon!5e0!3m2!1sfr!2sfr!4v1733838068509!5m2!1sfr!2sfr"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="map"
          ></iframe>
          <img
            src="https://via.placeholder.com/400"
            alt="Placeholder 4"
            className="left-image"
          />
        </div>

        <ul className="contact-info">
          <li className="infirmary">
            <h4>Infirmerie</h4>
            <p>
              <span className="material-icons">phone</span> 04.22.52.10.10
            </p>
            <p onClick={() => handleClickOnMail("dummy.mail@gmai.com")}>
              <span className="material-icons">email</span> dummy.mail@gmai.com
            </p>
            <p>
              <span className="material-icons">calendar_today</span>
              <a href="">Doctolib</a>
            </p>
            <p>
              <span className="material-icons">euro</span> XX€
            </p>
          </li>
          <li className="physiotherapy">
            <h4>Osthéopathie</h4>
            <p>
              <span className="material-icons">phone</span> 07.44.78.43.78
            </p>
            <p
              onClick={() => handleClickOnMail("stephane.dumas@osteo-lyon.fr")}
            >
              <span className="material-icons">email</span>
              stephane.dumas@osteo-lyon.fr
            </p>
            <p>
              <span className="material-icons">calendar_today</span>
              <a
                href="https://www.doctolib.fr/osteopathe/lyon/stephane-dumas-lyon"
                target="_blank"
              >
                Doctolib
              </a>
            </p>
            <p>
              <span className="material-icons">euro</span> 65€ - Chèque et
              espèces
            </p>
          </li>
          <li className="psychoMot">
            <h4>Psychomotricité</h4>
            <p>
              <span className="material-icons">phone</span> 04.22.52.10.10
            </p>
            <p onClick={() => handleClickOnMail("dummy@mail.com")}>
              <span className="material-icons">email</span>
              dummy@mail.com
            </p>
            <p>
              <span className="material-icons">calendar_today</span>
              <a href="">Liste d'attente</a>
            </p>
            <p>
              <span className="material-icons">euro</span> XX€
            </p>
            <p>
              <a href="">Comment consulter ?</a>
            </p>
          </li>
        </ul>
      </div>
      <div className="copyright">
        <p>
          &copy; {new Date().getFullYear()} - Tous droits réservés - Nicolas
          REMY
        </p>
      </div>
    </footer>
  );
}

export default Footer;
