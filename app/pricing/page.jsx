import React from "react";
import Pricing from "../components/Pricing";
import HeaderNav from "../components/Home/nav/Header";

const PricingPage = () => {
  return (
    <>
      <HeaderNav />
      <div className="flex items-center justify-center">
        <Pricing />
      </div>
    </>
  );
};

export default PricingPage;
