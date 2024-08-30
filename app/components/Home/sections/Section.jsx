import React from "react";
import SectionCard from "./SectionCard";

const Section = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
          What to expect from a <span className="text-[#356DF1]">EduNexus courses?</span>
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

          <SectionCard props="Highly Qualified"/>
          <SectionCard props="Question, Quiz & Course"/>
          <SectionCard props="Dedicated Support"/>
          <SectionCard props="Highly Qualified"/>
          <SectionCard props="Question, Quiz & Course"/>
          <SectionCard props="Dedicated Support"/>


        </div>
      </div>
    </section>
  );
};

export default Section;
