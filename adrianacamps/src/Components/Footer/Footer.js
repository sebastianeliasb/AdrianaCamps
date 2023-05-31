import React from "react";
//style
import "./style/footer.scss";

function Footer() {
  return (
    <footer id="footer-main-container">
      <div className="footer-top">
        <div>
          <span>
            <a href="https://www.instagram.com/adrianacamps.studio/">
              Instagram
            </a>
          </span>
          <span>
            {" "}
            <a href="https://www.pinterest.es/adrianacampsstudio/">Pinterest</a>
          </span>
          <span>
            <a>Facebook</a>
          </span>
          <span>
            <a href="https://www.linkedin.com/in/adriana-camps-3377b531/">
              LinkedIn
            </a>
          </span>
        </div>
        <div>
          <span>
            <a href="tel:(+34) 636 447 091">(+34) 636 447 091</a>
          </span>
          <span>
            <a href="mailto:info@adrianacamps.com">info@adrianacamps.com</a>
          </span>
          <span>Avinguda Barceloneta, 10</span>
          <span> 43895 L’Ampolla (Tarragona)</span>
        </div>
        <div>
          <span>Aviso Legal</span>
          <span>Política de privacidad</span>
          <span>Política de cookies</span>
          <span>Design by Sauras Garriga</span>
        </div>
        <div>© Adriana Camps 2023 — All Rights reserved</div>
      </div>
    </footer>
  );
}

export default Footer;
