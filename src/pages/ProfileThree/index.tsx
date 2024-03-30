import React from "react";
import { Helmet } from "react-helmet";
import { Button, Input, Text, Heading, Img } from "../../components";

export default function ProfileThreePage() {
  return (
    <>
      <Helmet>
        <title>Techness-Ecommerce</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full p-[55px] md:p-5 bg-gray-300_12">
        <div className="flex flex-col items-start w-full pl-[60px] pr-14 py-[60px] mx-auto my-[117px] md:p-5 bg-white-A700 max-w-[1330px] rounded-[10px]">
          <Heading size="7xl" as="h1" className="mt-1 ml-[38px] md:ml-0 capitalize !font-bold z-[1]">
            Account info
          </Heading>
          <div className="flex md:flex-col self-stretch justify-between mb-[5px] gap-5">
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
                className="h-[51px] mt-[21px] gap-[35px] px-2 text-white-A700 text-sm bg-green-700 rounded-lg"
              />
              <div className="flex justify-between items-center mt-2.5 gap-5 p-2 bg-gray-100_06 rounded-lg">
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
            <div className="flex md:flex-col justify-between w-[76%] md:w-full gap-5 p-[84px] md:p-5 bg-gray-100_08 rounded-[10px]">
              <div className="flex flex-col w-[24%] md:w-full ml-14 md:ml-0">
                <div className="bg-gradient3 rounded-[77px]">
                  <Img src="images/defaultNoData.png" alt="Ellipse 2" className="h-[150px] w-[150px] rounded-[50%]" />
                </div>
                <div className="flex flex-col items-end mt-[-2px] mb-[78px] relative">
                  <div className="flex mr-[15px] p-2.5 md:mr-0">
                    <Heading size="md" as="h3" className="mt-1.5 mb-1 text-center">
                      Upload Photo
                    </Heading>
                  </div>
                  <div className="flex self-center p-[5px]">
                    <Text as="p" className="mt-1.5 mb-1 !text-blue-500_01 text-center">
                      Photos Requirements
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end w-[67%] md:w-full mr-[35px] gap-5 md:mr-0">
                <div className="self-stretch">
                  <div className="py-[5px]">
                    <div className="flex sm:flex-col self-start">
                      <div className="flex flex-col items-start w-full sm:w-full gap-3.5">
                        <Text as="p">
                          <span className="text-black-900_01">First Name&nbsp;</span>
                          <span className="text-red-600">*</span>
                        </Text>
                        <Input
                          name="Input"
                          placeholder={`vibolsen@gmail.com`}
                          className="self-stretch h-[43px] pl-3 pr-[35px] sm:pr-5 text-gray-900_21 text-sm border-blue_gray-100 border border-solid bg-white-A700 rounded-md"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-center w-full sm:w-full gap-3.5">
                        <Text as="p">
                          <span className="text-black-900_01">Last Name&nbsp;</span>
                          <span className="text-red_A700">*</span>
                        </Text>
                        <Input
                          name="Input"
                          placeholder={`+855 967842367`}
                          className="self-stretch h-[43px] pl-3 pr-[35px] sm:pr-5 text-gray-900_21 text-sm border-blue_gray-100 border border-solid bg-white-A700 rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-3.5">
                    <Text as="p">
                      <span className="text-black-900_01">Email address&nbsp;</span>
                      <span className="text-red-600">*</span>
                    </Text>
                    <Input
                      name="Input"
                      placeholder={`Vibol`}
                      className="self-stretch h-[43px] pl-3 pr-[35px] sm:pr-5 text-gray-900_21 text-sm border-blue_gray-100 border border-solid bg-white-A700 rounded-md"
                    />
                  </div>
                  <div className="flex flex-col items-start mt-2.5 gap-3.5">
                    <Text as="p">
                      <span className="text-black-900_01">Phones&nbsp;</span>
                      <span className="text-red-600">*</span>
                    </Text>
                    <Input
                      name="Input"
                      placeholder={`SEN`}
                      className="self-stretch h-[43px] pl-3 pr-[35px] sm:pr-5 text-gray-900_21 text-sm border-blue_gray-100 border border-solid bg-white-A700 rounded-md"
                    />
                  </div>
                </div>
                <Button className="h-[50px] px-[35px] sm:px-5 text-white-A700 uppercase text-xs font-medium bg-green-700 min-w-[126px] rounded-[10px]">
                  save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
