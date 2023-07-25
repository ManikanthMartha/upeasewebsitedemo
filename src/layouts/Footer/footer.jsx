import React, { useState } from 'react';
import './Footer.css'; // Assuming you have the CSS styles defined in the Footer.css file
import { Select, MenuItem } from '@mui/material';
import linkedin from './../../assets/linkedin.png';
import instagram from './../../assets/instagram.png';
//import Register from './Register';
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
  const [showRegister, setShowRegister] = useState(false);

  const handleDropdownChange = () => {
    setShowRegister(!showRegister);
  };
  

  return (
    <footer className="footer">
      <div className="footer-dropdowns">
        <Select label="Dropdown 1" sx={{ width: '100%', color: '#002832' }}>
          <MenuItem onClick={handleDropdownChange}>Contact Us</MenuItem>
        </Select>
        <Select label="Dropdown 2" sx={{ width: '100%', color: '#002832' }}>
          <MenuItem>Dropdown 2 Item 1</MenuItem>
          <MenuItem>Dropdown 2 Item 2</MenuItem>
          <MenuItem>Dropdown 2 Item 3</MenuItem>
        </Select>
      </div>
      <div className="footer-content">
        <h1 className="footer-title">UpEase</h1>
        <p className="footer-description">Empowering students worldwide with high-quality educational resources.</p>
      </div>
      <div className="footer-links">
        <a href="/terms">Terms of Service</a>
        <br></br>
        <a href="/privacy">Privacy Policy</a>
      </div>
      <div className="footer-social">
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <a href="https://www.linkedin.com/"><img src={linkedin} alt="LinkedIn" /></a>
          <p>&nbsp;</p>
          <a href="https://www.instagram.com/"><img src={instagram} alt="Instagram" /></a>
        </div>
      </div>
      <div className="footer-contact-form">
        {showRegister && (
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        )}
      </div>
      <div className="footer-copyright">
        <p>© 2023 UpEase. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;