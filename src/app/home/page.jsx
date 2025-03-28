"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useProfile } from "@/context/ProfileContext";

export default function Pages() {
  const [profileData, setProfileData] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({ caste: '', gender: '', search: '' });
  const [sortBy, setSortBy] = useState('name');
  const profilesPerPage = 5;
  const router = useRouter();
  const { setSelectedProfile } = useProfile();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://backendd-ruby.vercel.app");
        setProfileData(response.data);
        setFilteredProfiles(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    let result = [...profileData];

    // Apply search filter
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      result = result.filter(profile => 
        profile.name.toLowerCase().includes(searchTerm) ||
        profile.Caste.toLowerCase().includes(searchTerm) ||
        profile.Gender.toLowerCase().includes(searchTerm) ||
        profile.jobStatus.toLowerCase().includes(searchTerm)
      );
    }

    // Apply existing filters
    if (filters.caste) {
      result = result.filter(profile => profile.Caste === filters.caste);
    }
    if (filters.gender) {
      result = result.filter(profile => profile.Gender === filters.gender);
    }

    // Apply sorting
    result.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

    setFilteredProfiles(result);
    setCurrentPage(1);
  }, [filters, sortBy, profileData]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handelClick = (profile) => {
    setSelectedProfile(profile);
    router.push(`/profileAbout`);
  };

  // Get unique values for filters
  const uniqueCastes = [...new Set(profileData.map(profile => profile.Caste))];
  const uniqueGenders = [...new Set(profileData.map(profile => profile.Gender))];

  // Pagination logic
  const indexOfLastProfile = currentPage * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
  const currentProfiles = filteredProfiles.slice(indexOfFirstProfile, indexOfLastProfile);
  const totalPages = Math.ceil(filteredProfiles.length / profilesPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-6">
      {/* Filters and Sorting Section */}
      <div className="max-w-4xl mx-auto mb-8 p-4 bg-black/80 backdrop-blur-lg rounded-xl">
        <input
          type="text"
          placeholder="Search profiles..."
          value={filters.search}
          onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
          className="w-full mb-4 px-4 py-3 bg-gray-900/50 border border-purple-500/30 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white placeholder-gray-400 outline-none"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select
            name="caste"
            value={filters.caste}
            onChange={handleFilterChange}
            className="bg-gray-800 text-white rounded-lg p-2 border border-purple-500/30"
          >
            <option value="">Filter by Caste</option>
            {uniqueCastes.map(caste => (
              <option key={caste} value={caste}>{caste}</option>
            ))}
          </select>

          <select
            name="gender"
            value={filters.gender}
            onChange={handleFilterChange}
            className="bg-gray-800 text-white rounded-lg p-2 border border-purple-500/30"
          >
            <option value="">Filter by Gender</option>
            {uniqueGenders.map(gender => (
              <option key={gender} value={gender}>{gender}</option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-gray-800 text-white rounded-lg p-2 border border-purple-500/30"
          >
            <option value="name">Sort by Name</option>
            <option value="Caste">Sort by Caste</option>
            <option value="Gender">Sort by Gender</option>
          </select>
        </div>
      </div>

      {/* Profiles Display */}
      {currentProfiles.length === 0 ? (
        <p className="text-center text-white">No profiles available</p>
      ) : (
        <>
          {currentProfiles.map((profile) => (
            <motion.div
              key={profile.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-black/80 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto my-6"
            >
              {/* Existing profile card content */}
              <div className="p-8">
                <div className="flex items-center gap-6 mb-10">
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-40 h-72"
                  >
                    <img
                      src={profile.image}
                      alt={profile.name}
                      className="w-full h-full rounded-2xl object-cover border-4 border-purple-500"
                    />
                  </motion.div>
                  <div>
                    <motion.h2
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-3xl font-bold text-white"
                    >
                      {profile.name}
                    </motion.h2>
                    <motion.p className="text-purple-400 mt-1">
                      <span className="font-medium text-white">Job Status: </span> {profile.jobStatus}
                    </motion.p>
                    <motion.p className="text-purple-400 mt-1">
                      <span className="font-medium text-white">Caste: </span> {profile.Caste}
                    </motion.p>
                    <motion.p className="text-purple-400 mt-1">
                      <span className="font-medium text-white">Gender: </span> {profile.Gender}
                    </motion.p>
                    <Link href={`/profileAbout`}>
                      <motion.button
                        onClick={() => handelClick(profile)}
                        className="bg-purple-500 text-white px-4 py-2 mt-3 rounded-md shadow-md hover:bg-purple-600 transition-colors"
                      >
                        View Profile
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Pagination Controls */}
          <div className="flex justify-center gap-2 mt-8">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-purple-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <span className="px-4 py-2 text-white">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-purple-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}