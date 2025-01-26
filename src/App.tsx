import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/HomePage/HomePage"));
const Login = lazy(() => import("./pages/LoginPage/LoginPage"));
const LoadingPage = lazy(() => import("./pages/LoadingPage/LoadingPage"));
const LunchPage = lazy(() => import("./pages/LunchPage/LunchPage"));
const DinnerPage = lazy(() => import("./pages/DinnerPage/DinnerPage"));
const BreakfastPage = lazy(() => import("./pages/BreakfastPage/BreakfastPage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage/ErrorPage"));

const App: React.FC = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/breakfast" element={<BreakfastPage />} />
        <Route path="/lunch" element={<LunchPage />} />
        <Route path="/dinner" element={<DinnerPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
