import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ImagesProvider } from "../context/ImagesContext";
import SpinnerFullPage from "../Loading-components/SpinnerFullPage";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Before splitting Code
// import MainPage from "../pages/MainPage";
// import Login from "../pages/Login";
// import SignUp from "../pages/SignUp";
// import Profile from "../pages/Profile";
// import AboutUs from "../pages/AboutUs";
// import HomePage from "../pages/HomePage";

// After splitting Components into parts
const HomePage = lazy(() => import("../pages/HomePage"));
const MainPage = lazy(() => import("../pages/MainPage"));
const Login = lazy(() => import("../pages/Login"));
const SignUp = lazy(() => import("../pages/SignUp"));
const Profile = lazy(() => import("../pages/Profile"));
const AboutUs = lazy(() => import("../pages/AboutUs"));
const Error = lazy(() => import("../pages/Error"));

function App() {
  return (
    <>
      <ToastContainer theme="colored"></ToastContainer>
      <ImagesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="main" element={<MainPage />} />
              <Route path="profile" element={<Profile />} />
              <Route path="about" element={<AboutUs />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ImagesProvider>
    </>
  );
}

export default App;
