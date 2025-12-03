import React from 'react';
import '../styles/footer.css';

export function Footer() {
  return (
    <footer className="footer" id="footerhome">
      <div className="social-media-links">
        <h1 className="foothed">Get Social with Pubg Gaming Community</h1>
        <a href="https://facebook.com/" className="footcon" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook fa-4x"></i>
        </a>
        <a href="https://instagram.com/" className="footcon" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram fa-4x"></i>
        </a>
        <a href="https://youtube.com/" className="footcon" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube fa-4x"></i>
        </a>
        <a href="https://twitter.com/" className="footcon" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter fa-4x"></i>
        </a>
      </div>
      
      <a href="#contacts" className="contactfoot">
        <i className="fas fa-id-badge"></i> Contact us
      </a>
      
      <p>© Gaming Community 2023 - ISP data provided by internet provider search engine BroadbandNow</p>
      
      <div className="additional-content">
        <div className="footlinks">
          <h1>Useful Links</h1>
          <ul>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cookie Policy</a></li>
          </ul>
        </div>
        <div className="footinfo">
          <h1>Company Information</h1>
          <p>Pubg Gaming Community</p>
          <p>Email: info@pubgcommunity.com</p>
          <p className="phofoot">Phone: +1 123-456-7890</p>
        </div>
      </div>
    </footer>
  );
}
