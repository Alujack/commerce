import React from "react";
import { Heading, Img, Button } from "./..";

interface Props {
  className?: string;
  heading6top?: string;
  viewAll?: string;
  laptopsTwo?: string;
  pcGaming?: string;
  headphones?: string;
  monitors?: string;
}

export default function HomePageToprecomment({
  heading6top = "top categories",
  viewAll = "View All",
  laptopsTwo = "Laptops",
  pcGaming = "PC Gaming",
  headphones = "Headphones",
  monitors = "Monitors",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex self-stretch justify-between items-start mt-[13px] gap-5">
        <div className="flex pb-[9px] px-[9px]">
          <Heading size="2xl" as="h1" className="ml-1.5 md:ml-0 uppercase">
            {heading6top}
          </Heading>
        </div>
        <Button color="blue_gray_50" size="sm" className="min-w-[70px] rounded-[12px]">
          {viewAll}
        </Button>
      </div>
      <div className="flex md:flex-row sm:flex-col w-[90%] mb-[21px] gap-[35px]">
        <div className="flex flex-col items-center w-full sm:w-full mb-2.5 gap-[9px] sm:mb-0">
          <Img src="images/defaultNoData.png" alt="laptops_one" className="h-[60px] w-full md:h-auto object-cover" />
          <Heading size="md" as="h2" className="text-center !font-semibold">
            {laptopsTwo}
          </Heading>
        </div>
        <div className="flex flex-col items-center w-full sm:w-full gap-[9px]">
          <Img src="images/defaultNoData.png" alt="image" className="h-[60px] w-full md:h-auto object-cover" />
          <Heading size="md" as="h2" className="text-center !font-semibold">
            {pcGaming}
          </Heading>
        </div>
        <div className="flex flex-col items-center w-full sm:w-full gap-[9px]">
          <Img src="images/defaultNoData.png" alt="image" className="h-[60px] w-full md:h-auto object-cover" />
          <Heading size="md" as="h2" className="text-center !font-semibold">
            {headphones}
          </Heading>
        </div>
        <div className="flex flex-col items-center w-full sm:w-full gap-2">
          <Img src="images/defaultNoData.png" alt="image" className="h-[60px] w-full md:h-auto object-cover" />
          <Heading size="md" as="h2" className="text-center !font-semibold">
            {monitors}
          </Heading>
        </div>
      </div>
    </div>
  );
}
