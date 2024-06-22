import MainPage from "./MainPage";
import Profile from "./Profile";
import AboutUs from "./AboutUs";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function AppLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    let email = localStorage.getItem("email");
    if (email === "" || email === null) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <MainPage />
      <Profile />
      <AboutUs />
    </>
  );
}

export default AppLayout;
