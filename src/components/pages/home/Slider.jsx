import Heading from "@/components/common/Heading";
import Paragraph from "@/components/common/Paragraph";
import { NextBtn, PrvBtn, Star } from "@/components/helper/Icon";
import Image from "next/image";
import React from "react";

function Slider() {
  return (
    <div className="xl:py-[61px_116px] lg:py-[58px_100px] md:py-[51px_85px] sm:py-[38px_75px] py-[26px_60px]">
      <div className="max-w-[1390px] ml-auto min-[1441px]:!mr-auto xl:pl-[50px] lg:pl-[42px] md:pl-[32px] sm:pl-[22px] pl-[16px]">
        <div className="mx-auto max-w-[550px] text-center flex flex-col md:gap-5 sm:gap-4 gap-3.5 items-center">
          <Heading
            className="!max-w-[400px]"
            titel={"Trusted by Thousands of Happy Customer"}
          />
          <Paragraph
            paratitel={
              " These are the stories of our customers who have joined us with great            pleasure when using this crazy feature."
            }
          />
        </div>
        <div className="overflow-x-scroll [scrollbar-width:none]">
          <div className="flex justify-between min-w-[1200px] xl:gap-10 lg:gap-8 md:gap-6 sm:gap-4 gap-3 xl:pl-[50px] lg:pl-[42px] md:pl-[32px] sm:pl-[22px] pl-[16px] xl:py-[60px_82px] lg:py-[52px_76px] md:py-[45px_65px] sm:py-[38px_52px] py-[26px_45px] mr-[-2px]">
            <div className="flex flex-col md:gap-3.5 sm:gap-3 gap-2.5 lg:max-w-[400px] md:max-w-[370px] sm:max-w-[340px] max-w-[310px] border-2 border-[#DDDDDD] hover:border-[#F53838] hover:shadow-[0px_25px_50px_-10px_rgba(13,16,37,0.1)] transition-all duration-700 ease-in-out rounded-[10px] xl:p-[22px_30px] lg:p-[20px_27px] md:p-[18px_24px] sm:p-[16px_21px] p-[14px_18px] w-full">
              <div className="flex items-center justify-between">
                <div className="flex items-center md:gap-4 sm:gap-3.5 gap-3">
                  <Image
                    className="lg:w-[50px] md:w-[46px] sm:w-[42px] w-[38px]"
                    src={"/assets/svg/viezh.svg"}
                    alt="Viezh"
                    width={50}
                    height={50}
                  />
                  <div>
                    <h4 className="text-[#0B132A] font-semibold leading-[166.6%] lg:text-lg md:text-[17px] sn:text-base text-[15px]">
                      Viezh Robert
                    </h4>
                    <p className="text-[#4F5665] sm:text-sm text-xs font-normal leading-[214%] mt-[-10%]">
                      Warsaw, Poland
                    </p>
                  </div>
                </div>
                <div className="flex items-center md:gap-2.5 sm:gap-2 gap-1.5">
                  <h4 className="text-[#0B132A] font-medium leading-[187.5%] lg:text-base md:text-[15px] sm:text-sm text-[13px]">
                    4.5
                  </h4>
                  <Star />
                </div>
              </div>
              <p className="text-[#0B132A] leading-[187%] font-normal lg:text-base md:text-[15px] sm:text-sm text-[13px]">
                “Wow... I am very happy to use this VPN, it turned out to be
                more than my expectations and so far there have been no
                problems. LaslesVPN always the best”.
              </p>
            </div>
            <div className="flex flex-col md:gap-3.5 sm:gap-3 gap-2.5 lg:max-w-[400px] md:max-w-[380px] sm:max-w-[360px] max-w-[340px] border-2 border-[#DDDDDD] hover:border-[#F53838] hover:shadow-[0px_25px_50px_-10px_rgba(13,16,37,0.1)] transition-all duration-700 ease-in-out  rounded-[10px] xl:p-[22px_30px] lg:p-[20px_27px] md:p-[18px_24px] sm:p-[16px_21px] p-[14px_18px] w-full">
              <div className="flex items-center justify-between">
                <div className="flex items-center md:gap-4 sm:gap-3.5 gap-3">
                  <Image
                    className="lg:w-[50px] md:w-[46px] sm:w-[42px] w-[38px]"
                    src={"/assets/svg/yessica.svg"}
                    alt="Viezh"
                    width={50}
                    height={50}
                  />
                  <div>
                    <h4 className="text-[#0B132A] font-semibold leading-[166.6%] lg:text-lg md:text-[17px] sn:text-base text-[15px]">
                      Yessica Christy
                    </h4>
                    <p className="text-[#4F5665] sm:text-sm text-xs font-normal leading-[214%] mt-[-10%]">
                      Shanxi, China
                    </p>
                  </div>
                </div>
                <div className="flex items-center md:gap-2.5 sm:gap-2 gap-1.5">
                  <h4 className="text-[#0B132A] font-medium leading-[187.5%] lg:text-base md:text-[15px] sm:text-sm text-[13px]">
                    4.5
                  </h4>
                  <Star />
                </div>
              </div>
              <p className="text-[#0B132A] leading-[187%] font-normal lg:text-base md:text-[15px] sm:text-sm text-[13px]">
                “I like it because I like to travel far and still can connect
                with high speed.”.
              </p>
            </div>
            <div className="flex flex-col md:gap-3.5 sm:gap-3 gap-2.5 lg:max-w-[400px] md:max-w-[380px] sm:max-w-[360px] max-w-[340px] border-2 border-[#DDDDDD] hover:border-[#F53838] hover:shadow-[0px_25px_50px_-10px_rgba(13,16,37,0.1)] transition-all duration-700 ease-in-out  rounded-[10px] xl:p-[22px_30px] lg:p-[20px_27px] md:p-[18px_24px] sm:p-[16px_21px] p-[14px_18px] w-full">
              <div className="flex items-center justify-between">
                <div className="flex items-center md:gap-4 sm:gap-3.5 gap-3">
                  <Image
                    className="lg:w-[50px] md:w-[46px] sm:w-[42px] w-[38px]"
                    src={"/assets/svg/kim.svg"}
                    alt="Viezh"
                    width={50}
                    height={50}
                  />
                  <div>
                    <h4 className="text-[#0B132A] font-semibold leading-[166.6%] lg:text-lg md:text-[17px] sn:text-base text-[15px]">
                      Kim Young Jou
                    </h4>
                    <p className="text-[#4F5665] sm:text-sm text-xs font-normal leading-[214%] mt-[-10%]">
                      Seoul, South Korea
                    </p>
                  </div>
                </div>
                <div className="flex items-center md:gap-2.5 sm:gap-2 gap-1.5">
                  <h4 className="text-[#0B132A] font-medium leading-[187.5%] lg:text-base md:text-[15px] sm:text-sm text-[13px]">
                    4.5
                  </h4>
                  <Star />
                </div>
              </div>
              <p className="text-[#0B132A] leading-[187%] font-normal lg:text-base md:text-[15px] sm:text-sm text-[13px]">
                “This is very unusual for my business that currently requires a
                virtual private network that has high security.”.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] xl:px-[50px] lg:px-[42px] md:px-[32px] sm:px-[22px] px-[16px] xl:pb-[87px] lg:pb-[75px] md:pb-[62px] sm:pb-[50px] pb-[42px] mx-auto flex items-center justify-between">
        <div>
          <Image
            className="xl:w-[135px] lg:w-[120px] md:w-[95px] sm:w-[85px] w-[70px]"
            src={"/assets/svg/slider.svg"}
            alt="slider"
            width={135}
            height={15}
          />
        </div>
        <div>
          <div className="flex items-center lg:gap-5 md:gap-4 sm:gap-3 gap-2.5">
            <div className="border hover:bg-[#F53838] group transition-all duration-700 ease-in-out border-[#F53838] xl:p-[14px] lg:p-[12px] md:p-[11px] sm:p-[10px] p-[9px] rounded-full cursor-pointer">
              <PrvBtn />
            </div>
            <div className="bg-[#F53838] hover:bg-white transition-all ease-in-out duration-700 group xl:p-[14px] lg:p-[12px] md:p-[11px] sm:p-[10px] p-[9px] rounded-full border border-[#F53838] cursor-pointer">
              <NextBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
