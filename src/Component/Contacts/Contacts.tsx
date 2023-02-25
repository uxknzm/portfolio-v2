import React from 'react';
import emailjs from 'emailjs-com';
import { Form, Input } from 'semantic-ui-react';
import Swal from 'sweetalert2';




const SERVICE_ID = "service_y9nsc9q";
const TEMPLATE_ID = "template_rn52w4z";
const USER_ID = "ARVywANSU1CyZGq6h";
const Contacts = () => {
  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Сообщение успешно отправленно'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Упс, ошибочка:)',
          text: error.text,
        })
      });
    e.target.reset()
  };

  return (
    <section className="container contact active">
      <div className="contact-container">
        <div className="main-title">
          <h2>Contact <span>Me</span><span className="bg-text">Contact</span></h2>
        </div>
        <div className="contact-content-con">
          <div className="left-contact">
            <h4>Contact me here</h4>
            <div className="contact-info">
              <div className="contact-item">
                <div className="icon">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Location</span>
                </div>
                <p>
                   Kazan, Republic of Tatarstan
                </p>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <i className="fas fa-envelope"></i>
                  <span>Email</span>
                </div>
                <p>
                  <span> muazzelinkic@gmail.com</span>
                </p>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <i className="fas fa-user-graduate"></i>
                  <span>Education</span>
                </div>
                <p>
                  <span> Almetyevsk Polytechnic College</span>
                </p>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <i className="fas fa-user-graduate"></i>
                  <span>Mobile Number</span>
                </div>
                <p>
                  <span> +7 (900) 416-69-49</span>
                </p>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <i className="fas fa-globe-africa"></i>
                  <span>Languages</span>
                </div>
                <p>
                  <span> Russian</span>
                </p>
              </div>
            </div>
            <div className="contact-icons">
              <div className="contact-icon">
                <a href="https://t.me/uxknzm" target="_blank">
                  <i className="fab fa-telegram-plane"></i>
                </a>
                <a href="https://github.com/uxknzm" target="_blank">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="right-contact">
            <Form className="contact-form" onSubmit={handleOnSubmit}>
              <div className="input-control i-c-2">
                <Input style={{
                  margin: "0 5px",
                  flex: "1 1 auto"
                }} type="text" required placeholder="YOUR NAME" name='user_name' />
                <Input style={{
                  margin: "0 5px",
                  flex: "1 1 auto"
                }} type="email" required placeholder="YOUR EMAIL" name='user_email' />
              </div>
              <div className="input-control">
                <Form.TextArea style={{height: "155px"}} placeholder="Message Here..." name='user_message' required />
              </div>
              <div className="submit-btn">
                <button className="main-btn">
                  <span className="btn-text">Send</span>
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;