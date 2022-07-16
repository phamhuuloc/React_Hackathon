import React from "react";
import DonateSection from "../../components/DonateSection/DonateSection";
import BenefitDonate from "../../components/BenefitDonate/BenefitDonate";
import HeroSection from "../../components/HeroSection/HeroSection";
import Navbar from "../../components/Navbar/Navbar";
import WorkSection from "../../components/WorkSeciton/WorkSection";
import TopDonate from "../../components/TopDonate/TopDonate";
import WhyTrust from "../../components/WhyTrust/WhyTrust";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WorkSection />
      <DonateSection />
      <BenefitDonate />
      <WhyTrust />
      <TopDonate />
    </>
  );
};
export default Home;
