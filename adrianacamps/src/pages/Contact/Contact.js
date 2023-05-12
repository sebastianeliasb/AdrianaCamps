import React, { useEffect, useState } from "react";
import ContentContainer from "../../Components/ContentContainer";
import MainPageLayout from "../../layouts/MainPageLayout";
import "./style/contact.scss";
import sendArrow from "../../assets/arrow.png";
import WebNav from "../../Components/WebNav";
import { API, Storage } from "aws-amplify";
import { listContacts } from "../../graphql/queries";
import { useForm, ValidationError } from "@formspree/react";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";

function Contact() {
  const [contacts, setContacts] = useState([]);
  const [validationMessage, setValidationMessage] = useState("");

  useEffect(() => {
    fetchContacts();
  }, []);

  async function fetchContacts() {
    const contactData = await API.graphql({ query: listContacts });
    const { items } = contactData.data.listContacts;
    const contactsWithImages = [];
    for (let index = 0; index < items.length; index++) {
      let contact = items[index];
      if (contact.contactImage) {
        contact.contactImage = await Storage.get(contact.contactImage);
      }
      contactsWithImages.push(contact);
    }
    setContacts(contactsWithImages);
  }

  const [state, handleSubmit] = useForm("mknayzwo");

  const verifyInput = (name, email, subject, message) => {
    if (!name || !email || !subject || !message) {
      setValidationMessage("Please fill in all fields");
      return false;
    }

    // Email verification
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRegex.test(email)) {
      setValidationMessage("Please enter a valid email address");
      return false;
    }

    setValidationMessage("");
    return true;
  };
  const notifyFormSuccess = (section) => {
    toast.success(`El correo ha sido enviado correctamente!`, {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const subject = event.target.subject.value;
    const message = event.target.message.value;

    if (!verifyInput(name, email, subject, message)) return;

    try {
      // const recaptchaResponse = await window.grecaptcha.execute();
      const formData = new FormData(event.target);
      // formData.set("g-recaptcha-response", recaptchaResponse);
      await handleSubmit(formData);
      notifyFormSuccess();
      event.target.reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <MainPageLayout backgroundColorRight={"beige"}>
        <WebNav />
        <ContentContainer>
          <span className="try_span">
            <div id="contact">
              <div className="contact-right">
                <img
                  className="contact-image"
                  src={contacts[0]?.contactImage}
                  alt="contact"
                ></img>
              </div>
              <div className="contact-left">
                <div className="contact-text">
                  <p>
                    Si quieres más información sobre nuestros servicios, no
                    dudes en ponerte en contacto con nosotros rellenando este
                    formulario y te daremos una respuesta lo antes posible.
                  </p>
                </div>
                <form onSubmit={handleFormSubmit} id="contact-form">
                  <input
                    type="text"
                    id="names"
                    name="name"
                    placeholder="Full Name"
                    required
                  ></input>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                  ></input>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    required
                  ></input>
                  <input
                    type="text"
                    id="message"
                    name="message"
                    placeholder="Message"
                    required
                  ></input>
                  <div className="send-form-container">
                    {/* <ReCAPTCHA sitekey="<your-site-key>" /> */}
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                    <button type="submit" className="send-form-button">
                      <img src={sendArrow} alt="Send" />
                    </button>
                  </div>
                </form>
                <div>{validationMessage}</div>
              </div>
            </div>
          </span>
          <ToastContainer />
        </ContentContainer>
      </MainPageLayout>
    </>
  );
}

export default Contact;
