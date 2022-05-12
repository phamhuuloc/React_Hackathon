import axios from "axios";
import { useId, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axiosClient from "../../apis/items/axiosClient";
import "./Login.scss";
const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const login = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(
        "https://adventure-charity.herokuapp.com/api/auth/login",
        data
      );
      console.log(res);
      if (res.data.role === "admin") navigate("/admin/voucher/add");
      else navigate("/");

      // dispatch(setUser(res));
      window.localStorage.setItem("token", res.data.token);
    } catch (err) {
      console.log(err);
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
