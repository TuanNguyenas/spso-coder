import React from "react";
import "./../styles/Footer.css";
import logo from "../public/logo_BK1.png"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-image" /> 
        <span className="logo-text">HCMUT_SSPS</span>
      </div>
      <div className="content">
      <p>
        Student Printing Service Officer <br />
        Bất cứ thắc mắc kỹ thuật liên quan đến in ấn hoặc thanh toán trang in, sinh viên liên lạc<br />
        Email: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx<br/>
        ĐT (Tel.): xxxxxxxxxxxxxxxxxxxx
        </p>
      </div>
    </footer>
  );
};

export default Footer;
