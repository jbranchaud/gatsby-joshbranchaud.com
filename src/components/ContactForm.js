import React from 'react';

const ContactForm = () => {
  return (
    <div>
      <header>
        <h2>Get in Touch</h2>
      </header>
      <form method="post" action="#">
        <div className="field half first">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="field half">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows={6} defaultValue={''} />
        </div>
        <ul className="actions">
          <li>
            <input type="submit" defaultValue="Send Message" className="alt" />
          </li>
        </ul>
      </form>
    </div>
  );
};

export default ContactForm;
