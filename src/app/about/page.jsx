"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-black/80 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-purple-500/20"
      >
        <div className="p-8">
          <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text mb-4">About Us</h1>
          <p className="text-gray-300 text-lg text-center mb-8">
            Welcome to our Matchmaking Platform, where we help individuals find meaningful connections. Our goal is to
            bring people together through advanced compatibility matching and personalized experiences.
          </p>

          <div className="space-y-8">
            <div className="bg-gray-900/50 p-6 rounded-xl border border-purple-500/20">
              <h2 className="text-2xl font-semibold text-purple-400 mb-3">Our Mission</h2>
              <p className="text-gray-300">
                We believe that finding a life partner should be a seamless and enjoyable journey. Our platform is designed
                to foster genuine relationships based on trust, compatibility, and shared values.
              </p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-xl border border-purple-500/20">
              <h2 className="text-2xl font-semibold text-purple-400 mb-3">Why Choose Us?</h2>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center">
                  <span className="text-purple-400 mr-2">•</span>
                  AI-driven matchmaking for accurate compatibility
                </li>
                <li className="flex items-center">
                  <span className="text-purple-400 mr-2">•</span>
                  Secure and private communication
                </li>
                <li className="flex items-center">
                  <span className="text-purple-400 mr-2">•</span>
                  Personalized recommendations based on user preferences
                </li>
                <li className="flex items-center">
                  <span className="text-purple-400 mr-2">•</span>
                  Success stories that inspire
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-xl border border-purple-500/20">
              <h2 className="text-2xl font-semibold text-purple-400 mb-3">Our Team</h2>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-center">
                  <span className="text-2xl mr-3">👨‍💻</span>
                  <span><span className="text-purple-400">Ashish</span> - Founder & CEO</span>
                </li>
                <li className="flex items-center">
                  <span className="text-2xl mr-3">👩‍💻</span>
                  <span><span className="text-purple-400">Mr Sharma Maurya</span> - Chief Technology Officer</span>
                </li>
                {/* <li className="flex items-center">
                  <span className="text-2xl mr-3">👨‍🎨</span>
                  <span><span className="text-purple-400"></span> - Lead Designer</span>
                </li> */}
                {/* <li className="flex items-center">
                  <span className="text-2xl mr-3">👩‍💼</span>
                  <span><span className="text-purple-400">Emily White</span> - Customer Success Manager</span>
                </li> */}
              </ul>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-xl border border-purple-500/20">
              <h2 className="text-2xl font-semibold text-purple-400 mb-3">Terms & Conditions</h2>
              <p className="text-gray-300">
                By using our matchmaking platform, you agree to our terms and conditions. We are committed to providing a safe
                and respectful environment for all users. Users must be 18 years or older to register. We do not guarantee
                successful matches, and all interactions are at the user's discretion. Any misuse of the platform, including
                fraudulent activity, harassment, or inappropriate behavior, will result in account termination.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
