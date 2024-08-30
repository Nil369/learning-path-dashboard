import React from "react";
import Pricing from "../components/Pricing";
import HeaderNav from "../components/Home/nav/Header";
import Footer from "../components/footer/Footer";

const PricingPage = () => {
  return (
    <>
      <HeaderNav />
      <div className="flex items-center justify-center">
        <Pricing />
      </div>
      <Footer/>
    </>
  );
};

export default PricingPage;
