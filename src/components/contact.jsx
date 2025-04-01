import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-container">
        {/* Contact Info Item 1 */}
        <div className="contact-info">
          <h3>Email:</h3>
          <p>briannjanapon1@gmail.com</p>
        </div>

        {/* Contact Info Item 2 */}
        <div className="contact-info">
          <h3>Phone:</h3>
          <p>09123230811</p>
        </div>

        {/* Contact Info Item 3 */}
        <div className="contact-info">
          <h3>Facebook:</h3>
          <p>Briann Christin Janapon</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
