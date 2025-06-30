import { Link, NavLink, useNavigate } from "react-router-dom";
import userImage from "../assets/user.gif";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const { user, userLogout } = useContext(AuthContext);

  // console.log(user);
  const handleLogout = async() => {
    await userLogout();
    toast.success("Logout Successful.")
    navigate("/login");
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className="btn hover:btn-primary hover:btn-soft"
        >
          Home
        </NavLink>
      </li>

      {user && user?.email ? (
        <>
          <li>
            <NavLink
              to="/all-events"
              className="btn hover:btn-primary hover:btn-soft"
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-events"
              className="btn hover:btn-primary hover:btn-soft"
            >
              My Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add-event"
              className="btn hover:btn-primary hover:btn-soft"
            >
              Add Event
            </NavLink>
          </li>
        </>
      ) : (
        <></>
      )}
      <li>
        <NavLink
          to="/about"
          className=" btn hover:btn-primary hover:btn-soft"
        >
          About Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div  id="navbar" className="navbar shadow-sm px-4 lg:px-6">

        <div className="  navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <Link to={"/"} className="btn btn-ghost text-xl">
                EventLy
              </Link>
              {links}
            </ul>
          </div>
          <Link to={"/"} className="hidden lg:block btn btn-ghost pl-0 text-xl mt-1">
            EventLy
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4 font-semibold">
            {links}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          {/* Theme Toggle */}
          {/* <button
            className="p-2 text-2xl"
            onClick={toggleTheme}
            title="Toggle Theme"
          >
            {theme === "light" ? (
              <FaMoon className="text-gray-300 transition-transform duration-300 hover:scale-110" />
            ) : (
              <FaSun className="text-yellow-500 transition-transform duration-300 hover:scale-110" />
            )}
          </button> */}

          {/* Profile Dropdown */}
          {user && user.email ? (
            <div
              // ref={profileDropdownRef}
              className="dropdown dropdown-end relative"
            >
              <button
                onClick={toggleProfileDropdown}
                className="btn btn-ghost btn-circle avatar"
                aria-label="Toggle Profile Dropdown"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full overflow-hidden border border-gray-300 bg-gray-200">
                  {user && user.email ? (
                    <img
                      referrerPolicy="no-referrer"
                      alt="User Profile"
                      src={user?.photoURL || "user"}
                      className="w-full h-full object-cover animate-pulse"
                    />
                  ) : (
                    <img src={userImage} alt="" />
                  )}
                </div>
              </button>
              {profileDropdownOpen && (
                <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                  {/* Username (non-clickable) */}
                  <li>
                    <div
                      id="name"
                      className="justify-between text-base-content font-semibold"
                    >
                      {user?.email ? user.name : ""}
                    </div>
                  </li>

                  {/* Other Dropdown Items */}

                  <li>
                    <button
                      onClick={handleLogout}
                      className="text-error font-semibold"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <div className="navbar-end">
              <Link to="/login" className="btn btn-soft btn-primary">
                Login
              </Link>
            </div>
          )}
        </div>

    </div>
  );
};

export default Navbar;
