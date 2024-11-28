import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HistoryStudent from "./components/History";
import HistoryPrinter from "./components/HistoryPrinter";
import HistorySPSO from "./components/HistorySPSO";
function App() {
  return (
    <Router>
    <Routes>
        <Route path="/HistoryStudent" element={<HistoryStudent  />} />
        <Route path="/HistoryPrinter" element={<HistoryPrinter  />} />
        <Route path="/HistorySPSO" element={<HistorySPSO  />} />
    </Routes>
</Router>
  );
}

export default App;


