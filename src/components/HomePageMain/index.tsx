import React from "react";
import { Text, Img } from "./..";

interface Props {
  className?: string;
  headingsix?: string;
  heading6free?: string;
  heading6with?: string;
}

export default function HomePageMain({
  headingsix = "Member get",
  heading6free = "FREE SHIPPING*",
  heading6with = "with no order minimum!. *Restriction apply",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex md:flex-col self-start items-center ml-[232px] md:ml-0 flex-wrap">
        <Img src="images/defaultNoData.png" alt="image_four" className="w-[30px] md:w-full object-cover" />
        <Text size="3xl" as="p" className="self-end ml-2.5 md:ml-0 !text-white-A700 text-center">
          {headingsix}
        </Text>
        <Text size="3xl" as="p" className="ml-[11px] md:ml-0 !text-yellow-A400 uppercase text-center">
          {heading6free}
        </Text>
        <Text size="3xl" as="p" className="self-end mb-0.5 ml-1 md:ml-0 !text-white-A700 text-center">
          {heading6with}
        </Text>
      </div>
    </div>
  );
}
