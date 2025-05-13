import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import OmOs from "./pages/om-os";
import TildmeldSponsor from "./pages/tilmeld-sponsor";
import Tak from "./pages/tak";
import "./styles/reset.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/om-os" element={<OmOs/>} />
        <Route path="/tilmeld-sponsor" element={<TildmeldSponsor/>} />
        <Route path="/tak" element={<Tak/>} />
      </Routes>
    </Router>
  );
}

export default App;