import React from "react";

const Filter = () => {
  return (
    <div className="filter">
      <h2>Filter Products</h2>
      <label>
        Price:
        <input type="range" min="0" max="100" />
      </label>
      <label>
        Category:
        <select>
          <option>All</option>
          <option>Social</option>
          <option>Marketing</option>
          <option>Video Creator</option>
          <option>Image Creator</option>
        </select>
      </label>
    </div>
  );
};

export default Filter;