import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HistorySPSO from "./components/History";
import HistoryPrinter from "./components/HistoryPrinter";
function App() {
  return (
    <Router>
    <Routes>
        <Route path="/HistorySPSO" element={<HistorySPSO  />} />
        <Route path="/HistoryPrinter" element={<HistoryPrinter  />} />
    </Routes>
</Router>
  );
}

export default App;


