"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useProfile } from "@/context/ProfileContext";

export default function AboutPage() {
  const { selectedProfile } = useProfile();
  const router = useRouter();

  if (!selectedProfile) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white">
        <p>No profile selected</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-6 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-black/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 max-w-lg w-full text-white"
      >
        {/* Profile Picture */}
        <div className="flex flex-col items-center">
          <motion.img
            src={selectedProfile.image}
            alt={selectedProfile.name}
            className="w-[50%] h-[95%] rounded-full border-4 border-purple-500 object-cover"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />
          <h2 className="text-2xl font-bold mt-4">{selectedProfile.name}</h2>
          <p className="text-purple-400">{selectedProfile.jobStatus}</p>
        </div>

        {/* Profile Details */}
        <div className="mt-6 space-y-4">
          <Detail label="Phone" value={selectedProfile.Phone} />
          <Detail label="Address" value={selectedProfile.address} />
          <Detail label="Father's Name" value={selectedProfile.FatherName} />
          <Detail label="Mother's Name" value={selectedProfile.MotherName} />
          <Detail label="Caste" value={selectedProfile.Caste} />
          <Detail label="Gender" value={selectedProfile.Gender} />
          <Detail label="Marital Status" value={selectedProfile.MaritalStatus} />
          <Detail label="Description" value={selectedProfile.description} />
        </div>

        {/* Back Button */}
        <div className="mt-6 text-center">
          <button
            onClick={() => router.push("/")}
            className="px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition"
          >
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
}

// ✅ Detail Component
const Detail = ({ label, value }) => (
  <div className="bg-gray-800 p-3 rounded-lg flex justify-between">
    <span className="text-gray-400">{label}</span>
    <span className="font-medium">{value}</span>
  </div>
);
