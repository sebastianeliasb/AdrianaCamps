import React from "react";
import ContentContainer from "../../Components/ContentContainer";
import MainPageLayout from "../../layouts/MainPageLayout";
import "./style/contact.scss";
import contactImage from "../../assets/contact_image.png";
import sendArrow from "../../assets/arrow.png";

function Contact() {
  return (
    <>
      <MainPageLayout>
        <ContentContainer>
          <div
            className="contact-image"
            style={{ background: `url(${contactImage}) no-repeat` }}
          ></div>
          <div className="contact-text">
            <p>
              Si quieres más información sobre nuestros servicios, no dudes en
              ponerte en contacto con nosotros rellenando este formulario y te
              daremos una respuesta lo antes posible.
            </p>
          </div>
          <form id="contact-form">
            <input
              type="text"
              id="names"
              name="names"
              placeholder="Full Name"
            ></input>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
            ></input>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
            ></input>
            <input
              type="text"
              id="message"
              name="message"
              placeholder="Message"
            ></input>
            <div className="send-form-container">
              <img role="button" src={sendArrow} alt="sendForm"></img>
            </div>
          </form>
        </ContentContainer>
      </MainPageLayout>
      ;
    </>
  );
}

export default Contact;
