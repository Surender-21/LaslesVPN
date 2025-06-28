import Image from "next/image";
import React from "react";

function Users() {
  return (
    <div className="mx-auto max-w-[1240px] xl:px-[50px] lg:px-[42px] md:px-[32px] sm:px-[22px] px-[16px] xl:py-[54px_33px]">
      <div className="flex md:flex-row flex-col md:justify-between justify-center md:items-center shadow-[0px_30px_69px_-30px_rgba(13,16,37,0.5)] xl:p-[37px_90px] lg:p-[32px_75px] md:p-[26px_40px] sm:p-[20px_36px] p-[16px_30px]  rounded-[10px]">
        <div className="flex items-center lg:gap-9 md:gap-8 sm:gap-8 gap-7 lg:py-[30px] md:py-[22px] sm:py-[18px] py-[14px] lg:pr-[60px] md:pr-[40px] max-[768px]:w-full ">
          <div>
            <Image
              className="xl:w-[55px] lg:w-[50px] md:w-[46px] sm:w-[44px] w-[40px]"
              src={"/assets/svg/user.svg"}
              alt="user"
              width={55}
              height={55}
            />
          </div>
          <div className="flex flex-col gap-[5px]">
            <h3 className="text-[#0B132A] font-bold leading-[120%] lg:text-[25px] md:text-xl sm:text-lg text-base">
              90+
            </h3>
            <p className="text-[#4F5665] leading-[150%] font-normal lg:text-xl md:text-lg sm:text-base text-[15px]">
              Users
            </p>
          </div>
        </div>
        <div className="flex items-center lg:gap-9 md:gap-8 sm:gap-8 gap-7 md:border-x max-[767px]:border-y border-[#EEEFF2] w-full lg:py-[30px] md:py-[22px] sm:py-[18px] py-[14px] xl:pl-[75px] lg:px-[65px] md:px-[45px] xl:max-w-[430px] lg:max-w-[360px] md:max-w-[275px]">
          <div>
            <Image
              className="xl:w-[55px] lg:w-[50px] md:w-[46px] sm:w-[44px] w-[40px]"
              src={"/assets/svg/location.svg"}
              alt="user"
              width={55}
              height={55}
            />
          </div>
          <div className="flex flex-col gap-[5px]">
            <h3 className="text-[#0B132A] font-bold leading-[120%] lg:text-[25px] md:text-xl sm:text-lg text-base">
              30+
            </h3>
            <p className="text-[#4F5665] leading-[150%] font-normal lg:text-xl md:text-lg sm:text-base text-[15px]">
              Locations
            </p>
          </div>
        </div>
        <div className="flex items-center lg:gap-9 md:gap-8 sm:gap-8 gap-7 lg:py-[30px] md:py-[22px] sm:py-[18px] py-[14px] lg:pl-[60px] md:pl-[45px] max-[768px]:w-full ">
          <div>
            <Image
              className="xl:w-[55px] lg:w-[50px] md:w-[46px] sm:w-[44px] w-[40px]"
              src={"/assets/svg/server.svg"}
              alt="user"
              width={55}
              height={55}
            />
          </div>
          <div className="flex flex-col gap-[5px]">
            <h3 className="text-[#0B132A] font-bold leading-[120%] lg:text-[25px] md:text-xl sm:text-lg text-base">
              50+
            </h3>
            <p className="text-[#4F5665] leading-[150%] font-normal lg:text-xl md:text-lg sm:text-base text-[15px]">
              Servers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
