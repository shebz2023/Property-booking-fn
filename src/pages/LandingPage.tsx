import React from "react";
import { Navbar } from "../components/Navbar";
import Hero from "../components/Hero";
import bgrid from "../assets/bg-grid-lighter.svg";
import StatsHero from "../components/StatsHero";
import FeaturedProperties from "../components/FeauredProperties";
import Testimonials from "../components/testimonials";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestios";
import BottomSection from "../components/BottomSection";

export const LandingPage: React.FC = () => {
  return (
    <div className="bg-cover bg-center">
      <Navbar />
      <section
        className="font-poppin bg-black"
        style={{ backgroundImage: `url(${bgrid})` }}
      >
        <Hero />
        <StatsHero />
      </section>
      <section className="min-h-screen">
        <FeaturedProperties />
      </section>
      <section className="">
        <Testimonials />
      </section>
      <section className="">
        <FrequentlyAskedQuestions />
      </section>
      <footer className="">
        <BottomSection />
      </footer>
    </div>
  );
};
