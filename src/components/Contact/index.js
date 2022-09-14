import React from 'react';

function ContactForm() {
  return(
    <section>
        <h1>Contact Me</h1>
        <form id="contact-form">
          <div>    
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" />
          </div>

          <div>    
            <label htmlFor="name">Email address:</label>
            <input type="email" name="email" />
          </div>

          <div>    
            <label htmlFor="name">Message::</label>
            <textarea type="message" rows="5" />
          </div>

          <button type="submit">submit</button>

        </form>
    </section>
  )

}

export default ContactForm;