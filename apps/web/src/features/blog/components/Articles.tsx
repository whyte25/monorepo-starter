import { Button } from "@through-motion/ui";
import Image from "next/image";
import React from "react";
import { ArticleImage } from "@through-motion/assets/images";

const Articles = () => {
  return (
    <section className="px-[120px]">
      <article className="flex flex-col gap-[40px]">
        <div className="flex flex-col gap-[24px]">
          <h2 className=" font-medium text-5xl text-[#120A2B]">
            Explore Articles
          </h2>
          <div className="flex flex-row gap-[24px]">
            <p>Music</p>
            <p>Entertainment</p>
            <p>Business</p>
          </div>
        </div>
        <div className="flex flex-row justify-between w-full">
          <div className="w-[351px] rounded-3xl border border-[#E6E6E6] gap-[24px] flex flex-col">
            <Image
              src={ArticleImage}
              width={300}
              height={160}
              alt="article"
              className="w-full h-[250px] rounded-t-3xl"
            />
            <div className="flex flex-col gap-[8px] py-[24px] px-[16px]">
              <span className=" rounded-2xl h-[34px] bg-[#E34747] w-[99px] text-white py-[8px] px-[16px] font-normal text-xs">
                2 mins read
              </span>
              <h3 className=" font-medium text-2xl text-[#120A2B]">
                The future of music in africa
              </h3>
              <p className=" font-normal text-base texct-[#160303]">
                Music in Africa is incredibly promising, driven by innovation,
                cultural renaissance, and technological advancements.
              </p>
            </div>
            <div className="py-[24px] px-[16px] w-full flex flex-row justify-end">
              <Button
                variant="secondary"
                className="h-[56px] px-[24px] py-[16px] rounded-[30px] font-bold text-base text-white"
              >
                Read More
              </Button>
            </div>
          </div>
          <div className="w-[351px] rounded-3xl border border-[#E6E6E6] gap-[24px] flex flex-col">
            <Image
              src={ArticleImage}
              width={300}
              height={160}
              alt="article"
              className="w-full h-[250px] rounded-t-3xl"
            />
            <div className="flex flex-col gap-[8px] py-[24px] px-[16px]">
              <span className=" rounded-2xl h-[34px] bg-[#E34747] w-[99px] text-white py-[8px] px-[16px] font-normal text-xs">
                2 mins read
              </span>
              <h3 className=" font-medium text-2xl text-[#120A2B]">
                The future of music in africa
              </h3>
              <p className=" font-normal text-base texct-[#160303]">
                Music in Africa is incredibly promising, driven by innovation,
                cultural renaissance, and technological advancements.
              </p>
            </div>
            <div className="py-[24px] px-[16px] w-full flex flex-row justify-end">
              <Button
                variant="secondary"
                className="h-[56px] px-[24px] py-[16px] rounded-[30px] font-bold text-base text-white"
              >
                Read More
              </Button>
            </div>
          </div>
          <div className="w-[351px] rounded-3xl border border-[#E6E6E6] gap-[24px] flex flex-col">
            <Image
              src={ArticleImage}
              width={300}
              height={160}
              alt="article"
              className="w-full h-[250px] rounded-t-3xl"
            />
            <div className="flex flex-col gap-[8px] py-[24px] px-[16px]">
              <span className=" rounded-2xl h-[34px] bg-[#E34747] w-[99px] text-white py-[8px] px-[16px] font-normal text-xs">
                2 mins read
              </span>
              <h3 className=" font-medium text-2xl text-[#120A2B]">
                The future of music in africa
              </h3>
              <p className=" font-normal text-base texct-[#160303]">
                Music in Africa is incredibly promising, driven by innovation,
                cultural renaissance, and technological advancements.
              </p>
            </div>
            <div className="py-[24px] px-[16px] w-full flex flex-row justify-end">
              <Button
                variant="secondary"
                className="h-[56px] px-[24px] py-[16px] rounded-[30px] font-bold text-base text-white"
              >
                Read More
              </Button>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Articles;
