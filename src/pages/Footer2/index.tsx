import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Button, Img } from "../../components";

export default function Footer2Page() {
  return (
    <>
      <Helmet>
        <title>Techness-Ecommerce</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <footer className="w-full p-[35px] sm:p-5 bg-white-A700">
        <div className="w-full pb-2.5 mx-auto my-9 md:p-5 bg-gray-100_04 max-w-[1349px] rounded-[10px]">
          <div className="flex flex-col items-center justify-center">
            <div className="flex md:flex-col justify-between items-center w-[93%] md:w-full pr-2.5 gap-5">
              <div className="flex justify-center w-[48%] md:w-full p-2.5">
                <Heading size="11xl" as="h2" className="!text-gray-900_06 !font-plusjakartasans leading-[42px]">
                  Enjoy your shopping with TECHNESS the biggest online market.{" "}
                </Heading>
              </div>
              <Button className="h-[50px] px-[34px] sm:px-5 text-black-900_01 font-plusjakartasans text-sm font-bold border-gray-900 border border-solid bg-gray-200_03 min-w-[213px] rounded-[25px]">
                Contact Us
              </Button>
            </div>
            <Img
              src="images/defaultNoData.png"
              alt="Frame 947"
              className="h-[20px] w-full md:h-auto mt-[15px] object-cover"
            />
            <div className="flex md:flex-col justify-between items-start w-[92%] md:w-full mt-[25px] gap-5">
              <div className="flex flex-col w-[32%] md:w-full">
                <div className="flex p-1.5">
                  <Heading as="h6" className="mt-[7px] mb-[5px] !text-gray-900_08 !font-plusjakartasans !font-bold">
                    About TECHNESS
                  </Heading>
                </div>
                <Text as="p" className="mt-[5px] !text-gray-900_03 !font-plusjakartasans leading-[22px]">
                  TECHNESS is the leading online marketplace, where you can buy and sell everything from cars,
                  motorcycles, mobile phones, computers, electronics, furniture, books, pets, foods, and more. TECHNESS
                  connects buyers and sellers across the country, making it easy and convenient to find what you need or
                  sell what you don’t want.
                </Text>
                <div className="flex justify-between w-[73%] md:w-full mt-[-2px] gap-5 relative">
                  <Img src="images/defaultNoData.png" alt="Social Icons Fa" className="w-[40px] object-cover" />
                  <Img src="images/defaultNoData.png" alt="Logo   Multiple" className="w-[40px] object-cover" />
                  <Img
                    src="images/defaultNoData.png"
                    alt="Social Icons TikTok Original"
                    className="w-[40px] object-cover"
                  />
                  <Img src="images/defaultNoData.png" alt="Social Icons X " className="w-[40px] object-cover" />
                  <Button className="h-[40px] w-[40px] bg-gradient rounded-[20px]">
                    <Img src="images/defaultNoData.png" />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-start gap-[23px]">
                <div className="flex self-center p-[5px]">
                  <Heading size="4xl" as="h5" className="mt-[5px] !text-gray-900_02 !font-plusjakartasans">
                    Company
                  </Heading>
                </div>
                <ul className="flex flex-col items-start ml-[9px] gap-[30px] md:ml-0">
                  <li>
                    <a href="About" target="_blank" rel="noreferrer">
                      <Text size="xl" as="p" className="!text-gray-900_02 !font-plusjakartasans">
                        About
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="Features" target="_blank" rel="noreferrer">
                      <Text size="xl" as="p" className="!text-gray-900_02 !font-plusjakartasans">
                        Features
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="Work" target="_blank" rel="noreferrer">
                      <Text size="xl" as="p" className="!text-gray-900_02 !font-plusjakartasans">
                        Work
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="Career" target="_blank" rel="noreferrer">
                      <Text size="xl" as="p" className="!text-gray-900_02 !font-plusjakartasans">
                        Career
                      </Text>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-start gap-[23px]">
                <div className="flex p-[5px]">
                  <Heading size="4xl" as="h5" className="self-end !text-gray-900_05 !font-plusjakartasans">
                    Help
                  </Heading>
                </div>
                <ul className="flex flex-col items-start gap-[26px]">
                  <li>
                    <a href="#" className="self-center">
                      <Text size="xl" as="p" className="!text-gray-900_05 !font-plusjakartasans">
                        Customer Support
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="ml-2.5 md:ml-0">
                      <Text size="xl" as="p" className="!text-gray-900_05 !font-plusjakartasans">
                        Delivery Details
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="self-end">
                      <Text size="xl" as="p" className="!text-gray-900_05 !font-plusjakartasans">
                        Terms & Conditions
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="flex">
                        <Text size="xl" as="p" className="self-end !text-gray-900_05 !font-plusjakartasans">
                          Privacy Policy
                        </Text>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-start gap-[15px]">
                <div className="flex self-center p-[7px]">
                  <Heading size="4xl" as="h5" className="!text-gray-900_09 !font-plusjakartasans">
                    Useful Information
                  </Heading>
                </div>
                <div className="flex flex-col items-start gap-[15px]">
                  <div className="flex">
                    <Text size="xl" as="p" className="self-end !text-gray-900_09 !font-plusjakartasans">
                      Safety Tip
                    </Text>
                  </div>
                  <div className="flex self-center">
                    <Text size="xl" as="p" className="self-end !text-gray-900_09 !font-plusjakartasans">
                      Ads Posting Rule
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
