import React, { useState } from 'react';



function ContactForm() {

    //the Hook that'll manage the form data
const [formState, setFormState] = useState({ name: '', email: '', message: '' });

const { name, email, message } = formState;

    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
      }
      
      function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      }

  return(
    <section>
        <h1>Contact Me</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div>    
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" defaultValue={name} onChange={handleChange} />
          </div>

          <div>    
            <label htmlFor="name">Email address:</label>
            <input type="email" name="email" defaultValue={email} onChange={handleChange} />
          </div>

          <div>    
            <label htmlFor="name">Message::</label>
            <textarea type="message" rows="5" defaultValue={message} onChange={handleChange} />
          </div>

          <button type="submit">submit</button>

        </form>
    </section>
  )

}

export default ContactForm;