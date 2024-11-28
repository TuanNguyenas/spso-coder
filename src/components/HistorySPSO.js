import React, {useState} from "react";
import Header from "./Header"; 
import { Link } from "react-router-dom";
import Footer from "./Footer"; 
import logo from "../public/logo_BK1.png"
import printerButton from "../public/printer-button.png"
import historyButton from "../public/history-button.png"
import "./HistorySPSO.css"
function HistoryPrinter() {
    return (
        <div className="history-printer">
          <Header /> 
          <div className = "body">
          {/* Các phần tử ul cho logo */}
            <ul className="button-left">
              <Link to="/HistoryPrinter">
                <img className="button-image" src={printerButton} alt="History" />
              </Link>
            </ul>
            <ul className="button-right">
              <Link to="/HistoryStudent">
                <img className="button-image" src={historyButton} alt="History" />
              </Link>
            </ul>
          </div>
            <div>
          <Footer />
          </div>
        </div>
    );
}
export default HistoryPrinter;