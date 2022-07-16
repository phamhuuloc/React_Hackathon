import React from "react";
import DonateSection from "../../components/DonateSection/DonateSection";
import BenefitDonate from "../../components/BenefitDonate/BenefitDonate";
import HeroSection from "../../components/HeroSection/HeroSection";
import Navbar from "../../components/Navbar/Navbar";
import WorkSection from "../../components/WorkSeciton/WorkSection";
import TopDonate from "../../components/TopDonate/TopDonate";
import WhyTrust from "../../components/WhyTrust/WhyTrust";
import Receiver from "../../components/Receiver/Receiver"

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhyTrust />
      <Receiver />
      <WorkSection />
      <DonateSection />
      <BenefitDonate />

      <TopDonate />
    </>
  );
};
export default Home;
