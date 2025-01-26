import React from "react";
import { useNavigate } from "react-router-dom";
import "./ErrorPageStyle.css";

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="error-container">
      <h1>404</h1>
      <p>Page Not Found</p>
      <button onClick={handleGoHome}>Go Home</button>
    </div>
  );
};

export default ErrorPage;
