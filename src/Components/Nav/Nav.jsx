import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Nav.css";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/authProvider";
const Nav = ({ handleToggle }) => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(user);
  const navLinks = (
    <>
      <div className="flex gap-8">
        <NavLink className="text-lg font-semibold" to="/">
          Home
        </NavLink>
        <NavLink className="text-lg font-semibold" to="/faq">
          FAQ
        </NavLink>
        <NavLink className="text-lg font-semibold" to="/contactus">
          Contact Us
        </NavLink>

        {/* <NavLink className="text-lg font-semibold" to="/add_product">
          Add Product
        </NavLink> */}
        {/* <NavLink className="text-lg font-semibold" to="/my_cart">
          My Cart
        </NavLink> */}

        {!user && (
          <NavLink className="text-lg font-semibold" to="/SignIn">
            Sign in
          </NavLink>
        )}
      </div>
    </>
  );

  const handleSignOut = () => {
    signOutUser();
    navigate("/")
  };

  return (
    <div className="navbar  container mx-auto ">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-3xl font-bold text-[#00ADB5]">EP</p>
          <p className="text-lg text-[#00ADB5]">EasyPlan</p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-square btn-ghost mr-6">
          <label className="swap swap-rotate w-12 h-12">
            <input type="checkbox" onChange={handleToggle} />
            {/* light theme sun image */}
            <img
              src="https://i.ibb.co/tYvK2gM/moon2.png"
              alt="light"
              className="w-8 h-8 swap-on"
            />
            {/* dark theme moon image */}
            <img
              src="https://i.ibb.co/hdVnsb0/sun.png"
              alt="dark"
              className="w-8 h-8 swap-off"
            />
          </label>
        </button>
        {user && (
          <div className="flex flex-col md:flex-row gap-7 items-center justify-center">
            {/* <img
              className="rounded-full border-2 border-[#00ADB5] h-10 w-10 hidden md:block"
              src={user.photoURL}
              alt=""
            />
            <h1 className="text-[#00ADB5] text-xl font-semibold hidden md:block">
              {user.displayName}
            </h1> */}
            <button
              onClick={handleSignOut}
              className="btn bg-opacity-0 border-[#00ADB5] hover:bg-opacity-0 hover:border-orange-200"
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
