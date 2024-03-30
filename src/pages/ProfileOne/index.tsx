import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Text, Heading, Button, Img, Input } from "../../components";

export default function ProfileOnePage() {
  const [searchBarValue37, setSearchBarValue37] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Techness-Ecommerce</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col w-full pl-3.5 gap-[714px] md:gap-[535px] sm:gap-[357px] bg-gray-300_12">
        <div className="flex flex-col w-full gap-[15px] mx-auto max-w-[1330px]">
          <header className="flex flex-col gap-16 py-2 sm:gap-8 bg-white-A700 rounded-[10px]">
            <div className="flex md:flex-col justify-between items-center mt-2 mb-12 ml-6 gap-5 md:ml-0">
              <div className="flex items-start gap-[9px]">
                <Img src="images/defaultNoData.png" alt="Chip" className="object-cover" />
                <Heading
                  size="4xl"
                  as="h5"
                  className="!text-transparent tracking-[-0.28px] !font-semibold bg-gradient1 bg-clip-text"
                >
                  TECHNESS @
                </Heading>
              </div>
              <div className="flex md:flex-col justify-between items-start w-[76%] md:w-full gap-5">
                <Input
                  name="Text input"
                  placeholder={`DJI phantom`}
                  value={searchBarValue37}
                  onChange={(e: string) => setSearchBarValue37(e)}
                  suffix={
                    searchBarValue37?.length > 0 ? (
                      <CloseSVG onClick={() => setSearchBarValue37("")} height={24} width={24} fillColor="#b0b9beff" />
                    ) : (
                      <Img src="images/defaultNoData.png" alt="search" className="w-[24px] h-[24px] cursor-pointer" />
                    )
                  }
                  className="w-[88%] h-[40px] md:w-full pl-4 pr-2 gap-[35px] text-blue_gray-900_01 tracking-[-0.08px] text-sm border-gray-300_06 border border-solid bg-white-A700 rounded-[15px]"
                />
                <Button className="h-[48px] w-[48px] border-gray-300_06 border border-solid bg-white-A700 rounded-[24px]">
                  <Img src="images/defaultNoData.png" />
                </Button>
              </div>
            </div>
            <div className="flex md:flex-col justify-between items-center mt-16 mr-6 gap-5 md:mr-0">
              <div className="flex items-center gap-2">
                <Img src="images/defaultNoData.png" alt="Location marker" className="w-[24px] object-cover" />
                <Text as="p" className="!text-blue_gray-900_01 tracking-[-0.08px]">
                  Cambodia
                </Text>
              </div>
              <div className="flex md:flex-col justify-between w-[77%] md:w-full gap-5 py-2">
                <div className="flex justify-between w-[28%] md:w-full gap-5 flex-wrap">
                  <a href="#" className="px-2 py-0.5 rounded">
                    <Heading size="xl" as="h6" className="!text-blue_gray-900_01 tracking-[-0.10px] text-center">
                      Home
                    </Heading>
                  </a>
                  <a href="#" className="px-2 py-0.5 rounded">
                    <Heading size="xl" as="h6" className="!text-blue_gray-900_01 tracking-[-0.10px] text-center">
                      Store
                    </Heading>
                  </a>
                  <a href="#" className="px-2 py-0.5 rounded">
                    <Heading size="xl" as="h6" className="!text-blue_gray-900_01 tracking-[-0.10px] text-center">
                      FQA
                    </Heading>
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Img src="images/defaultNoData.png" alt="Cube" className="w-[24px] object-cover" />
                  <Heading size="xl" as="h6" className="!text-blue_gray-900_01 tracking-[-0.10px]">
                    Orders
                  </Heading>
                </div>
                <div className="flex items-center gap-2">
                  <Img src="images/defaultNoData.png" alt="Heart" className="w-[24px] object-cover" />
                  <Heading size="xl" as="h6" className="self-start mt-0.5 !text-blue_gray-900_01 tracking-[-0.10px]">
                    Favorites
                  </Heading>
                </div>
                <div className="flex items-center gap-2">
                  <Img src="images/defaultNoData.png" alt="Shopping cart" className="w-[24px] object-cover" />
                  <Heading size="xl" as="h6" className="!text-blue_gray-900_01 tracking-[-0.10px]">
                    Cart
                  </Heading>
                </div>
                <a href="#" className="px-2 py-0.5 rounded">
                  <Heading size="xl" as="h6" className="!text-blue_gray-900_01 tracking-[-0.10px] text-center">
                    Become a seller
                  </Heading>
                </a>
              </div>
            </div>
          </header>
          <div className="flex items-end gap-[7px] p-[30px] sm:p-5 bg-white-A700 flex-wrap rounded-[10px]">
            <Heading size="md" as="h1" className="mt-[3px] mb-0.5 !text-gray-500">
              Home
            </Heading>
            <Heading size="md" as="h2" className="mb-0.5 !text-gray-600_06">
              /
            </Heading>
            <Heading size="md" as="h3" className="!text-gray-500">
              pages
            </Heading>
            <Heading size="md" as="h4" className="mb-0.5 !text-gray-600_06">
              /
            </Heading>
            <Heading size="md" as="h5">
              profile
            </Heading>
          </div>
        </div>
        <footer className="px-14 py-[67px] md:p-5 bg-white-A700">
          <div className="flex flex-col items-center justify-center w-full mt-[7px] gap-[46px] py-[7px] mx-auto md:p-5 bg-gray-100_04 max-w-[1329px] rounded-[10px]">
            <div className="flex md:flex-col justify-between items-center w-[93%] md:w-full gap-5">
              <Heading
                size="11xl"
                as="h2"
                className="w-[47%] md:w-full !text-gray-900_06 !font-plusjakartasans leading-[42px]"
              >
                Enjoy your shopping with TECHNESS the biggest online market.{" "}
              </Heading>
              <Button className="self-end h-[50px] mb-2 px-[34px] sm:px-5 text-black-900_01 font-plusjakartasans text-sm font-bold border-gray-900 border border-solid bg-gray-200_03 min-w-[213px] rounded-[25px]">
                Contact Us
              </Button>
            </div>
            <div className="self-stretch h-px w-full bg-black-900_01" />
            <div className="flex md:flex-col justify-between items-start w-[94%] md:w-full mb-[5px] gap-5">
              <div className="flex flex-col items-start w-[32%] md:w-full mb-[11px] gap-[18px]">
                <Heading as="h6" className="!text-gray-900_08 !font-plusjakartasans !font-bold">
                  About TECHNESS
                </Heading>
                <Text as="p" className="!text-gray-900_03 !font-plusjakartasans leading-[22px]">
                  TECHNESS is the leading online marketplace, where you can buy and sell everything from cars,
                  motorcycles, mobile phones, computers, electronics, furniture, books, pets, foods, and more. TECHNESS
                  connects buyers and sellers across the country, making it easy and convenient to find what you need or
                  sell what you don’t want.
                </Text>
                <div className="flex justify-between w-[74%] md:w-full gap-5">
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
              <div className="flex sm:flex-col justify-between items-center w-[53%] md:w-full gap-5">
                <div className="flex flex-col items-start gap-4">
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
                <div className="flex flex-col items-start gap-4">
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
                <div className="flex flex-col self-start items-start gap-[18px]">
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
          </div>
        </footer>
      </div>
    </>
  );
}
