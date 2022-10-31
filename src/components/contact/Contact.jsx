
import '../contact/contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com'
import Nav from '../nav/Nav'
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o1jpual', 'template_hczdn6k', form.current, 'gt6aEjVP-6tSIi7U3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id='contact' data-aos="slide-right" data-aos-delay="50"> 
    <h5>Get in Touch</h5>
    <h2> Contact Me</h2>
<div className="container contact__container">
<div className="contact__options">
  <article className='contact__option'>
    <MdOutlineMail className='contact__option-icon' />
    <h4>Email </h4>
    <h5>ajjayya2002@gmail.com</h5>
    <a href='mailto:ajjayya2002@gmail.com'>Send Message</a>
  </article>
 
  <article className='contact__option'>
    <BsWhatsapp className='contact__option-icon' />
    <h4>Whatsapp </h4>
    <h5>6366325113</h5>
    <a href='https://api.whatsapp.com/send?phone=6366325113'>Send Message</a>
  </article>
</div>
<form ref={form} onSubmit={sendEmail}>
  <input type="text" name="name" placeholder="Your Full Name" required />
  <input type="email" name="email" placeholder="Your Your Email" required />
  <textarea name="message"  cols='30'nrows='7' placeholder='Your Message'  required></textarea>
  <button type='submit' className='btn btn-primary'>Send Message </button>
</form>
</div>
<Nav />
    </section>
  )
}

export default Contact