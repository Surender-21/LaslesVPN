import Paragraph from "@/components/common/Paragraph";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="max-w-[1240px] mx-auto xl:px-[50px] lg:px-[42px] md:px-[32px] sm:px-[22px] px-[16px] xl:py-[38px] lg:py-[32px] md:py-[28px] sm:py-[22px] py-[18px]">
      <div className="flex items-center xl:gap-10 lg:gap-9 md:gap-8 sm:gap-7 gap-5 justify-between min-[920px]:!flex-row flex-col-reverse">
        <div className="flex flex-col xl:gap-11 lg:gap-10 md:gap-9 sm:gap-8 gap-6 max-[920px]:text-center">
          <div className="xl:max-w-[500px] lg:max-w-[480px] min-[920px]:max-w-[450px] flex flex-col lg:gap-5 md:gap-4 sm:gap-3 gap-2">
            <h1 className="text-[#0B132A] font-medium leading-[140%] xl:text-[50px] lg:text-[44px] md:text-4xl sm:text-3xl text-[28px]">
              Want anything to be easy with
              <span className="font-bold"> LaslesVPN.</span>
            </h1>
            <Paragraph
              paratitel={
                "Provide a network for all your needs with ease and fun using LaslesV PN d=iscover interesting features from us."
              }
            />
          </div>
          <div>
            <button className="xl:p-[17px_77px] lg:p-[16px_65px] md:p-[14px_58px] sm:p-[11px_48px] p-[9px_40px] lg:text-base md:text-[15px] sm:text-sm text-[13px] font-bold leading-[156.25%] hover:text-[#F53838] hover:bg-white cursor-pointer border border-transparent hover:border-[#F53838] hover:shadow-[0px_30px_25px_-22px_rgba(245,56,56,0.35)] bg-[#F53838] text-white rounded-xl duration-700 transition-all ease-in-out">
              Get Started
            </button>
          </div>
        </div>
        <div>
          <Image
            className="xl:!w-[611px] lg:!w-[580px] md:!w-[550px] sm:!w-[400Px] w-[380px]"
            src={"/assets/svg/hero-pic.svg"}
            alt="hero-pic"
            height={382}
            width={611}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
