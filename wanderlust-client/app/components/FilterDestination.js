import React from "react";

const FilterDestination = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-300 max-w-7xl my-6">
      <select className="px-5 py-4 text-sm text-gray-500 uppercase bg-white border-b md:border-b-0 md:border-r border-gray-300 outline-none">
        <option>Category</option>
        <option>Beach</option>
        <option>Mountain</option>
        <option>City</option>
      </select>

      <select className="px-5 py-4 text-sm text-gray-500 uppercase bg-white border-b md:border-b-0 md:border-r border-gray-300 outline-none">
        <option>Price Range</option>
        <option>$0 - $1000</option>
        <option>$1000 - $3000</option>
        <option>$3000+</option>
      </select>

      <select className="px-5 py-4 text-sm text-gray-500 uppercase bg-white outline-none">
        <option>Sort By</option>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
        <option>Newest First</option>
      </select>
    </div>
  );
};

export default FilterDestination;
