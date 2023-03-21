import React from "react";

const Navbar = () => {
  return (<nav class="bg-gray-800 h-12">
    <div className="flex flex-row justify-between px-10 align-middle">
      <div>
        <span className="bold text-white">Citea</span>
      </div>
      <div>
        <ul className="flex flex-row text-white">
          <li>signin</li>
          <li className="ml-4">signup</li>
        </ul>
      </div>
    </div>
  </nav>)
}

export default Navbar