import { Link } from "react-router";
import logo from "@/assets/logo.svg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full">
      <div className="max-w-[1280px] mx-auto h-14 flex items-center xl:px-10 px-5 bg-header">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-medium">
            <img src={logo} alt="Logo" className="h-8" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;