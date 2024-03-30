import React from "react";
import { Helmet } from "react-helmet";
import { Button, Heading, Img, Input, Text } from "../../components";

export default function MainSectionOnePage() {
  return (
    <>
      <Helmet>
        <title>Techness-Ecommerce</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full px-14 py-[60px] md:p-5 bg-white-A700">
        <div className="flex flex-col items-start mt-1 mb-[29px]">
          <Heading size="7xl" as="h1" className="ml-[38px] md:ml-0 capitalize !font-bold z-[1]">
            Account info
          </Heading>
          <div className="flex md:flex-col self-stretch justify-between items-center gap-5">
            <div className="w-[19%] md:w-full p-5 bg-gray-50 rounded-[10px]">
              <div className="flex flex-col items-center justify-center mt-7">
                <div className="flex self-start mt-1">
                  <Heading size="4xl" as="h2">
                    Vibol SEN
                  </Heading>
                </div>
                <div className="flex self-start mb-1.5 py-[5px]">
                  <Text as="p" className="self-end !text-gray-700_03">
                    vibolsen@gmail.com
                  </Text>
                </div>
              </div>
              <Input
                name="Tablist   Button"
                placeholder={`Account info`}
                suffix={
                  <div className="flex justify-center items-center w-[12px] h-[14px]">
                    <Img src="images/defaultNoData.png" alt="contrast" className="w-[12px] h-[14px]" />
                  </div>
                }
                className="h-[51px] mt-[21px] gap-[35px] px-2 text-black-900_01 text-sm bg-gray-100_07 rounded-lg"
              />
              <div className="flex justify-between items-center mt-2.5 gap-5 p-2 bg-green-700 rounded-lg">
                <Text as="p" className="self-end mb-[7px] text-center">
                  My order
                </Text>
                <Img src="images/defaultNoData.png" alt="settings" className="object-cover" />
              </div>
              <div className="flex justify-between items-center mt-2.5 gap-5 p-2 bg-gray-100_06 rounded-lg">
                <Text as="p" className="self-end mb-[7px] text-center">
                  My address
                </Text>
                <Img src="images/defaultNoData.png" alt="settings" className="object-cover" />
              </div>
              <Input
                name="Tablist   Button"
                placeholder={`Change password`}
                suffix={
                  <div className="flex justify-center items-center w-[12px] h-[14px]">
                    <Img src="images/defaultNoData.png" alt="settings" className="w-[12px] h-[14px]" />
                  </div>
                }
                className="h-[51px] mt-2.5 gap-[34px] px-2 text-black-900_01 text-sm bg-gray-100_06 rounded-lg"
              />
              <Input
                name="Tablist   Button"
                placeholder={`Log Out`}
                suffix={
                  <div className="flex justify-center items-center w-[12px] h-[14px]">
                    <Img src="images/defaultNoData.png" alt="settings" className="w-[12px] h-[14px]" />
                  </div>
                }
                className="h-[51px] mt-2.5 mb-7 gap-[35px] px-2.5 text-black-900_01 text-sm bg-gray-100_06 rounded-lg"
              />
            </div>
            <div className="flex justify-center w-[76%] md:w-full pb-1.5">
              <div className="flex flex-col items-center justify-center w-full pb-[7px] gap-2.5 px-[7px] bg-gray-100_08 rounded-[10px]">
                <div className="flex self-stretch justify-between items-center gap-5 bg-light_green-600_01 rounded-[15px]">
                  <div className="flex self-end ml-[27px]">
                    <Heading size="8xl" as="h3" className="!text-white-A700 uppercase">
                      History order
                    </Heading>
                  </div>
                  <Button className="h-[34px] mr-1.5 px-[29px] sm:px-5 text-black-900_01 text-xs font-semibold bg-gray-200_02 min-w-[106px] rounded-[17px]">
                    View All
                  </Button>
                </div>
                <div className="flex flex-col w-[93%] md:w-full gap-2.5">
                  <div className="flex md:flex-col gap-3 p-3.5 bg-gray-50 flex-1 rounded-[10px]">
                    <div className="w-[9%] md:w-full md:p-5 bg-white-A700 rounded-[10px]">
                      <Img
                        src="images/defaultNoData.png"
                        alt="prod26 png"
                        className="h-[70px] w-full md:h-auto object-cover rounded-[10px]"
                      />
                    </div>
                    <div className="flex md:flex-col justify-between items-center md:self-stretch gap-5 p-[7px] md:p-5 bg-gray-200_09 flex-1 rounded-[15px]">
                      <div className="flex sm:flex-col ml-1.5 gap-3 my-[9px] md:ml-0">
                        <div className="flex p-[9px]">
                          <Heading size="md" as="h4" className="text-center">
                            SROK Smart Phone 128GB, Oled Retina
                          </Heading>
                        </div>
                        <Button className="h-[37px] px-[35px] sm:px-5 text-red-600 text-lg font-semibold bg-green-A700_03 min-w-[150px] rounded-md">
                          $579.00
                        </Button>
                        <Button className="h-[37px] px-[34px] sm:px-5 text-black-900_01 text-[13px] font-bold border-gray-500_33_01 border border-solid min-w-[87px] rounded-[10px]">
                          1
                        </Button>
                      </div>
                      <Button className="h-[37px] px-2.5 md:p-5 text-gray-800 text-[13px] bg-red-A700_11_01 min-w-[88px] rounded-[17px]">
                        12/03/1024
                      </Button>
                    </div>
                  </div>
                  <div className="flex md:flex-col gap-3 p-3.5 bg-gray-50 flex-1 rounded-[10px]">
                    <div className="w-[9%] md:w-full md:p-5 bg-white-A700 rounded-[10px]">
                      <Img
                        src="images/defaultNoData.png"
                        alt="prod26 png"
                        className="h-[70px] w-full md:h-auto object-cover rounded-[10px]"
                      />
                    </div>
                    <div className="flex md:flex-col justify-between items-center md:self-stretch gap-5 p-[7px] md:p-5 bg-gray-200_09 flex-1 rounded-[15px]">
                      <div className="flex sm:flex-col ml-1.5 gap-3 my-[9px] md:ml-0">
                        <div className="flex p-[9px]">
                          <Heading size="md" as="h5" className="text-center">
                            SROK Smart Phone 128GB, Oled Retina
                          </Heading>
                        </div>
                        <Button className="h-[37px] px-[35px] sm:px-5 text-red-600 text-lg font-semibold bg-green-A700_03 min-w-[150px] rounded-md">
                          $579.00
                        </Button>
                        <Button className="h-[37px] px-[34px] sm:px-5 text-black-900_01 text-[13px] font-bold border-gray-500_33_01 border border-solid min-w-[87px] rounded-[10px]">
                          1
                        </Button>
                      </div>
                      <Button className="h-[37px] px-2.5 md:p-5 text-gray-800 text-[13px] bg-red-A700_11_01 min-w-[88px] rounded-[17px]">
                        12/03/1024
                      </Button>
                    </div>
                  </div>
                  <div className="flex md:flex-col gap-3 p-3.5 bg-gray-50 flex-1 rounded-[10px]">
                    <div className="w-[9%] md:w-full md:p-5 bg-white-A700 rounded-[10px]">
                      <Img
                        src="images/defaultNoData.png"
                        alt="prod26 png"
                        className="h-[70px] w-full md:h-auto object-cover rounded-[10px]"
                      />
                    </div>
                    <div className="flex md:flex-col justify-between items-center md:self-stretch gap-5 p-[7px] md:p-5 bg-gray-200_09 flex-1 rounded-[15px]">
                      <div className="flex sm:flex-col ml-1.5 gap-3 my-[9px] md:ml-0">
                        <div className="flex p-[9px]">
                          <Heading size="md" as="h6" className="text-center">
                            SROK Smart Phone 128GB, Oled Retina
                          </Heading>
                        </div>
                        <Button className="h-[37px] px-[35px] sm:px-5 text-red-600 text-lg font-semibold bg-green-A700_03 min-w-[150px] rounded-md">
                          $579.00
                        </Button>
                        <Button className="h-[37px] px-[34px] sm:px-5 text-black-900_01 text-[13px] font-bold border-gray-500_33_01 border border-solid min-w-[87px] rounded-[10px]">
                          1
                        </Button>
                      </div>
                      <Button className="h-[37px] px-2.5 md:p-5 text-gray-800 text-[13px] bg-red-A700_11_01 min-w-[88px] rounded-[17px]">
                        12/03/1024
                      </Button>
                    </div>
                  </div>
                  <div className="flex md:flex-col gap-3 p-3.5 bg-gray-50 flex-1 rounded-[10px]">
                    <div className="w-[9%] md:w-full md:p-5 bg-white-A700 rounded-[10px]">
                      <Img
                        src="images/defaultNoData.png"
                        alt="prod26 png"
                        className="h-[70px] w-full md:h-auto object-cover rounded-[10px]"
                      />
                    </div>
                    <div className="flex md:flex-col justify-between items-center md:self-stretch gap-5 p-[7px] md:p-5 bg-gray-200_09 flex-1 rounded-[15px]">
                      <div className="flex sm:flex-col ml-1.5 gap-3 my-[9px] md:ml-0">
                        <div className="flex p-[9px]">
                          <Heading size="md" as="p" className="text-center">
                            SROK Smart Phone 128GB, Oled Retina
                          </Heading>
                        </div>
                        <Button className="h-[37px] px-[35px] sm:px-5 text-red-600 text-lg font-semibold bg-green-A700_03 min-w-[150px] rounded-md">
                          $579.00
                        </Button>
                        <Button className="h-[37px] px-[34px] sm:px-5 text-black-900_01 text-[13px] font-bold border-gray-500_33_01 border border-solid min-w-[87px] rounded-[10px]">
                          1
                        </Button>
                      </div>
                      <Button className="h-[37px] px-2.5 md:p-5 text-gray-800 text-[13px] bg-red-A700_11_01 min-w-[88px] rounded-[17px]">
                        12/03/1024
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
