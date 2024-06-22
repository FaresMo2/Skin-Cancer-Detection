import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="logo font-bold cursor-pointer flex justify-center items-center text-lg lg:text-xl">
      <Link to="/main">SkinSafe</Link>
    </div>
  );
}

export default Logo;
