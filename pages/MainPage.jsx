import LandingPage from "../components/LandingPage";
import TypeOfDisease from "../components/TypeOfDisease";
import NavHome from "../components/NavHome";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import UploadImage from "../components/UploadImage";

function MainPage() {
  return (
    <div>
      <NavHome />
      <LandingPage />
      <TypeOfDisease />
      <UploadImage />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default MainPage;
