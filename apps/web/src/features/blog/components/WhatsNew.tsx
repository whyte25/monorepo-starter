import { Button } from "@through-motion/ui";
import Image from "next/image";
import React from "react";
import { BlogSection } from "@through-motion/assets/images";

const WhatsNew = () => {
  return (
    <section className="px-[120px]">
      <h2 className="text-5xl font-medium text-black">What's New?</h2>
      <article className="flex flex-col gap-[32px]">
        <div className="flex flex-row justify-between">
          <div className="w-[748px] h-[352px] flex flex-row justify-evenly items-center rounded-3xl border border-[#F2F2F2] bg-[#FAFAFA]">
            <Image
              src={BlogSection}
              width={300}
              height={288}
              alt="blog-image"
              className="w-[300px] h-[288px]"
            />
            <div className="w-[363px] h-[258px] flex flex-col justify-between">
              <div className="flex flex-col gap-[8px]">
                <h3 className=" text-2xl font-medium text-[#120A2B]">
                  The future of music in africa
                </h3>
                <p className=" text-base font-normal text-[#160303]">
                  Music in Africa is incredibly promising, driven by innovation,
                  cultural renaissance, and technological advancements.
                </p>
                <p className="text-base font-normal text-[#160303]">
                  Here are key trends and developments shaping the future
                </p>
              </div>
              <div>
                <Button className=" bg-[#120A2B] rounded-[30px] h-[56px] w-[133px]">
                  Read More
                </Button>
              </div>
            </div>
          </div>
          <div className="w-[418px] h-[352px] rounded-3xl bg-[#231353] flex justify-center items-center">
            <div className="w-[363px] h-[258px] flex flex-col justify-between">
              <div className="flex flex-col gap-[8px]">
                <h3 className=" text-2xl font-medium text-[white]">
                  The future of music in africa
                </h3>
                <p className=" text-base font-normal text-[white]">
                  Music in Africa is incredibly promising, driven by innovation,
                  cultural renaissance, and technological advancements.
                </p>
                <p className="text-base font-normal text-[white]">
                  Here are key trends and developments shaping the future
                </p>
              </div>
              <div>
                <Button className=" bg-[#120A2B] rounded-[30px] h-[56px] w-[133px]">
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="w-[418px] h-[352px] rounded-3xl bg-[#590D0D] flex justify-center items-center">
            <div className="w-[363px] h-[258px] flex flex-col justify-between">
              <div className="flex flex-col gap-[8px]">
                <h3 className=" text-2xl font-medium text-[white]">
                  The future of music in africa
                </h3>
                <p className=" text-base font-normal text-[white]">
                  Music in Africa is incredibly promising, driven by innovation,
                  cultural renaissance, and technological advancements.
                </p>
                <p className="text-base font-normal text-[white]">
                  Here are key trends and developments shaping the future
                </p>
              </div>
              <div>
                <Button className="rounded-[30px] h-[56px] w-[133px]">
                  Read More
                </Button>
              </div>
            </div>
          </div>
          <div className="w-[748px] h-[352px] flex flex-row justify-evenly items-center rounded-3xl border border-[#F2F2F2] bg-[#FAFAFA]">
            <Image
              src={BlogSection}
              width={300}
              height={288}
              alt="blog-image"
              className="w-[300px] h-[288px]"
            />
            <div className="w-[363px] h-[258px] flex flex-col justify-between">
              <div className="flex flex-col gap-[8px]">
                <h3 className=" text-2xl font-medium text-[#120A2B]">
                  The future of music in africa
                </h3>
                <p className=" text-base font-normal text-[#160303]">
                  Music in Africa is incredibly promising, driven by innovation,
                  cultural renaissance, and technological advancements.
                </p>
                <p className="text-base font-normal text-[#160303]">
                  Here are key trends and developments shaping the future
                </p>
              </div>
              <div>
                <Button className="rounded-[30px] h-[56px] w-[133px]">
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default WhatsNew;
