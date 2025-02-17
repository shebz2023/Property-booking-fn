import React from "react";
import { Navbar } from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";

export const LandingPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <section>
        <Hero />
        <Stats />
      </section>
    </div>
  );
};
