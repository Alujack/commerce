import React from "react";
import { Text, Heading } from "./..";

interface Props {
  className?: string;
  headingsixOne?: string;
  smallfrom?: string;
  price?: string;
}

export default function HomePageDivimg({ headingsixOne, smallfrom = "from", price = "$169", ...props }: Props) {
  return (
    <div {...props}>
      <div className="flex flex-col items-start justify-center h-[215px] w-full md:h-auto p-[23px] sm:p-5 bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat rounded-[10px]">
        <Heading size="6xl" as="h1" className="w-[43%] md:w-full !text-white-A700 uppercase leading-[27px]">
          <span className="text-white-A700">
            <>
              OKODo
              <br />
            </>
          </span>
          <span className="text-white-A700 font-normal">
            <>
              hero 11+
              <br />
              black
            </>
          </span>
        </Heading>
        <Text size="xs" as="p" className="mt-[35px] !text-gray-500 uppercase">
          {smallfrom}
        </Text>
        <Text size="5xl" as="p" className="mt-0.5 mb-1 !text-green-700 !font-normal">
          {price}
        </Text>
      </div>
    </div>
  );
}
