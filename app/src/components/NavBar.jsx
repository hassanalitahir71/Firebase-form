import React from "react";
import logo from "../assets/logos_firebase.png";

function NavBar() {
  return (
    <div className="bg-White flex h-14 w-88 items-center justify-center gap-4 rounded-lg shadow-md">
      <img src={logo} alt="firebase-logo" className="h-6 w-6" />
      <h1 className="text-lg font-bold text-gray-800">Firebase Contact Form</h1>
    </div>
  );
}

export default NavBar;
