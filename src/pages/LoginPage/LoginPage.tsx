import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPageStyle.css";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      const user = { username, password };
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } else {
      alert("Please enter username and password");
    }
  };

  return (
    <div className="login-container">
      <h2>Login to your Account</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
