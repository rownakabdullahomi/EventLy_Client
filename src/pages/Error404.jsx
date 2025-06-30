import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import error404 from "../lottie/error404.json";

const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="text-center mx-auto">
        <div className="w-96 mx-auto">
          <Lottie animationData={error404} loop={true} />
        </div>
        
        <h2 className="text-5xl font-extrabold text-red-600 mt-6 animate-bounce">
          404 - Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
        <Link 
          to="/" 
          className="mt-6 inline-block  text-yellow-600 font-semibold text-lg px-6 py-3 rounded-full shadow-lg border transform hover:scale-105 transition duration-300"
        >
          Go Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default Error404;
