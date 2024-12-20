import React from "react";
import UseEffect from "./UseEffect";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleProfilePage from "./SingleProfilePage";
function ProfileRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UseEffect />} />
          <Route
            path="/singleProfilePage/:id"
            element={<SingleProfilePage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default ProfileRoutes;
