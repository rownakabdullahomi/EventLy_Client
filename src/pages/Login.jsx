import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaHome, FaSignInAlt } from "react-icons/fa";
import LoginGif from "../assets/Computer login.gif";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { setUser } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // console.log(email, password);
    const existingUser = { email, password };

    try {
      const result = await axiosPublic.post(`/user/login`, existingUser);
      const { token, data } = result.data;
      //   console.log(token, data);
      localStorage.setItem("access-token", token);
      setUser(data);
      toast.success("User login successful.");
      navigate("/");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Login Failed!");
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
      <div className="w-full max-w-7xl flex flex-col md:flex-row justify-around gap-10 bg-base-100 rounded-xl shadow-lg p-8 overflow-hidden">
        {/* Left Side - GIF */}
        <div className="flex flex-col justify-center items-center">
          <img
            src={LoginGif}
            alt="Login"
            className="lg:max-h-[400px] w-auto object-contain"
          />
          {/* Back to Home Button */}
          <button
            onClick={() => navigate("/")}
            className="btn btn-outline btn-primary mt-5 w-full transform hover:scale-105 transition duration-300 hover:!text-white"
          >
            <FaHome size={18} /> Back to Home
          </button>
        </div>

        {/* Right Side - Form */}
        <div className="w-full max-w-md flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-center">Welcome Back!</h2>
          <p className="text-sm text-center text-gray-500 mb-4">
            Login to continue your journey.
          </p>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full mt-1 focus:ring focus:ring-primary"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full mt-1 focus:ring focus:ring-primary"
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

            {/* Login Button */}
            <button
              type="submit"
              className="btn btn-secondary btn-outline w-full flex items-center justify-center gap-2 hover:!text-white transform hover:scale-105 transition duration-300"
            >
              <FaSignInAlt size={18} /> Login
            </button>
          </form>

          {/* Divider */}
          <div className="divider text-sm text-gray-400">OR</div>

          {/* Register Link */}
          <p className="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link to="/register" className="text-primary font-medium">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
