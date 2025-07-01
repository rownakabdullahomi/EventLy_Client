import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaHome, FaUserPlus } from "react-icons/fa";
import RegisterGif from "../assets/Sign up.gif";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { setUser } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const photoURL = formData.get("photo");
    const email = formData.get("email");
    const password = formData.get("password");

    // console.log(name, photoURL, email, password);

    const validatePassword = (password) => {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
      return regex.test(password);
    };

    if (!validatePassword(password)) {
      toast.error(
        "Password must have at least one uppercase letter, one lowercase letter, one special character and at least 6 characters."
      );
      return;
    }

    const newUser = { name, email, password, photoURL };

    try {
      const result = await axiosPublic.post(`/user`, newUser);
      const { token, data } = result.data;
      //   console.log(token, data);
      localStorage.setItem("access-token", token);
      setUser(data);
      toast.success("User registration successful.");
      navigate("/");
    } catch (error) {
      toast.error(error?.message || "Registration Failed! ");
      
    }
  };

  return (
    <div className="bg-base-200 flex items-center justify-center md:h-screen p-6">
      {/* Toast Notifications */}
      <Toaster
        toastOptions={{
          className: "",
          style: {
            fontSize: "16px",
            fontWeight: "bold",
          },
        }}
      />
      <div className="w-full max-w-7xl flex flex-col md:flex-row justify-around gap-10 bg-base-100 rounded-xl shadow-lg p-6 overflow-hidden">
        {/* Left Side - GIF */}
        <div className="flex flex-col justify-center items-center">
          <img
            src={RegisterGif}
            alt="Register"
            className="lg:max-h-[400px] w-auto object-contain"
          />
          {/* Back to Home Button */}
          <button
            onClick={() => navigate("/")}
            className="btn btn-outline btn-primary mt-5 w-full hover:!text-white transform hover:scale-105 transition duration-300"
          >
            <FaHome size={18} /> Back to Home
          </button>
        </div>

        {/* Right Side - Form */}
        <div className="w-full max-w-md flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-center">
            Create Your Account
          </h2>
          <p className="text-sm text-center text-gray-500 mb-4">
            Join us to enjoy all the features!
          </p>

          {/* Registration Form */}
          <form onSubmit={handleRegister} className="space-y-4">
            {/* Name Input */}
            <div>
              <label className="block text-sm font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="input input-bordered w-full mt-1 focus:ring focus:ring-secondary"
                required
              />
            </div>

            {/* Photo URL Input */}
            <div>
              <label className="block text-sm font-medium">Photo URL</label>
              <input
                type="text"
                name="photo"
                placeholder="Enter your Photo URL"
                className="input input-bordered w-full mt-1 focus:ring focus:ring-secondary"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full mt-1 focus:ring focus:ring-secondary"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create a password"
                  className="input input-bordered w-full mt-1 focus:ring focus:ring-secondary"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash size={20} />
                  ) : (
                    <FaEye size={20} />
                  )}
                </button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row">
              {/* Register Button */}
              <button
                type="submit"
                className="btn btn-secondary btn-outline w-full flex items-center justify-center gap-2 hover:!text-white transform hover:scale-105 transition duration-300"
              >
                <FaUserPlus size={18} /> Register
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="divider text-sm text-gray-400">OR</div>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-primary font-medium">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
