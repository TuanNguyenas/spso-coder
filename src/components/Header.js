import React from "react";
import "./../styles/Header.css";
import logo from "../public/logo_BK1.png"
const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-image" /> 
        <span className="logo-text">HCMUT_SSPS</span>
      </div>
      <nav>
        <div className="menu-buttons">
          <button>Trang chủ</button>
          <button>Cấu hình in tài liệu</button>
          <button>Xem lịch sử</button>
        </div>
      </nav>
      <div className="profile-icon">👤</div>
    </header>
  );
};

export default Header;
