import React from 'react'
import logo from '../assets/logos_firebase.png'

function NavBar() {
  return (
    
    <div className="bg-white w-full h-12 flex items-center justify-center gap-2 shadow-md rounded-lg">
      <img src={logo} alt="firebase-logo" className="w-6 h-6" />
      <h1 className="text-lg font-bold text-gray-800">Firebase Contact Form</h1>
    </div>
  )
}

export default NavBar