"use client";

import React, { useEffect, useState } from "react";
import Hero from "./components/Homeware/Hero";
import LandingCTA from "./components/Homeware/LandingCTA";
import SubstanceComponent from "./components/SubstanceComponent";
import SubComponent from "./components/SubComponent";
import Contemporary from "./components/Contemporary";
import Yours from "./components/Yours";
import Products from "./components/Products";
import { useSearch } from "./contexts/SearchContext";

export default function Home() {
  const { query } = useSearch();
  const [showAllComponents, setShowAllComponents] = useState(true);

  useEffect(() => {
    if (query) {
      setShowAllComponents(false);
    } else {
      setShowAllComponents(true);
    }
  }, [query]); 

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
      <Products />
    </>
  );
}
