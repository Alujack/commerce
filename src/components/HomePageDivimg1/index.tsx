import React from "react";
import { Button, Heading, Text } from "./..";

interface Props {
  className?: string;
  smallxomia?: string;
  heading6sport?: React.ReactNode | string;
  shopNow?: string;
}

export default function HomePageDivimg1({
  smallxomia = "xomia",
  heading6sport = (
    <>
      Sport Water
      <br />
      Resistance
      <br />
      Watch
    </>
  ),
  shopNow = "Shop Now",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-col items-end h-[215px] w-full md:h-auto p-[17px] bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat rounded-[10px]">
        <Text size="xs" as="p" className="mt-2 mr-[78px] md:mr-0 uppercase">
          {smallxomia}
        </Text>
        <Heading size="3xl" as="h1" className="w-[41%] md:w-full mt-2 capitalize leading-[22px]">
          {heading6sport}
        </Heading>
        <Button
          color="blue_gray_900"
          size="2xl"
          className="mt-[30px] mb-[18px] mr-[17px] md:mr-0 uppercase font-medium min-w-[92px] rounded-[10px]"
        >
          {shopNow}
        </Button>
      </div>
    </div>
  );
}
