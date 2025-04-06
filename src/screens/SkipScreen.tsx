import React, { useEffect } from "react";
import SkipList from "../components/SkipList";
import { useSkipContext } from "../contex/SkipContext";
import { skipsData } from "../data/skips";
import SkipFilters from "../components/SkipFilters";
import Details from "../components/Details";
import Header from "../components/Header";

const SkipScreen = () => {
  const { setAllSkips } = useSkipContext();
  useEffect(() => {
    setAllSkips(skipsData);
  }, []);
  return (
    <div className="w-screen min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <Header />
        <SkipFilters />
        <SkipList />
        <Details />
      </div>
    </div>
  );
};

export default SkipScreen;
