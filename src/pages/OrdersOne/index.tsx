import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Text, Heading, Button, Img, Input } from "../../components";

export default function OrdersOnePage() {
  const [searchBarValue66, setSearchBarValue66] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Techness-Ecommerce</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col w-full gap-5 bg-gray-300_12">
        <div className="flex flex-col w-full gap-5 mx-auto md:p-5 max-w-[1330px]">
          <header className="flex flex-col items-center justify-center p-2 bg-white-A700 rounded-[10px]">
            <div className="flex md:flex-col justify-between items-center w-[97%] md:w-full mt-2 gap-5">
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
                  value={searchBarValue66}
                  onChange={(e: string) => setSearchBarValue66(e)}
                  suffix={
                    searchBarValue66?.length > 0 ? (
                      <CloseSVG onClick={() => setSearchBarValue66("")} height={24} width={24} fillColor="#b0b9beff" />
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
          <div className="flex flex-col gap-[15px]">
            <div className="flex md:flex-col justify-between items-start h-[417px] md:h-auto pt-[34px] gap-5 px-[34px] sm:pt-5 sm:px-5 bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat rounded-[20px]">
              <div className="flex flex-col items-start w-[44%] md:w-full mt-[49px] ml-11 gap-[23px] md:ml-0">
                <Heading size="14xl" as="h1" className="!text-blue_gray-800_01 !font-quicksand leading-[48px]">
                  <>
                    Stay home & get your daily
                    <br />
                    needs from our shop
                  </>
                </Heading>
                <Text size="3xl" as="p" className="!text-gray-600_05 !font-lato">
                  <span className="text-gray-600_05">Start You&#39;r Daily Shopping with&nbsp;</span>
                  <span className="text-teal_400_01">Nest Mart</span>
                </Text>
              </div>
              <Img
                src="images/defaultNoData.png"
                alt="banner 13 png"
                className="w-[45%] md:w-full mr-4 md:mr-0 object-cover"
              />
            </div>
            <div className="flex flex-col gap-[15px]">
              <Heading
                size="8xl"
                as="h2"
                className="flex justify-center items-center h-[62px] pl-[30px] pr-[35px] py-[15px] sm:px-5 !text-white-A700 uppercase bg-green-700 rounded-[10px]"
              >
                History order
              </Heading>
              <div className="flex flex-col items-start gap-[15px] p-[34px] sm:p-5 bg-white-A700 rounded-[10px]">
                <Button className="self-end h-[34px] mr-[7px] px-[29px] md:mr-0 sm:px-5 text-black-900_01 text-xs font-semibold bg-gray-200_02 min-w-[106px] rounded-[17px]">
                  View All
                </Button>
                <div className="flex flex-col w-[85%] md:w-full mb-8 ml-[50px] gap-2.5 md:ml-0">
                  <div className="flex md:flex-col justify-between items-center gap-5 p-3 bg-gray-50 flex-1 rounded-[10px]">
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
                      <div className="flex flex-col items-start w-[80%] md:w-full mb-[11px]">
                        <div className="flex sm:flex-col self-stretch justify-between items-center gap-5">
                          <Heading size="md" as="h3">
                            SROK Smart Phone 128GB, Oled Retina
                          </Heading>
                          <Button className="h-[35px] px-[35px] sm:px-5 text-red-600 text-lg font-semibold bg-green-A700_03 min-w-[150px] rounded-md">
                            $579.00
                          </Button>
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
                        <Text
                          size="xs"
                          as="p"
                          className="mt-0.5 ml-[17px] md:ml-0 !text-green-700 uppercase !font-medium"
                        >
                          free shipping
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col justify-between items-center gap-5 p-3 bg-gray-50 flex-1 rounded-[10px]">
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
                      <div className="flex flex-col items-start w-[80%] md:w-full mb-[11px]">
                        <div className="flex sm:flex-col self-stretch justify-between items-center gap-5">
                          <Heading size="md" as="h4">
                            SROK Smart Phone 128GB, Oled Retina
                          </Heading>
                          <Button className="h-[35px] px-[35px] sm:px-5 text-red-600 text-lg font-semibold bg-green-A700_03 min-w-[150px] rounded-md">
                            $579.00
                          </Button>
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
                        <Text
                          size="xs"
                          as="p"
                          className="mt-0.5 ml-[17px] md:ml-0 !text-green-700 uppercase !font-medium"
                        >
                          free shipping
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col justify-between items-center gap-5 p-3 bg-gray-50 flex-1 rounded-[10px]">
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
                      <div className="flex flex-col items-start w-[80%] md:w-full mb-[11px]">
                        <div className="flex sm:flex-col self-stretch justify-between items-center gap-5">
                          <Heading size="md" as="h5">
                            SROK Smart Phone 128GB, Oled Retina
                          </Heading>
                          <Button className="h-[35px] px-[35px] sm:px-5 text-red-600 text-lg font-semibold bg-green-A700_03 min-w-[150px] rounded-md">
                            $579.00
                          </Button>
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
                        <Text
                          size="xs"
                          as="p"
                          className="mt-0.5 ml-[17px] md:ml-0 !text-green-700 uppercase !font-medium"
                        >
                          free shipping
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex flex-col gap-[46px] px-14 py-[79px] md:p-5 bg-white-A700">
          <div className="flex md:flex-col justify-between items-center w-full gap-5 mx-auto max-w-[1240px]">
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
          <div className="h-px w-full mx-auto md:p-5 bg-black-900_01 max-w-[1329px]" />
          <div className="flex md:flex-col items-end w-full mx-auto max-w-[1249px]">
            <div className="flex flex-col items-start w-[42%] md:w-full mb-[11px] gap-[18px]">
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
            <div className="flex flex-col items-start w-[10%] md:w-full ml-[185px] gap-4 md:ml-0">
              <Heading size="4xl" as="h5" className="self-center !text-gray-900_02 !font-plusjakartasans">
                Company
              </Heading>
              <div className="flex flex-col self-end items-start w-full">
                <div className="flex justify-between w-[95%] md:w-full gap-5 flex-wrap">
                  <a href="About" target="_blank" rel="noreferrer">
                    <Text size="xl" as="p" className="!text-gray-900_02 !font-plusjakartasans">
                      About
                    </Text>
                  </a>
                  <a href="#">
                    <Text size="xl" as="p" className="!text-gray-900_09 !font-plusjakartasans">
                      Safety Tip
                    </Text>
                  </a>
                </div>
                <div className="flex self-stretch justify-between items-start mt-7 gap-5 flex-wrap">
                  <a href="Features" target="_blank" rel="noreferrer" className="mb-3.5">
                    <Text size="xl" as="p" className="!text-gray-900_02 !font-plusjakartasans">
                      Features
                    </Text>
                  </a>
                  <a href="#">
                    <Text size="xl" as="p" className="!text-gray-900_09 !font-plusjakartasans">
                      Ads Posting Rule
                    </Text>
                  </a>
                </div>
                <a href="Works" target="_blank" rel="noreferrer" className="mt-3.5">
                  <Text size="xl" as="p" className="!text-gray-900_02 !font-plusjakartasans">
                    Works
                  </Text>
                </a>
                <a href="Career" target="_blank" rel="noreferrer" className="mt-7">
                  <Text size="xl" as="p" className="!text-gray-900_02 !font-plusjakartasans">
                    Career
                  </Text>
                </a>
              </div>
            </div>
            <div className="flex flex-col md:self-stretch ml-[125px] gap-4 md:ml-0 flex-1">
              <div className="flex justify-between gap-5 flex-wrap">
                <Heading size="4xl" as="h5" className="self-end !text-gray-900_05 !font-plusjakartasans">
                  Help
                </Heading>
                <Heading size="4xl" as="h5" className="self-start !text-gray-900_09 !font-plusjakartasans">
                  Useful Information
                </Heading>
              </div>
              <div className="flex justify-between items-start w-[86%] md:w-full gap-5">
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
                <div className="flex flex-col items-start gap-[42px]">
                  <a href="#">
                    <Text size="xl" as="p" className="!text-gray-900_09 !font-plusjakartasans">
                      Safety Tip
                    </Text>
                  </a>
                  <a href="#">
                    <Text size="xl" as="p" className="!text-gray-900_09 !font-plusjakartasans">
                      Ads Posting Rule
                    </Text>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
