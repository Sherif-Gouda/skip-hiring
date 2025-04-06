import React from "react";
import { useSkipContext } from "../contex/SkipContext";
import { SortOrder } from "../types/SkipTypes";

const SkipFilters = () => {
  const { selectedSize, setSelectedSize, sortOrder, setSortOrder, allSkips } =
    useSkipContext();

  // Get unique sizes from available skips
  const availableSizes = Array.from(
    new Set(allSkips.map((skip) => skip.size))
  ).sort((a, b) => a - b);

  return (
    <div className="mb-8 bg-gray-800 p-4 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="w-full md:w-auto">
          <label
            htmlFor="size-filter"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Filter by Size
          </label>
          <div className="relative">
            <select
              id="size-filter"
              className="bg-gray-700 text-white rounded-lg py-2.5 px-4 pr-10 w-full md:w-48 appearance-none border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              value={selectedSize ?? ""}
              onChange={(e) => setSelectedSize(parseInt(e.target.value))}
            >
              <option value={undefined}>All Sizes</option>
              {availableSizes.map((size) => (
                <option key={size} value={size}>
                  {size} Yards
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <i className="fas fa-chevron-down text-gray-400"></i>
            </div>
          </div>
        </div>

        <div className="w-full md:w-auto">
          <label
            htmlFor="price-filter"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Sort by Price
          </label>
          <div className="relative">
            <select
              id="price-filter"
              className="bg-gray-700 text-white rounded-lg py-2.5 px-4 pr-10 w-full md:w-48 appearance-none border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as SortOrder)}
            >
              <option value="size-asc">Size: Low to High</option>
              <option value="size-desc">Size: High to Low</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <i className="fas fa-chevron-down text-gray-400"></i>
            </div>
          </div>
        </div>

        <div className="w-full md:w-auto mt-4 md:mt-8">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-6 rounded-lg !rounded-button whitespace-nowrap transition-colors shadow-md w-full md:w-auto cursor-pointer"
            onClick={() => {
              setSelectedSize(null);
              setSortOrder("size-asc");
            }}
          >
            <i className="fas fa-sync-alt mr-2"></i>
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkipFilters;
