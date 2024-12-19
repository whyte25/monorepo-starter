import Image from "next/image";
import React from "react";
import {
  SubscribeImage,
  SubscribeMailImage,
} from "@through-motion/assets/images";
import { Button } from "@through-motion/ui";

const Subscribe = () => {
  return (
    <section className="relative w-full hidden lg:flex justify-center items-center overflow-hidden h-[500px]">
      <div className="absolute w-full h-full justify-center items-center flex rounded-3xl">
        <div className="relative lg:w-[900px] xl:w-[1290px] 4xl:w-[2200px] h-[632px] rounded-3xl">
          <Image
            src={SubscribeImage}
            width={1000}
            height={1000}
            alt=""
            className="w-full h-full object-cover lg:bg-top rounded-3xl"
          />
          <div className="absolute w-full h-full top-0 flex flex-row justify-between items-center px-[4rem] rounded-3xl">
            <div className="w-[516px] flex-col flex gap-[32px]">
              <div className="flex flex-col gap-[8px]">
                <h2 className=" font-medium text-5xl">
                  {" "}
                  <span className="text-white">Join The</span>{" "}
                  <span className="text-[#E44E4E]">Industry's 1% </span>{" "}
                </h2>
                <p className=" font-normal text-base text-white">
                  Subscribe to our newsletter and get exclusive tips, updates
                  and exciting offers to become the industry’s 1% today!
                </p>
              </div>
              <div className="h-[56px] w-full rounded-[30px]">
                <input
                  type="email"
                  placeholder="example@company.com"
                  className="h-full rounded-l-[30px] w-[416px] px-[16px]"
                />
                <Button className="h-full rounded-r-[30px]">Subscribe</Button>
              </div>
            </div>
            <div className="w-[500px] h-[330px]">
              <Image
                src={SubscribeMailImage}
                width={1000}
                height={1000}
                alt=""
                className="w-full h-full object-cover lg:bg-top rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
