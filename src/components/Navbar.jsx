import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold text-xl">Pokemon App</div>
          <ul className="flex space-x-4">
            <li>
              <a className="text-white hover:text-gray-300" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="text-white hover:text-gray-300" href="/about">
                About
              </a>
            </li>
            <li>
              <a className="text-white hover:text-gray-300" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
