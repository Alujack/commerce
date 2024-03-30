import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Text, Heading, Button, Img, Input } from "../../components";

export default function CartPage() {
  const [searchBarValue34, setSearchBarValue34] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Techness-Ecommerce</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col w-full gap-5 bg-gray-300_12">
        <div className="flex flex-col w-full gap-[15px] mx-auto md:p-5 max-w-[1330px]">
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
                  value={searchBarValue34}
                  onChange={(e: string) => setSearchBarValue34(e)}
                  suffix={
                    searchBarValue34?.length > 0 ? (
                      <CloseSVG onClick={() => setSearchBarValue34("")} height={24} width={24} fillColor="#b0b9beff" />
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
              <Heading size="md" as="h5" className="mb-0.5">
                cart
              </Heading>
            </div>
            <div className="flex md:flex-col justify-between items-center gap-5 p-12 md:p-5 bg-white-A700 rounded-[10px]">
              <div className="flex flex-col w-[65%] md:w-full gap-[15px]">
                <div className="flex md:flex-col justify-between items-start gap-5 p-4 bg-gray-50 flex-1 rounded-[10px]">
                  <div className="flex sm:flex-col justify-center w-[66%] md:w-full gap-5">
                    <div className="flex flex-col items-start w-[45%] sm:w-full bg-white-A700 rounded-[10px]">
                      <div className="flex flex-col items-start justify-center p-1 z-[1] bg-green-700 rounded-[7px]">
                        <Text size="xs" as="p" className="ml-[5px] md:ml-0 !text-white-A700 uppercase">
                          save
                        </Text>
                        <Text as="p" className="self-center !text-white-A700 !font-medium">
                          $199.00
                        </Text>
                      </div>
                      <Img
                        src="images/defaultNoData.png"
                        alt="prod26 png"
                        className="h-[250px] w-full md:h-auto mt-[-41px] relative object-cover rounded-[10px]"
                      />
                    </div>
                    <div className="flex flex-col items-start sm:self-stretch py-[15px] flex-1">
                      <div className="flex mt-[22px] gap-1 flex-wrap">
                        <Heading size="s" as="h6" className="!text-amber-700_01 !font-black">
                          
                        </Heading>
                        <Text size="md" as="p" className="self-start !text-gray-700_03">
                          (152)
                        </Text>
                      </div>
                      <Heading size="md" as="p" className="mt-[11px]">
                        SROK Smart Phone 128GB, Oled Retina
                      </Heading>
                      <Heading size="2xl" as="h6" className="mt-3 !text-red-600 !font-semibold">
                        $579.00
                      </Heading>
                      <div className="flex justify-center items-center w-[49%] md:w-full mt-[15px] p-2 border-gray-500_33_01 border border-solid rounded-[10px]">
                        <Img src="images/defaultNoData.png" alt="settings" className="object-cover" />
                        <div className="flex justify-center flex-1">
                          <div className="flex">
                            <Heading size="s" as="p" className="self-start text-center !font-bold">
                              1
                            </Heading>
                          </div>
                        </div>
                        <Img src="images/defaultNoData.png" alt="settings" className="object-cover" />
                      </div>
                      <Button className="h-[21px] mt-5 px-[9px] text-green-700 uppercase text-[10px] font-medium bg-green-700 min-w-[93px] rounded-md">
                        free shipping
                      </Button>
                      <div className="flex items-center mt-3 gap-[7px]">
                        <Img src="images/defaultNoData.png" alt="checkmark" className="w-[12px] object-cover" />
                        <Text size="s" as="p">
                          In stock
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between w-[14%] md:w-full mt-[3px] mr-[11px] gap-5 md:mr-0 flex-wrap">
                    <Heading
                      as="h6"
                      className="flex justify-center items-center h-[35px] w-[35px] !text-gray-500 text-center !font-black bg-gray-300_12 rounded-[17px]"
                    >
                      
                    </Heading>
                    <Heading
                      size="2xl"
                      as="h6"
                      className="flex justify-center items-center h-[35px] w-[35px] !text-red-600 text-center !font-black bg-red-A700_11_01 rounded-[17px]"
                    >
                      
                    </Heading>
                  </div>
                </div>
                <div className="flex md:flex-col justify-center items-center p-4 bg-gray-50 flex-1 rounded-[10px]">
                  <div className="h-[250px] w-[31%] md:w-full md:h-auto md:p-5 bg-white-A700 relative rounded-[10px]">
                    <Img
                      src="images/defaultNoData.png"
                      alt="prod27 png"
                      className="h-[250px] w-full object-cover rounded-[10px]"
                    />
                    <Button className="h-[23px] left-[0.00px] top-[6.00px] px-1.5 m-auto text-white-A700 uppercase text-[10px] bg-gray-900_12 min-w-[39px] absolute rounded-[5px]">
                      new
                    </Button>
                  </div>
                  <div className="flex sm:flex-col justify-center items-start md:self-stretch ml-5 md:ml-0 flex-1">
                    <div className="flex flex-col items-start sm:self-stretch py-[34px] sm:py-5 flex-1">
                      <Heading size="md" as="p" className="mt-2">
                        aPod Pro Tablet 2023 LTE + Wifi, GPS Cellular 12.9 Inch, 512GB
                      </Heading>
                      <Heading size="2xl" as="h6" className="mt-3 !font-semibold">
                        $979.00
                      </Heading>
                      <div className="flex justify-center items-center w-[30%] md:w-full mt-[15px] p-2 border-gray-500_33_01 border border-solid rounded-[10px]">
                        <Img src="images/defaultNoData.png" alt="settings" className="object-cover" />
                        <div className="flex justify-center flex-1">
                          <div className="flex">
                            <Heading size="s" as="p" className="self-start text-center !font-bold">
                              1
                            </Heading>
                          </div>
                        </div>
                        <Img src="images/defaultNoData.png" alt="settings" className="object-cover" />
                      </div>
                      <Button className="h-[21px] mt-5 px-[9px] text-gray-900_12 uppercase text-[10px] font-medium bg-gray-900_12 min-w-[97px] rounded-md">
                        $2.98 Shipping
                      </Button>
                      <div className="flex items-center mt-3 gap-[7px]">
                        <Img src="images/defaultNoData.png" alt="checkmark" className="w-[12px] object-cover" />
                        <Text size="s" as="p">
                          In stock
                        </Text>
                      </div>
                    </div>
                    <Heading
                      as="h6"
                      className="flex justify-center items-center h-[35px] w-[35px] ml-[-17px] sm:ml-0 !text-gray-500 text-center !font-black relative bg-gray-300_12 rounded-[17px]"
                    >
                      
                    </Heading>
                  </div>
                  <Heading
                    size="2xl"
                    as="h6"
                    className="flex self-start justify-center items-center h-[35px] w-[35px] ml-10 md:p-5 md:ml-0 !text-red-600 text-center !font-black bg-red-A700_11_01 rounded-[17px]"
                  >
                    
                  </Heading>
                </div>
                <div className="flex md:flex-col gap-5 p-4 bg-gray-50 flex-1 rounded-[10px]">
                  <div className="h-[250px] w-[30%] md:w-full md:h-auto md:p-5 bg-white-A700 relative rounded-[10px]">
                    <Img
                      src="images/defaultNoData.png"
                      alt="prod65 png"
                      className="h-[250px] w-full object-cover rounded-[10px]"
                    />
                    <Button className="h-[23px] left-[0.00px] top-[6.00px] px-1.5 m-auto text-white-A700 uppercase text-[10px] bg-gray-900_12 min-w-[39px] absolute rounded-[5px]">
                      new
                    </Button>
                  </div>
                  <div className="flex sm:flex-col justify-center items-start md:self-stretch flex-1">
                    <div className="flex flex-col items-start w-[85%] sm:w-full py-[15px]">
                      <div className="flex mt-[22px] gap-1 flex-wrap">
                        <Heading size="s" as="p" className="!text-amber-700_01 !font-black">
                          <span className="text-amber-700_01"></span>
                          <span className="text-gray-500"></span>
                        </Heading>
                        <Text size="md" as="p" className="self-start !text-gray-700_03">
                          (5)
                        </Text>
                      </div>
                      <Heading size="md" as="p" className="mt-[11px]">
                        Samsung Galaxy X6 Ultra LTE 4G/128 Gb, Black Smartphone
                      </Heading>
                      <Heading size="2xl" as="h6" className="mt-3 !font-semibold">
                        $659.00
                      </Heading>
                      <div className="flex justify-center items-center w-[32%] md:w-full mt-[15px] p-2 border-gray-500_33_01 border border-solid rounded-[10px]">
                        <Img src="images/defaultNoData.png" alt="settings" className="object-cover" />
                        <div className="flex justify-center flex-1">
                          <div className="flex">
                            <Heading size="s" as="p" className="self-start text-center !font-bold">
                              1
                            </Heading>
                          </div>
                        </div>
                        <Img src="images/defaultNoData.png" alt="settings" className="object-cover" />
                      </div>
                      <div className="flex mt-5 gap-2">
                        <Button className="h-[21px] px-[9px] text-green-700 uppercase text-[10px] font-medium bg-green-700 min-w-[93px] rounded-md">
                          free shipping
                        </Button>
                        <Button className="h-[21px] px-[9px] text-red-600 uppercase text-[10px] font-medium bg-red-600 min-w-[69px] rounded-md">
                          free gift
                        </Button>
                      </div>
                      <div className="flex items-center mt-3 gap-[7px]">
                        <Img src="images/defaultNoData.png" alt="checkmark" className="w-[12px] object-cover" />
                        <Text size="s" as="p">
                          In stock
                        </Text>
                      </div>
                    </div>
                    <Heading
                      as="h6"
                      className="flex justify-center items-center h-[35px] w-[35px] !text-gray-500 text-center !font-black bg-gray-300_12 rounded-[17px]"
                    >
                      
                    </Heading>
                    <Heading
                      size="2xl"
                      as="h6"
                      className="flex justify-center items-center h-[35px] w-[35px] ml-10 sm:ml-0 !text-red-600 text-center !font-black bg-red-A700_11_01 rounded-[17px]"
                    >
                      
                    </Heading>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center w-[30%] md:w-full p-[30px] sm:p-5 border-green-700 border border-solid rounded-[10px]">
                <Heading as="h6" className="self-start mt-[5px] !font-bold">
                  Order Summary
                </Heading>
                <div className="flex self-stretch justify-between items-center mt-[21px] gap-5 border-blue_gray-100 border-b border-solid flex-wrap">
                  <Text as="p" className="my-[18px] !text-gray-700_03">
                    Sub Total:
                  </Text>
                  <Heading size="md" as="p">
                    $1,000.00
                  </Heading>
                </div>
                <div className="flex self-stretch items-center">
                  <div className="flex py-[17px] border-blue_gray-100 border-b border-solid flex-1">
                    <Text as="p" className="self-end !text-gray-700_03">
                      Shpping estimate:
                    </Text>
                  </div>
                  <Heading size="md" as="p" className="ml-[-60px] relative">
                    $600.00
                  </Heading>
                </div>
                <div className="flex self-stretch justify-between items-center gap-5 border-blue_gray-100 border-b border-solid flex-wrap">
                  <Text as="p" className="my-[18px] !text-gray-700_03">
                    Tax estimate:
                  </Text>
                  <Heading size="md" as="p">
                    $137.00
                  </Heading>
                </div>
                <div className="flex self-stretch justify-between mt-[18px] gap-5 flex-wrap">
                  <Heading size="md" as="p" className="self-start uppercase">
                    Order total:
                  </Heading>
                  <Heading size="md" as="p">
                    $1,737.00
                  </Heading>
                </div>
                <Button className="h-[50px] mt-[33px] mb-[512px] pl-[35px] pr-[13px] sm:pl-5 text-white-A700 uppercase text-xs font-medium bg-green-700 min-w-[124px] rounded-[10px]">
                  checkout
                </Button>
              </div>
            </div>
            <div className="h-[140px] px-48 md:px-5 bg-blue_gray-900_06 relative rounded-[20px]">
              <div className="flex sm:flex-col items-start w-[68%] bottom-[0.00px] left-[14%] m-auto absolute sm:relative">
                <div className="flex flex-col items-start mt-2.5 px-[15px]">
                  <Text size="5xl" as="p" className="!text-teal-A200_01 uppercase">
                    Pre Order
                  </Text>
                  <Text size="xs" as="p" className="mt-0.5 !text-gray-500 uppercase">
                    be the first to own
                  </Text>
                  <Text as="p" className="mt-3.5 !text-white-A700">
                    From $399
                  </Text>
                </div>
                <Img
                  src="images/defaultNoData.png"
                  alt="banner png"
                  className="w-[64%] sm:w-full ml-[-15px] sm:ml-0 relative object-cover"
                />
              </div>
              <div className="flex md:flex-col justify-center items-center w-[67%] h-max right-[15%] bottom-0 top-0 my-auto absolute md:relative">
                <div className="md:self-stretch h-[140px] bg-gradient2 flex-1 rounded-[70px]" />
                <div className="flex flex-col items-start w-[42%] md:w-full ml-[-70px] gap-3 md:ml-0 relative">
                  <Text size="s" as="p" className="w-[37%] md:w-full !text-teal-A200_01 leading-[18px]">
                    <>
                      Opplo Watch Sport
                      <br />
                      Series 8
                    </>
                  </Text>
                  <Text size="6xl" as="p" className="!text-white-A700 !font-light">
                    A healthy leap ahead
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col gap-[37px]">
              <div className="h-[180px] w-full md:h-auto relative rounded-[10px]">
                <Img
                  src="images/defaultNoData.png"
                  alt="banner2 png"
                  className="h-[180px] w-full object-cover rounded-[10px]"
                />
                <div className="flex flex-col items-start w-[29%] h-max gap-[7px] right-[11%] bottom-0 top-0 my-auto absolute">
                  <Heading size="14xl" as="h1" className="!text-yellow-A400">
                    10% Back
                  </Heading>
                  <Text as="p" className="w-[82%] md:w-full !text-white-A700 leading-[19px]">
                    <span className="text-white-A700">
                      <>
                        Earn 10% Cash back on
                        <br />
                        Swootech.&nbsp;
                      </>
                    </span>
                    <a href="#" className="text-white-A700 underline">
                      Learn How
                    </a>
                  </Text>
                </div>
              </div>
              <div className="h-[180px] w-full md:h-auto relative rounded-[10px]">
                <Img
                  src="images/defaultNoData.png"
                  alt="banner3 png"
                  className="h-[180px] w-full object-cover rounded-[10px]"
                />
                <div className="flex flex-col w-[56%] h-max gap-[15px] left-[6%] bottom-0 top-0 my-auto absolute">
                  <div className="flex justify-between items-start gap-5">
                    <Text size="5xl" as="p" className="w-[31%] !text-white-A700 leading-7">
                      <>
                        Download
                        <br />
                        our app
                      </>
                    </Text>
                    <Text size="s" as="p" className="w-[54%] !text-blue_gray-100 leading-5">
                      <>
                        Enter your phone number and we&#39;ll
                        <br />
                        send you a download link.
                      </>
                    </Text>
                  </div>
                  <div className="h-[45px] w-[82%] relative">
                    <Input
                      name="Group 50"
                      placeholder={`send link`}
                      className="w-full h-[35px] pl-[35px] pr-2.5 left-0 bottom-0 right-0 top-0 m-auto sm:pl-5 text-green-A700 uppercase text-xs bg-white-A700_11 absolute rounded-[5px]"
                    />
                    <div className="flex justify-center w-[71%] h-max left-[5.00px] bottom-0 top-0 p-[11px] my-auto absolute">
                      <div className="flex mt-[3px]">
                        <Text as="p" className="!text-gray-500">
                          (+xx) xxx...
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
