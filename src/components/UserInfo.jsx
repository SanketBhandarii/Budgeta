import React from "react";

const UserInfo = ({ nextStep, formData, updateFormData }) => {
  const handleChange = (e) =>
    updateFormData({ [e.target.name]: e.target.value });

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6 text-center">
        User <span className="text-cyan-300">Information</span>
      </h2>
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
          className="w-full p-3 outline-none bg-gray-700 text-white rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
          className="w-full p-3 outline-none bg-gray-700 text-white  rounded-lg"
        />
      </div>
      <div className="mb-6">
        <label className="block text-lg font-medium mb-2">
          Preferred Currency
        </label>
        <select
          name="preferredCurrency"
          value={formData.preferredCurrency}
          onChange={handleChange}
          className="w-full p-3 outline-none bg-gray-700 text-white  rounded-lg"
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="INR">INR</option>
        </select>
      </div>
      <button
        onClick={nextStep}
        className="w-full bg-cyan-600 text-white p-3 rounded-lg hover:bg-cyan-800 transition"
      >
        Next
      </button>
    </div>
  );
};

export default UserInfo;
