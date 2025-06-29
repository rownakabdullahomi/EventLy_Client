import { Link, NavLink } from "react-router-dom";

const Navbar = () => {



      const links = (
    <>
      <li>
        <NavLink
          to="/"
          className="hover:border-2 hover:border-primary font-medium tracking-wide duration-200"
        >
          Home
        </NavLink>
      </li>

      {/* {user ? (
        <>
          <li>
            <NavLink
              to="/add_tutorials"
              className="hover:border-2 hover:border-primary font-medium tracking-wide duration-200"
            >
              Add Tutorials
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my_tutorials"
              className="hover:border-2 hover:border-primary font-medium tracking-wide duration-200"
            >
              My Tutorials
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my_booked_tutors"
              className="hover:border-2 hover:border-primary font-medium tracking-wide duration-200"
            >
              My Booked Tutors
            </NavLink>
          </li>
        </>
      ) : (
        <></>
      )} */}
      <li>
        <NavLink
          to="/about"
          className="hover:border-2 hover:border-primary font-medium tracking-wide duration-200 "
        >
          About Us
        </NavLink>
      </li>
    </>
  );


  return (
    <div className="bg-base-100 shadow-sm ">
      <div className="navbar max-w-11/12 mx-auto">
        <div className="navbar-start">
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
                <Link to={"/"} className="btn btn-ghost text-xl">EventLy</Link>
              {links}
            </ul>
          </div>
          <Link to={"/"} className="hidden lg:block btn btn-ghost text-xl mt-1">EventLy</Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4 font-semibold">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to={"/login"} className="btn">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
