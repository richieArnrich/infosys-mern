import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./RegisterPage";
import Home from "./Home";
import EditPage from "./EditPage";
function PageRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/edit/:id" element={<EditPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PageRoutes;
