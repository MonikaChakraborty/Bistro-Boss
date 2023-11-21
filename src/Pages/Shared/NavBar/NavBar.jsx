import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import logo from "/logo.png";
import "./NavBar.css";
import { FaShoppingCart } from "react-icons/fa";


const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-gray-200 bg-amber-600 text-lg font-medium  mb-2"
              : "text-xl hover:bg-amber-600 hover:text-gray-200   text-gray-200 font-medium"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-gray-200 bg-amber-600 text-lg font-medium lg:ml-2"
              : "text-xl hover:bg-amber-600 hover:text-gray-200 lg:hover:ml-2 text-gray-200 font-medium"
          }
        >
          Our Menu
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-gray-200 bg-amber-600 text-lg font-medium lg:mt-0 lg:mb-0 mt-2 mb-2 lg:ml-2"
              : "text-xl hover:bg-amber-600 hover:text-gray-200 lg:hover:ml-2 text-gray-200 font-medium"
          }
          to="/order/salad"
        >
          Order Food
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-gray-200 bg-amber-600 text-lg font-medium lg:mt-0 mt-2 lg:ml-2"
              : "text-xl hover:bg-amber-600 hover:text-gray-200 lg:hover:ml-2 text-gray-200 font-medium"
          }
          to="/secret"
        >
          Secret
        </NavLink>
      </li>

      <li>
        <Link to="/">
          <button className="btn">
          <FaShoppingCart className="" />

            <div className="badge badge-secondary">+0</div>
          </button>
        </Link>
      </li>

      {user ? (
        <>


          <button
            onClick={handleLogout}
            className="btn text-gray-700 lg:text-gray-200 text-lg font-semibold hover:text-gray-600"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <li>
            <NavLink
              className="btn text-gray-200 hover:bg-amber-600 text-lg font-medium"
              to="/login"
            >
              Login
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      {/* <div className="navbar max-w-screen-xl fixed z-10 bg-opacity-30 bg-black text-white"> */}
      <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white">
        <div className="navbar-start ">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-600   rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>

          <img className="w-14 object-cover" src={logo} alt="" />
          <a className=" btn-ghost text-xl ml-2 font-bistro">
            <span className="font-[900]">Bistro Boss</span>
            <br />
            <span className="font-restaurant font-bold"> Restaurant</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex lg:mt-5">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end ">
          {user?.email ? (
            <div className="flex">
              <div className="dropdown dropdown-end">
                <label
                  tabIndex={0}
                  className="btn btn-ghost btn-circle avatar mr-3"
                >
                  <div className="w-10 rounded-full">
                    {/* <img src={profilePic} /> */}
                    <img src={user.photoURL} alt={user.displayName} />
                  </div>
                </label>

                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content z-[1] shadow bg-gray-200 rounded-box w-30 lg:w-56 mt-3"
                >
                  <li>
                    <button className="btn btn-ghost text-sm lg:text-base bg-gray-600 normal-case mb-2">
                      {user.displayName}
                    </button>
                  </li>

                  <li>
                    <button
                      onClick={logOut}
                      className="btn btn-ghost text-sm text-gray-700 lg:text-base  bg-gray-600 normal-case"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <a className="btn text-white font-semibold text-base hover:bg-amber-600" >
                  Welcome  {user?.displayName}
                </a>
              </div>
            </div>
          ) : (
            ""
            // <Link to="/login">
            //   <button className="btn mr-3">Login</button>
            // </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
