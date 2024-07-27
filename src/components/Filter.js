import React from "react";
import './Filter.css';

const Filter = ({ filters, setFilters }) => {
    const handleDateChange = (e) => {
        setFilters({ ...filters, date: e.target.value });
    }

    const handleTypeChange = (e) => {
        setFilters({ ...filters, type: e.target.value });
    }


  return (
    <div className="filters">
      <select onChange={handleDateChange} value={filters.date}>
        <option value="">Filter by Date</option>
        <option value="2023-2024">2023-2024</option>
        <option value="2024-2025">2024-2025</option>
      </select>

   
      <select onChange={handleTypeChange} value={filters.type}>
        <option value="">Filter by Type</option>
        <option value="Standalone">Standalone</option>
        <option value="Signature">Signature</option>
        <option value="Yoga">Yoga</option>
        <option value="Meditation">Meditation</option>
        <option value="Detox">Detox</option>
        
      </select>

    </div>
  );
};

export default Filter;
