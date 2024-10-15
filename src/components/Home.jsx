import React from "react";
import HeroImage from './HeroImage';
import ProfessionalBanner from './ProfessionalBanner';
import Solutions from "./Solutions";
import Conversation from './Conversation';
import Features from './Features';
import Footer from './Footer';
const Home = () => {
  return (
    <div className="pt-20">
      <HeroImage />
      <ProfessionalBanner />
      <Solutions />
      <Conversation />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
