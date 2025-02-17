import React from "react";
import { Navbar } from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";

export const LandingPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <section className="flex font-poppins">
        <div>
          <Hero />
          <Stats />
        </div>
        <div className="bg-red-400"></div>
      </section>
    </div>
  );
};
