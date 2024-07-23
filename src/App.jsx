
import CartPopup from "./Components/Cart/CartPopUp";
import CartCountBadge from "./Components/CartCountBadge/CartCountBadge";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={< CartPopup/>} />
        <Route path="/login" element={<Home />} />

      </Routes>
      <Footer />
    </>

  );
};

export default App;
