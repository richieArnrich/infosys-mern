import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "80.5vh" }}></main>
      <Footer />
    </div>
  );
}

export default Layout;
