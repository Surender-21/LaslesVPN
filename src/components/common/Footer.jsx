import Image from "next/image";
import Link from "next/link";
import React from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import { Facebook, Insta, Twitter } from "../helper/Icon";

function Footer() {
  return (
    <div className="bg-[#F8F8F8] xl:pt-[110px] lg:pt-[100px] md:pt-[90px] sm:pt-[70px] pt-[60px]">
      <div className="max-w-[1240px] mx-auto xl:px-[50px] lg:px-[42px] md:px-[32px] sm:px-[22px] px-[16px]">
        <div className="bg-white flex md:flex-row flex-col md:text-start text-center items-center md:justify-between justify-center lg:gap-5 md:gap-4 sm:gap-3 gap-2 rounded-[10px] xl:px-[70px] lg:px-[60px] md:px-[52px] sm:px-[44px] px-[36px] xl:py-[50px] lg:py-[46px] md:py-[38px] sm:py-[30px] py-[24px] xl:mt-[-230px] lg:mt-[-200px] md:mt-[-185px] sm:mt-[-150px] mt-[-130px] shadow-[0px_16px_74px_-20px_#cfcdcd]">
          <div className="lg:max-w-[370px] md:max-w-[320px] sm:max-w- flex flex-col md:gap-[14px] sm:gap-2 gap-1">
            <Heading
              className="font-semibold text-start"
              titel={"Subscribe Now for Get Special Features!"}
            />
            <Paragraph title={"Let's subscribe with us and find the fun."} />
          </div>
          <div>
            <button className="xl:p-[17px_65px] lg:p-[16px_58px] md:p-[14px_48px] sm:p-[11px_40px] p-[9px_32px] font-bold leading-[156.25%] lg:text-base md:text-[15px] sm:text-sm text-[13px] hover:text-[#F53838] hover:bg-white cursor-pointer border border-transparent hover:border-[#F53838] hover:shadow-[0px_30px_25px_-22px_rgba(245,56,56,0.35)] bg-[#F53838] text-white rounded-xl duration-700 transition-all ease-in-out">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-between max-w-[1240px] mx-auto xl:px-[50px] lg:px-[42px] md:px-[32px] sm:px-[22px] px-[16px] lg:gap-14 md:gap-12 sm:gap-8 gap-7 xl:py-[100px] lg:py-[87px] md:py-[75px] sm:py-[63px] py-[45px]">
        <div className="flex flex-col md:items-start items-center md:max-w-[330px] lg:gap-[30px] md:gap-6 sm:gap-5 gap-4">
          <div className="flex md:items-start items-center flex-col md:gap-4 sm:gap-3 gap-2">
            <div>
              <Link href={"/"}>
                <Image
                  className="xl:w-[149px] lg:w-[140px] md:w-[130px] sm:w-[118px] w-[110px]"
                  src={"/assets/svg/logo.svg"}
                  alt="logo"
                  width={149}
                  height={36}
                />
              </Link>
            </div>
            <p className=" text-[#4F5665] font-normal leading-[187.5%] lg:text-base md:text-[15px] sm:text-sm text-[13px]">
              <span className="font-semibold">LaslesVPN</span> is a private
              virtual network that has unique features and has high security.
            </p>
          </div>
          <div className="flex flex-col lg:gap-[30px] md:gap-6 sm:gap-5 gap-4">
            <div className="flex md:gap-4 sm:gap-3 gap-2">
              <Link
                className="hover:scale-[1.2] duration-800 transition-all ease-in-out group"
                href={"https://www.facebook.com/"}
                target="blank"
              >
                <Facebook />
              </Link>
              <Link
                className="hover:scale-[1.2] duration-800 transition-all ease-in-out group"
                href={"https://www.twitter.com/"}
                target="blank"
              >
                <Twitter />
              </Link>
              <Link
                className="hover:scale-[1.2] duration-800 transition-all ease-in-out group"
                href={"https://www.instagram.com/"}
                target="blank"
              >
                <Insta />
              </Link>
            </div>
            <p className="text-[#AFB5C0] leading-[187.5%] font-normal lg:text-base md:text-[15px] sm:text-sm text-[13px]">
              ©2020Lasles<span className="font-semibold">VPN</span>
            </p>
          </div>
        </div>
        <div className="flex justify-between md:max-w-[560px] w-full lg:gap-5 md:gap-4 sm:gap-2 gap-1">
          <div>
            <ul className="flex flex-col gap-[10px]">
              <li className="text-[#0B132A] leading-[166.66%] font-semibold lg:text-lg md:text-[17px] sm:text-base text-sm">
                Product
              </li>
              <li className="pt-[10px]">
                <Link
                  className="text-[#4F5665] hover:text-[#0B132A] transition-all duration-700 ease-in-out leading-[187.5%] font-normal lg:text-base md:text-[15px] sm:text-sm text-xs"
                  href={"/"}
                >
                  Download
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#4F5665] hover:text-[#0B132A] transition-all duration-700 ease-in-out leading-[187.5%] font-normal lg:text-base md:text-[15px] sm:text-sm text-xs"
                  href={"/"}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#4F5665] hover:text-[#0B132A] transition-all duration-700 ease-in-out leading-[187.5%] font-normal lg:text-base md:text-[15px] sm:text-sm text-xs"
                  href={"/"}
                >
                  Locations
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#4F5665] hover:text-[#0B132A] transition-all duration-700 ease-in-out leading-[187.5%] font-normal lg:text-base md:text-[15px] sm:text-sm text-xs"
                  href={"/"}
                >
                  Server
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#4F5665] hover:text-[#0B132A] transition-all duration-700 ease-in-out leading-[187.5%] font-normal lg:text-base md:text-[15px] sm:text-sm text-xs"
                  href={"/"}
                >
                  Countries
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#4F5665] hover:text-[#0B132A] transition-all duration-700 ease-in-out leading-[187.5%] font-normal lg:text-base md:text-[15px] sm:text-sm text-xs"
                  href={"/"}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:order-2 order-3 md:text-start text-end">
            <ul className="flex flex-col gap-[10px]">
              <li className="text-[#0B132A] leading-[166.66%] font-semibold lg:text-lg md:text-[17px] sm:text-base text-sm">
                Engage
              </li>
              <li className="pt-[10px]">
                <Link
                  className="text-[#4F5665] hover:text-[#0B132A] transition-all duration-700 ease-in-out leading-[187.5%] font-normal lg:text-base md:text-[15px] sm:text-sm text-[13px]"
                  href={"/"}
                >
                  LaslesVPN ?
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#4F5665] hover:text-[#0B132A] transition-all duration-700 ease-in-out leading-[187.5%] font-normal lg:text-base md:text-[15px] sm:text-sm text-xs"
                  href={"/"}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#4F5665] hover:text-[#0B132A] transition-all duration-700 ease-in-out leading-[187.5%] font-normal lg:text-base md:text-[15px] sm:text-sm text-xs"
                  href={"/"}
                >
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#4F5665] hover:text-[#0B132A] transition-all duration-700 ease-in-out leading-[187.5%] font-normal lg:text-base md:text-[15px] sm:text-sm text-xs"
                  href={"/"}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#4F5665] hover:text-[#0B132A] transition-all duration-700 ease-in-out leading-[187.5%] font-normal lg:text-base md:text-[15px] sm:text-sm text-xs"
                  href={"/"}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#4F5665] hover:text-[#0B132A] transition-all duration-700 ease-in-out leading-[187.5%] font-normal lg:text-base md:text-[15px] sm:text-sm text-xs"
                  href={"/"}
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:order-3 order-2 md:text-start text-center">
            <ul className="flex flex-col gap-[10px]">
              <li className="text-[#0B132A] leading-[166.66%] font-semibold lg:text-lg md:text-[17px] sm:text-base text-sm">
                Earn Money
              </li>
              <li className="pt-[10px]">
                <Link
                  className="text-[#4F5665] hover:text-[#0B132A] transition-all duration-700 ease-in-out leading-[187.5%] font-normal lg:text-base md:text-[15px] sm:text-sm text-xs"
                  href={"/"}
                >
                  Affiliate
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#4F5665] hover:text-[#0B132A] transition-all duration-700 ease-in-out leading-[187.5%] font-normal lg:text-base md:text-[15px] sm:text-sm text-xs"
                  href={"/"}
                >
                  Become Partner
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
