import React from "react";
import HeaderNav from "../components/Home/nav/Header";
import CardComp from "../components/Home/cards/CardComp";

const CoursePage = () => {
  return (
    <>
      <HeaderNav />
      <div className="flex flex-wrap gap-x-3">
        <CardComp />
        <CardComp />
        <CardComp />
        <CardComp />
        <CardComp />
      </div>
    </>
  );
};

export default CoursePage;
