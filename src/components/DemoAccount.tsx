'use client'

import { useState } from "react";
import React from 'react'

interface DemoAccount {
    email: string;
    password:string
}

const DemoAccount: React.FC<DemoAccount> = ({email,password}) => {
  const [open,setOpen] = useState(false);
  return (
    <div className="relative inline-block text-left">
    <div>
    
      <button
        type="button"
        className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
        onClick={()=>setOpen((prev) => !prev)}
      >
        Demo Account
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      
    </div>
    <div
     
      className={`absolute w-full right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none ${open ? 'block': 'hidden'}`}
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
    >
      <div className="py-1" role="none">
        <p
          className="text-gray-700 block px-4 py-2 text-sm"
          role="menuitem"
          id="menu-item-2"
        >
          Email: {email}
        </p>
        <p
          className="text-gray-700 block px-4 py-2 text-sm"
          role="menuitem"
          id="menu-item-2"
        >
          Password: {password}
        </p>
      </div>
    </div>
  </div>
  )
}

export default DemoAccount