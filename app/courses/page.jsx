import React from "react";
import HeaderNav from "../components/Home/nav/Header";
import CardComp from "../components/Home/cards/CardComp";
import Footer from "../components/footer/Footer";

const CoursePage = () => {
  return (
    <>
      <HeaderNav />
      <div className="flex flex-wrap gap-x-3 p-6 ml-5">
        <CardComp />
        <CardComp />
        <CardComp />
        <CardComp />
        <CardComp />
      </div>

      <Footer/>
    </>
  );
};

export default CoursePage;
