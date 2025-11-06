import { Link } from "react-router";

const Header = () => {
  return (
    <header className="flex xl:px-10 px-5 h-14 xl:bg-white border-b-4 border-gray-200 bg-green-100">
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
