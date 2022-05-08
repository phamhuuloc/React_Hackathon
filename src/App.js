import Login from "./components/Login/Login";
import Register from "./components/Register/Registe";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Donation from "./pages/Donation/Donation";
import OurStory from "./pages/OurStory/OurStory";
import Vouchers from "./pages/Vouchers/Vouchers";
import HowWeWork from "./pages/HowWeWork/HowWeWork";
import Admin from "./pages/Admin/Admin";
import History from "./pages/History/History";
import MyVouchers from "./pages/MyVouchers/MyVouchers";
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
        <Route path="/history" element={<History />} />
        <Route path="/myvoucher" element={<MyVouchers />} />
        <Route
          path="/admin/voucher/add"
          element={<Admin route="/admin/voucher/add" />}
        />
        <Route
          path="/admin/voucher/list"
          element={<Admin route="/admin/voucher/list" />}
        />
        <Route
          path="/admin/supplier/add"
          element={<Admin route="/admin/supplier/add" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
