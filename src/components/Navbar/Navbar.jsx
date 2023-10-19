import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-red-500 underline font-bold"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-red-500 underline font-bold"
              : ""
          }
        >
          Login
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/cart"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-red-500 underline font-bold"
              : ""
          }
        >
          Cart
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-red-500 underline font-bold"
              : ""
          }
        >
          About
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-purple-200">
      <div className="navbar container mx-auto px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="men list-none menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-purple-200 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <div>
            <NavLink to="/">
              <p className="text-2xl">
                Blush<span className="text-2xl text-purple-600">ly</span>
              </p>
            </NavLink>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="men list-none gap-5 menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink
            to="/faq"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-red-500 underline font-bold"
                : ""
            }
          >
            FAQ
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
