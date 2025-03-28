"use client";
import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await axios.post(
        "https://lawyaltech-git-main-ashish4824s-projects.vercel.app/",
        formData
      );
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Error:", err);
      setError("Failed to submit the form. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-6 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg bg-black/80 backdrop-blur-lg rounded-2xl shadow-xl border border-purple-500/20 p-8"
      >
        <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text mb-8">
          Contact Us
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-purple-400 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-900/50 border border-purple-500/30 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white placeholder-gray-400 outline-none"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-purple-400 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-900/50 border border-purple-500/30 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white placeholder-gray-400 outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-purple-400 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-3 bg-gray-900/50 border border-purple-500/30 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white placeholder-gray-400 outline-none resize-none"
              placeholder="Enter your message"
            />
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-400 text-sm bg-red-500/10 border border-red-500/50 rounded-lg p-3"
            >
              {error}
            </motion.div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 text-white bg-purple-600 rounded-lg shadow-lg shadow-purple-500/20 hover:bg-purple-700 transition duration-200 disabled:opacity-50 font-medium"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>

          {success && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-400 text-sm bg-green-500/10 border border-green-500/50 rounded-lg p-3 text-center"
            >
              Thank you! Your message has been sent successfully.
            </motion.div>
          )}
        </form>
      </motion.div>
    </div>
  );
}
