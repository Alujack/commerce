import React from "react";
import { Img, Text, Button, Heading } from "./..";

interface Props {
  className?: string;
  heading6deals?: string;
  viewAll?: string;
  smallsave?: string;
  price?: string;
}

export default function HomePageRowheading6deal({
  heading6deals = "Explore Our Product’s discount",
  viewAll = "View All ",
  smallsave = "save",
  price = "$199.00",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center md:self-stretch gap-[42px] flex-1">
        <div className="flex self-stretch justify-between items-start gap-5 p-[7px] bg-green-700 rounded-[10px]">
          <Heading size="4xl" as="h1" className="mt-[3px] ml-3.5 md:ml-0 !text-white-A700 uppercase !font-semibold">
            {heading6deals}
          </Heading>
          <Button
            color="gray_200_02"
            size="lg"
            className="mb-[17px] mr-6 md:mr-0 capitalize font-medium min-w-[89px] rounded-[10px]"
          >
            {viewAll}
          </Button>
        </div>
        <div className="flex w-[95%] md:w-full mb-4 py-[21px] sm:py-5">
          <div className="flex flex-col items-start w-[50%] md:w-full mb-3.5">
            <div className="flex flex-col items-start mt-9 ml-[52px] p-[5px] md:ml-0 bg-green-700 rounded-[10px]">
              <Text size="s" as="p" className="ml-[9px] md:ml-0 !text-white-A700 uppercase">
                {smallsave}
              </Text>
              <Text size="3xl" as="p" className="self-end mr-[3px] md:mr-0 !text-white-A700 !font-medium">
                {price}
              </Text>
            </div>
            <Img src="images/defaultNoData.png" alt="prod5png_one" className="self-end w-[93%] object-cover" />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[23%] md:w-full gap-2 bg-white-A700">
        <Img src="images/defaultNoData.png" alt="mainsection_one" className="object-cover rounded-[12px]" />
        <Img src="images/defaultNoData.png" alt="mainsection" className="object-cover rounded-[12px]" />
        <Img src="images/defaultNoData.png" alt="mainsection" className="h-[174px] object-cover rounded-[12px]" />
      </div>
    </div>
  );
}
