import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Text, Heading, Button, Img, Input } from "../../components";

export default function FQAPage() {
  const [searchBarValue26, setSearchBarValue26] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Techness-Ecommerce</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col w-full gap-[77px] md:gap-[57px] sm:gap-[38px] bg-gray-300_12">
        <div className="flex flex-col w-full gap-[15px] mx-auto md:p-5 max-w-[1330px]">
          <header className="flex flex-col items-center justify-center gap-[5px] p-2 border border-solid deep_purple_700_pink_400_01_border bg-white-A700 rounded-[10px]">
            <div className="flex md:flex-col justify-between items-center w-[97%] md:w-full mt-[3px] gap-5">
              <div className="flex self-end items-center mb-[7px] gap-[5px]">
                <Img src="images/defaultNoData.png" alt="emotion 1" className="object-cover" />
                <div className="flex">
                  <Heading
                    size="4xl"
                    as="h5"
                    className="!text-transparent tracking-[-0.28px] !font-semibold bg-gradient1 bg-clip-text"
                  >
                    TECHNESS @
                  </Heading>
                </div>
              </div>
              <div className="flex md:flex-col justify-between items-center w-[76%] md:w-full gap-5">
                <Input
                  name="Text input"
                  placeholder={`DJI phantom`}
                  value={searchBarValue26}
                  onChange={(e: string) => setSearchBarValue26(e)}
                  suffix={
                    searchBarValue26?.length > 0 ? (
                      <CloseSVG onClick={() => setSearchBarValue26("")} height={24} width={24} fillColor="#b0b9beff" />
                    ) : (
                      <Img src="images/defaultNoData.png" alt="search" className="w-[24px] h-[24px] cursor-pointer" />
                    )
                  }
                  className="w-[88%] h-[40px] md:w-full gap-[35px] px-2 text-blue_gray-900_01 tracking-[-0.08px] text-sm border-gray-300_06 border border-solid bg-white-A700 rounded-[15px]"
                />
                <div className="flex justify-center w-[7%] md:w-full p-2 border-gray-300_06 border border-solid bg-white-A700 rounded-[24px]">
                  <Img src="images/defaultNoData.png" alt="user" className="h-[32px] w-[32px] rounded-[50%]" />
                </div>
              </div>
            </div>
            <div className="flex md:flex-col justify-between items-center w-[97%] md:w-full gap-5">
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
          <div className="flex flex-col gap-[13px]">
            <div className="flex justify-center bg-white-A700 rounded-[10px]">
              <div className="flex flex-col w-[89%] md:w-full mt-[70px] pb-2 gap-9 md:p-5">
                <div className="flex md:flex-col justify-between items-start w-[96%] md:w-full gap-5">
                  <div className="flex flex-col items-center w-[42%] md:w-full mt-[58px] gap-5 px-[11px]">
                    <Heading size="12xl" as="h1" className="text-center">
                      FAQ : How can I help you?
                    </Heading>
                    <Img src="images/defaultNoData.png" alt="Rectangle 31" className="w-[355px] object-cover" />
                  </div>
                  <div className="flex flex-col w-[53%] md:w-full">
                    <div className="h-[147px] w-[80%] relative">
                      <Text size="2xl" as="p" className="w-[98%] bottom-[0.00px] right-0 left-0 m-auto absolute">
                        <>
                          How do I set up my wireless product?
                          <br />
                          How do I warranty my product?
                          <br />
                          How can i track my order?
                          <br />
                          What is ypu warranty policy?
                        </>
                      </Text>
                      <Input
                        name="Frame 932"
                        placeholder={`Top 4 frequently asked questions`}
                        className="w-full h-[57px] pl-6 pr-[35px] top-[0.00px] right-0 left-0 m-auto sm:px-5 text-white-A700 text-xl font-bold bg-green-700 absolute rounded-[10px]"
                      />
                    </div>
                    <div className="flex flex-col items-start mt-[19px] gap-1.5">
                      <Input
                        name="Frame 933"
                        placeholder={`Payment Information `}
                        className="w-[82%] h-[57px] pl-6 pr-[35px] sm:px-5 text-white-A700 text-xl font-bold bg-green-700 rounded-[10px]"
                      />
                      <Text size="2xl" as="p">
                        <>
                          What payment methods dose TEACHNESS accept?
                          <br />
                          when will payment be deducted?
                          <br />
                          My card has been charged but i haven’t received a confirmation email?
                        </>
                      </Text>
                    </div>
                    <div className="flex flex-col w-[82%] md:w-full mt-[7px]">
                      <Input
                        name="Frame 934"
                        placeholder={`Policy Information`}
                        className="h-[61px] pl-6 pr-[35px] sm:px-5 text-white-A700 text-xl font-bold bg-green-700 rounded-[10px]"
                      />
                      <Heading size="4xl" as="h2" className="w-[98%] md:w-full">
                        <span className="text-black-900_01">
                          <>
                            <br />
                          </>
                        </span>
                        <span className="text-black-900_01 text-base font-normal">
                          <>
                            What is the status of my warranty claim?
                            <br />
                            What is your return/exchange policy?
                            <br />
                            How long does it take to receive a refund?
                            <br />
                            What is your warranty policy?
                          </>
                        </span>
                      </Heading>
                    </div>
                    <div className="h-[112px] mt-[7px] relative">
                      <Text size="2xl" as="p" className="bottom-[0.00px] right-0 left-0 m-auto absolute">
                        <>
                          Do I have to create an account to place an order?
                          <br />I am unable to long in to my TEACHNESS com account.
                        </>
                      </Text>
                      <Input
                        name="Frame 935"
                        placeholder={`Account Information`}
                        className="w-[79%] h-[61px] pl-6 pr-[35px] left-[0.00px] top-[0.00px] m-auto sm:px-5 text-white-A700 text-xl font-bold bg-green-700 absolute rounded-[10px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <Text size="4xl" as="p" className="self-end !text-black-900_33_01 text-center">
                    cant’t find the answer you’re looking for? We’re shared some of our most frequently asked question
                    to help you out!
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <div className="self-stretch px-[549px] md:px-5 bg-indigo-500_01 rounded-[10px]">
                <Img
                  src="images/defaultNoData.png"
                  alt="plane png"
                  className="h-[73px] w-full md:h-auto object-cover"
                />
              </div>
              <Heading size="10xl" as="h3" className="mt-[-20px] ml-[322px] md:ml-0 !text-white-A700 relative">
                <span className="text-white-A700">Join with us&nbsp;</span>
                <span className="text-white-A700 font-normal">& Get&nbsp;</span>
                <span className="text-light_blue_A200 font-normal">10% OFF</span>
                <span className="text-white-A700 font-normal">&nbsp;for first order</span>
              </Heading>
            </div>
          </div>
        </div>
        <footer className="p-[55px] md:p-5 bg-white-A700">
          <div className="flex flex-col items-center justify-center w-full gap-[46px] py-[7px] mx-auto my-[15px] md:p-5 bg-gray-100_04 max-w-[1329px] rounded-[10px]">
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
            <div className="flex md:flex-col items-start w-[94%] md:w-full mb-[5px]">
              <div className="flex flex-col items-start md:self-stretch mb-[11px] gap-[18px] flex-1">
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
              <div className="flex flex-col items-start ml-[185px] gap-4 md:ml-0">
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
              <div className="flex flex-col items-start ml-[125px] gap-4 md:ml-0">
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
              <div className="flex flex-col items-start mt-[31px] ml-[129px] gap-[18px] md:ml-0">
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
      </div>
    </>
  );
}
