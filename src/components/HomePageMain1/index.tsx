import React from "react";
import { Text, Heading } from "./..";

interface Props {
  className?: string;
  p10back?: string;
  earn10cashbacko?: string;
}

export default function HomePageMain1({ p10back = "10% Back", earn10cashbacko, ...props }: Props) {
  return (
    <div {...props}>
      <div className="flex flex-col items-end h-[180px] w-full md:h-auto gap-2 p-[41px] md:p-5 bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat">
        <Heading size="14xl" as="h1" className="mr-[29px] md:mr-0 !text-yellow-A400">
          {p10back}
        </Heading>
        <Text as="p" className="w-[31%] md:w-full mr-[62px] md:mr-0 !text-white-A700 leading-[19px]">
          <span className="text-white-A700">
            <>
              Earn 10% Cash back on
              <br />
              Swootech.&nbsp;
            </>
          </span>
          <a href="#" className="text-white-A700 underline">
            Learn How
          </a>
        </Text>
      </div>
    </div>
  );
}
