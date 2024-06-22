import Logo from "./Logo";
import { Link } from "react-router-dom";

function HomePageNav() {
  return (
    <div className="container mx-auto absolute z-20 left-0 right-0 p-10">
      <nav className="flex justify-between items-center text-white">
        <Logo />
        <div className="flex justify-between items-center gap-8">
          <Link
            to="/login"
            className="block font-bold hover:text-gray-400 transition duration-300"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="block border font-bold py-2 px-6 transition duration-300 border-gray-200 hover:bg-slate-100 hover:text-black"
          >
            SignUp
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default HomePageNav;
