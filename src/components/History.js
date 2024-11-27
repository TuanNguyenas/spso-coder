import React from "react";
import "./../styles/History.css";

const History = () => {
  const historyData = [
    {
      confirmedDate: "Thứ Tư, 3 tháng 1 2024, 7:18 PM",
      completedDate: "Thứ Tư, 3 tháng 1 2024, 7:40 PM",
      printStatus: "Đang in",
      uploadedFile: "#1234",
      id: "1234",
      pages: 25
    },
    {
      confirmedDate: "Thứ Năm, 4 tháng 1 2024, 8:00 AM",
      completedDate: "Thứ Năm, 4 tháng 1 2024, 8:30 AM",
      printStatus: "Hoàn thành",
      uploadedFile: "#5678",
      id: "5678",
      pages: 30
    },
    {
      confirmedDate: "Thứ Sáu, 5 tháng 1 2024, 9:15 AM",
      completedDate: "Thứ Sáu, 5 tháng 1 2024, 9:45 AM",
      printStatus: "Đang in",
      uploadedFile: "#91011",
      id: "91011",
      pages: 15
    },
    {
      confirmedDate: "Thứ Năm, 4 tháng 1 2024, 8:00 AM",
      completedDate: "Thứ Năm, 4 tháng 1 2024, 8:30 AM",
      printStatus: "Hoàn thành",
      uploadedFile: "#5678",
      id: "5678",
      pages: 30
    },
    {
      confirmedDate: "Thứ Sáu, 5 tháng 1 2024, 9:15 AM",
      completedDate: "Thứ Sáu, 5 tháng 1 2024, 9:45 AM",
      printStatus: "Đang in",
      uploadedFile: "#91011",
      id: "91011",
      pages: 15
    }
  ];
  
  // Kiểm tra xem historyData có phải là mảng không trước khi gọi map()
  if (!Array.isArray(historyData) || historyData.length === 0) {
    return <div>Không có lịch sử in tài liệu</div>;
  }

  return (
    <div className="history">
      <div className="heading">LỊCH SỬ IN</div>
      {historyData.map((item, index) => (
        <div key={index} className="item">
          <span className="style-bold">Ngày xác nhận: </span>
          <span className="style-regular">{item.confirmedDate}</span> <br />
          <span className="style-bold">Ngày hoàn tất: </span>
          <span className="style-regular">{item.completedDate}</span> <br />
          <div className="list-container">
            <ul>
              <li>
                <span className="style-bold">Trạng thái in: </span>
                <span className="style-regular">{item.printStatus}</span>
              </li>
              <li>
                <span className="style-bold">File upload: </span>
                <span className="style-regular">{item.uploadedFile}</span>
              </li>
            </ul>
            <ul>
              <li>
                <span className="style-bold">ID: </span>
                <span className="style-regular">{item.id}</span>
              </li>
              <li>
                <span className="style-bold">Số trang: </span>
                <span className="style-regular">{item.pages}</span>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default History;
