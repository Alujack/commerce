import React from "react";
import { Text, Input } from "./..";

interface Props {
  className?: string;
  downloadourApp?: React.ReactNode | string;
  enteryourphonen?: React.ReactNode | string;
  xxxxx?: string;
}

export default function HomePageMainsection({
  downloadourApp = (
    <>
      Download
      <br />
      our app
    </>
  ),
  enteryourphonen = (
    <>
      Enter your phone number and we&#39;ll
      <br />
      send you a download link.
    </>
  ),
  xxxxx = "(+xx) xxx...",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-col items-start justify-center h-[180px] w-full md:h-auto gap-[15px] p-7 sm:p-5 bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat">
        <div className="flex justify-between items-start w-[63%] md:w-full mt-1 ml-[11px] gap-5 md:ml-0">
          <Text size="5xl" as="p" className="w-[31%] !text-white-A700 leading-7">
            {downloadourApp}
          </Text>
          <Text size="s" as="p" className="w-[54%] !text-blue_gray-100 leading-5">
            {enteryourphonen}
          </Text>
        </div>
        <Input
          color="white_A700_11"
          size="xs"
          shape="round"
          name="send_link"
          placeholder={`send link`}
          className="w-full left-0 bottom-0 right-0 top-0 m-auto sm:pl-5 uppercase absolute !rounded-[5px]"
        >
          <div className="flex justify-center w-[71%] h-max md:w-full left-[5.00px] bottom-0 top-0 p-[11px] my-auto absolute">
            <div className="flex mt-[3px]">
              <Text as="p" className="!text-gray-500">
                {xxxxx}
              </Text>
            </div>
          </div>
        </Input>
      </div>
    </div>
  );
}
