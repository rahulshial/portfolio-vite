import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div id='contact'>
      <h2 className='section_title'>Get in Touch</h2>
      <div className="container portfolio__container">
        <div className="contact__options">
          <article className='contact__option'>
            <h4>Email</h4>
            <h5>rahul.shial@gmail.com</h5>
            <a href='mailto:rahul.shial@gmail.com'></a>
          </article>
        </div>
        <form action=''></form>
      </div>
    </div>
  );
};

export default Contact;