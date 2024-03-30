import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Button, Heading } from "../../components";

export default function Frame936Page() {
  return (
    <>
      <Helmet>
        <title>Techness-Ecommerce</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full pt-[77px] md:pt-5">
        <div className="flex flex-col gap-2.5 p-[66px] md:p-5 bg-white-A700 rounded-[10px]">
          <div className="flex md:flex-col justify-between items-center w-full mt-[247px] gap-5 p-3 mx-auto md:p-5 md:mt-0 bg-gray-50 max-w-[1030px] rounded-[10px]">
            <div className="w-[16%] md:w-full my-4 md:p-5 bg-white-A700 rounded-[10px]">
              <Img
                src="images/defaultNoData.png"
                alt="prod26 png"
                className="h-[164px] w-full md:h-auto object-cover rounded-[10px]"
              />
            </div>
            <div className="flex flex-col items-start justify-center w-[79%] md:w-full mr-3 gap-[25px] p-2 md:p-5 md:mr-0 bg-gray-200_09 rounded-[15px]">
              <Button className="self-end h-[24px] mt-[9px] px-[9px] text-gray-800 text-[13px] bg-red-A700_11_01 min-w-[88px] rounded-[12px]">
                12/03/1024
              </Button>
              <div className="flex flex-col w-[80%] md:w-full mb-[11px] gap-4">
                <div className="flex sm:flex-col justify-between items-center gap-5">
                  <Heading size="md" as="h1">
                    SROK Smart Phone 128GB, Oled Retina
                  </Heading>
                  <Button className="h-[35px] px-[35px] sm:px-5 text-red-600 text-lg font-semibold bg-green-A700_03 min-w-[150px] rounded-md">
                    $579.00
                  </Button>
                  <Button className="h-[35px] px-[34px] sm:px-5 text-black-900_01 text-[13px] font-bold border-gray-500_33_01 border border-solid min-w-[129px] rounded-[10px]">
                    1
                  </Button>
                </div>
                <div className="flex flex-col items-start gap-0.5">
                  <div className="flex items-center gap-[7px]">
                    <Img src="images/defaultNoData.png" alt="checkmark" className="w-[12px] object-cover" />
                    <Text size="s" as="p">
                      In stock
                    </Text>
                  </div>
                  <Text size="xs" as="p" className="self-end !text-green-700 uppercase !font-medium">
                    free shipping
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col justify-between items-center w-full gap-5 p-3 mx-auto md:p-5 bg-gray-50 max-w-[1030px] rounded-[10px]">
            <div className="w-[16%] md:w-full my-4 md:p-5 bg-white-A700 rounded-[10px]">
              <Img
                src="images/defaultNoData.png"
                alt="prod26 png"
                className="h-[164px] w-full md:h-auto object-cover rounded-[10px]"
              />
            </div>
            <div className="flex flex-col items-start justify-center w-[79%] md:w-full mr-3 gap-[25px] p-2 md:p-5 md:mr-0 bg-gray-200_09 rounded-[15px]">
              <Button className="self-end h-[24px] mt-[9px] px-[9px] text-gray-800 text-[13px] bg-red-A700_11_01 min-w-[88px] rounded-[12px]">
                12/03/1024
              </Button>
              <div className="flex flex-col w-[80%] md:w-full mb-[11px] gap-4">
                <div className="flex sm:flex-col justify-between items-center gap-5">
                  <Heading size="md" as="h2">
                    SROK Smart Phone 128GB, Oled Retina
                  </Heading>
                  <Button className="h-[35px] px-[35px] sm:px-5 text-red-600 text-lg font-semibold bg-green-A700_03 min-w-[150px] rounded-md">
                    $579.00
                  </Button>
                  <Button className="h-[35px] px-[34px] sm:px-5 text-black-900_01 text-[13px] font-bold border-gray-500_33_01 border border-solid min-w-[129px] rounded-[10px]">
                    1
                  </Button>
                </div>
                <div className="flex flex-col items-start gap-0.5">
                  <div className="flex items-center gap-[7px]">
                    <Img src="images/defaultNoData.png" alt="checkmark" className="w-[12px] object-cover" />
                    <Text size="s" as="p">
                      In stock
                    </Text>
                  </div>
                  <Text size="xs" as="p" className="self-end !text-green-700 uppercase !font-medium">
                    free shipping
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
