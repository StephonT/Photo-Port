import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';



function ContactForm() {

    //the Hook that'll manage the form data
const [formState, setFormState] = useState({ name: '', email: '', message: '' });

const { name, email, message } = formState;
const [errorMessage, setErrorMessage] = useState('');

const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };
      
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  };

  return(
    <section>
        <h1>Contact Me</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div>    
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
          </div>

          <div>    
            <label htmlFor="name">Email address:</label>
            <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
          </div>

          <div>    
            <label htmlFor="name">Message::</label>
            <textarea type="message" rows="5" defaultValue={message} onBlur={handleChange} />
          </div>

          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}

          <button type="submit">submit</button>

        </form>
    </section>
  )

}

export default ContactForm;