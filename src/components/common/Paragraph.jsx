import React from "react";

function Paragraph({ paratitel, spantitel, className, title }) {
  return (
    <>
      <p
        className={`font-normal text-[#4F5665] leading-[187.5%] lg:text-base md:text-[15px] sm:text-sm text-[13px] ${className}`}
      >
        {paratitel}
        <span className={`font-semibold`}>{spantitel}</span>

        {title}
      </p>
    </>
  );
}

export default Paragraph;
