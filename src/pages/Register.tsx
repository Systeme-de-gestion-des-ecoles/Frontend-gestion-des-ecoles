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

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <form onSubmit={handleSubmit} className="bg-[#032B5F] p-9 mx-3 w-[500px] rounded-lg">
        <h2 className="text-white text-center text-lg font-bold mb-4">INSCRIPTION</h2>

        {/* Groupement des champs avec spacing */}
        <div className="space-y-5">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className={inputClass}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className={inputClass}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className={inputClass}
          />
          <input
            type="text"
            name="username"
            placeholder="User Name"
            value={formData.username}
            onChange={handleChange}
            className={inputClass}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className={inputClass}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={inputClass}
          />
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Role</option>
            <option value="admin">Admin</option>
            <option value="chauffeur">Chauffeur</option>
            <option value="client">Client</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white font-bold py-2 rounded hover:bg-orange-600 mt-6"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
