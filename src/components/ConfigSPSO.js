import React, {useState} from "react";
import Header from "./Header"; 
import Footer from "./Footer"; 
import "./ConfigSPSO.css"; 
import config from "../public/config.png"
function ConfigSPSO() {
    const supplyDates = Array.from({ length: 24 }, (_, i) => i + 1);
    const supplyPages = Array.from({ length: 24 }, (_, i) => i + 1);
    const fileTypes = [
      "PDF",
      "DOC",
      "DOCX",
      "TXT",
      "JPEG",
      "JPG",
      "PNG",
      "XLS",
      "XLSX",
    ];
    return (
      <div className="history-page">
        <Header />
        <div className="subbody">
          <div className="container">
            <h2>Các cấu hình in</h2>
            <div className="content">
              <ul className="button-left">
              <img
            //   change path
                src={config}
                alt="Printer Icon"
                style={{ width: "258px", height: "258px" }}
              />
              </ul>
              <ul className="button-right">
              <div className="form-section">
                <div className="form-group">
                  <label htmlFor="date">Chọn ngày cung cấp trang:</label>
                  <select id="date">
                    {supplyDates.map((supplyDate) => (
                      <option>{supplyDate}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="quantity">Chọn số lượng trang mặc định:</label>
                  <select id="quantity">
                    {supplyPages.map((supplyPage) => (
                      <option>{supplyPage}</option>
                    ))}
                  </select>
                </div>
                <div className="file-types">
                  <h3>Type:</h3>
                  <ul>
                    {fileTypes.map((fileType) => (
                      <li key={fileType}>{fileType}</li>
                    ))}
                  </ul>
                </div>
              </div>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
}

export default ConfigSPSO;
