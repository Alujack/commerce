import React from "react";
import { Text, Heading, Button, Img } from "./..";

interface Props {
  className?: string;
}

export default function Footer({ ...props }: Props) {
  return (
    <footer {...props}>
      <div className="flex flex-col items-center justify-center w-full mt-[7px] gap-[45px] py-[7px] mx-auto md:p-5 bg-gray-100_04 max-w-[1329px] rounded-[10px]">
        <div className="flex md:flex-col justify-between items-center w-[93%] md:w-full gap-5">
          <Heading
            size="11xl"
            as="h2"
            className="w-[47%] md:w-full !text-gray-900_06 !font-plusjakartasans leading-[42px]"
          >
            Enjoy your shopping with TECHNESS the biggest online market.{" "}
          </Heading>
          <Button
            color="gray_200_03"
            size="10xl"
            className="self-end mb-2 sm:px-5 font-plusjakartasans font-bold border-gray-900 border border-solid min-w-[213px] rounded-[25px]"
          >
            Contact Us
          </Button>
        </div>
        <div className="self-stretch h-px w-full bg-black-900_01" />
        <div className="flex md:flex-col items-start w-[94%] md:w-full mb-[5px]">
          <div className="flex flex-col items-start md:self-stretch mb-[11px] gap-[17px] flex-1">
            <Heading as="h6" className="!text-gray-900_08 !font-plusjakartasans !font-bold">
              About TECHNESS
            </Heading>
            <Text as="p" className="!text-gray-900_03 !font-plusjakartasans leading-[22px]">
              TECHNESS is the leading online marketplace, where you can buy and sell everything from cars, motorcycles,
              mobile phones, computers, electronics, furniture, books, pets, foods, and more. TECHNESS connects buyers
              and sellers across the country, making it easy and convenient to find what you need or sell what you don’t
              want.
            </Text>
            <div className="flex justify-between w-[74%] md:w-full gap-5">
              <Img src="images/defaultNoData.png" alt="socialiconsfa" className="h-[40px] w-[40px]" />
              <Img src="images/defaultNoData.png" alt="logomultiple" className="w-[40px] object-cover" />
              <Img src="images/defaultNoData.png" alt="socialicons_one" className="h-[40px] w-[40px]" />
              <Img src="images/defaultNoData.png" alt="socialiconsx" className="h-[40px] w-[40px]" />
              <Button
                size="6xl"
                variant="gradient"
                shape="circle"
                color="light_blue_400_blue_600"
                className="w-[40px] !rounded-[20px]"
              >
                <Img src="images/defaultNoData.png" />
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-start ml-[185px] gap-[17px] md:ml-0">
            <Heading size="4xl" as="h5" className="!text-gray-900_02 !font-plusjakartasans">
              Company
            </Heading>
            <ul className="flex flex-col items-start gap-7">
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
                <a href="Works" target="_blank" rel="noreferrer">
                  <Text size="xl" as="p" className="!text-gray-900_02 !font-plusjakartasans">
                    Works
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
          <div className="flex flex-col items-start ml-[125px] gap-[17px] md:ml-0">
            <Heading size="4xl" as="h5" className="!text-gray-900_05 !font-plusjakartasans">
              Help
            </Heading>
            <ul className="flex flex-col items-start gap-7">
              <li>
                <a href="#">
                  <Text size="xl" as="p" className="!text-gray-900_05 !font-plusjakartasans">
                    Customer Support
                  </Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text size="xl" as="p" className="!text-gray-900_05 !font-plusjakartasans">
                    Delivery Details
                  </Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text size="xl" as="p" className="!text-gray-900_05 !font-plusjakartasans">
                    Terms & Conditions
                  </Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text size="xl" as="p" className="!text-gray-900_05 !font-plusjakartasans">
                    Privacy Policy
                  </Text>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start mt-[34px] ml-[129px] gap-[19px] md:ml-0">
            <Heading size="4xl" as="h5" className="!text-gray-900_09 !font-plusjakartasans">
              Useful Information
            </Heading>
            <ul className="flex flex-col items-start gap-[42px]">
              <li>
                <a href="#">
                  <Text size="xl" as="p" className="!text-gray-900_09 !font-plusjakartasans">
                    Safety Tip
                  </Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text size="xl" as="p" className="!text-gray-900_09 !font-plusjakartasans">
                    Ads Posting Rule
                  </Text>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
