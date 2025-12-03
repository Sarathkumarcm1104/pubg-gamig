import React, { useState } from 'react';
import '../styles/contact.css';

export function ContactSection() {
  const [formData, setFormData] = useState({
    username: '',
    pubgId: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ username: '', pubgId: '', phone: '', message: '' });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <section className="contact-form" id="contacts">
      <div className="container">
        <div className="pubg-skills">
          <div className="required">
            <div className="clan-name">
              <i className="fas fa-user fa-2x text-red"></i>
              <h2 className="text-gray md-heading">PUBG NAME</h2>
              <p className="sm-heading">Monster Gaming</p>
            </div>
            <div className="email-id">
              <i className="far fa-envelope fa-2x text-red"></i>
              <h2 className="text-gray md-heading">email id</h2>
              <p>monstergaming007@gmail.com</p>
            </div>
            <div className="contact-no">
              <i className="fas fa-phone-square-alt fa-2x text-red"></i>
              <h2 className="text-gray md-heading">contact no</h2>
              <p>9876543210</p>
            </div>
            <img src="./IMG/contact.jpg.jpg" className="image" alt="pubg" />
          </div>
          
          <form className="form" onSubmit={handleSubmit}>
            <h1 className="lg-heading text-black">contact us</h1>
            {submitted && <p className="success-msg" style={{ color: 'green' }}>Message sent successfully!</p>}
            
            <div className="form-group">
              <label htmlFor="username">username</label>
              <input 
                type="text" 
                id="username" 
                name="username"
                value={formData.username}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="pubgId">PUBG ID</label>
              <input 
                type="text" 
                id="pubgId" 
                name="pubgId"
                value={formData.pubgId}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Contact Number</label>
              <input 
                type="text" 
                id="phone" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">MESSAGE</label>
              <textarea 
                id="message" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required 
              ></textarea>
            </div>
            
            <button type="submit" className="form-btn">submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}
