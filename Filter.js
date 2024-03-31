import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [filters, setFilters] = useState({ domain: '', gender: '', availability: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
    onFilter({ ...filters, [name]: value });
  };

  return (
    <div className="filter">
      <select name="domain" onChange={handleChange}>
        <option value="">Select Domain</option>
        {/* Options for domain */}
      </select>
      <select name="gender" onChange={handleChange}>
        <option value="">Select Gender</option>
        {/* Options for gender */}
      </select>
      <select name="availability" onChange={handleChange}>
        <option value="">Select Availability</option>
        {/* Options for availability */}
      </select>
    </div>
  );
};

export default Filter;
