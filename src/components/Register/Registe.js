import React, { useState } from "react";
import "./Register.scss";
const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    idProof: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const resgister = (e) => {
    try {
      setFormErrors(validate(data));
      console.log(formErrors);
      // alert("dang ky thanh cong");
    } catch (err) {
      console.log(err);
    }
  };
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.phone) {
      errors.phone = "Phone is required!";
    }
    if (!values.dateOfBirth) {
      errors.dateOfBirth = "Date of birth is required!";
    }
    if (!values.idProof) {
      errors.idProof = "Date of birth is required!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be more than 8 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    if (!values.confirmPassword || values.password !== values.confirmPassword) {
      errors.confirmPassword = "Password not them same!";
    }
    return errors;
  };
  const handleSubmitButton = () => {
    console.log(data);
  };
  const handleResetButton = () => {};
  return (
    <div className="signup">
      <div className="signup-content">
        <div className="signup-img">
          <img
            src="https://colorlib.com/etc/regform/colorlib-regform-16/images/form-img.jpg"
            alt="poster"
          />
          <div className="signup-img-content">Đăng ký ngay</div>
        </div>
        <div className="signup-form">
          <h1 className="signup-form-title">Đăng ký ngay</h1>
          <div className="signup-form-row">
            <div className="signup-form-group">
              <div className="signup-form-input">
                <label htmlFor="full_name">Họ và Tên</label>
                <input
                  type="text"
                  name="full_name"
                  id="full_name"
                  value={data.name}
                  className="full_name"
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                />
              </div>
              <p className="signup-form-error">{formErrors.name}</p>
              <div className="signup-form-input">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="email"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
              </div>
              <p className="signup-form-error">{formErrors.email}</p>
              <div className="signup-form-input">
                <label htmlFor="phone">Số điện thoại</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="phone"
                  value={data.phone}
                  onChange={(e) => setData({ ...data, phone: e.target.value })}
                />
              </div>

              <p className="signup-form-error">{formErrors.phone}</p>
              <div className="signup-form-input">
                <label htmlFor="date-of-birth">Ngày tháng năm sinh</label>
                <input
                  type="date"
                  name="date-of-birth"
                  id="date-of-birth"
                  className="date-of-birth"
                  value={data.dateOfBirth}
                  onChange={(e) =>
                    setData({ ...data, dateOfBirth: e.target.value })
                  }
                />
              </div>

              <p className="signup-form-error">{formErrors.dateOfBirth}</p>
            </div>

            <div className="signup-form-group">
              <div className="signup-form-input">
                <label htmlFor="identification-proof">
                  Số chứng mình nhân dân
                </label>
                <input
                  type="text"
                  name="identification-proof"
                  id="identification-proof"
                  className="identification-proof"
                  value={data.idProof}
                  onChange={(e) =>
                    setData({ ...data, idProof: e.target.value })
                  }
                />
              </div>

              <p className="signup-form-error">{formErrors.idProof}</p>
              <div className="signup-form-input">
                <label htmlFor="password">Mật khẩu</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="password"
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                />
              </div>
              <p className="signup-form-error">{formErrors.password}</p>
              <div className="signup-form-input">
                <label htmlFor="confirm-password">Nhập lại mật khẩu</label>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
                  className="confirm-password"
                  value={data.confirmPassword}
                  onChange={(e) =>
                    setData({ ...data, confirmPassword: e.target.value })
                  }
                />
              </div>

              <p className="signup-form-error">{formErrors.confirmPassword}</p>
            </div>
          </div>
          <div className="signup-form-button">
            <button
              className="signup-form-submit"
              onClick={(e) => resgister(e)}
            >
              SUBMIT
            </button>
            <button
              className="signup-form-reset"
              onClick={() => handleResetButton()}
            >
              RESET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
