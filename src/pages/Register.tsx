import React, { useState } from 'react';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    username: '',
    password: '',
    confirmPassword: '',
    role: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const inputClass = "w-full px-3 py-2 rounded bg-white text-sm";
  const groupClass = "mb-4";

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-[#002F6C] text-white rounded-t-lg shadow-md w-full max-w-md">
        <form onSubmit={handleSubmit} className="p-6">
          <h2 className="text-white text-center text-2xl font-bold mb-6">Inscription</h2>

          <div className={groupClass}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div className={groupClass}>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div className={groupClass}>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div className={groupClass}>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div className={groupClass}>
            <input
              type="text"
              name="username"
              placeholder="User Name"
              value={formData.username}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div className={groupClass}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div className={groupClass}>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div className={groupClass}>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className={`${inputClass} ${!formData.role ? 'text-gray-500' : 'text-black'}`}
            >
              <option value="" disabled hidden>Role</option>
              <option value="admin">Admin</option>
              <option value="chauffeur">Chauffeur</option>
              <option value="client">Client</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-orange text-black font-bold py-2 rounded hover:bg-orange-600 mt-6"
          >
            Sign Up
          </button>
        </form>

        <div className="h-2 bg-orange rounded-t-lg"></div>
      </div>
    </div>
  );
};

export default Register;
