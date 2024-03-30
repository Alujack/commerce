import React from "react";
import { Button, Text, Heading } from "./..";

interface Props {
  className?: string;
  noisecancelling?: string;
  bosooverearhead?: string;
  wifivoiceassist?: string;
  lowlatencygamem?: string;
  buyNow?: string;
}

export default function HomePageBannerslide({
  noisecancelling,
  bosooverearhead = "Boso Over-Ear Headphone",
  wifivoiceassist = "Wifi, Voice Assistant,",
  lowlatencygamem = "Low latency game mde",
  buyNow = "buy now",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-col items-start h-[310px] w-full md:h-auto gap-11 p-8 sm:p-5 bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat rounded-[10px]">
        <div className="flex flex-col items-start w-[44%] md:w-full ml-[7px] md:ml-0">
          <Heading size="10xl" as="h1" className="ml-1.5 md:ml-0 !text-white-A700 leading-9">
            <span className="text-white-A700">
              <>
                Noise Cancelling
                <br />
              </>
            </span>
            <span className="text-white-A700 font-light">Headphone</span>
          </Heading>
          <Text size="s" as="p" className="mt-4 ml-[23px] md:ml-0 !text-white-A700 capitalize">
            {bosooverearhead}
          </Text>
          <div className="flex flex-col items-start mt-0.5 gap-1">
            <Text size="s" as="p" className="!text-white-A700 capitalize">
              {wifivoiceassist}
            </Text>
            <Text size="s" as="p" className="!text-white-A700 capitalize">
              {lowlatencygamem}
            </Text>
          </div>
        </div>
        <Button
          size="2xl"
          className="mb-[27px] ml-[7px] md:ml-0 text-black-900_01 uppercase font-medium min-w-[89px] rounded-[10px]"
        >
          {buyNow}
        </Button>
      </div>
    </div>
  );
}
