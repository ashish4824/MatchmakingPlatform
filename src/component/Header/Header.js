"use client";
import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

library.add(fab, faBars, faTimes);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-gray-900 to-black border-b border-purple-500/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/50"
              alt="Logo"
              className="h-12 w-12 mr-4 rounded-full border-2 border-purple-500"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
              Matchmaking Platform
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-purple-400 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-purple-400 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-purple-400 transition-colors">
              Contact
            </Link>
            <Link 
              href="/addProfile" 
              className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors shadow-lg shadow-purple-500/20"
            >
              Add Profile
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <div className="space-y-4 bg-gray-900/50 backdrop-blur-lg rounded-lg p-4 border border-purple-500/20">
              <Link 
                href="/" 
                className="block text-gray-300 hover:text-purple-400 transition-colors py-2"
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="block text-gray-300 hover:text-purple-400 transition-colors py-2"
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="block text-gray-300 hover:text-purple-400 transition-colors py-2"
              >
                Contact
              </Link>
              <Link 
                href="/addProfile" 
                className="block w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-center shadow-lg shadow-purple-500/20"
              >
                Add Profile
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
