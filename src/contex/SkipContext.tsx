// context/SkipContext.tsx
import React, { createContext, useContext, useState, useMemo } from "react";
import { Skip, SortOrder } from "../types/SkipTypes";



type SkipContextType = {
  allSkips: Skip[];
  selectedSkip: Skip | null;
  filteredSkips: Skip[];
  selectedSize: number | null;
  sortOrder: SortOrder;
  setSelectedSize: (size: number | null) => void;
  setSortOrder: (order: SortOrder) => void;
  setAllSkips: (skips: Skip[]) => void;
  setSelectedSkip: (skip: Skip) => void;
};

const SkipContext = createContext<SkipContextType | undefined>(undefined);

export const useSkipContext = () => {
  const context = useContext(SkipContext);
  if (!context)
    throw new Error("useSkipContext must be used within SkipProvider");
  return context;
};

export const SkipProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [allSkips, setAllSkips] = useState<Skip[]>([]);
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>("size-asc");

  const filteredSkips = useMemo(() => {
    let result = [...allSkips];

    if (selectedSize) {
      result = result.filter((skip) => skip.size === selectedSize);
    }

    result.sort((a, b) => {
      if (sortOrder === "size-asc") return a.size - b.size;
      if (sortOrder === "size-desc") return b.size - a.size;
      return 0;
    });

    return result;
  }, [allSkips, selectedSize, sortOrder]);

  return (
    <SkipContext.Provider
      value={{
        allSkips,
        selectedSkip,
        filteredSkips,
        selectedSize,
        sortOrder,
        setSelectedSize,
        setSelectedSkip,
        setSortOrder,
        setAllSkips,
      }}
    >
      {children}
    </SkipContext.Provider>
  );
};
