import Heading from "@/components/common/Heading";
import Paragraph from "@/components/common/Paragraph";
import { RightIcon } from "@/components/helper/Icon";
import Image from "next/image";
import React from "react";

function Provide() {
  return (
    <div className="max-w-[1240px] mx-auto xl:px-[50px] lg:px-[42px] md:px-[32px] sm:px-[22px] px-[16px] xl:py-[41px_126px] lg:py-[36px_110px] md:py-[30px_90px] sm:py-[24px_75px] py-[18px_45px]">
      <div className="flex justify-between lg:gap-6 md:gap-5 sm:gap-4 gap-3 md:flex-nowrap flex-wrap">
        <div className="flex md:justify-start justify-center max-[768px]:w-full">
          <Image
            className="lg:w-[508px] md:w-[450px] sm:w-[410px] w-[350px]"
            src={"/assets/svg/provide-pic.svg"}
            alt="provide"
            width={508}
            height={415}
          />
        </div>
        <div className="xl:max-w-[428px] lg:max-w-[400px] md:max-w-[340px] flex flex-col xl:gap-5 lg:gap-4 md:gap-3 gap-2 justify-end">
          <div className="flex flex-col xl:gap-8 lg:gap-7 md:gap-4 sm:gap-3 gap-2">
            <Heading
              className="text-start"
              titel={"We Provide Many Features You Can Use"}
            />
            <Paragraph
              title={
                "You can explore the features that we provide with fun and have their own functions each feature."
              }
            />
          </div>
          <div>
            <ul>
              <li className="flex items-center text-sm font-normal leading-[214%] text-[#4F5665] sm:gap-[10px] gap-2">
                <RightIcon />
                Powerfull online protection.
              </li>
              <li className="flex items-center text-sm font-normal leading-[214%] text-[#4F5665] sm:gap-[10px] gap-2">
                <RightIcon />
                Internet without borders.
              </li>
              <li className="flex items-center text-sm font-normal leading-[214%] text-[#4F5665] sm:gap-[10px] gap-2">
                <RightIcon />
                Supercharged VPN
              </li>
              <li className="flex items-center text-sm font-normal leading-[214%] text-[#4F5665] sm:gap-[10px] gap-2">
                <RightIcon />
                No specific time limits.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Provide;
