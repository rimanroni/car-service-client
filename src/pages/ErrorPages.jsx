import { Link } from "react-router-dom";
import MainNav from "./shared/Navbar/MainNav";

 

const ErrorPages = () => {
    return (
        <div className="   ">
            <MainNav/>
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Go Back to Home
      </Link>
    </div>
        </div>
    );
};

export default ErrorPages;