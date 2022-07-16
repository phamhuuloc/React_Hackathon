import axios from "axios";
import { useId, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Login.scss";

import { toast } from "react-toastify";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const login = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(
        "https://khoi-hi-vong.herokuapp.com/api/auth/login",
        data
      );
      if (res.data.role === "admin") navigate("/admin/voucher/add");
      else navigate("/");
      window.localStorage.setItem("token", res.data.token);
      toast.success("Đăng nhập thành công");
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
    }
    setData({ email: "", password: "" });
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-heading">
          <img
            src="https://s3.amazonaws.com/assets.donately.com/donately-logo-square-200px.png"
            alt="logo"
          />
          <h3 className="login-form-title">Vui lòng đăng nhập</h3>
        </div>

        <form className="login-form">
          <input
            type="text"
            placeholder="Email address"
            className="login-form-input"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="login-form-input"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <p>Quên mật khẩu</p>
          <input
            type="button"
            value="Đăng Nhập"
            className="login-form-button"
            onClick={(e) => login(e)}
          />
        </form>
        <div className="login-direction">
          <span>Bạn chưa có tài khoản?</span>
          <Link to="/register" className="link">
            <span>Tạo tài khoản</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
