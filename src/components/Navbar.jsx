import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { HiMenuAlt4, HiX } from "react-icons/hi";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-500 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-2xl">
          MyApp
        </Link>
        <div className="hidden md:flex space-x-6 items-center">
          <Link
            to="/"
            className="text-white hover:underline transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:underline transition duration-200"
          >
            About
          </Link>
          {user ? (
            <>
              <Link
                to="/dashboard"
                className="text-white hover:underline transition duration-200"
              >
                Dashboard
              </Link>
              <button
                onClick={logout}
                className="text-white bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition duration-200"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-white hover:underline transition duration-200"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-white text-indigo-600 px-4 py-2 rounded shadow hover:bg-gray-100 transition duration-200"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-3xl">
            {menuOpen ? <HiX /> : <HiMenuAlt4 />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 text-center">
          <Link
            to="/"
            onClick={toggleMenu}
            className="block text-white hover:underline"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={toggleMenu}
            className="block text-white hover:underline"
          >
            About
          </Link>
          {user ? (
            <>
              <Link
                to="/dashboard"
                onClick={toggleMenu}
                className="block text-white hover:underline"
              >
                Dashboard
              </Link>
              <button
                onClick={() => {
                  logout();
                  toggleMenu();
                }}
                className="block text-white bg-red-500 px-4 py-2 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                onClick={toggleMenu}
                className="block text-white hover:underline"
              >
                Login
              </Link>
              <Link
                to="/signup"
                onClick={toggleMenu}
                className="block bg-white text-indigo-600 px-4 py-2 rounded"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
