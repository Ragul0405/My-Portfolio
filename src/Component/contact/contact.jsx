import React, { useRef } from 'react';
import '../contact/contact.css';
import fb from '../contact/nakuru.png';
import git from '../contact/github.png';
import linkdin from '../contact/in.png';
import insta from '../contact/insta.png';

function Contact() {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const message = form.current.message.value;

    try {
      const response = await fetch('http://localhost:5000/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
      });

      if (response.ok) {
        alert('Your message has been sent successfully!');
        form.current.reset();
      } else {
        alert('Failed to send the message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div id='contact'>
      <h1 className='contactpagetitle'>Contact Me</h1>
      <span className='contactdesc'>
        Please fill the form below to discuss any work opportunities.
      </span>

      <form className='contactform' ref={form} onSubmit={sendEmail}>
        <input type="text" className="namee" placeholder='Enter Your Name' name="user_name" required />
        <input type="email" className="email" placeholder='Enter Your E-Mail' name="user_email" required />
        <textarea className='msg' name='message' rows={5} placeholder='Leave Your Message' required></textarea>
        <button type='submit' className="submitbtn">Submit</button>
      </form>

      <div className="links">
        <img src={fb} alt="Naukri" className='link' onClick={() => window.location.href = 'https://www.naukri.com/mnjuser/profile?id=&altresid'} />
        <img src={git} alt="GitHub" className='link' onClick={() => window.location.href = 'https://github.com/Ragul0405'} />
        <img src={linkdin} alt="LinkedIn" className='link' onClick={() => window.location.href = 'https://www.linkedin.com/in/ragul-sankar/'} />
        <img src={insta} alt="Instagram" className='link' onClick={() => window.location.href = 'https://www.instagram.com/___ragul___s/'} />
      </div>
    </div>
  );
}

export default Contact;
