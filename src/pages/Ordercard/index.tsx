import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Button, Heading } from "../../components";

export default function OrdercardPage() {
  return (
    <>
      <Helmet>
        <title>Techness-Ecommerce</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex md:flex-col justify-center items-center w-full p-3 bg-gray-50">
        <div className="flex justify-center w-[21%] md:w-full my-4 md:p-5 bg-white-A700 rounded-[10px]">
          <Img
            src="images/defaultNoData.png"
            alt="prod26 png"
            className="h-[204px] w-full md:h-auto object-cover rounded-[10px]"
          />
        </div>
        <div className="flex flex-col items-start md:self-stretch pb-2 gap-[29px] px-2 md:p-5 bg-gray-200_09 flex-1 rounded-[15px]">
          <Button className="self-end h-[40px] px-[35px] sm:px-5 text-gray-800 text-[13px] bg-red-A700_11_01 min-w-[149px] rounded-[17px]">
            12/03/1024
          </Button>
          <div className="flex flex-col items-start w-[80%] md:w-full mb-[5px]">
            <div className="flex sm:flex-col self-stretch justify-between gap-5">
              <div className="flex items-start gap-3.5">
                <Heading size="md" as="h1" className="mt-[7px]">
                  SROK Smart Phone 128GB, Oled Retina
                </Heading>
                <Button className="h-[35px] px-[35px] sm:px-5 text-red-600 text-lg font-semibold bg-green-A700_03 min-w-[150px] rounded-md">
                  $579.00
                </Button>
              </div>
              <Button className="h-[35px] px-[34px] sm:px-5 text-black-900_01 text-[13px] font-bold border-gray-500_33_01 border border-solid min-w-[129px] rounded-[10px]">
                1
              </Button>
            </div>
            <div className="flex items-center mt-4 gap-[7px]">
              <Img src="images/defaultNoData.png" alt="checkmark" className="w-[12px] object-cover" />
              <Text size="s" as="p">
                In stock
              </Text>
            </div>
            <Text size="xs" as="p" className="mt-0.5 ml-[17px] md:ml-0 !text-green-700 uppercase !font-medium">
              free shipping
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}
