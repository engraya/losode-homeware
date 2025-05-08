"use client";

import React, { useEffect, useState } from "react";
import Hero from "./components/Homeware/Hero";
import LandingCTA from "./components/Homeware/LandingCTA";
import SubstanceComponent from "./components/SubstanceComponent";
import SubComponent from "./components/SubComponent";
import Contemporary from "./components/Contemporary";
import Yours from "./components/Yours";
import Products from "./components/Products";
import { useSearch } from "./contexts/SearchContext"; // Import the search context

export default function Home() {
  const { query } = useSearch();  // Get the search query from context
  const [showAllComponents, setShowAllComponents] = useState(true);

  useEffect(() => {
    if (query) {
      // If there's a search query, hide other components
      setShowAllComponents(false);
    } else {
      // If there's no search query, show all components
      setShowAllComponents(true);
    }
  }, [query]);  // Re-run this effect whenever the search query changes

  return (
    <>
      {showAllComponents && (
        <>
          <Hero />
          <LandingCTA />
          <Contemporary />
          <Yours />
          <SubstanceComponent />
          <SubComponent />
        </>
      )}

      {/* Always show Products component at the top when there's a search */}
      <Products />
    </>
  );
}
