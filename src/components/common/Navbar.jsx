import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="max-w-[1240px] mx-auto xl:px-[50px] lg:px-[42px] md:px-[32px] sm:px-[22px] px-[16px] xl:py-[50px] lg:py-[45px] md:py-[38px] sm:py-[22px] py-[18px]">
      <div className="flex justify-between items-center">
        <div>
          <Link className="outline-none" href={"/"}>
            <Image
              className="lg:w-[149px] md:w-[140px] sm:w-[125px] w-[115px]"
              src={"/assets/svg/logo.svg"}
              alt="logo"
              width={149}
              height={39}
            />
          </Link>
        </div>
        <div className="block max-[680px]:hidden">
          <ul className="flex xl:gap-[40px] lg:gap-[32px] md:gap-[16px] sm:gap-[12px] gap-[10px]">
            <li>
              <Link
                className="text-[#4F5665] font-normal lg:text-base md:text-[15px] sm:text-sm text-[13px] outline-none hover:text-[#F53855] transition-all duration-700 ease-in-out"
                href="/"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-[#4F5665] font-normal lg:text-base md:text-[15px] sm:text-sm text-[13px] outline-none hover:text-[#F53855] transition-all duration-700 ease-in-out"
                href="/"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                className="text-[#4F5665] font-normal lg:text-base md:text-[15px] sm:text-sm text-[13px] outline-none hover:text-[#F53855] transition-all duration-700 ease-in-out"
                href="/"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                className="text-[#4F5665] font-normal lg:text-base md:text-[15px] sm:text-sm text-[13px] outline-none hover:text-[#F53855] transition-all duration-700 ease-in-out"
                href="/"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                className="text-[#4F5665] font-normal lg:text-base md:text-[15px] sm:text-sm text-[13px] outline-none hover:text-[#F53855] transition-all duration-700 ease-in-out"
                href="/"
              >
                Help
              </Link>
            </li>
          </ul>
        </div>
        <div className="block max-[680px]:hidden">
          <div className="flex xl:gap-[30px] lg:gap-[26px] md:gap-[12px] sm:gap-[10px] gap-[8px] items-center">
            <div>
              <button className="text-[#0B132A] font-semibold outline-none hover:text-[#F53855] transition-all duration-700 ease-in-out cursor-pointer">
                Sign In
              </button>
            </div>
            <div>
              <button className="border border-[#F53855] font-semibold text-[#F53855] rounded-[50px] xl:p-[13px_45px] lg:p-[11px_36px] md:p-[9px_30px] sm:p-[8px_24px] p-[6px_18px] lg:text-base md:text-[15px] sm:text-sm text-[13px] outline-none hover:text-white hover:bg-[#F53855] transittion-all duration-700 ease-in-out cursor-pointer">
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <div className="hidden max-[680px]:block">
          <Image
            className="w-[20px] sm:w-[24px]"
            src={"/assets/svg/menu.svg"}
            width={24}
            height={24}
            alt="menu"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
