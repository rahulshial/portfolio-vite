import React from 'react';
import './Contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';

const Contact = () => {
  return (
    <div id='contact'>
      <h2 className='section_title'>Get in Touch</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <br/>
            <a href='mailto:rahul.shial@gmail.com' target="_blank">Drop me a note</a>
            <h5>rahul.shial@gmail.com</h5>
          </article>
        </div>
        <form action='' className='contact__form'>
          <input className='form__input' type="text" name='name' placeholder='Your full name' required />
          <input className='form__input' type='email' name='email' placeholder='Your email' required />
          <textarea className='form__input' name='message' rows={7} placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;