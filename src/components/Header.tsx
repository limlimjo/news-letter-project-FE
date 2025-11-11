import { Link } from "react-router";

const Header = () => {
  return (
    <header className="flex fixed top-0 left-0 xl:px-10 px-5 w-full h-14 bg-white border-b-4 border-gray-200">
      <div className="flex items-center">
        <i className="far fa-envelope mr-2 text-2xl"></i>
        <Link to="/" className="text-2xl font-medium">
          Newsletter
        </Link>
      </div>
    </header>
  );
};

export default Header;
