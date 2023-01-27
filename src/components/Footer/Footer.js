import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <section className="footer">
      <p className="footer__text">До скорой встречи,</p>
      <div className="footer__names">
        <p className="footer__name">Тиму&#8204;р и</p>
        <p className="footer__name footer__name-end">Светлана</p>
      </div>
    </section>
  );
}

export default Footer;