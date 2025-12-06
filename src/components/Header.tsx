import { Link } from "react-router";
import logo from "@/assets/logo.svg";

const Header = () => {
  return (
    <header className="flex fixed top-0 left-0 xl:px-10 px-5 w-full h-14 bg-header">
      <div className="flex items-center">
        <Link to="/" className="text-2xl font-medium">
          <img src={logo} alt="Logo" className="h-8" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
