import React, { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import "./home.css";
import printer1 from "../public/printer1.png";
import printer2 from "../public/printer2.png";
import bkpay from "../public/bkpay.png";
import hcmut from "../public/hcmut.png";
const Home = () => {
  const [showModal, setShowModal] = useState(false);
  
  // Hàm hiển thị modal khi nhấn "Tạo thông báo mới"
  const handleCreateAnnouncement = () => {
    setShowModal(true);
  };

  // Hàm đóng modal
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="home">
    
      <Header />

    
      <div className="home-content">
        
        <div className="content-top">
        
          <div className="content-left">
            <div className="guide-box">
              <h1>Hướng dẫn sử dụng dành cho người dùng</h1>
              <p>Ứng dụng hỗ trợ sinh viên in ấn các tài liệu</p>
              <a href="#learn-more" className="learn-more-button">
                Tìm hiểu
              </a>
            </div>
          </div>
        
          <div className="content-right">
            <img src={printer1} alt="Hình 1" className="image" />
            <img src={printer2} alt="Hình 2" className="image" />
          </div>
        </div>
       
        <div className="content-bottom">
          <div className="brand">
            <img src={bkpay} alt="Logo BKPay" className="brand-logo" />
            <span className="brand-name">BKPay</span>
          </div>
          <div className="brand">
            <img src={hcmut} alt="Logo HCMUT_SSO" className="brand-logo" />
            <span className="brand-name">HCMUT_SSO</span>
          </div>
        </div>
      </div>

          
      <div className="announcements">
        <hr />
        <h1 className="announcements-header">
          Thông báo chung / Site announcements<span>🔊</span>
        </h1>
        <div className="create-announcement">
        <button className="create-button" onClick={handleCreateAnnouncement}>Tạo thông báo mới</button>
      </div>
      {/* Modal tạo thông báo */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Tạo thông báo mới</h2>
            <div className="input-field">
              <label htmlFor="title">Tiêu đề:</label>
              <input type="text" id="title" placeholder="Nhập tiêu đề..." />
            </div>
            <div className="input-field">
              <label htmlFor="content">Nội dung:</label>
              <textarea id="content" placeholder="Nhập nội dung..." />
            </div>
            <div className="modal-actions">
              <button onClick={handleCloseModal}>Hoàn tất</button>
            </div>
          </div>
        </div>
      )}
        <div className="announcement-box">
              <h3 className="announcement-title"><strong>Thông báo về hệ thống in ấn thông minh tại HCMUT</strong></h3>
              <p><i>Bởi Student Printing Service Officer - Thứ Tư, 3 tháng 1 2024, 3:12 PM</i></p>
              <hr />
              <p>Kể từ ngày 27/10/2024, hệ thống dịch vụ in ấn thông minh sẽ được đưa vào hoạt động</p>
              <p>Các bạn sinh viên sử dụng hệ thống SSPS mới cho các môn học từ học kỳ 1 năm học 2024-2025 (HK241).</p>
              <p>Sinh viên sẽ được cung cấp số lượng trang in nhất định vào mỗi đầu tháng.</p>
              <p>Sinh viên có thể in các tài liệu trực tuyến.</p>
              <p>Sinh viên có thể xem được lịch sử in ấn và tạo các báo cáo các trang đã in.</p>
              <p><strong>Trân trọng.</strong></p>
              <p>SPSO</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
