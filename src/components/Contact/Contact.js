import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import './contact.scss';
import contactImg from '../../assets/img/contact.svg';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_abwg8fq', 'template_0wqm7s8', form.current, 'oI8WnG_uJI3TTZFq3').then(
      (result) => {
        console.log(result.text);
        toast.success('Send success!');
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
        toast.error('Send error!');
      }
    );
  };

  console.log(form);

  return (
    <div id="contact">
      <h2>Get in touch</h2>
      <div className="container">
        <div className="panelLeft">
          <img src={contactImg} alt="" className="animate__animated animate__zoomIn" />
        </div>
        <div className="panelRight">
          <form ref={form} className="actionForm" onSubmit={sendEmail}>
            <div className="formInput">
              <div className="inputItem">
                <input type="text" placeholder="First name" name="firstName" required />
              </div>
              <div className="inputItem">
                <input type="text" placeholder="Last name" name="lastName" required />
              </div>
              <div className="inputItem">
                <input type="email" placeholder="Email" name="email" required />
              </div>
              <div className="inputItem">
                <input type="text" placeholder="Phone" name="phone" required />
              </div>
            </div>
            <div className="formMessage">
              <textarea cols="30" rows="10" placeholder="Message" name="message"></textarea>
            </div>
            <button type="submit">
              <span>Send</span>
            </button>
          </form>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default Contact;
