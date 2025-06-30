import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-10 px-6">
      {/* Main Section */}
      <div className="max-w-6xl mx-auto text-center space-y-6">
        {/* Brand and Copyright */}
        <div className="flex flex-col items-center space-y-2">
          <div className="flex items-center gap-1 text-2xl font-bold tracking-wider">
            <span className="text-yellow-400">EventLy</span>
            
          </div>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} All rights reserved by{" "}
            <Link to="/" className="underline hover:text-yellow-500">
              EventLy
            </Link>
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 text-2xl text-gray-400">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
            <FaTwitter />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition duration-300">
            <FaYoutube />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition duration-300">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition duration-300">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition duration-300">
            <FaLinkedin />
          </a>
        </div>

        {/* Powered by */}
        <p className="text-sm text-gray-500">
          Powered by <span className="text-blue-500 font-semibold">Rownak</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
