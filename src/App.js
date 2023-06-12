import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { GlobalProvider } from "./context/GlobalState";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import Scam from "./pages/Scam";
import YourBenefits from "./pages/YourBenefits";
import FundingInvestment from "./pages/FundingInvestment";
import "./css/main.css";

import { ThemeProvider, createTheme } from "@mui/material";
import LegalDocument from "./pages/LegalDocument";
import BulletinBoard from "./pages/BulletinBoard";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  // Create a custom theme with updated typography
  const theme = createTheme({
    typography: {
      fontFamily: "Poppins, sans-serif",
    },
    div: {
      fontFamily: "Poppins, sans-serif",
    },
  });
  return (
    // <GlobalProvider>
    //   <ThemeProvider theme={theme}>
    //     <Router>
    //       <Header />
    //       <Routes>
    //         <Route path="/" element={<Home />} />
    //         <Route path="/home" element={<Home />} />
    //         <Route path="/products" element={<Products />} />
    //         <Route path="/product/:id" element={<ProductDetailPage />} />
    //         <Route path="/cart" element={<Cart />} />
    //       </Routes>
    //       <Footer />
    //     </Router>
    //   </ThemeProvider>
    // </GlobalProvider>
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/your benefits" element={<YourBenefits />} />
            <Route path="/scam" element={<Scam />} />
            <Route path="/contact us" element={<ContactUs />} />
            <Route path="/legal documents" element={<LegalDocument />} />
            <Route
              path="/Funding & Investment"
              element={<FundingInvestment />}
            />
            <Route
              path="/trustees' bulletin board"
              element={<BulletinBoard />}
            />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
