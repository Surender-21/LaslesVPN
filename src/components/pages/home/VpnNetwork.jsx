import Heading from "@/components/common/Heading";
import Paragraph from "@/components/common/Paragraph";
import Peragraph from "@/components/common/Paragraph";
import Image from "next/image";
import React from "react";

function VpnNetwork() {
  return (
    <div className="max-w-[1240px] xl:px-[50px] lg:px-[42px] md:px-[32px] sm:px-[22px] px-[16px] mx-auto xl:py-[70px_61px] lg:py-[62px_58px] md:py-[55px_51px] sm:py-[42px_38px] py-[30px_26px] flex flex-col xl:gap-[110px] lg:gap-20 md:gap-16 sm:gap-14 gap-12">
      <div className="flex flex-col xl:gap-[156px] lg:gap-32 md:gap-24 sm:gap-20 gap-16">
        <div className="flex flex-col items-center md:gap-4 sm:gap-3 gap-2 xl:mt-[-125px] lg:mt-[-120px] md:mt-[-100px] sm:mt-[-80px] mt-[-65px]">
          <Heading
            className={
              "lg:!max-w-[360px] md:!max-w-[340px] sm:!max-w-[270px] !max-w-[220px]"
            }
            titel={"Huge Global Network of Fast VPN"}
          />
          <Paragraph
            className="max-w-[550px] text-center"
            paratitel={"See "}
            spantitel={"LaslesVPN "}
            title={
              "everywhere to make it easier for you when you move locations."
            }
          />
        </div>
        <div className="xl:px-[50px] lg:px-[42px] md:px-[32px] sm:px-[22px] px-[16px]">
          <Image
            src={"/assets/svg/map.svg"}
            alt="map"
            height={538}
            width={1060}
          />
        </div>
      </div>
      <div className="flex items-center md:justify-between justify-around xl:gap-[47px] lg:gap-[40px] md:gap-[32px] sm:gap-[24px] gap-[15px_10px] md:flex-nowrap flex-wrap">
        <div>
          <Image
            className="xl:w-[190px] lg:w-[178px] md:w-[150px] sm:w-[135px] w-[105px]"
            src={"/assets/svg/reddit.svg"}
            alt="reddit"
            width={190}
            height={60}
          />
        </div>
        <div>
          <Image
            className="xl:w-[190px] lg:w-[178px] md:w-[150px] sm:w-[135px] w-[105px]"
            src={"/assets/svg/reddit.svg"}
            alt="reddit"
            width={190}
            height={60}
          />
        </div>
        <div>
          <Image
            className="xl:w-[190px] lg:w-[178px] md:w-[150px] sm:w-[135px] w-[105px]"
            src={"/assets/svg/amazon.svg"}
            alt="reddit"
            width={190}
            height={60}
          />
        </div>
        <div>
          <Image
            className="xl:w-[190px] lg:w-[178px] md:w-[150px] sm:w-[135px] w-[105px]"
            src={"/assets/svg/discord.svg"}
            alt="reddit"
            width={190}
            height={60}
          />
        </div>
        <div>
          <Image
            className="xl:w-[190px] lg:w-[178px] md:w-[150px] sm:w-[135px] w-[105px]"
            src={"/assets/svg/spotify.svg"}
            alt="reddit"
            width={190}
            height={60}
          />
        </div>
      </div>
    </div>
  );
}

export default VpnNetwork;
