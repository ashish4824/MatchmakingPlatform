'use client';

import { useState } from 'react';
import axios from 'axios';

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    Phone: '',
    address: '',
    FatherName: '',
    MotherName: '',
    Caste: '',
    Gender: '',
    MaritalStatus: '',
    description: '',
    jobStatus: '',
    image: null,
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const formDataObj = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataObj.append(key, formData[key]);
    });

    try {
      const response = await axios.post('https://backendd-ruby.vercel.app/register', formDataObj, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setSuccess('User registered successfully!');
      setFormData({
        name: '',
        Phone: '',
        address: '',
        FatherName: '',
        MotherName: '',
        Caste: '',
        Gender: '',
        MaritalStatus: '',
        description: '',
        jobStatus: '',
        image: null,
      });
    } catch (err) {
      setError(err.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-8 text-white text-center">Create Profile</h2>
          
          {error && <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-500">{error}</div>}
          {success && <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-500">{success}</div>}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <div className="col-span-2">
                <div className="flex items-center justify-center w-full">
                  <label className="w-full flex flex-col items-center justify-center h-32 border-2 border-purple-400 border-dashed rounded-lg cursor-pointer bg-gray-900/50 hover:bg-gray-900/70 transition-all">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg className="w-8 h-8 mb-4 text-purple-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                      </svg>
                      <p className="mb-2 text-sm text-purple-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                      <p className="text-xs text-purple-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" required />
                  </label>
                </div>
              </div>
     <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
              <div className="space-y-2 ">
                <label className="text-sm font-medium text-purple-400">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full p-3 rounded-lg bg-gray-900/50 border border-purple-400/30 focus:border-purple-400 text-white placeholder-gray-400 outline-none"
                />
              </div>

              <div className="space-y-2 ">
                <label className="text-sm font-medium text-purple-400">Phone</label>
                <input
                  type="tel"
                  name="Phone"
                  value={formData.Phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  required
                  className="w-full p-3 rounded-lg bg-gray-900/50 border border-purple-400/30 focus:border-purple-400 text-white placeholder-gray-400 outline-none"
                />
              </div>

              <div className="space-y-2 ">
                <label className="text-sm font-medium text-purple-400">Father's Name</label>
                <input
                  type="text"
                  name="FatherName"
                  value={formData.FatherName}
                  onChange={handleChange}
                  placeholder="Enter father's name"
                  required
                  className="w-full p-3 rounded-lg bg-gray-900/50 border border-purple-400/30 focus:border-purple-400 text-white placeholder-gray-400 outline-none"
                />
              </div>

              <div className="space-y-2 ">
                <label className="text-sm font-medium text-purple-400">Mother's Name</label>
                <input
                  type="text"
                  name="MotherName"
                  value={formData.MotherName}
                  onChange={handleChange}
                  placeholder="Enter mother's name"
                  required
                  className="w-full p-3 rounded-lg bg-gray-900/50 border border-purple-400/30 focus:border-purple-400 text-white placeholder-gray-400 outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-purple-400">Caste</label>
                <input
                  type="text"
                  name="Caste"
                  value={formData.Caste}
                  onChange={handleChange}
                  placeholder="Enter caste"
                  required
                  className="w-full p-3 rounded-lg bg-gray-900/50 border border-purple-400/30 focus:border-purple-400 text-white placeholder-gray-400 outline-none"
                />
              </div>

              <div className="space-y-2 ">
                <label className="text-sm font-medium text-purple-400">Gender</label>
                <select
                  name="Gender"
                  value={formData.Gender}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-gray-900/50 border border-purple-400/30 focus:border-purple-400 text-white placeholder-gray-400 outline-none"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="space-y-2 ">
                <label className="text-sm font-medium text-purple-400">Marital Status</label>
                <select
                  name="MaritalStatus"
                  value={formData.MaritalStatus}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-gray-900/50 border border-purple-400/30 focus:border-purple-400 text-white placeholder-gray-400 outline-none"
                >
                  <option value="">Select Status</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Widowed">Widowed</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-purple-400">Job Status</label>
                <input
                  type="text"
                  name="jobStatus"
                  value={formData.jobStatus}
                  onChange={handleChange}
                  placeholder="Enter job status"
                  required
                  className="w-full p-3 rounded-lg bg-gray-900/50 border border-purple-400/30 focus:border-purple-400 text-white placeholder-gray-400 outline-none"
                />
              </div>
              </div>
              <div className="col-span-2 space-y-2">
                <label className="text-sm font-medium text-purple-400">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter address"
                  required
                  className="w-full p-3 rounded-lg bg-gray-900/50 border border-purple-400/30 focus:border-purple-400 text-white placeholder-gray-400 outline-none"
                />
              </div>

              <div className="col-span-2 space-y-2">
                <label className="text-sm font-medium text-purple-400">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter description"
                  rows="4"
                  required
                  className="w-full p-3 rounded-lg bg-gray-900/50 border border-purple-400/30 focus:border-purple-400 text-white placeholder-gray-400 outline-none"
                ></textarea>
              </div>
            </div>

            <div className="flex justify-end mt-8">
              <button
                type="submit"
                className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 font-medium"
              >
                Create Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
