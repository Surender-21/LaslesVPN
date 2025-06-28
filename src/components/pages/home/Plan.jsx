import Heading from "@/components/common/Heading";
import Paragraph from "@/components/common/Paragraph";
import { CheckIcon } from "@/components/helper/Icon";
import Image from "next/image";
import React from "react";

function Plan() {
  return (
    <div className="bg-[linear-gradient(to_bottom,_#f8f8f8_0%,_#f8f8f8_92%,_transparent_100%)]">
      <div className="max-w-[1240px] mx-auto xl:px-[50px] xl:py-[80px_275px] lg:px-[42px] lg:py-[65px_200px] md:px-[32px] md:py-[52px_175px] sm:px-[22px] sm:py-[40px_150px] px-[16px] py-[35px_100px] flex flex-col xl:gap-[60px] lg:gap-12 md:gap-10 sm:gap-8 gap-6">
        <div className="flex flex-col items-center mx-auto max-w-[555px]">
          <Heading titel={"Choose Your Plan"} />
          <Paragraph
            className="text-center"
            paratitel={
              "Let's choose the package that is best for you and explore it happily and cheerfully."
            }
          />
        </div>
        <div className="flex md:flex-nowrap flex-wrap md:justify-between justify-around xl:gap-[50px] lg:gap-[42px] md:gap-[28px] sm:gap-[40px_20px] gap-[30px_110px]">
          <div className="lg:max-w-[330px] sm:max-w-[287px] max-w-[275px] w-full flex flex-col items-center bg-white border-2 border-[#DDDDDD] rounded-[10px] xl:py-[80px_50px] lg:py-[65px_42px] md:py-[50px_38px] sm:py-[44px_30px] py-[35px_25px] group hover:border-[#F53838] transition-all duration-700 ease-in-out">
            <div className="flex flex-col justify-between h-full gap-[40px]">
              <div className="flex flex-col lg:gap-5 md:gap-4 sm:gap-3 gap-2">
                <div className="flex flex-col xl:gap-[30px] lg:gap-7 md:gap-6 sm:gap-5 gap-4">
                  <div className="flex justify-center">
                    <Image
                      className="lg:w-[145px] md:w-[138px] sm:w-[130px] w-[120px]"
                      src={"/assets/svg/plan.svg"}
                      alt="plan"
                      height={165}
                      width={145}
                    />
                  </div>
                  <h2 className="text-center text-[#0B132A] leading-[167%] font-medium lg:text-lg md:text-[17px] sm:text-base text-[15px]">
                    Free Plan
                  </h2>
                </div>
                <div>
                  <ul className="flex flex-col sm:gap-[10px] gap-2">
                    <li className="flex items-center text-[#4F5665] leading-[214%] font-normal sm:text-sm lg:gap-[20px] text-xs">
                      <CheckIcon />
                      Unlimited Bandwitch
                    </li>
                    <li className="flex items-center text-[#4F5665] leading-[214%] font-normal sm:text-sm text-xs lg:gap-[20px]">
                      <CheckIcon />
                      Encrypted Connection
                    </li>
                    <li className="flex items-center text-[#4F5665] leading-[214%] font-normal sm:text-sm text-xs lg:gap-[20px]">
                      <CheckIcon />
                      No Traffic Logs
                    </li>
                    <li className="flex items-center text-[#4F5665] leading-[214%] font-normal sm:text-sm text-xs lg:gap-[20px]">
                      <CheckIcon />
                      Works on All Devices
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-center lg:gap-5 md:gap-4 gap-3">
                <h2 className="text-[#0B132A] font-semibold leading-[120%] text-center lg:text-[25px] md:text-xl sm:text-lg text-base">
                  Free
                </h2>
                <div>
                  <button className="text-[#F53838] border-2 border-[#F53838] rounded-[50px] font-bold xl:p-[13px_63px] lg:p-[11px_58px] md:p-[9px_52px] sm:p-[7px_45px] p-[6px_38px] lg:text-base md:text-[15px] sm:text-sm text-[13px] group-hover:text-white group-hover:bg-[#F53838] group-hover:shadow-[0px_14px_25px_-8px_rgba(245,56,56,0.35)] transition-all duration-700 ease-in-out cursor-pointer">
                    Select
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:max-w-[330px] sm:max-w-[287px] max-w-[275px] w-full flex flex-col items-center bg-white border-2 border-[#DDDDDD] rounded-[10px] xl:py-[65px_50px] lg:py-[52px_42px] md:py-[46px_38px] sm:py-[38px_30px] py-[30px_25px] group hover:border-[#F53838] transition-all duration-700 ease-in-out">
            <div className="flex flex-col justify-between h-full gap-[40px]">
              <div className="flex flex-col lg:gap-5 md:gap-4 sm:gap-3 gap-2">
                <div className="flex flex-col xl:gap-[30px] lg:gap-7 md:gap-6 sm:gap-5 gap-4">
                  <div className="flex justify-center">
                    <Image
                      className="lg:w-[161px] md:w-[154px] sm:w-[146px] w-[138px]"
                      src={"/assets/svg/plan.svg"}
                      alt="plan"
                      height={165}
                      width={161}
                    />
                  </div>
                  <h2 className="text-center text-[#0B132A] leading-[167%] font-medium lg:text-lg md:text-[17px] sm:text-base text-[15px]">
                    Standard Plan
                  </h2>
                </div>
                <div>
                  <ul className="flex flex-col sm:gap-[10px] gap-2">
                    <li className="flex items-center text-[#4F5665] leading-[214%] font-normal sm:text-sm lg:gap-[20px] text-xs">
                      <CheckIcon />
                      Unlimited Bandwitch
                    </li>
                    <li className="flex items-center text-[#4F5665] leading-[214%] font-normal sm:text-sm text-xs lg:gap-[20px]">
                      <CheckIcon />
                      Encrypted Connection
                    </li>
                    <li className="flex items-center text-[#4F5665] leading-[214%] font-normal sm:text-sm text-xs lg:gap-[20px]">
                      <CheckIcon />
                      Yes Traffic Logs
                    </li>
                    <li className="flex items-center text-[#4F5665] leading-[214%] font-normal sm:text-sm text-xs lg:gap-[20px]">
                      <CheckIcon />
                      Works on All Devices
                    </li>
                    <li className="flex items-center text-[#4F5665] leading-[214%] font-normal sm:text-sm text-xs lg:gap-[20px]">
                      <CheckIcon />
                      Connect Anyware
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-center lg:gap-5 md:gap-4 gap-3">
                <h2 className="text-[#0B132A] font-semibold leading-[120%] text-center lg:text-[25px] md:text-xl sm:text-lg text-base">
                  $9 / <span className="text-[#4F5665] font-normal"> mo</span>
                </h2>
                <div>
                  <button className="text-[#F53838] border-2 border-[#F53838] rounded-[50px] font-bold xl:p-[13px_63px] lg:p-[11px_58px] md:p-[9px_52px] sm:p-[7px_45px] p-[6px_38px] lg:text-base md:text-[15px] sm:text-sm text-[13px] group-hover:text-white group-hover:bg-[#F53838] group-hover:shadow-[0px_14px_25px_-8px_rgba(245,56,56,0.35)] transition-all duration-700 ease-in-out cursor-pointer">
                    Select
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:max-w-[330px] sm:max-w-[287px] max-w-[275px] w-full flex flex-col items-center bg-white border-2 border-[#DDDDDD] rounded-[10px] xl:py-[80px_50px] lg:py-[65px_42px] md:py-[50px_38px] sm:py-[44px_30px] py-[35px_25px] group hover:border-[#F53838] transition-all duration-700 ease-in-out">
            <div className="flex flex-col justify-between sm:gap-[50px] gap-[40px] h-full">
              <div className="flex flex-col lg:gap-5 md:gap-4 sm:gap-3 gap-2">
                <div className="flex flex-col xl:gap-[30px] lg:gap-7 md:gap-6 sm:gap-5 gap-4">
                  <div className="flex justify-center">
                    <Image
                      className="lg:w-[145px] md:w-[138px] sm:w-[128px] w-[120px]"
                      src={"/assets/svg/plan.svg"}
                      alt="plan"
                      height={165}
                      width={145}
                    />
                  </div>
                  <h2 className="text-center text-[#0B132A] leading-[167%] font-medium lg:text-lg md:text-[17px] sm:text-base text-[15px]">
                    Premium Plan
                  </h2>
                </div>
                <div>
                  <ul className="flex flex-col sm:gap-[10px] gap-2">
                    <li className="flex items-center text-[#4F5665] leading-[214%] font-normal sm:text-sm lg:gap-[20px] text-xs">
                      <CheckIcon />
                      Unlimited Bandwitch
                    </li>
                    <li className="flex items-center text-[#4F5665] leading-[214%] font-normal sm:text-sm text-xs lg:gap-[20px]">
                      <CheckIcon />
                      Encrypted Connection
                    </li>
                    <li className="flex items-center text-[#4F5665] leading-[214%] font-normal sm:text-sm text-xs lg:gap-[20px]">
                      <CheckIcon />
                      Yes Traffic Logs
                    </li>
                    <li className="flex items-center text-[#4F5665] leading-[214%] font-normal sm:text-sm text-xs lg:gap-[20px]">
                      <CheckIcon />
                      Works on All Devices
                    </li>
                    <li className="flex items-center text-[#4F5665] leading-[214%] font-normal sm:text-sm text-xs lg:gap-[20px]">
                      <CheckIcon />
                      Connect Anyware
                    </li>
                    <li className="flex items-center text-[#4F5665] leading-[214%] font-normal sm:text-sm text-xs lg:gap-[20px]">
                      <CheckIcon />
                      Get New Features
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-center lg:gap-5 md:gap-4 gap-3">
                <h2 className="text-[#0B132A] font-semibold leading-[120%] text-center lg:text-[25px] md:text-xl sm:text-lg text-base">
                  $12 / <span className="text-[#4F5665] font-normal"> mo</span>
                </h2>
                <div>
                  <button className="text-[#F53838] border-2 border-[#F53838] rounded-[50px] font-bold xl:p-[13px_63px] lg:p-[11px_58px] md:p-[9px_52px] sm:p-[7px_45px] p-[6px_38px] lg:text-base md:text-[15px] sm:text-sm text-[13px] group-hover:text-white group-hover:bg-[#F53838] group-hover:shadow-[0px_14px_25px_-8px_rgba(245,56,56,0.35)] transition-all duration-700 ease-in-out cursor-pointer">
                    Select
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plan;
