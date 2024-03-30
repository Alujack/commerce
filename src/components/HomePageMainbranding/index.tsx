import React from "react";
import { Img, Button, Heading } from "./..";

interface Props {
  className?: string;
  headingsixTwo?: string;
  viewAll?: string;
}

export default function HomePageMainbranding({
  headingsixTwo = "featured brands",
  viewAll = "View All",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex justify-between items-start w-[93%] gap-5">
        <Heading size="2xl" as="h1" className="uppercase">
          {headingsixTwo}
        </Heading>
        <Button color="blue_gray_50" size="sm" className="mb-1 min-w-[70px] rounded-[12px]">
          {viewAll}
        </Button>
      </div>
      <div className="flex sm:flex-col items-start w-[88%]">
        <Img src="images/defaultNoData.png" alt="linklogo4png" className="w-[24%] sm:w-full object-cover" />
        <Img
          src="images/defaultNoData.png"
          alt="linklogo5png"
          className="w-[20%] sm:w-full ml-7 sm:ml-0 object-cover"
        />
        <Img
          src="images/defaultNoData.png"
          alt="linklogo1png"
          className="w-[18%] sm:w-full ml-10 sm:ml-0 object-cover"
        />
        <Img
          src="images/defaultNoData.png"
          alt="linklogo2png"
          className="w-[23%] sm:w-full ml-[35px] sm:ml-0 object-cover"
        />
        <Img
          src="images/defaultNoData.png"
          alt="linklogo3png"
          className="w-[15%] sm:w-full mt-[3px] ml-[42px] sm:ml-0 object-cover"
        />
      </div>
      <div className="flex sm:flex-col items-start w-[87%] mb-2">
        <Img src="images/defaultNoData.png" alt="linklogo6png" className="w-[24%] sm:w-full mt-1 object-cover" />
        <Img
          src="images/defaultNoData.png"
          alt="linklogo7png"
          className="w-[18%] sm:w-full ml-[35px] sm:ml-0 object-cover"
        />
        <Img
          src="images/defaultNoData.png"
          alt="linklogo8png"
          className="w-[22%] sm:w-full ml-[38px] sm:ml-0 object-cover"
        />
        <Img
          src="images/defaultNoData.png"
          alt="linklogo9png"
          className="w-[21%] sm:w-full ml-8 sm:ml-0 object-cover"
        />
        <Img
          src="images/defaultNoData.png"
          alt="linklogo10png"
          className="w-[15%] sm:w-full ml-[45px] sm:ml-0 object-cover"
        />
      </div>
    </div>
  );
}
