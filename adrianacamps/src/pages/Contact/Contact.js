import React, { useEffect, useState } from "react";
import ContentContainer from "../../Components/ContentContainer";
import MainPageLayout from "../../layouts/MainPageLayout";
import "./style/contact.scss";
import sendArrow from "../../assets/arrow.png";
import WebNav from "../../Components/WebNav";
import { API, Storage } from "aws-amplify";
import { listContacts } from "../../graphql/queries";

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
    console.log("contact - ", contactsWithImages);
    setContacts(contactsWithImages);
  }

  // return (
  //   <>
  //     <MainPageLayout backgroundColorRight={"beige"}>
  //       <WebNav />
  //       <ContentContainer>
  //         <div id="contact">
  //           <div className="contact-right">
  //             <img src={contacts[0]?.contactImage} alt="contact" />
  //           </div>
  //           <div className="contact-left">
  //             <div className="contact-text">
  //               <p>
  //                 Si quieres más información sobre nuestros servicios, no dudes
  //                 en ponerte en contacto con nosotros rellenando este formulario
  //                 y te daremos una respuesta lo antes posible.
  //               </p>
  //             </div>

  //             <form id="contact-form">
  //               <input
  //                 type="text"
  //                 id="names"
  //                 name="names"
  //                 placeholder="Full Name"
  //               />
  //               <input
  //                 type="email"
  //                 id="email"
  //                 name="email"
  //                 placeholder="Email"
  //               />
  //               <input
  //                 type="text"
  //                 id="subject"
  //                 name="subject"
  //                 placeholder="Subject"
  //               />
  //               <input
  //                 type="text"
  //                 id="message"
  //                 name="message"
  //                 placeholder="Message"
  //               />
  //               <div className="send-form-container">
  //                 <img role="button" src={sendArrow} alt="sendForm" />
  //               </div>
  //             </form>
  //           </div>
  //         </div>
  //       </ContentContainer>
  //     </MainPageLayout>
  //   </>
  // );
  return (
    <>
      <MainPageLayout backgroundColorRight={"beige"}>
        <WebNav />
        <ContentContainer>
          <span className="try_span">
            <div id="contact">
              {/* <div className="contact-content"> */}
              <div className="contact-right">
                <div
                  className="contact-image"
                  style={{
                    backgroundImage: `url(${contacts[0]?.contactImage})`,
                  }}
                ></div>
              </div>
              <div className="contact-left">
                <div className="contact-text">
                  <p>{contacts[0]?.contactText}</p>
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
              </div>
            </div>
          </span>
          {/* </div> */}
        </ContentContainer>
      </MainPageLayout>
    </>
  );
}

export default Contact;
