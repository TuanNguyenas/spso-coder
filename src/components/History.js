import React, {useState} from "react";
import Header from "./Header"; 
import Footer from "./Footer"; 
import logo from "../public/logo_BK1.png"
import "./History.css"; 

function History() {
  const [searchQuery, setSearchQuery] = useState("");
  const historyData = [
    {
      name: "Nguyễn Văn A",
      studentId: "1213",
      remainingPages: 10,
      confirmedDate: "Thứ Tư, 3 tháng 1 2024, 7:18 PM",
      completedDate: "Thứ Tư, 3 tháng 1 2024, 7:40 PM",
      printStatus: "Đang in",
      uploadedFile: "#1234",
      id: "1234",
      pages: 25,
    },
    {
      name: "Nguyễn Văn B",
      studentId: "1214",
      remainingPages: 15,
      confirmedDate: "Thứ Năm, 4 tháng 1 2024, 8:00 AM",
      completedDate: "Thứ Năm, 4 tháng 1 2024, 8:30 AM",
      printStatus: "Hoàn thành",
      uploadedFile: "#5678",
      id: "5678",
      pages: 30,
    },
    {
      name: "Nguyễn Văn A",
      studentId: "1213",
      remainingPages: 10,
      confirmedDate: "Thứ Tư, 3 tháng 1 2024, 7:18 PM",
      completedDate: "Thứ Tư, 3 tháng 1 2024, 7:40 PM",
      printStatus: "Đang in",
      uploadedFile: "#1234",
      id: "1234",
      pages: 25,
    },
    {
      name: "Nguyễn Văn B",
      studentId: "1214",
      remainingPages: 15,
      confirmedDate: "Thứ Năm, 4 tháng 1 2024, 8:00 AM",
      completedDate: "Thứ Năm, 4 tháng 1 2024, 8:30 AM",
      printStatus: "Hoàn thành",
      uploadedFile: "#5678",
      id: "5678",
      pages: 30,
    }
  ];
  const filteredData = historyData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.studentId.includes(searchQuery)
  );

  const data = {
    startDate: "Thứ Tư, 3 tháng 1 2024",
    endDate: "Thứ Tư, 3 tháng 1 2024",
    uploadedFiles: 100,
    campus: "Cả hai",
    studentsPrinted: 105,
    paperTypes: {
      A0: 10,
      A1: 3,
      A2: 3,
      A3: 3,
      A4: 20,
      A5: 1
    }
  };
  return (
    <div className="history-page">
      <Header /> 
      <div className="content">
        

        <div className="history-content">
          <div className="history-left">
            <div className="heading">Lịch sử in</div>
            <div className="search-bar">
            <input
                type="text"
                placeholder="Tìm kiếm theo tên hoặc MSSV..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            {filteredData.map((item, index) => (
                <div key={index} className="item">
                  <div className="info-container">
                    <ul className="info-list">
                      <li>
                        <span className="style-bold">Họ và tên: </span>
                        <span className="style-regular">{item.name}</span>
                      </li>
                      <li>
                        <span className="style-bold">MSSV: </span>
                        <span className="style-regular">{item.studentId}</span>
                      </li>
                      <li>
                        <span className="style-bold">Số trang còn lại: </span>
                        <span className="style-regular">{item.remainingPages}</span>
                      </li>
                    </ul>

                    <ul className="avatar-list">
                      <li className="avatar-container">
                        <img src={logo} alt="Avatar" className="Avt" />
                      </li>
                    </ul>
                  </div>

                  <a href="/" className="history-link">Xem thêm</a>

                </div>
              ))}

          </div>

          <div className="history-right">
            <div>
                <div className = "heading">Báo cáo</div>
            </div>

            <div className="history-box">
              <span className="style-bold">Ngày bắt đầu: </span>
              <span className="style-regular">{data.startDate}</span> <br />
              <span className="style-bold">Ngày kết thúc: </span>
              <span className="style-regular">{data.endDate}</span> <br />
              <span className="style-bold">Số file đã upload: </span>
              <span className="style-regular">{data.uploadedFiles}</span> <br />
              <span className="style-bold">Cơ sở: </span>
              <span className="style-regular">{data.campus}</span> <br />
              <span className="style-bold">Số lượng sinh viên đã in: </span>
              <span className="style-regular">{data.studentsPrinted}</span> <br />
              <span className="style-bold">Các loại giấy đã sử dụng:</span> <br />
              <div className="list-container">
                <ul>
                  <li>
                    <span className="style-bold">A0: </span>
                    <span className="style-regular">{data.paperTypes.A0}</span>
                  </li>
                  <li>
                    <span className="style-bold">A1: </span>
                    <span className="style-regular">{data.paperTypes.A1}</span>
                  </li>
                  <li>
                    <span className="style-bold">A2: </span>
                    <span className="style-regular">{data.paperTypes.A2}</span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <span className="style-bold">A3: </span>
                    <span className="style-regular">{data.paperTypes.A3}</span>
                  </li>
                  <li>
                    <span className="style-bold">A4: </span>
                    <span className="style-regular">{data.paperTypes.A4}</span>
                  </li>
                  <li>
                    <span className="style-bold">A5: </span>
                    <span className="style-regular">{data.paperTypes.A5}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="history-box2">
            <div className = "input-group">
          <span className="style-lable"><label>Chọn ngày bắt đầu:</label></span>
          <span className="style-input"><input type="date" /></span> <br />
        </div>
        
        <div className = "input-group">
          <span className="style-lable"><label>Chọn ngày kết thúc:</label></span>
          <span className="style-input"><input type="date" /></span> <br />
        </div>
        <div className = "input-group">
          <span className="style-lable"><label>Chọn cơ sở:</label></span>
          <span className="style-input">
            <select>
              <option value="ca-hai">Cả hai</option>
              <option value="co-so-1">Cơ sở 1</option>
              <option value="co-so-2">Cơ sở 2</option>
            </select>
          </span> <br />
        </div>
                <button className="buy-btn-complete">Tìm lịch sử và tạo báo cáo</button>
      </div>
          </div>
        </div>
      </div>
      <Footer /> 
    </div>
  );
}

export default History;
