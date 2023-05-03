import React, { useEffect, useState } from "react";
import ContentContainer from "../../Components/ContentContainer";
import MainPageLayout from "../../layouts/MainPageLayout";
import "./style/contact.scss";
import sendArrow from "../../assets/arrow.png";
import WebNav from "../../Components/WebNav";
import { API, Storage } from "aws-amplify";
import { listContacts } from "../../graphql/queries";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [contacts, setContacts] = useState([]);
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

  const handleFormSubmit = async (event) => {
    event.preventDefault(); // prevent default form submission behavior

    try {
      await handleSubmit(event); // submit form data to Formspree
      alert("Thank you for your message!"); // show confirmation message
      event.target.reset(); // reset form inputs
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
              </div>
            </div>
          </span>
        </ContentContainer>
      </MainPageLayout>
    </>
  );
}

export default Contact;
