import React from "react";
import { Skip } from "../types/SkipTypes";
import { useSkipContext } from "../contex/SkipContext";

type skipCardProps = {
  skip: Skip;
  isSelected: boolean;
};
const SkipCard = ({ skip, isSelected }: skipCardProps) => {
  const { setSelectedSkip } = useSkipContext();
  return (
    <div
      className={`rounded-xl overflow-hidden transition-all duration-300 cursor-pointer shadow-lg ${
        isSelected
          ? "border-2 border-blue-500 transform scale-[1.02] ring-4 ring-blue-500/30"
          : "border border-gray-700 hover:border-gray-500 hover:shadow-xl"
      }`}
      onClick={() => {
        setSelectedSkip(skip);
      }}
    >
      <div className="relative">
        <div className="overflow-hidden h-52">
          <img
            src={
              "https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=800"
            }
            alt={`${skip.size} yard container`}
            className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full font-medium text-sm shadow-md">
            {skip.size} yards
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
          {!skip.allowed_on_road && (
            <div className="flex items-center text-yellow-300 text-sm font-medium">
              <i className="fas fa-exclamation-triangle mr-2"></i>
              <span>Private Property Only</span>
            </div>
          )}
        </div>
      </div>
      <div className="p-6 bg-gray-800">
        <h3 className="text-2xl font-bold mb-2">{skip.size} Yard Skip</h3>
        <p className="text-gray-400 text-sm mb-4 flex items-center">
          <i className="fas fa-calendar-alt mr-2 text-blue-400"></i>
          {skip.hire_period_days} day hire period
        </p>
        <div className="flex items-baseline mb-5">
          {skip.price_before_vat != null && (
            <div className="flex items-baseline mb-5">
              <span className="text-3xl font-bold text-blue-400">
                £{skip.price_before_vat}{" "}
              </span>
              <span className="ml-2 text-gray-400"> per week</span>
            </div>
          )}
          {skip.per_tonne_cost != null && (
            <div className="flex items-baseline mb-5">
              <span className="text-3xl font-bold text-blue-400">
                £{skip.per_tonne_cost}{" "}
              </span>
              <span className="ml-2 text-gray-400"> per tonne</span>
            </div>
          )}
        </div>
        {isSelected ? (
          <button className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg !rounded-button whitespace-nowrap flex items-center justify-center cursor-pointer transition-all shadow-lg">
            <i className="fas fa-check-circle mr-2"></i>
            <span>Selected</span>
          </button>
        ) : (
          <button className="w-full py-3.5 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg !rounded-button whitespace-nowrap flex items-center justify-center cursor-pointer transition-all shadow-lg">
            <span>Select This Skip</span>
            <i className="fas fa-arrow-right ml-2"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default SkipCard;
