import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import History from "./components/History";
import Report from "./components/Report";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  return (
    <>
      <Header />
<div className="body">
    <History />

    <Report />
</div>

<Footer />
    </>
  );
}

export default App;


