import React from "react";

function Heading({ titel, className }) {
  return (
    <>
      <h2
        className={`text-[#2a200b] font-medium leading-[142%] lg:text-[35px] md:text-3xl sm:text-2xl text-xl text-center ${className}`}
      >
        {titel}
      </h2>
    </>
  );
}

export default Heading;
