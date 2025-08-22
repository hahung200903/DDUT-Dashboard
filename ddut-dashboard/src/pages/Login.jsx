
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../assets/logo-dut.png";
import background from "../assets/dut-background.png";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation - in real app you'd validate against backend
    if (formData.username && formData.password) {
      // Navigate to dashboard
      navigate('/dashboard');
    } else {
      alert('Vui lòng nhập tên đăng nhập và mật khẩu');
    }
  };

  return (
    <div className="login-container">
      <div className="login-left" style={{ backgroundImage: `url(${background})` }}></div>

      <div className="login-right">
        <div className="login-box">
          <div className="header">
            <img src={logo} alt="DUT Logo" className="logo" />
            <span className="dashboard-title">DDUT Dashboard</span>
          </div>

          <h3 className="subtitle">Đăng nhập</h3>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Tên đăng nhập</label>
              <input
                type="text"
                name="username"
                placeholder="Tên đăng nhập"
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Mật khẩu</label>
              <div className="password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Mật khẩu"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <span
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </span>
              </div>
            </div>

            <div className="form-options">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#">Forgot password?</a>
            </div>

            <button type="submit" className="btn-login">
              Đăng nhập
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
