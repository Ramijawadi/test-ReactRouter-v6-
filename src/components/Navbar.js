import React from "react";


const Navbar = () => {
  return (
    <div>
      <ul>
        <li >
          <a className="active" href="/">Home</a>
        </li>
        <li>
          <a href="/About">About</a>
        </li>
        <li>
          <a href="/Contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
