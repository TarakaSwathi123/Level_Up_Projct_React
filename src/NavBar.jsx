/* eslint-disable react/prop-types */
import { Coins } from 'lucide-react';
import { Link } from 'react-router-dom'; 

export default function Navbar({ links }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1F2A37]/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/Logo.png" alt="Logo" className="w-36 h-12" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
            <Link
                  className="text-gray-300 hover:text-white transition-colors flex justify-center items-center"
                >

                  <img src="/vL.png" alt="Logo" className="w-5 h-6" />
                  <span className="ml-1 inline-block px-1.5 py-0.2 text-xs bg-blue-600 text-white rounded-full">
                      New
                    </span>
                  
                </Link>
              {links.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {link.text}

                </Link>
              ))}
            </div>

            {/* Refer & Earn Button */}
            <Link
              to="#"
              className = "flex items-center space-x-1 px-4 py-2 "
              
            >
              <Coins className="w-4 h-4 text-orange-600" />
              <span className='text-gray-300 rounded-full px-3 border-orange-600 border-[1px]'>Refer & Earn</span>
            </Link>

            {/* Register Button */}
            <Link
              to="#"
              className="px-6 py-2 rounded-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
