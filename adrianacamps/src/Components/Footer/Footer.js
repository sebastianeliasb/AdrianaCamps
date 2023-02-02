import React from "react";
//style
import "./style/footer.scss"
function Footer() {
  return (
    <footer id="footer-main-container">
      
        <div>
            <span>Instagram</span>
            <span> Pinterest</span>
            <span> Facebook</span>
            <span>LinkedIn</span>
        </div>
        <div>
            <span>(+34) 636 447 091</span>
            <span>info@adrianacamps.com</span>
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
    </footer>
  );
}

export default Footer;