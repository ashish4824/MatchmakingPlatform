import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black border-t border-purple-500/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-400">About Us</h3>
            <p className="text-gray-300 hover:text-white transition-colors">
              We help connect people looking for life partners with compatible matches.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-purple-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/addProfile" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Add Profile
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-400">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-white transition-colors">
                Email: ashish7860635522@gmail.com
              </li>
              <li className="text-gray-300 hover:text-white transition-colors">
                Phone: 9984525194
              </li>
              <li className="text-gray-300 hover:text-white transition-colors">
                Address: Bikna mirzapur, UP
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-400">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-500/20 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} 
            <span className="text-purple-400"> Matchmaking Platform</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
