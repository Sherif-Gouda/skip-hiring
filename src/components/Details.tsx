import React from "react";
import { useSkipContext } from "../contex/SkipContext";

const Details = () => {
  const { selectedSkip } = useSkipContext();
  return selectedSkip ? (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 p-5 shadow-lg backdrop-blur-sm bg-opacity-95 z-10">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          {selectedSkip?.price_before_vat && (
            <div className="flex items-center bg-gray-700 px-4 py-2 rounded-lg">
              <span className="text-xl font-bold text-blue-400 mr-2">
                £{selectedSkip?.price_before_vat}
              </span>
              <span className="text-gray-300 text-sm">per week</span>
            </div>
          )}
          {selectedSkip?.per_tonne_cost && (
            <div className="flex items-center bg-gray-700 px-4 py-2 rounded-lg">
              <span className="text-xl font-bold text-blue-400 mr-2">
                £{selectedSkip?.per_tonne_cost}
              </span>
              <span className="text-gray-300 text-sm">per tonne</span>
            </div>
          )}
          <div className="flex items-center text-gray-300">
            <i className="fas fa-truck mr-2 text-yellow-400"></i>
            <span>
              {selectedSkip.transport_cost == null
                ? "Free Transport"
                : `£${selectedSkip?.transport_cost} transport fee`}
            </span>
          </div>
          <div className="flex items-center text-gray-300">
            <i className="fas fa-calendar-alt mr-2 text-blue-400"></i>
            <span>{selectedSkip?.hire_period_days} day hire</span>
          </div>
          {selectedSkip.vat && (
            <div className="flex items-center text-gray-300">
              <i className="fas fa-percent mr-2 text-blue-700"></i>
              <span>{selectedSkip.vat}% VAT</span>
            </div>
          )}
        </div>
        <div className="flex items-center gap-4">
          <button className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg !rounded-button whitespace-nowrap cursor-pointer transition-colors shadow-md">
            <i className="fas fa-arrow-left mr-2"></i>
            Back
          </button>
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg !rounded-button whitespace-nowrap flex items-center cursor-pointer transition-colors shadow-md">
            Continue
            <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default Details;
