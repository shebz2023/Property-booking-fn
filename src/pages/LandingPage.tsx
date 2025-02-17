import React from "react";
import { Navbar } from "../components/Navbar";

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <header className="">
        <Navbar />
      </header>
      <main className="text-7xl">hello world</main>
      <footer className="">footer</footer>
    </div>
  );
};
