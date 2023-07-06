import React, { useEffect, useState } from "react";
import ContentContainer from "../../Components/ContentContainer";
import MainPageLayout from "../../layouts/MainPageLayout";
import useFetch from "../../hooks/useFetch";

import "./style/contact.scss";
import sendArrow from "../../assets/arrow.png";
import WebNav from "../../Components/WebNav";
import { API, Storage } from "aws-amplify";
import { listContacts } from "../../graphql/queries";
import { useForm, ValidationError } from "@formspree/react";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer } from "react-toastify";
import { showToast } from "../../Components/Toast/Toast";

// async function fetchContacts(setContacts) {
//   const contactData = await API.graphql({ query: listContacts });
//   const { items } = contactData.data.listContacts;
//   const contactsWithImages = await Promise.all(
//     items.map(async (contact) => {
//       if (contact.contactImage) {
//         contact.contactImage = await Storage.get(contact.contactImage);
//       }
//       return contact;
//     })
//   );
//   setContacts(contactsWithImages);
// }

const emailRegex =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function Contact() {
  const [contacts, setContacts] = useState([]);
  const [validationMessage, setValidationMessage] = useState("");

  // useEffect(() => {
  //   fetchContacts(setContacts);
  // }, []);
  const { data, loading, error } = useFetch(
    "http://localhost:1337/api/contacts?populate=contact_image"
  );

  const [state, handleSubmit] = useForm("mknayzwo");
  if (loading) return <p>{loading}</p>;
  if (error) return <p>{error}</p>;

  const contactImage =
    data.data[0].attributes.contact_image.data.attributes.url;
  const contactText = data.data[0].attributes.Contact_description;

  const verifyInput = (name, email, subject, message) => {
    if (!name || !email || !subject || !message) {
      setValidationMessage("Please fill in all fields");
      return false;
    }

    // Email verification
    if (!emailRegex.test(email)) {
      setValidationMessage("Please enter a valid email address");
      return false;
    }

    setValidationMessage("");
    return true;
  };
  // const notifyFormSuccess = (section) => {
  //   toast.success(`El correo ha sido enviado correctamente!`, {
  //     position: toast.POSITION.TOP_CENTER,
  //   });
  // };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const { name, email, subject, message } = event.target.elements;

    if (!verifyInput(name.value, email.value, subject.value, message.value))
      return;

    try {
      // const recaptchaResponse = await window.grecaptcha.execute();
      const formData = new FormData(event.target);
      // formData.set("g-recaptcha-response", recaptchaResponse);
      await handleSubmit(formData);
      showToast("El correo se ha enviado correctamente", "success");
      event.target.reset();
    } catch (error) {
      console.error(error);
      showToast("No se ha podido enviar el correo", "error");
    }
  };
  console.log(contactText);
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
                  src={`http://localhost:1337${contactImage}`}
                  alt="contact"
                ></img>
              </div>
              <div className="contact-left">
                <div className="contact-text">
                  <p>{contactText}</p>
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
