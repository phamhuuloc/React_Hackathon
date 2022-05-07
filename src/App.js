import Login from "./components/Login/Login";
import Register from "./components/Register/Registe";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Donation from "./pages/Donation/Donation";
import OurStory from "./pages/OurStory/OurStory";
import Vouchers from "./pages/Vouchers/Vouchers";
import HowWeWork from "./pages/HowWeWork/HowWeWork";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/story" element={<OurStory />} />
        <Route path="/vouchers" element={<Vouchers />} />
        <Route path="/work" element={<HowWeWork />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
