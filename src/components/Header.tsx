import { Link } from "react-router";
import logo from "@/assets/logo.svg";

const Header = () => {
  return (
    <header className="left-0 w-full">
      <div className="max-w-[1280px] mx-auto h-14 flex items-center xl:px-10 px-5 border-b-2 border-gray-300">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-medium">
            <img src={logo} alt="Logo" className="h-8" />
          </Link>
          <p className="text-gray-300 ml-9 mr-3">|</p>
          <Link to="/intro" className="text-gray-700 font-semibold">
            호핑 소개
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;