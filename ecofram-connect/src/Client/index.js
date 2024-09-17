import "./assets/lib/owlcarousel/assets/owl.carousel.min.css";
import "./assets/lib/lightbox/css/lightbox.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import Home from "./pages/Home/home";

function IndexClient() {
  return (
    <>
      <Header />
      <div style={{ minHeight: "500px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default IndexClient;
