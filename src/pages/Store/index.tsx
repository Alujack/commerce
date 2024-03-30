import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Text, Heading, Button, Img, Input, CheckBox } from "../../components";

export default function StorePage() {
  const [searchBarValue31, setSearchBarValue31] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Techness-Ecommerce</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col w-full pb-[137px] gap-5 md:pb-5 bg-gray-300_12">
        <div className="flex flex-col w-full gap-[15px] mx-auto md:p-5 max-w-[1331px]">
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
                  value={searchBarValue31}
                  onChange={(e: string) => setSearchBarValue31(e)}
                  suffix={
                    searchBarValue31?.length > 0 ? (
                      <CloseSVG onClick={() => setSearchBarValue31("")} height={24} width={24} fillColor="#b0b9beff" />
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
            <div className="flex flex-col gap-[15px]">
              <div className="flex justify-between gap-5 p-[11px] bg-green-700 rounded-[10px]">
                <Heading
                  size="7xl"
                  as="h1"
                  className="self-end ml-[18px] md:ml-0 !text-white-A700 capitalize !font-bold"
                >
                  Popular Categories
                </Heading>
                <Button className="h-[31px] mr-[33px] px-2.5 md:mr-0 text-gray-800_01 capitalize text-lg font-medium bg-gray-200_02 min-w-[89px] rounded-[10px]">
                  View All{" "}
                </Button>
              </div>
              <div className="flex md:flex-col gap-[22px] p-[13px] bg-gray-100_04 rounded-[10px]">
                <div className="flex flex-col items-start w-full mb-0.5 gap-[18px] md:mb-0">
                  <div className="self-stretch p-6 sm:p-5 bg-gray-300_07 rounded-[55px]">
                    <Img
                      src="images/defaultNoData.png"
                      alt="cat1 png"
                      className="w-full md:h-auto mt-1 mb-0.5 object-cover"
                    />
                  </div>
                  <Heading size="s" as="h2" className="ml-[25px] md:ml-0 text-center !font-bold">
                    Gaming
                  </Heading>
                </div>
                <div className="flex flex-col items-end w-full gap-[18px]">
                  <div className="flex flex-col self-stretch items-center justify-center p-[26px] sm:p-5 bg-gray-300_07 rounded-[55px]">
                    <Img src="images/defaultNoData.png" alt="cat2 png" className="w-[58%] mt-0.5 object-cover" />
                  </div>
                  <Heading size="s" as="h3" className="mr-3.5 md:mr-0 text-center !font-bold">
                    Sport Equip
                  </Heading>
                </div>
                <div className="flex flex-col items-center w-full gap-5">
                  <div className="self-stretch p-[26px] sm:p-5 bg-gray-300_07 rounded-[55px]">
                    <Img src="images/defaultNoData.png" alt="cat3 png" className="w-[56px] mt-0.5 object-cover" />
                  </div>
                  <Heading size="s" as="h4" className="text-center !font-bold">
                    Kitchen
                  </Heading>
                </div>
                <div className="flex flex-col items-center w-full gap-5">
                  <div className="self-stretch p-[26px] sm:p-5 bg-gray-300_07 rounded-[55px]">
                    <Img
                      src="images/defaultNoData.png"
                      alt="cat4 png"
                      className="w-full md:h-auto mt-0.5 object-cover"
                    />
                  </div>
                  <Heading size="s" as="h5" className="text-center !font-bold">
                    Robot Cleaner
                  </Heading>
                </div>
                <div className="flex flex-col items-center w-full gap-5">
                  <div className="flex flex-col self-stretch items-center justify-center p-[26px] sm:p-5 bg-gray-300_07 rounded-[55px]">
                    <Img src="images/defaultNoData.png" alt="cat5 png" className="w-[71%] mt-0.5 object-cover" />
                  </div>
                  <Heading size="s" as="h6" className="text-center !font-bold">
                    Mobiles
                  </Heading>
                </div>
                <div className="flex flex-col items-center w-full gap-5">
                  <div className="self-stretch p-3.5 bg-gray-300_07 rounded-[55px]">
                    <Img
                      src="images/defaultNoData.png"
                      alt="cat6 png"
                      className="w-full md:h-auto mt-[15px] mb-[13px] object-cover"
                    />
                  </div>
                  <Heading size="s" as="p" className="text-center !font-bold">
                    Office
                  </Heading>
                </div>
                <div className="flex flex-col items-center w-full gap-5">
                  <div className="self-stretch p-[22px] sm:p-5 bg-gray-300_07 rounded-[55px]">
                    <Img
                      src="images/defaultNoData.png"
                      alt="cat7 png"
                      className="w-full md:h-auto mt-1.5 mb-[3px] object-cover"
                    />
                  </div>
                  <Heading size="s" as="p" className="text-center !font-bold">
                    Cameras
                  </Heading>
                </div>
                <div className="flex flex-col items-center w-full gap-[18px]">
                  <div className="self-stretch p-[17px] bg-gray-300_07 rounded-[55px]">
                    <Img
                      src="images/defaultNoData.png"
                      alt="cat8 png"
                      className="w-full md:h-auto mt-4 mb-3.5 object-cover"
                    />
                  </div>
                  <Heading size="s" as="p" className="text-center !font-bold">
                    Computers
                  </Heading>
                </div>
                <div className="flex flex-col items-center w-full gap-5">
                  <div className="self-stretch p-4 bg-gray-300_07 rounded-[55px]">
                    <Img
                      src="images/defaultNoData.png"
                      alt="cat9 png"
                      className="w-full md:h-auto mt-[15px] mb-3 object-cover"
                    />
                  </div>
                  <Heading size="s" as="p" className="text-center !font-bold">
                    Televisions
                  </Heading>
                </div>
                <div className="flex flex-col items-end w-full gap-5">
                  <div className="self-stretch p-[19px] bg-gray-300_07 rounded-[55px]">
                    <Img
                      src="images/defaultNoData.png"
                      alt="cat10 png"
                      className="w-full md:h-auto mt-[11px] mb-[9px] object-cover"
                    />
                  </div>
                  <Heading size="s" as="p" className="mr-[29px] md:mr-0 text-center !font-bold">
                    Audios
                  </Heading>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-[29px] p-7 sm:p-5 bg-white-A700 rounded-[10px]">
              <Heading size="2xl" as="h6" className="uppercase">
                top cell phones & tablets
              </Heading>
              <div className="flex md:flex-col self-stretch gap-[38px]">
                <div className="h-[310px] md:w-full md:h-auto bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat flex-1 relative rounded-[10px] md:flex-none">
                  <div className="flex flex-col items-start w-[30%] mt-10 ml-[60px] md:ml-0">
                    <Heading size="10xl" as="h3" className="!text-white-A700 leading-9">
                      <span className="text-white-A700">
                        <>
                          Noise Cancelling
                          <br />
                        </>
                      </span>
                      <span className="text-white-A700 font-light">Headphone</span>
                    </Heading>
                    <div className="flex items-center mt-[22px] gap-[11px] flex-wrap">
                      <Heading size="xs" as="p" className="self-start h-[12px] !text-white-A700 capitalize">
                        
                      </Heading>
                      <Text size="s" as="p" className="self-end !text-white-A700 capitalize">
                        Boso Over-Ear Headphone
                      </Text>
                    </div>
                    <div className="flex items-center mt-1 gap-[11px] flex-wrap">
                      <Heading size="xs" as="p" className="self-start h-[12px] !text-white-A700 capitalize">
                        
                      </Heading>
                      <Text size="s" as="p" className="!text-white-A700 capitalize">
                        Wifi, Voice Assistant,
                      </Text>
                    </div>
                    <div className="flex items-center mt-1 gap-[11px] flex-wrap">
                      <Heading size="xs" as="p" className="self-start h-[12px] !text-white-A700 capitalize">
                        
                      </Heading>
                      <Text size="s" as="p" className="self-end !text-white-A700 capitalize">
                        Low latency game mde
                      </Text>
                    </div>
                    <Button className="h-[34px] mt-[41px] px-[15px] text-black-900_01 uppercase text-xs font-medium bg-white-A700 min-w-[89px] rounded-[10px]">
                      buy now
                    </Button>
                  </div>
                  <div className="h-[310px] w-full md:h-auto left-0 bottom-0 right-0 top-0 m-auto bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat absolute rounded-[10px]">
                    <div className="flex flex-col items-start w-[25%] ml-[60px] md:ml-0">
                      <Text size="6xl" as="p" className="!text-green-700 !font-medium leading-9">
                        <span className="text-green-700">
                          <>
                            aPodOs
                            <br />
                          </>
                        </span>
                        <span className="text-white-A700">
                          <>
                            Work wonders
                            <br />
                            with easy
                          </>
                        </span>
                      </Text>
                      <Text size="s" as="p" className="w-[89%] md:w-full mt-2.5 !text-white-A700 leading-5">
                        <>
                          Experience aPod 2023 with new
                          <br />
                          technology from $769
                        </>
                      </Text>
                      <Button className="h-[34px] mt-[27px] px-[15px] text-white-A700 uppercase text-xs font-medium bg-green-700 min-w-[124px] rounded-[10px]">
                        discover now
                      </Button>
                    </div>
                    <div className="h-[310px] w-full md:h-auto left-0 bottom-0 right-0 top-0 m-auto bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat absolute rounded-[10px]">
                      <div className="flex flex-col items-start w-[21%] mt-[43px] ml-[60px] md:ml-0">
                        <Text size="md" as="p" className="w-[43%] md:w-full uppercase leading-[22px]">
                          <>
                            pc gaming
                            <br />
                            cases
                          </>
                        </Text>
                        <Text size="6xl" as="p" className="mt-3 uppercase leading-9">
                          <span className="text-black-900_01">
                            <>
                              SAle up to
                              <br />
                            </>
                          </span>
                          <span className="text-green-700 font-bold">50%&nbsp;</span>
                          <span className="text-black-900_01 font-bold">off</span>
                        </Text>
                        <Button className="h-[34px] mt-[50px] px-[15px] text-white-A700 uppercase text-xs font-medium bg-black-900_01 min-w-[89px] rounded-[10px]">
                          buy now
                        </Button>
                      </div>
                      <div className="flex flex-col items-start h-[310px] w-full md:h-auto left-0 bottom-0 right-0 top-0 p-10 m-auto sm:p-5 bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat absolute rounded-[10px]">
                        <Heading
                          size="10xl"
                          as="h3"
                          className="w-[34%] md:w-full ml-5 md:ml-0 !text-white-A700 leading-9"
                        >
                          <span className="text-white-A700">
                            <>
                              Noise Cancelling
                              <br />
                            </>
                          </span>
                          <span className="text-white-A700 font-light">Headphone</span>
                        </Heading>
                        <Text size="s" as="p" className="mt-[23px] ml-[43px] md:ml-0 !text-white-A700 capitalize">
                          Boso Over-Ear Headphone
                        </Text>
                        <Text size="s" as="p" className="mt-1 ml-[43px] md:ml-0 !text-white-A700 capitalize">
                          Wifi, Voice Assistant,
                        </Text>
                        <Text size="s" as="p" className="mt-[5px] ml-[43px] md:ml-0 !text-white-A700 capitalize">
                          Low latency game mde
                        </Text>
                        <Button className="h-[34px] mt-[41px] mb-2.5 ml-5 px-[15px] md:ml-0 text-black-900_01 uppercase text-xs font-medium bg-white-A700 min-w-[89px] rounded-[10px]">
                          buy now
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[310px] w-[31%] md:w-full md:h-auto relative rounded-[10px]">
                  <Img
                    src="images/defaultNoData.png"
                    alt="banner1 png"
                    className="h-[310px] w-full object-cover rounded-[10px]"
                  />
                  <div className="flex justify-between items-start w-[84%] top-[12%] right-0 left-0 gap-5 m-auto absolute">
                    <div className="flex flex-col items-start w-[57%] gap-3.5">
                      <Text size="5xl" as="p" className="self-center w-[83%] md:w-full leading-7">
                        <>
                          redmi note 12
                          <br />
                          Pro+ 5g
                        </>
                      </Text>
                      <Text size="s" as="p" className="ml-[13px] md:ml-0 !text-gray-700_03">
                        Rise to the challenge
                      </Text>
                    </div>
                    <Button className="h-[34px] px-[15px] text-white-A700 uppercase text-xs font-medium bg-black-900_01 min-w-[98px] rounded-[10px]">
                      Shop Now
                    </Button>
                  </div>
                </div>
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
            <div className="flex flex-col gap-[15px]">
              <div className="justify-center gap-5 grid-cols-[repeat(auto-fill,_minmax(218px_,_1fr))] grid">
                <div className="flex flex-col w-full pt-4 gap-3 px-4 bg-gray-100_04 rounded-[10px]">
                  <Img src="images/defaultNoData.png" alt="Image" className="object-cover rounded" />
                  <div className="flex flex-col items-start pb-3 gap-[13px]">
                    <div className="flex flex-col items-start">
                      <Text as="p" className="!text-blue_gray-500 !font-manrope">
                        Extra Bass
                      </Text>
                      <Heading as="h6" className="!text-gray-900_07">
                        Sony Black Headphones
                      </Heading>
                    </div>
                    <Heading size="7xl" as="h4" className="!text-gray-900_07">
                      $100
                    </Heading>
                    <div className="flex gap-3">
                      <Button className="p-3 border-blue_gray-100_01 border border-solid bg-white-A700 rounded">
                        <Img src="images/defaultNoData.png" />
                      </Button>
                      <Button
                        rightIcon={
                          <Img src="images/defaultNoData.png" alt="arrow_right" className="w-[20px] h-[20px]" />
                        }
                        className="h-[44px] gap-2 px-6 sm:px-5 text-white-A700 font-manrope text-base font-semibold bg-gray-900_04 min-w-[142px] rounded"
                      >
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full pt-4 gap-3 px-4 bg-gray-100_04 rounded-[10px]">
                  <Img src="images/defaultNoData.png" alt="Image" className="object-cover rounded" />
                  <div className="flex flex-col items-start pb-3 gap-[13px]">
                    <div className="flex flex-col items-start">
                      <Text as="p" className="!text-blue_gray-500 !font-manrope">
                        Extra Bass
                      </Text>
                      <Heading as="h6" className="!text-gray-900_07">
                        Sony Black Headphones
                      </Heading>
                    </div>
                    <Heading size="7xl" as="h4" className="!text-gray-900_07">
                      $100
                    </Heading>
                    <div className="flex gap-3">
                      <Button className="p-3 border-blue_gray-100_01 border border-solid bg-white-A700 rounded">
                        <Img src="images/defaultNoData.png" />
                      </Button>
                      <Button
                        rightIcon={
                          <Img src="images/defaultNoData.png" alt="arrow_right" className="w-[20px] h-[20px]" />
                        }
                        className="h-[44px] gap-2 px-6 sm:px-5 text-white-A700 font-manrope text-base font-semibold bg-gray-900_04 min-w-[142px] rounded"
                      >
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full pt-4 gap-3 px-4 bg-gray-100_04 rounded-[10px]">
                  <Img src="images/defaultNoData.png" alt="Image" className="object-cover rounded" />
                  <div className="flex flex-col items-start pb-3 gap-[13px]">
                    <div className="flex flex-col items-start">
                      <Text as="p" className="!text-blue_gray-500 !font-manrope">
                        Extra Bass
                      </Text>
                      <Heading as="h6" className="!text-gray-900_07">
                        Sony Black Headphones
                      </Heading>
                    </div>
                    <Heading size="7xl" as="h4" className="!text-gray-900_07">
                      $100
                    </Heading>
                    <div className="flex self-stretch gap-3">
                      <div className="flex justify-center w-[31%] p-3 border-blue_gray-100_01 border border-solid bg-white-A700 rounded">
                        <Img src="images/defaultNoData.png" alt="cart" className="w-[21px] object-cover" />
                      </div>
                      <Button
                        rightIcon={
                          <Img src="images/defaultNoData.png" alt="arrow_right" className="w-[20px] h-[20px]" />
                        }
                        className="h-[44px] gap-2 px-6 sm:px-5 text-white-A700 font-manrope text-base font-semibold bg-gray-900_04 min-w-[142px] rounded"
                      >
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full pt-4 gap-3 px-4 bg-gray-100_04 rounded-[10px]">
                  <Img src="images/defaultNoData.png" alt="Image" className="object-cover rounded" />
                  <div className="flex flex-col items-start pb-3 gap-[13px]">
                    <div className="flex flex-col items-start">
                      <Text as="p" className="!text-blue_gray-500 !font-manrope">
                        Extra Bass
                      </Text>
                      <Heading as="h6" className="!text-gray-900_07">
                        Sony Black Headphones
                      </Heading>
                    </div>
                    <Heading size="7xl" as="h4" className="!text-gray-900_07">
                      $100
                    </Heading>
                    <div className="flex self-stretch gap-3">
                      <div className="flex justify-center w-[31%] p-3 border-blue_gray-100_01 border border-solid bg-white-A700 rounded">
                        <Img src="images/defaultNoData.png" alt="cart" className="w-[21px] object-cover" />
                      </div>
                      <Button
                        rightIcon={
                          <Img src="images/defaultNoData.png" alt="arrow_right" className="w-[20px] h-[20px]" />
                        }
                        className="h-[44px] gap-2 px-6 sm:px-5 text-white-A700 font-manrope text-base font-semibold bg-gray-900_04 min-w-[142px] rounded"
                      >
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full pt-4 gap-3 px-4 bg-gray-100_04 rounded-[10px]">
                  <Img src="images/defaultNoData.png" alt="Image" className="object-cover rounded" />
                  <div className="flex flex-col items-start pb-3 gap-[13px]">
                    <div className="flex flex-col items-start">
                      <Text as="p" className="!text-blue_gray-500 !font-manrope">
                        Extra Bass
                      </Text>
                      <Heading as="h6" className="!text-gray-900_07">
                        Sony Black Headphones
                      </Heading>
                    </div>
                    <Heading size="7xl" as="h4" className="!text-gray-900_07">
                      $100
                    </Heading>
                    <div className="flex self-stretch gap-3">
                      <div className="flex justify-center w-[31%] p-3 border-blue_gray-100_01 border border-solid bg-white-A700 rounded">
                        <Img src="images/defaultNoData.png" alt="cart" className="w-[21px] object-cover" />
                      </div>
                      <Button
                        rightIcon={
                          <Img src="images/defaultNoData.png" alt="arrow_right" className="w-[20px] h-[20px]" />
                        }
                        className="h-[44px] gap-2 px-6 sm:px-5 text-white-A700 font-manrope text-base font-semibold bg-gray-900_04 min-w-[142px] rounded"
                      >
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full pt-4 gap-3 px-4 bg-gray-100_04 rounded-[10px]">
                  <Img src="images/defaultNoData.png" alt="Image" className="object-cover rounded" />
                  <div className="flex flex-col items-start pb-3 gap-[13px]">
                    <div className="flex flex-col items-start">
                      <Text as="p" className="!text-blue_gray-500 !font-manrope">
                        Extra Bass
                      </Text>
                      <Heading as="h6" className="!text-gray-900_07">
                        Sony Black Headphones
                      </Heading>
                    </div>
                    <Heading size="7xl" as="h4" className="!text-gray-900_07">
                      $100
                    </Heading>
                    <div className="flex gap-3">
                      <Button className="p-3 border-blue_gray-100_01 border border-solid bg-white-A700 rounded">
                        <Img src="images/defaultNoData.png" />
                      </Button>
                      <Button
                        rightIcon={
                          <Img src="images/defaultNoData.png" alt="arrow_right" className="w-[20px] h-[20px]" />
                        }
                        className="h-[44px] gap-2 px-6 sm:px-5 text-white-A700 font-manrope text-base font-semibold bg-gray-900_04 min-w-[142px] rounded"
                      >
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full pt-4 gap-3 px-4 bg-gray-100_04 rounded-[10px]">
                  <Img src="images/defaultNoData.png" alt="Image" className="object-cover rounded" />
                  <div className="flex flex-col items-start pb-3 gap-[13px]">
                    <div className="flex flex-col items-start">
                      <Text as="p" className="!text-blue_gray-500 !font-manrope">
                        Extra Bass
                      </Text>
                      <Heading as="h6" className="!text-gray-900_07">
                        Sony Black Headphones
                      </Heading>
                    </div>
                    <Heading size="7xl" as="h4" className="!text-gray-900_07">
                      $100
                    </Heading>
                    <div className="flex self-stretch gap-3">
                      <div className="flex justify-center w-[31%] p-3 border-blue_gray-100_01 border border-solid bg-white-A700 rounded">
                        <Img src="images/defaultNoData.png" alt="cart" className="w-[21px] object-cover" />
                      </div>
                      <Button
                        rightIcon={
                          <Img src="images/defaultNoData.png" alt="arrow_right" className="w-[20px] h-[20px]" />
                        }
                        className="h-[44px] gap-2 px-6 sm:px-5 text-white-A700 font-manrope text-base font-semibold bg-gray-900_04 min-w-[142px] rounded"
                      >
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full pt-4 gap-3 px-4 bg-gray-100_04 rounded-[10px]">
                  <Img src="images/defaultNoData.png" alt="Image" className="object-cover rounded" />
                  <div className="flex flex-col items-start pb-3 gap-[13px]">
                    <div className="flex flex-col items-start">
                      <Text as="p" className="!text-blue_gray-500 !font-manrope">
                        Extra Bass
                      </Text>
                      <Heading as="h6" className="!text-gray-900_07">
                        Sony Black Headphones
                      </Heading>
                    </div>
                    <Heading size="7xl" as="h4" className="!text-gray-900_07">
                      $100
                    </Heading>
                    <div className="flex self-stretch gap-3">
                      <div className="flex justify-center w-[31%] p-3 border-blue_gray-100_01 border border-solid bg-white-A700 rounded">
                        <Img src="images/defaultNoData.png" alt="cart" className="w-[21px] object-cover" />
                      </div>
                      <Button
                        rightIcon={
                          <Img src="images/defaultNoData.png" alt="arrow_right" className="w-[20px] h-[20px]" />
                        }
                        className="h-[44px] gap-2 px-6 sm:px-5 text-white-A700 font-manrope text-base font-semibold bg-gray-900_04 min-w-[142px] rounded"
                      >
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full pt-4 gap-3 px-4 bg-gray-100_04 rounded-[10px]">
                  <Img src="images/defaultNoData.png" alt="Image" className="object-cover rounded" />
                  <div className="flex flex-col items-start pb-3 gap-[13px]">
                    <div className="flex flex-col items-start">
                      <Text as="p" className="!text-blue_gray-500 !font-manrope">
                        Extra Bass
                      </Text>
                      <Heading as="h6" className="!text-gray-900_07">
                        Sony Black Headphones
                      </Heading>
                    </div>
                    <Heading size="7xl" as="h4" className="!text-gray-900_07">
                      $100
                    </Heading>
                    <div className="flex self-stretch gap-3">
                      <div className="flex justify-center w-[31%] p-3 border-blue_gray-100_01 border border-solid bg-white-A700 rounded">
                        <Img src="images/defaultNoData.png" alt="cart" className="w-[21px] object-cover" />
                      </div>
                      <Button
                        rightIcon={
                          <Img src="images/defaultNoData.png" alt="arrow_right" className="w-[20px] h-[20px]" />
                        }
                        className="h-[44px] gap-2 px-6 sm:px-5 text-white-A700 font-manrope text-base font-semibold bg-gray-900_04 min-w-[142px] rounded"
                      >
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full pt-4 gap-3 px-4 bg-gray-100_04 rounded-[10px]">
                  <Img src="images/defaultNoData.png" alt="Image" className="object-cover rounded" />
                  <div className="flex flex-col items-start pb-3 gap-[13px]">
                    <div className="flex flex-col items-start">
                      <Text as="p" className="!text-blue_gray-500 !font-manrope">
                        Extra Bass
                      </Text>
                      <Heading as="h6" className="!text-gray-900_07">
                        Sony Black Headphones
                      </Heading>
                    </div>
                    <Heading size="7xl" as="h4" className="!text-gray-900_07">
                      $100
                    </Heading>
                    <div className="flex self-stretch gap-3">
                      <div className="flex justify-center w-[31%] p-3 border-blue_gray-100_01 border border-solid bg-white-A700 rounded">
                        <Img src="images/defaultNoData.png" alt="cart" className="w-[21px] object-cover" />
                      </div>
                      <Button
                        rightIcon={
                          <Img src="images/defaultNoData.png" alt="arrow_right" className="w-[20px] h-[20px]" />
                        }
                        className="h-[44px] gap-2 px-6 sm:px-5 text-white-A700 font-manrope text-base font-semibold bg-gray-900_04 min-w-[142px] rounded"
                      >
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center p-[15px] bg-green-700 rounded-[10px]">
                <Button className="self-start h-[31px] px-[35px] sm:px-5 text-gray-800_01 capitalize text-lg font-medium bg-gray-200_02 min-w-[150px] rounded-[10px]">
                  View All{" "}
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center h-[326px] md:h-auto pl-[69px] pr-14 gap-[30px] py-[69px] md:p-5 bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat rounded-[10px]">
              <Heading size="15xl" as="h1" className="w-[30%] md:w-full ml-[26px] md:ml-0 leading-[54px]">
                <span className="text-black-900_01">
                  <>
                    Best experience
                    <br />
                  </>
                </span>
                <span className="text-black-900_01 font-normal">always wins</span>
              </Heading>
              <Text as="p" className="w-[28%] md:w-full ml-[26px] md:ml-0 !text-gray-700_03 leading-[23px]">
                <>
                  #1 Online Marketplace for Electronic & Technology
                  <br />
                  in Mahanttan, CA
                </>
              </Text>
            </div>
            <div className="flex md:flex-col justify-between gap-5 p-[23px] sm:p-5 bg-orange-A200_01 rounded-[10px]">
              <div className="flex items-center ml-6 gap-[11px] py-[7px] md:ml-0">
                <Img src="images/defaultNoData.png" alt="contrast" className="object-cover" />
                <Text size="md" as="p" className="self-start !text-white-A700 uppercase">
                  free shipping over $199
                </Text>
              </div>
              <div className="flex items-center gap-[11px] py-[9px]">
                <Img src="images/defaultNoData.png" alt="contrast" className="self-start w-[13px] object-cover" />
                <Text size="md" as="p" className="self-start !text-white-A700 uppercase">
                  30 days money back
                </Text>
              </div>
              <div className="flex items-start gap-[11px] py-[7px]">
                <Img src="images/defaultNoData.png" alt="contrast" className="object-cover" />
                <Text size="md" as="p" className="mt-0.5 !text-white-A700 uppercase">
                  100% secure payment
                </Text>
              </div>
              <div className="flex items-start gap-3 py-1.5">
                <Img src="images/defaultNoData.png" alt="contrast" className="object-cover" />
                <Text size="md" as="p" className="mt-0.5 !text-white-A700 uppercase">
                  free product return
                </Text>
              </div>
              <div className="flex items-center mr-[53px] gap-[11px] py-2 md:mr-0">
                <Img src="images/defaultNoData.png" alt="contrast" className="self-start w-[13px] object-cover" />
                <Text size="md" as="p" className="!text-white-A700 uppercase">
                  24/7 online & offline support
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col items-center gap-10 p-[19px] bg-white-A700 rounded-[10px]">
              <div className="flex flex-col w-[22%] md:w-full gap-2.5 my-2.5">
                <div className="flex flex-col gap-2.5">
                  <div className="flex flex-col items-start gap-[19px] p-7 sm:p-5 bg-blue_gray-50_07 rounded-[10px]">
                    <Heading size="2xl" as="h6" className="uppercase">
                      categories
                    </Heading>
                    <div className="flex items-center gap-2.5 p-2.5 bg-white-A700 flex-wrap rounded-lg">
                      <Heading size="xs" as="p" className="self-start h-[12px]">
                        
                      </Heading>
                      <Heading size="xs" as="p" className="!font-bold">
                        All Categories
                      </Heading>
                    </div>
                    <div className="flex flex-col items-start mb-[7px]">
                      <Heading size="md" as="p">
                        Cell Phones & Tablets
                      </Heading>
                      <Text as="p" className="mt-[26px] ml-5 md:ml-0">
                        All
                      </Text>
                      <Text as="p" className="mt-3.5 ml-5 md:ml-0">
                        Iphone
                      </Text>
                      <Text as="p" className="mt-[13px] ml-5 md:ml-0">
                        Samsung
                      </Text>
                      <Text as="p" className="mt-[11px] ml-5 md:ml-0">
                        Xiaomi
                      </Text>
                      <Text as="p" className="mt-[13px] ml-5 md:ml-0">
                        Asus
                      </Text>
                      <Text as="p" className="mt-3.5 ml-5 md:ml-0">
                        Oppo
                      </Text>
                      <Text as="p" className="mt-3 ml-5 md:ml-0">
                        Gaming Smartphone
                      </Text>
                      <Text as="p" className="mt-[13px] ml-5 md:ml-0">
                        Ipad
                      </Text>
                      <Text as="p" className="mt-[11px] ml-5 md:ml-0">
                        Window Tablets
                      </Text>
                      <Text as="p" className="mt-[13px] ml-5 md:ml-0">
                        eReader
                      </Text>
                      <Text as="p" className="self-center mt-3.5">
                        Smartphone Chargers
                      </Text>
                      <Text as="p" className="self-end mt-3 mr-1 md:mr-0">
                        5G Support Smartphone
                      </Text>
                      <Text as="p" className="self-end mt-3">
                        Smartphone Accessories
                      </Text>
                      <Text as="p" className="mt-[11px] ml-5 md:ml-0">
                        Tablets Accessories
                      </Text>
                      <div className="flex mt-[13px] ml-5 gap-[3px] md:ml-0 flex-wrap">
                        <Text as="p">Cell Phones </Text>
                        <Heading size="md" as="p" className="h-[14px] !font-black">
                          
                        </Heading>
                        <Text as="p">$200</Text>
                      </div>
                    </div>
                  </div>
                  <div className="py-[15px] bg-blue_gray-50_07 rounded-[10px]">
                    <div className="flex flex-col mt-[13px]">
                      <div className="flex flex-col items-start">
                        <div className="flex items-end ml-[3px] md:ml-0 flex-wrap">
                          <Heading size="2xl" as="h6" className="uppercase">
                            categories
                          </Heading>
                          <Heading size="md" as="p" className="h-[14px] mb-[3px] ml-[47px] !font-black">
                            
                          </Heading>
                          <Text as="p" className="mb-[3px] ml-2">
                            Reset All
                          </Text>
                        </div>
                        <div className="flex mt-[23px] gap-[7px]">
                          <div className="flex items-start gap-[11px] bg-white-A700 flex-wrap rounded-md">
                            <Text size="md" as="p" className="mt-0.5">
                              Min: $45.00{" "}
                            </Text>
                            <Heading size="s" as="p" className="text-center !font-black">
                              
                            </Heading>
                          </div>
                          <div className="flex items-start gap-[11px] bg-white-A700 flex-wrap rounded-md">
                            <Text size="md" as="p" className="mt-0.5">
                              10.9 inch{" "}
                            </Text>
                            <Heading size="s" as="p" className="text-center !font-black">
                              
                            </Heading>
                          </div>
                        </div>
                        <div className="flex mt-2 gap-[7px]">
                          <div className="flex items-start gap-[11px] bg-white-A700 flex-wrap rounded-md">
                            <Text size="md" as="p" className="mt-0.5">
                              Color: Red{" "}
                            </Text>
                            <Heading size="s" as="p" className="text-center !font-black">
                              
                            </Heading>
                          </div>
                          <div className="flex items-start gap-[11px] bg-white-A700 flex-wrap rounded-md">
                            <Text size="md" as="p" className="mt-0.5">
                              128GB{" "}
                            </Text>
                            <Heading size="s" as="p" className="text-center !font-black">
                              
                            </Heading>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start mt-[34px] gap-[11px]">
                        <div className="flex flex-col items-start gap-[22px] py-[25px] sm:py-5 border-gray-500_33_01 border-b border-solid flex-1">
                          <Heading size="md" as="p">
                            By Brands
                          </Heading>
                          <div className="flex self-stretch items-start">
                            <Input
                              name="Input"
                              className="h-[38px] pl-3 pr-[35px] sm:pr-5 z-[1] border-gray-500_33_01 border border-solid bg-white-A700 flex-grow rounded-[5px]"
                            />
                            <Heading
                              size="2xl"
                              as="h6"
                              className="h-[18px] mt-[9px] ml-[-13px] text-center !font-black relative"
                            >
                              
                            </Heading>
                          </div>
                          <div className="flex flex-col w-[63%] md:w-full mb-2.5 gap-3">
                            <div className="flex items-center w-[86%] md:w-full gap-2.5">
                              <div className="self-end h-[14px] w-[14px] mb-[3px] border-black-900_3f_01 border border-solid bg-white-A700 rounded-[3px]" />
                              <Img src="images/defaultNoData.png" alt="brand1 png" className="w-[56%] object-cover" />
                              <Text as="p" className="!text-blue_gray-400_01">
                                (14)
                              </Text>
                            </div>
                            <div className="flex items-center gap-2.5">
                              <div className="self-end h-[14px] w-[14px] mb-[3px] border-black-900_3f_01 border border-solid bg-white-A700 rounded-[3px]" />
                              <Img src="images/defaultNoData.png" alt="brand2 png" className="w-[65%] object-cover" />
                              <Text as="p" className="!text-blue_gray-400_01">
                                (6)
                              </Text>
                            </div>
                            <div className="flex items-center gap-2.5">
                              <div className="self-end h-[14px] w-[14px] mb-[3px] border-black-900_3f_01 border border-solid bg-white-A700 rounded-[3px]" />
                              <Img src="images/defaultNoData.png" alt="brand3 png" className="w-[65%] object-cover" />
                              <Text as="p" className="!text-blue_gray-400_01">
                                (7)
                              </Text>
                            </div>
                            <div className="flex items-center gap-2.5">
                              <div className="self-end h-[14px] w-[14px] mb-[3px] border-black-900_3f_01 border border-solid bg-white-A700 rounded-[3px]" />
                              <Img src="images/defaultNoData.png" alt="brand4 png" className="w-[63%] object-cover" />
                              <Text as="p" className="!text-blue_gray-400_01">
                                (18)
                              </Text>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-2.5 flex-1">
                                <div className="self-end h-[14px] w-[14px] mb-[3px] border-black-900_3f_01 border border-solid bg-white-A700 rounded-[3px]" />
                                <Img src="images/defaultNoData.png" alt="brand5 png" className="w-[86%] object-cover" />
                              </div>
                              <Text as="p" className="!text-blue_gray-400_01">
                                (1)
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Heading size="md" as="p" className="h-[14px] mt-6 !font-black">
                          
                        </Heading>
                      </div>
                      <div className="flex items-start gap-[5px]">
                        <div className="flex items-start flex-1">
                          <div className="py-[25px] sm:py-5 border-gray-500_33_01 border-b border-solid flex-1">
                            <div className="flex flex-col items-start mb-[5px] gap-[19px]">
                              <Heading size="md" as="p">
                                By Price
                              </Heading>
                              <div className="flex self-stretch items-start">
                                <div className="h-[10px] w-[10px] z-[1] bg-green-700 shadow-sm rounded-[5px]" />
                                <div className="mt-[3px] ml-[-10px] relative bg-gray-300_08 flex-1 rounded-[1px]">
                                  <div className="h-[2px] bg-green-700 rounded-[1px]" />
                                </div>
                              </div>
                              <div className="flex self-stretch items-center">
                                <Input
                                  name="div field"
                                  placeholder={`\$`}
                                  className="h-[40px] pr-3.5 gap-5 text-black-900_01 text-xs font-semibold bg-white-A700 flex-grow rounded-[5px]"
                                />
                                <div className="h-px w-[10px] ml-10 bg-black-900_01" />
                                <Input
                                  name="div field"
                                  placeholder={`\$`}
                                  className="h-[40px] ml-2.5 gap-[5px] text-black-900_01 text-xs font-semibold bg-white-A700 flex-grow rounded-[5px]"
                                />
                                <Button className="h-[40px] w-full ml-5 px-[11px] text-white-A700 capitalize text-sm font-bold bg-green-700 rounded-[5px]">
                                  go
                                </Button>
                              </div>
                            </div>
                          </div>
                          <div className="h-[10px] w-[10px] mt-[62px] bg-green-700 shadow-sm rounded-[5px]" />
                        </div>
                        <Heading size="md" as="p" className="h-[14px] mt-6 !font-black">
                          
                        </Heading>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex flex-col items-start py-[25px] sm:py-5 border-gray-500_33_01 border-b border-solid flex-1">
                          <Heading size="md" as="p">
                            By Rating
                          </Heading>
                          <div className="flex self-stretch items-center mt-[21px] gap-2.5">
                            <CheckBox
                              name="Symbol"
                              label=""
                              id="Symbol3"
                              className="self-start gap-[11px] text-amber-A700_01 text-left text-[15px] font-black flex-1"
                            />
                            <Text size="s" as="p" className="self-start">
                              (52)
                            </Text>
                          </div>
                          <div className="flex self-stretch items-center mt-[5px] gap-2.5">
                            <CheckBox
                              name="Symbol"
                              label=""
                              id="Symbol2"
                              className="self-start gap-[11px] text-amber-A700_01 text-left text-[15px] font-black flex-1"
                            />
                            <Text size="s" as="p" className="self-start">
                              (24)
                            </Text>
                          </div>
                          <div className="flex self-stretch items-center mt-[5px] gap-2.5">
                            <CheckBox
                              name="Symbol"
                              label=""
                              id="Symbol1"
                              className="self-start gap-[11px] text-amber-A700_01 text-left text-[15px] font-black flex-1"
                            />
                            <Text size="s" as="p" className="self-start">
                              (5)
                            </Text>
                          </div>
                          <div className="flex self-stretch items-center mt-[5px] mb-2.5 gap-2.5">
                            <CheckBox
                              name="Symbol"
                              label=""
                              id="Symbol"
                              className="self-start gap-[11px] text-amber-A700_01 text-left text-[15px] font-black flex-1"
                            />
                            <Text size="s" as="p" className="self-start h-[13px]">
                              (1)
                            </Text>
                          </div>
                        </div>
                        <Heading size="md" as="p" className="h-[14px] mt-6 !font-black">
                          
                        </Heading>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-start flex-1">
                          <div className="flex py-[25px] sm:py-5 border-gray-500_33_01 border-b border-solid flex-1">
                            <div className="flex flex-col items-start w-[76%] md:w-full mb-2">
                              <Heading size="md" as="p">
                                By Screen Size
                              </Heading>
                              <div className="flex self-stretch mt-[19px] gap-[5px]">
                                <Button className="w-full h-[29px] px-2 text-black-900_01 text-[13px] bg-white-A700 rounded-md">
                                  7” & Under
                                </Button>
                                <Button className="w-full h-[29px] px-2 text-black-900_01 text-[13px] bg-white-A700 rounded-md">
                                  7.1” - 8.9”
                                </Button>
                              </div>
                              <Button className="h-[29px] mt-1.5 px-2 text-black-900_01 text-[13px] bg-white-A700 min-w-[94px] rounded-md">
                                11” & Greater
                              </Button>
                            </div>
                          </div>
                          <Button className="h-[29px] mt-[59px] ml-[-45px] px-2 text-black-900_01 text-[13px] relative bg-white-A700 min-w-[72px] rounded-md">
                            9” - 10.9”
                          </Button>
                        </div>
                        <Heading size="md" as="p" className="h-[14px] mt-6 ml-[-10px] !font-black relative">
                          
                        </Heading>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="pr-1.5 py-1.5 border-gray-500_33_01 border-b border-solid flex-1">
                          <div className="flex flex-col items-start mt-[18px] mb-[31px]">
                            <Heading size="md" as="p">
                              By Color
                            </Heading>
                            <div className="flex self-stretch mt-[23px] gap-3.5">
                              <div className="h-[30px] w-[30px] bg-red-900_01 rounded-md" />
                              <div className="h-[30px] w-[30px] bg-blue_gray-700_02 rounded-md" />
                              <div className="h-[30px] w-[30px] bg-teal-300_01 rounded-md" />
                              <div className="h-[30px] w-[30px] bg-gray-900_12 rounded-md" />
                              <div className="h-[30px] w-[30px] bg-white-A700 rounded-md" />
                            </div>
                            <div className="flex w-[57%] md:w-full mt-3.5 gap-3.5">
                              <div className="h-[30px] w-[30px] bg-green-700 rounded-md" />
                              <div className="h-[30px] w-[30px] bg-gray-700_02 rounded-md" />
                              <div className="h-[30px] w-[30px] bg-deep_purple-700_05 rounded-md" />
                            </div>
                          </div>
                        </div>
                        <Heading size="md" as="p" className="h-[14px] mt-6 !font-black">
                          
                        </Heading>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center flex-1">
                        <div className="flex flex-col self-end items-center justify-center w-[32%] mb-[31px] gap-[5px] p-[5px] z-[1]">
                          <CheckBox
                            name="Label   12GB "
                            label="12GB (4)"
                            id="Label12GB"
                            className="gap-[7px] py-[5px] text-black-900_01 text-left text-sm"
                          />
                          <CheckBox
                            name="Label   8GB "
                            label="8GB (3)"
                            id="Label8GB"
                            className="pr-1 gap-[7px] py-[5px] text-black-900_01 text-left text-sm"
                          />
                          <CheckBox
                            name="Label   6GB "
                            label="6GB (12)"
                            id="Label6GB"
                            className="gap-[7px] py-[5px] text-black-900_01 text-left text-sm"
                          />
                          <div className="flex flex-col w-[79%] md:w-full mb-[3px] gap-2">
                            <CheckBox
                              name="Label   4GB "
                              label="4GB (6)"
                              id="Label4GB"
                              className="pr-1 gap-[7px] py-[5px] text-black-900_01 text-left text-sm"
                            />
                            <CheckBox
                              name="Label   3GB "
                              label="3GB (7)"
                              id="Label3GB"
                              className="gap-[7px] p-px text-black-900_01 text-left text-sm"
                            />
                          </div>
                        </div>
                        <div className="flex items-center ml-[-91px] relative flex-1">
                          <div className="flex flex-col items-start py-[25px] sm:py-5 border-gray-500_33_01 border-b border-solid flex-1">
                            <Heading size="md" as="p" className="mb-[172px]">
                              By Memory
                            </Heading>
                          </div>
                          <div className="flex flex-col self-end items-center w-[33%] mb-[31px] ml-[-91px] gap-[5px] relative">
                            <CheckBox
                              name="Label   1 5GB "
                              label="1.5GB (1)"
                              id="Label15GB"
                              className="mt-0.5 gap-[7px] py-[5px] text-black-900_01 text-left text-sm"
                            />
                            <CheckBox
                              name="Label   1GB "
                              label="1GB (1)"
                              id="Label1GB"
                              className="pr-[9px] gap-[7px] py-[5px] text-black-900_01 text-left text-sm"
                            />
                            <CheckBox
                              name="Label   512MB "
                              label="512MB (2)"
                              id="Label512MB"
                              className="self-end mb-[60px] gap-[7px] py-[5px] text-black-900_01 text-left text-sm"
                            />
                          </div>
                        </div>
                      </div>
                      <Heading size="md" as="p" className="h-[14px] mt-6 !font-black">
                        
                      </Heading>
                    </div>
                    <div className="flex items-start mb-3.5 gap-4">
                      <div className="flex flex-col items-start py-[25px] sm:py-5 border-gray-500_33_01 border-b border-solid flex-1">
                        <Heading size="md" as="p">
                          By Conditions
                        </Heading>
                        <CheckBox
                          name="Label   New "
                          label="New (21)"
                          id="LabelNew"
                          className="mt-[25px] gap-[7px] p-px text-black-900_01 text-left text-sm"
                        />
                        <CheckBox
                          name="Label   Like New"
                          label="Like New (2)"
                          id="LabelLikeNew"
                          className="mt-3.5 gap-[7px] p-px text-black-900_01 text-left text-sm"
                        />
                        <CheckBox
                          name="Label   Open Box"
                          label="Open Box (38)"
                          id="LabelOpenBox"
                          className="mt-[13px] mb-3 gap-[7px] text-black-900_01 text-left text-sm"
                        />
                      </div>
                      <Heading size="md" as="p" className="h-[14px] mt-6 !font-black">
                        
                      </Heading>
                    </div>
                  </div>
                </div>
                <div className="h-[300px] md:h-auto relative rounded-[15px]">
                  <Img
                    src="images/defaultNoData.png"
                    alt="addimg png"
                    className="h-[300px] w-full object-cover rounded-[15px]"
                  />
                  <div className="flex flex-col items-start w-[69%] left-[30.00px] top-[29.00px] m-auto absolute">
                    <Heading size="7xl" as="h4" className="!text-white-A700 !font-bold leading-7">
                      <span className="text-white-A700">OKODo&nbsp;</span>
                      <span className="text-white-A700 font-medium">
                        <>
                          hero 11+
                          <br />
                          5K wireless
                        </>
                      </span>
                    </Heading>
                    <Text size="s" as="p" className="mt-[34px] !text-gray-500 uppercase">
                      from
                    </Text>
                    <Text size="6xl" as="p" className="mt-[9px] !text-light_green-A700_01">
                      $169
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center md:self-stretch pb-2.5 gap-4 px-2.5 flex-1">
                <div className="flex flex-col self-stretch items-start justify-center pb-[53px] gap-[72px] md:gap-[54px] md:pb-5 sm:gap-9 border-blue_gray-100 border-b border-solid">
                  <Heading size="2xl" as="h6" className="uppercase">
                    Best seller in this category
                  </Heading>
                  <div className="flex md:flex-col w-[94%] md:w-full mb-1 ml-2.5 gap-10 md:ml-0">
                    <div className="flex items-start w-[35%] md:w-full gap-[3px]">
                      <Button className="h-[80px] mt-[105px] px-[13px] text-black-900_01 text-[6px] bg-blue_gray-50_06 min-w-[40px] rounded-md">
                        prev
                      </Button>
                      <div className="flex flex-col pt-4 gap-3 px-4 bg-gray-100_04 flex-1 rounded-[10px]">
                        <div className="flex justify-between items-start h-[186px] md:h-auto pb-2.5 pr-2.5 gap-5 bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat rounded">
                          <div className="w-[32%] mb-[134px] pt-[18px] pb-[5px] px-[9px] text-white-A700 text-left text-sm font-medium bg-green-700 rounded-[7px]">
                            $59.00
                          </div>
                          <Button className="h-[32px] w-[32px] mt-2.5 bg-white-A700 rounded-[16px]">
                            <Img src="images/defaultNoData.png" />
                          </Button>
                        </div>
                        <div className="flex flex-col pb-2.5 gap-3">
                          <div className="flex flex-col gap-[9px]">
                            <div className="flex flex-col items-start">
                              <Text as="p" className="!text-blue_gray-500 !font-manrope">
                                Extra Bass
                              </Text>
                              <Heading as="h6" className="!text-gray-900_07">
                                Sony Black Headphones
                              </Heading>
                            </div>
                            <div className="flex self-start items-center gap-[9px] py-[5px] flex-wrap">
                              <Heading
                                size="4xl"
                                as="h5"
                                className="!text-deep_orange-500_01 text-center !font-extrabold"
                              >
                                $100.00
                              </Heading>
                              <Heading as="h6" className="!text-gray-700_03 text-center line-through">
                                $2,119.00
                              </Heading>
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <div className="flex justify-center w-[31%] p-3 border-blue_gray-100_01 border border-solid bg-white-A700 rounded">
                              <Img src="images/defaultNoData.png" alt="cart" className="w-[21px] object-cover" />
                            </div>
                            <Button
                              rightIcon={
                                <Img src="images/defaultNoData.png" alt="arrow_right" className="w-[20px] h-[20px]" />
                              }
                              className="h-[44px] gap-2 px-6 sm:px-5 text-white-A700 font-manrope text-base font-semibold bg-gray-900_04 min-w-[142px] rounded"
                            >
                              Buy Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col md:self-stretch pt-4 gap-3 px-4 bg-gray-100_04 flex-1 rounded-[10px]">
                      <div className="flex justify-between items-start h-[186px] md:h-auto pb-2.5 pr-2.5 gap-5 bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat rounded">
                        <div className="w-[32%] mb-[134px] pt-[18px] pb-[5px] px-[9px] text-white-A700 text-left text-sm font-medium bg-green-700 rounded-[7px]">
                          $59.00
                        </div>
                        <Button className="h-[32px] w-[32px] mt-2.5 bg-white-A700 rounded-[16px]">
                          <Img src="images/defaultNoData.png" />
                        </Button>
                      </div>
                      <div className="flex flex-col pb-2.5 gap-2.5">
                        <div className="flex flex-col items-start">
                          <Text as="p" className="!text-blue_gray-500 !font-manrope">
                            Extra Bass
                          </Text>
                          <Heading as="h6" className="!text-gray-900_07">
                            Sony Black Headphones
                          </Heading>
                        </div>
                        <div className="flex self-start items-center gap-[9px] py-[5px] flex-wrap">
                          <Heading size="4xl" as="h5" className="!text-deep_orange-500_01 text-center !font-extrabold">
                            $100.00
                          </Heading>
                          <Heading as="h6" className="!text-gray-700_03 text-center line-through">
                            $2,119.00
                          </Heading>
                        </div>
                        <div className="flex gap-3">
                          <div className="flex justify-center w-[31%] p-3 border-blue_gray-100_01 border border-solid bg-white-A700 rounded">
                            <Img src="images/defaultNoData.png" alt="cart" className="w-[21px] object-cover" />
                          </div>
                          <Button
                            rightIcon={
                              <Img src="images/defaultNoData.png" alt="arrow_right" className="w-[20px] h-[20px]" />
                            }
                            className="h-[44px] gap-2 px-6 sm:px-5 text-white-A700 font-manrope text-base font-semibold bg-gray-900_04 min-w-[142px] rounded"
                          >
                            Buy Now
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col md:self-stretch pt-4 gap-3 px-4 bg-gray-100_04 flex-1 rounded-[10px]">
                      <div className="flex justify-between items-start h-[186px] md:h-auto pb-2.5 pr-2.5 gap-5 bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat rounded">
                        <div className="w-[32%] mb-[134px] pt-[18px] pb-[5px] px-[9px] text-white-A700 text-left text-sm font-medium bg-green-700 rounded-[7px]">
                          $59.00
                        </div>
                        <Button className="h-[32px] w-[32px] mt-2.5 bg-white-A700 rounded-[16px]">
                          <Img src="images/defaultNoData.png" />
                        </Button>
                      </div>
                      <div className="flex flex-col pb-2.5 gap-2.5">
                        <div className="flex flex-col items-start">
                          <Text as="p" className="!text-blue_gray-500 !font-manrope">
                            Extra Bass
                          </Text>
                          <Heading as="h6" className="!text-gray-900_07">
                            Sony Black Headphones
                          </Heading>
                        </div>
                        <div className="flex self-start items-center gap-[9px] py-[5px] flex-wrap">
                          <Heading size="4xl" as="h5" className="!text-deep_orange-500_01 text-center !font-extrabold">
                            $100.00
                          </Heading>
                          <Heading as="h6" className="!text-gray-700_03 text-center line-through">
                            $2,119.00
                          </Heading>
                        </div>
                        <div className="flex self-start gap-3">
                          <Button className="p-3 border-blue_gray-100_01 border border-solid bg-white-A700 rounded">
                            <Img src="images/defaultNoData.png" />
                          </Button>
                          <Button
                            rightIcon={
                              <Img src="images/defaultNoData.png" alt="arrow_right" className="w-[20px] h-[20px]" />
                            }
                            className="h-[44px] gap-2 px-6 sm:px-5 text-white-A700 font-manrope text-base font-semibold bg-gray-900_04 min-w-[142px] rounded"
                          >
                            Buy Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col self-start items-center w-[91%] md:w-full ml-1 md:ml-0">
                  <Heading size="md" as="p">
                    <span className="text-black-900_01">1 - 40&nbsp;</span>
                    <span className="text-gray-700_03 font-normal">of 120 results</span>
                  </Heading>
                  <div className="flex items-center ml-[89px] md:ml-0">
                    <Text as="p" className="!text-gray-700_03 z-[1]">
                      Show item
                    </Text>
                    <div className="flex gap-[13px] p-2.5 bg-blue_gray-50_07 flex-wrap rounded-[5px]">
                      <Heading size="s" as="p" className="self-end !font-bold">
                        24
                      </Heading>
                      <Heading size="s" as="p" className="self-end !text-gray-600_07 !font-bold">
                        48
                      </Heading>
                      <Heading size="s" as="p" className="self-end !text-gray-600_07 !font-bold">
                        72
                      </Heading>
                    </div>
                  </div>
                  <div className="flex sm:flex-col items-center md:self-stretch ml-[129px] md:ml-0 flex-1">
                    <Text as="p" className="!text-gray-700_03 z-[1]">
                      Show item
                    </Text>
                    <div className="flex justify-center items-center sm:self-stretch h-[35px] md:h-auto p-2 bg-blue_gray-50_07 bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat flex-1 rounded-[5px]">
                      <div className="flex">
                        <Heading size="s" as="p" className="self-start !text-gray-900_21">
                          Default
                        </Heading>
                      </div>
                    </div>
                    <Text as="p" className="ml-[45px] sm:ml-0 !text-gray-700_03 text-right">
                      View As
                    </Text>
                  </div>
                </div>
                <div className="justify-center w-[88%] gap-10 grid-cols-[repeat(auto-fill,_minmax(218px_,_1fr))] grid">
                  <div className="flex flex-col w-full pt-4 gap-3 px-4 bg-gray-100_04 rounded-[10px]">
                    <div className="flex justify-between items-start h-[186px] md:h-auto pb-2.5 pr-2.5 gap-5 bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat rounded">
                      <div className="flex flex-col items-start w-[32%] mb-[134px] p-[5px] bg-green-700 rounded-[7px]">
                        <Text size="xs" as="p" className="ml-1 md:ml-0 !text-white-A700 uppercase">
                          save
                        </Text>
                        <Text as="p" className="self-center !text-white-A700 !font-medium">
                          $59.00
                        </Text>
                      </div>
                      <Button className="h-[32px] w-[32px] mt-2.5 bg-white-A700 rounded-[16px]">
                        <Img src="images/defaultNoData.png" />
                      </Button>
                    </div>
                    <div className="flex flex-col pb-2.5 gap-2.5">
                      <div className="flex flex-col items-start">
                        <Text as="p" className="!text-blue_gray-500 !font-manrope">
                          Extra Bass
                        </Text>
                        <Heading as="h6" className="!text-gray-900_07">
                          Sony Black Headphones
                        </Heading>
                      </div>
                      <div className="flex self-start items-center gap-[9px] py-[5px] flex-wrap">
                        <Heading size="4xl" as="h5" className="!text-deep_orange-500_01 text-center !font-extrabold">
                          $100.00
                        </Heading>
                        <Heading as="h6" className="!text-gray-700_03 text-center line-through">
                          $2,119.00
                        </Heading>
                      </div>
                      <div className="flex self-start gap-3">
                        <Button className="p-3 border-blue_gray-100_01 border border-solid bg-white-A700 rounded">
                          <Img src="images/defaultNoData.png" />
                        </Button>
                        <Button
                          rightIcon={
                            <Img src="images/defaultNoData.png" alt="arrow_right" className="w-[20px] h-[20px]" />
                          }
                          className="h-[44px] gap-2 px-6 sm:px-5 text-white-A700 font-manrope text-base font-semibold bg-gray-900_04 min-w-[142px] rounded"
                        >
                          Buy Now
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full pt-4 gap-3 px-4 bg-gray-100_04 rounded-[10px]">
                    <div className="flex justify-between items-start h-[186px] md:h-auto pb-2.5 pr-2.5 gap-5 bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat rounded">
                      <div className="flex flex-col items-start w-[32%] mb-[134px] p-[5px] bg-green-700 rounded-[7px]">
                        <Text size="xs" as="p" className="ml-1 md:ml-0 !text-white-A700 uppercase">
                          save
                        </Text>
                        <Text as="p" className="self-center !text-white-A700 !font-medium">
                          $59.00
                        </Text>
                      </div>
                      <Button className="h-[32px] w-[32px] mt-2.5 bg-white-A700 rounded-[16px]">
                        <Img src="images/defaultNoData.png" />
                      </Button>
                    </div>
                    <div className="flex flex-col pb-2.5 gap-2.5">
                      <div className="flex flex-col items-start">
                        <Text as="p" className="!text-blue_gray-500 !font-manrope">
                          Extra Bass
                        </Text>
                        <Heading as="h6" className="!text-gray-900_07">
                          Sony Black Headphones
                        </Heading>
                      </div>
                      <div className="flex self-start items-center gap-[9px] py-[5px] flex-wrap">
                        <Heading size="4xl" as="h5" className="!text-deep_orange-500_01 text-center !font-extrabold">
                          $100.00
                        </Heading>
                        <Heading as="h6" className="!text-gray-700_03 text-center line-through">
                          $2,119.00
                        </Heading>
                      </div>
                      <div className="flex gap-3">
                        <div className="flex justify-center w-[31%] p-3 border-blue_gray-100_01 border border-solid bg-white-A700 rounded">
                          <Img src="images/defaultNoData.png" alt="cart" className="w-[21px] object-cover" />
                        </div>
                        <Button
                          rightIcon={
                            <Img src="images/defaultNoData.png" alt="arrow_right" className="w-[20px] h-[20px]" />
                          }
                          className="h-[44px] gap-2 px-6 sm:px-5 text-white-A700 font-manrope text-base font-semibold bg-gray-900_04 min-w-[142px] rounded"
                        >
                          Buy Now
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full pt-4 gap-3 px-4 bg-gray-100_04 rounded-[10px]">
                    <div className="flex justify-between items-start h-[186px] md:h-auto pb-2.5 pr-2.5 gap-5 bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat rounded">
                      <div className="flex flex-col items-start w-[32%] mb-[134px] p-[5px] bg-green-700 rounded-[7px]">
                        <Text size="xs" as="p" className="ml-1 md:ml-0 !text-white-A700 uppercase">
                          save
                        </Text>
                        <Text as="p" className="self-center !text-white-A700 !font-medium">
                          $59.00
                        </Text>
                      </div>
                      <Button className="h-[32px] w-[32px] mt-2.5 bg-white-A700 rounded-[16px]">
                        <Img src="images/defaultNoData.png" />
                      </Button>
                    </div>
                    <div className="flex flex-col pb-2.5 gap-2.5">
                      <div className="flex flex-col items-start">
                        <Text as="p" className="!text-blue_gray-500 !font-manrope">
                          Extra Bass
                        </Text>
                        <Heading as="h6" className="!text-gray-900_07">
                          Sony Black Headphones
                        </Heading>
                      </div>
                      <div className="flex self-start items-center gap-[9px] py-[5px] flex-wrap">
                        <Heading size="4xl" as="h5" className="!text-deep_orange-500_01 text-center !font-extrabold">
                          $100.00
                        </Heading>
                        <Heading as="h6" className="!text-gray-700_03 text-center line-through">
                          $2,119.00
                        </Heading>
                      </div>
                      <div className="flex self-start gap-3">
                        <Button className="p-3 border-blue_gray-100_01 border border-solid bg-white-A700 rounded">
                          <Img src="images/defaultNoData.png" />
                        </Button>
                        <Button
                          rightIcon={
                            <Img src="images/defaultNoData.png" alt="arrow_right" className="w-[20px] h-[20px]" />
                          }
                          className="h-[44px] gap-2 px-6 sm:px-5 text-white-A700 font-manrope text-base font-semibold bg-gray-900_04 min-w-[142px] rounded"
                        >
                          Buy Now
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full pt-4 gap-3 px-4 bg-gray-100_04 rounded-[10px]">
                    <div className="flex justify-between items-start h-[186px] md:h-auto pb-2.5 pr-2.5 gap-5 bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat rounded">
                      <div className="flex flex-col items-start w-[32%] mb-[134px] p-[5px] bg-green-700 rounded-[7px]">
                        <Text size="xs" as="p" className="ml-1 md:ml-0 !text-white-A700 uppercase">
                          save
                        </Text>
                        <Text as="p" className="self-center !text-white-A700 !font-medium">
                          $59.00
                        </Text>
                      </div>
                      <Button className="h-[32px] w-[32px] mt-2.5 bg-white-A700 rounded-[16px]">
                        <Img src="images/defaultNoData.png" />
                      </Button>
                    </div>
                    <div className="flex flex-col pb-2.5 gap-2.5">
                      <div className="flex flex-col items-start">
                        <Text as="p" className="!text-blue_gray-500 !font-manrope">
                          Extra Bass
                        </Text>
                        <Heading as="h6" className="!text-gray-900_07">
                          Sony Black Headphones
                        </Heading>
                      </div>
                      <div className="flex self-start items-center gap-[9px] py-[5px] flex-wrap">
                        <Heading size="4xl" as="h5" className="!text-deep_orange-500_01 text-center !font-extrabold">
                          $100.00
                        </Heading>
                        <Heading as="h6" className="!text-gray-700_03 text-center line-through">
                          $2,119.00
                        </Heading>
                      </div>
                      <div className="flex self-start gap-3">
                        <Button className="p-3 border-blue_gray-100_01 border border-solid bg-white-A700 rounded">
                          <Img src="images/defaultNoData.png" />
                        </Button>
                        <Button
                          rightIcon={
                            <Img src="images/defaultNoData.png" alt="arrow_right" className="w-[20px] h-[20px]" />
                          }
                          className="h-[44px] gap-2 px-6 sm:px-5 text-white-A700 font-manrope text-base font-semibold bg-gray-900_04 min-w-[142px] rounded"
                        >
                          Buy Now
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full pt-4 gap-3 px-4 bg-gray-100_04 rounded-[10px]">
                    <div className="flex justify-between items-start h-[186px] md:h-auto pb-2.5 pr-2.5 gap-5 bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat rounded">
                      <div className="flex flex-col items-start w-[32%] mb-[134px] p-[5px] bg-green-700 rounded-[7px]">
                        <Text size="xs" as="p" className="ml-1 md:ml-0 !text-white-A700 uppercase">
                          save
                        </Text>
                        <Text as="p" className="self-center !text-white-A700 !font-medium">
                          $59.00
                        </Text>
                      </div>
                      <Button className="h-[32px] w-[32px] mt-2.5 bg-white-A700 rounded-[16px]">
                        <Img src="images/defaultNoData.png" />
                      </Button>
                    </div>
                    <div className="flex flex-col pb-2.5 gap-2.5">
                      <div className="flex flex-col items-start">
                        <Text as="p" className="!text-blue_gray-500 !font-manrope">
                          Extra Bass
                        </Text>
                        <Heading as="h6" className="!text-gray-900_07">
                          Sony Black Headphones
                        </Heading>
                      </div>
                      <div className="flex self-start items-center gap-[9px] py-[5px] flex-wrap">
                        <Heading size="4xl" as="h5" className="!text-deep_orange-500_01 text-center !font-extrabold">
                          $100.00
                        </Heading>
                        <Heading as="h6" className="!text-gray-700_03 text-center line-through">
                          $2,119.00
                        </Heading>
                      </div>
                      <div className="flex gap-3">
                        <div className="flex justify-center w-[31%] p-3 border-blue_gray-100_01 border border-solid bg-white-A700 rounded">
                          <Img src="images/defaultNoData.png" alt="cart" className="w-[21px] object-cover" />
                        </div>
                        <Button
                          rightIcon={
                            <Img src="images/defaultNoData.png" alt="arrow_right" className="w-[20px] h-[20px]" />
                          }
                          className="h-[44px] gap-2 px-6 sm:px-5 text-white-A700 font-manrope text-base font-semibold bg-gray-900_04 min-w-[142px] rounded"
                        >
                          Buy Now
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full pt-4 gap-3 px-4 bg-gray-100_04 rounded-[10px]">
                    <div className="flex justify-between items-start h-[186px] md:h-auto pb-2.5 pr-2.5 gap-5 bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat rounded">
                      <div className="flex flex-col items-start w-[32%] mb-[134px] p-[5px] bg-green-700 rounded-[7px]">
                        <Text size="xs" as="p" className="ml-1 md:ml-0 !text-white-A700 uppercase">
                          save
                        </Text>
                        <Text as="p" className="self-center !text-white-A700 !font-medium">
                          $59.00
                        </Text>
                      </div>
                      <Button className="h-[32px] w-[32px] mt-2.5 bg-white-A700 rounded-[16px]">
                        <Img src="images/defaultNoData.png" />
                      </Button>
                    </div>
                    <div className="flex flex-col pb-2.5 gap-2.5">
                      <div className="flex flex-col items-start">
                        <Text as="p" className="!text-blue_gray-500 !font-manrope">
                          Extra Bass
                        </Text>
                        <Heading as="h6" className="!text-gray-900_07">
                          Sony Black Headphones
                        </Heading>
                      </div>
                      <div className="flex self-start items-center gap-[9px] py-[5px] flex-wrap">
                        <Heading size="4xl" as="h5" className="!text-deep_orange-500_01 text-center !font-extrabold">
                          $100.00
                        </Heading>
                        <Heading as="h6" className="!text-gray-700_03 text-center line-through">
                          $2,119.00
                        </Heading>
                      </div>
                      <div className="flex self-start gap-3">
                        <Button className="p-3 border-blue_gray-100_01 border border-solid bg-white-A700 rounded">
                          <Img src="images/defaultNoData.png" />
                        </Button>
                        <Button
                          rightIcon={
                            <Img src="images/defaultNoData.png" alt="arrow_right" className="w-[20px] h-[20px]" />
                          }
                          className="h-[44px] gap-2 px-6 sm:px-5 text-white-A700 font-manrope text-base font-semibold bg-gray-900_04 min-w-[142px] rounded"
                        >
                          Buy Now
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full pt-4 gap-3 px-4 bg-gray-100_04 rounded-[10px]">
                    <div className="flex justify-between items-start h-[186px] md:h-auto pb-2.5 pr-2.5 gap-5 bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat rounded">
                      <div className="flex flex-col items-start w-[32%] mb-[134px] p-[5px] bg-green-700 rounded-[7px]">
                        <Text size="xs" as="p" className="ml-1 md:ml-0 !text-white-A700 uppercase">
                          save
                        </Text>
                        <Text as="p" className="self-center !text-white-A700 !font-medium">
                          $59.00
                        </Text>
                      </div>
                      <Button className="h-[32px] w-[32px] mt-2.5 bg-white-A700 rounded-[16px]">
                        <Img src="images/defaultNoData.png" />
                      </Button>
                    </div>
                    <div className="flex flex-col pb-2.5 gap-3">
                      <div className="flex flex-col gap-[9px]">
                        <div className="flex flex-col items-start">
                          <Text as="p" className="!text-blue_gray-500 !font-manrope">
                            Extra Bass
                          </Text>
                          <Heading as="h6" className="!text-gray-900_07">
                            Sony Black Headphones
                          </Heading>
                        </div>
                        <div className="flex self-start items-center gap-[9px] py-[5px] flex-wrap">
                          <Heading size="4xl" as="h5" className="!text-deep_orange-500_01 text-center !font-extrabold">
                            $100.00
                          </Heading>
                          <Heading as="h6" className="!text-gray-700_03 text-center line-through">
                            $2,119.00
                          </Heading>
                        </div>
                      </div>
                      <div className="flex self-start gap-3">
                        <Button className="p-3 border-blue_gray-100_01 border border-solid bg-white-A700 rounded">
                          <Img src="images/defaultNoData.png" />
                        </Button>
                        <Button
                          rightIcon={
                            <Img src="images/defaultNoData.png" alt="arrow_right" className="w-[20px] h-[20px]" />
                          }
                          className="h-[44px] gap-2 px-6 sm:px-5 text-white-A700 font-manrope text-base font-semibold bg-gray-900_04 min-w-[142px] rounded"
                        >
                          Buy Now
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full pt-4 gap-3 px-4 bg-gray-100_04 rounded-[10px]">
                    <div className="flex justify-between items-start h-[186px] md:h-auto pb-2.5 pr-2.5 gap-5 bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat rounded">
                      <div className="flex flex-col items-start w-[32%] mb-[134px] p-[5px] bg-green-700 rounded-[7px]">
                        <Text size="xs" as="p" className="ml-1 md:ml-0 !text-white-A700 uppercase">
                          save
                        </Text>
                        <Text as="p" className="self-center !text-white-A700 !font-medium">
                          $59.00
                        </Text>
                      </div>
                      <Button className="h-[32px] w-[32px] mt-2.5 bg-white-A700 rounded-[16px]">
                        <Img src="images/defaultNoData.png" />
                      </Button>
                    </div>
                    <div className="flex flex-col pb-2.5 gap-3">
                      <div className="flex flex-col gap-[9px]">
                        <div className="flex flex-col items-start">
                          <Text as="p" className="!text-blue_gray-500 !font-manrope">
                            Extra Bass
                          </Text>
                          <Heading as="h6" className="!text-gray-900_07">
                            Sony Black Headphones
                          </Heading>
                        </div>
                        <div className="flex self-start items-center gap-[9px] py-[5px] flex-wrap">
                          <Heading size="4xl" as="h5" className="!text-deep_orange-500_01 text-center !font-extrabold">
                            $100.00
                          </Heading>
                          <Heading as="h6" className="!text-gray-700_03 text-center line-through">
                            $2,119.00
                          </Heading>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="flex justify-center w-[31%] p-3 border-blue_gray-100_01 border border-solid bg-white-A700 rounded">
                          <Img src="images/defaultNoData.png" alt="cart" className="w-[21px] object-cover" />
                        </div>
                        <Button
                          rightIcon={
                            <Img src="images/defaultNoData.png" alt="arrow_right" className="w-[20px] h-[20px]" />
                          }
                          className="h-[44px] gap-2 px-6 sm:px-5 text-white-A700 font-manrope text-base font-semibold bg-gray-900_04 min-w-[142px] rounded"
                        >
                          Buy Now
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full pt-4 gap-3 px-4 bg-gray-100_04 rounded-[10px]">
                    <div className="flex justify-between items-start h-[186px] md:h-auto pb-2.5 pr-2.5 gap-5 bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat rounded">
                      <div className="flex flex-col items-start w-[32%] mb-[134px] p-[5px] bg-green-700 rounded-[7px]">
                        <Text size="xs" as="p" className="ml-1 md:ml-0 !text-white-A700 uppercase">
                          save
                        </Text>
                        <Text as="p" className="self-center !text-white-A700 !font-medium">
                          $59.00
                        </Text>
                      </div>
                      <Button className="h-[32px] w-[32px] mt-2.5 bg-white-A700 rounded-[16px]">
                        <Img src="images/defaultNoData.png" />
                      </Button>
                    </div>
                    <div className="flex flex-col pb-2.5 gap-3">
                      <div className="flex flex-col gap-[9px]">
                        <div className="flex flex-col items-start">
                          <Text as="p" className="!text-blue_gray-500 !font-manrope">
                            Extra Bass
                          </Text>
                          <Heading as="h6" className="!text-gray-900_07">
                            Sony Black Headphones
                          </Heading>
                        </div>
                        <div className="flex self-start items-center gap-[9px] py-[5px] flex-wrap">
                          <Heading size="4xl" as="h5" className="!text-deep_orange-500_01 text-center !font-extrabold">
                            $100.00
                          </Heading>
                          <Heading as="h6" className="!text-gray-700_03 text-center line-through">
                            $2,119.00
                          </Heading>
                        </div>
                      </div>
                      <div className="flex self-start gap-3">
                        <Button className="p-3 border-blue_gray-100_01 border border-solid bg-white-A700 rounded">
                          <Img src="images/defaultNoData.png" />
                        </Button>
                        <Button
                          rightIcon={
                            <Img src="images/defaultNoData.png" alt="arrow_right" className="w-[20px] h-[20px]" />
                          }
                          className="h-[44px] gap-2 px-6 sm:px-5 text-white-A700 font-manrope text-base font-semibold bg-gray-900_04 min-w-[142px] rounded"
                        >
                          Buy Now
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full pt-4 gap-3 px-4 bg-gray-100_04 rounded-[10px]">
                    <div className="flex justify-between items-start h-[186px] md:h-auto pb-2.5 pr-2.5 gap-5 bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat rounded">
                      <div className="flex flex-col items-start w-[32%] mb-[134px] p-[5px] bg-green-700 rounded-[7px]">
                        <Text size="xs" as="p" className="ml-1 md:ml-0 !text-white-A700 uppercase">
                          save
                        </Text>
                        <Text as="p" className="self-center !text-white-A700 !font-medium">
                          $59.00
                        </Text>
                      </div>
                      <Button className="h-[32px] w-[32px] mt-2.5 bg-white-A700 rounded-[16px]">
                        <Img src="images/defaultNoData.png" />
                      </Button>
                    </div>
                    <div className="flex flex-col pb-2.5 gap-2.5">
                      <div className="flex flex-col items-start">
                        <Text as="p" className="!text-blue_gray-500 !font-manrope">
                          Extra Bass
                        </Text>
                        <Heading as="h6" className="!text-gray-900_07">
                          Sony Black Headphones
                        </Heading>
                      </div>
                      <div className="flex self-start items-center gap-[9px] py-[5px] flex-wrap">
                        <Heading size="4xl" as="h5" className="!text-deep_orange-500_01 text-center !font-extrabold">
                          $100.00
                        </Heading>
                        <Heading as="h6" className="!text-gray-700_03 text-center line-through">
                          $2,119.00
                        </Heading>
                      </div>
                      <div className="flex gap-3">
                        <div className="flex justify-center w-[31%] p-3 border-blue_gray-100_01 border border-solid bg-white-A700 rounded">
                          <Img src="images/defaultNoData.png" alt="cart" className="w-[21px] object-cover" />
                        </div>
                        <Button
                          rightIcon={
                            <Img src="images/defaultNoData.png" alt="arrow_right" className="w-[20px] h-[20px]" />
                          }
                          className="h-[44px] gap-2 px-6 sm:px-5 text-white-A700 font-manrope text-base font-semibold bg-gray-900_04 min-w-[142px] rounded"
                        >
                          Buy Now
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full pt-4 gap-3 px-4 bg-gray-100_04 rounded-[10px]">
                    <div className="flex justify-between items-start h-[186px] md:h-auto pb-2.5 pr-2.5 gap-5 bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat rounded">
                      <div className="flex flex-col items-start w-[32%] mb-[134px] p-[5px] bg-green-700 rounded-[7px]">
                        <Text size="xs" as="p" className="ml-1 md:ml-0 !text-white-A700 uppercase">
                          save
                        </Text>
                        <Text as="p" className="self-center !text-white-A700 !font-medium">
                          $59.00
                        </Text>
                      </div>
                      <Button className="h-[32px] w-[32px] mt-2.5 bg-white-A700 rounded-[16px]">
                        <Img src="images/defaultNoData.png" />
                      </Button>
                    </div>
                    <div className="flex flex-col pb-2.5 gap-2.5">
                      <div className="flex flex-col items-start">
                        <Text as="p" className="!text-blue_gray-500 !font-manrope">
                          Extra Bass
                        </Text>
                        <Heading as="h6" className="!text-gray-900_07">
                          Sony Black Headphones
                        </Heading>
                      </div>
                      <div className="flex self-start items-center gap-[9px] py-[5px] flex-wrap">
                        <Heading size="4xl" as="h5" className="!text-deep_orange-500_01 text-center !font-extrabold">
                          $100.00
                        </Heading>
                        <Heading as="h6" className="!text-gray-700_03 text-center line-through">
                          $2,119.00
                        </Heading>
                      </div>
                      <div className="flex gap-3">
                        <div className="flex justify-center w-[31%] p-3 border-blue_gray-100_01 border border-solid bg-white-A700 rounded">
                          <Img src="images/defaultNoData.png" alt="cart" className="w-[21px] object-cover" />
                        </div>
                        <Button
                          rightIcon={
                            <Img src="images/defaultNoData.png" alt="arrow_right" className="w-[20px] h-[20px]" />
                          }
                          className="h-[44px] gap-2 px-6 sm:px-5 text-white-A700 font-manrope text-base font-semibold bg-gray-900_04 min-w-[142px] rounded"
                        >
                          Buy Now
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full pt-4 gap-3 px-4 bg-gray-100_04 rounded-[10px]">
                    <div className="flex justify-between items-start h-[186px] md:h-auto pb-2.5 pr-2.5 gap-5 bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat rounded">
                      <div className="flex flex-col items-start w-[32%] mb-[134px] p-[5px] bg-green-700 rounded-[7px]">
                        <Text size="xs" as="p" className="ml-1 md:ml-0 !text-white-A700 uppercase">
                          save
                        </Text>
                        <Text as="p" className="self-center !text-white-A700 !font-medium">
                          $59.00
                        </Text>
                      </div>
                      <Button className="h-[32px] w-[32px] mt-2.5 bg-white-A700 rounded-[16px]">
                        <Img src="images/defaultNoData.png" />
                      </Button>
                    </div>
                    <div className="flex flex-col pb-2.5 gap-2.5">
                      <div className="flex flex-col items-start">
                        <Text as="p" className="!text-blue_gray-500 !font-manrope">
                          Extra Bass
                        </Text>
                        <Heading as="h6" className="!text-gray-900_07">
                          Sony Black Headphones
                        </Heading>
                      </div>
                      <div className="flex self-start items-center gap-[9px] py-[5px] flex-wrap">
                        <Heading size="4xl" as="h5" className="!text-deep_orange-500_01 text-center !font-extrabold">
                          $100.00
                        </Heading>
                        <Heading as="h6" className="!text-gray-700_03 text-center line-through">
                          $2,119.00
                        </Heading>
                      </div>
                      <div className="flex self-start gap-3">
                        <Button className="p-3 border-blue_gray-100_01 border border-solid bg-white-A700 rounded">
                          <Img src="images/defaultNoData.png" />
                        </Button>
                        <Button
                          rightIcon={
                            <Img src="images/defaultNoData.png" alt="arrow_right" className="w-[20px] h-[20px]" />
                          }
                          className="h-[44px] gap-2 px-6 sm:px-5 text-white-A700 font-manrope text-base font-semibold bg-gray-900_04 min-w-[142px] rounded"
                        >
                          Buy Now
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full pt-4 gap-3 px-4 bg-gray-100_04 rounded-[10px]">
                    <div className="flex justify-between items-start h-[186px] md:h-auto pb-2.5 pr-2.5 gap-5 bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat rounded">
                      <div className="flex flex-col items-start w-[32%] mb-[134px] p-[5px] bg-green-700 rounded-[7px]">
                        <Text size="xs" as="p" className="ml-1 md:ml-0 !text-white-A700 uppercase">
                          save
                        </Text>
                        <Text as="p" className="self-center !text-white-A700 !font-medium">
                          $59.00
                        </Text>
                      </div>
                      <Button className="h-[32px] w-[32px] mt-2.5 bg-white-A700 rounded-[16px]">
                        <Img src="images/defaultNoData.png" />
                      </Button>
                    </div>
                    <div className="flex flex-col pb-2.5 gap-2.5">
                      <div className="flex flex-col items-start">
                        <Text as="p" className="!text-blue_gray-500 !font-manrope">
                          Extra Bass
                        </Text>
                        <Heading as="h6" className="!text-gray-900_07">
                          Sony Black Headphones
                        </Heading>
                      </div>
                      <div className="flex self-start items-center gap-[9px] py-[5px] flex-wrap">
                        <Heading size="4xl" as="h5" className="!text-deep_orange-500_01 text-center !font-extrabold">
                          $100.00
                        </Heading>
                        <Heading as="h6" className="!text-gray-700_03 text-center line-through">
                          $2,119.00
                        </Heading>
                      </div>
                      <div className="flex self-start gap-3">
                        <Button className="p-3 border-blue_gray-100_01 border border-solid bg-white-A700 rounded">
                          <Img src="images/defaultNoData.png" />
                        </Button>
                        <Button
                          rightIcon={
                            <Img src="images/defaultNoData.png" alt="arrow_right" className="w-[20px] h-[20px]" />
                          }
                          className="h-[44px] gap-2 px-6 sm:px-5 text-white-A700 font-manrope text-base font-semibold bg-gray-900_04 min-w-[142px] rounded"
                        >
                          Buy Now
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full pt-4 gap-3 px-4 bg-gray-100_04 rounded-[10px]">
                    <div className="flex justify-between items-start h-[186px] md:h-auto pb-2.5 pr-2.5 gap-5 bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat rounded">
                      <div className="flex flex-col items-start w-[32%] mb-[134px] p-[5px] bg-green-700 rounded-[7px]">
                        <Text size="xs" as="p" className="ml-1 md:ml-0 !text-white-A700 uppercase">
                          save
                        </Text>
                        <Text as="p" className="self-center !text-white-A700 !font-medium">
                          $59.00
                        </Text>
                      </div>
                      <Button className="h-[32px] w-[32px] mt-2.5 bg-white-A700 rounded-[16px]">
                        <Img src="images/defaultNoData.png" />
                      </Button>
                    </div>
                    <div className="flex flex-col pb-2.5 gap-2.5">
                      <div className="flex flex-col items-start">
                        <Text as="p" className="!text-blue_gray-500 !font-manrope">
                          Extra Bass
                        </Text>
                        <Heading as="h6" className="!text-gray-900_07">
                          Sony Black Headphones
                        </Heading>
                      </div>
                      <div className="flex self-start items-center gap-[9px] py-[5px] flex-wrap">
                        <Heading size="4xl" as="h5" className="!text-deep_orange-500_01 text-center !font-extrabold">
                          $100.00
                        </Heading>
                        <Heading as="h6" className="!text-gray-700_03 text-center line-through">
                          $2,119.00
                        </Heading>
                      </div>
                      <div className="flex self-start gap-3">
                        <Button className="p-3 border-blue_gray-100_01 border border-solid bg-white-A700 rounded">
                          <Img src="images/defaultNoData.png" />
                        </Button>
                        <Button
                          rightIcon={
                            <Img src="images/defaultNoData.png" alt="arrow_right" className="w-[20px] h-[20px]" />
                          }
                          className="h-[44px] gap-2 px-6 sm:px-5 text-white-A700 font-manrope text-base font-semibold bg-gray-900_04 min-w-[142px] rounded"
                        >
                          Buy Now
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full pt-4 gap-3 px-4 bg-gray-100_04 rounded-[10px]">
                    <div className="flex justify-between items-start h-[186px] md:h-auto pb-2.5 pr-2.5 gap-5 bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat rounded">
                      <div className="flex flex-col items-start w-[32%] mb-[134px] p-[5px] bg-green-700 rounded-[7px]">
                        <Text size="xs" as="p" className="ml-1 md:ml-0 !text-white-A700 uppercase">
                          save
                        </Text>
                        <Text as="p" className="self-center !text-white-A700 !font-medium">
                          $59.00
                        </Text>
                      </div>
                      <Button className="h-[32px] w-[32px] mt-2.5 bg-white-A700 rounded-[16px]">
                        <Img src="images/defaultNoData.png" />
                      </Button>
                    </div>
                    <div className="flex flex-col pb-2.5 gap-2.5">
                      <div className="flex flex-col items-start">
                        <Text as="p" className="!text-blue_gray-500 !font-manrope">
                          Extra Bass
                        </Text>
                        <Heading as="h6" className="!text-gray-900_07">
                          Sony Black Headphones
                        </Heading>
                      </div>
                      <div className="flex self-start items-center gap-[9px] py-[5px] flex-wrap">
                        <Heading size="4xl" as="h5" className="!text-deep_orange-500_01 text-center !font-extrabold">
                          $100.00
                        </Heading>
                        <Heading as="h6" className="!text-gray-700_03 text-center line-through">
                          $2,119.00
                        </Heading>
                      </div>
                      <div className="flex self-start gap-3">
                        <Button className="p-3 border-blue_gray-100_01 border border-solid bg-white-A700 rounded">
                          <Img src="images/defaultNoData.png" />
                        </Button>
                        <Button
                          rightIcon={
                            <Img src="images/defaultNoData.png" alt="arrow_right" className="w-[20px] h-[20px]" />
                          }
                          className="h-[44px] gap-2 px-6 sm:px-5 text-white-A700 font-manrope text-base font-semibold bg-gray-900_04 min-w-[142px] rounded"
                        >
                          Buy Now
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between w-full gap-5">
                    <Text
                      as="p"
                      className="flex justify-center items-center h-[35px] px-0.5 py-2.5 !text-white-A700 text-center border-green-700 border border-solid bg-green-700 rounded-[5px]"
                    >
                      1
                    </Text>
                    <Text
                      as="p"
                      className="flex justify-center items-center h-[35px] px-px py-2.5 !text-gray-700_03 text-center border-gray-300_10 border border-solid bg-white-A700 rounded-[5px]"
                    >
                      2
                    </Text>
                    <Text
                      as="p"
                      className="flex justify-center items-center h-[35px] px-px py-2.5 !text-gray-700_03 text-center border-gray-300_10 border border-solid bg-white-A700 rounded-[5px]"
                    >
                      3
                    </Text>
                    <Text
                      as="p"
                      className="flex justify-center items-center h-[35px] px-px py-2.5 !text-gray-700_03 text-center border-gray-300_10 border border-solid bg-white-A700 rounded-[5px]"
                    >
                      4
                    </Text>
                    <div className="flex flex-col py-[5px] border-gray-300_10 border border-solid bg-white-A700 rounded-[5px]">
                      <Text as="p" className="mt-[9px] !text-gray-700_03 text-center">
                        ...
                      </Text>
                    </div>
                    <div className="flex flex-col py-2.5 border-gray-300_10 border border-solid bg-white-A700 rounded-md">
                      <Text as="p" className="!text-gray-700_03 text-center">
                        20
                      </Text>
                    </div>
                    <div className="flex justify-center items-center w-[16%]">
                      <div className="flex p-px border-gray-300_10 border border-solid bg-white-A700 flex-1 rounded-md">
                        <Text as="p" className="mt-2.5 mb-[9px] !text-gray-700_03 text-center">
                          Next{" "}
                        </Text>
                      </div>
                      <Heading
                        size="md"
                        as="p"
                        className="h-[14px] ml-[-11px] !text-gray-700_03 text-center !font-black relative"
                      >
                        
                      </Heading>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col gap-[37px]">
              <div className="h-[180px] w-full md:h-auto relative rounded-[10px]">
                <div className="flex flex-col items-start w-[29%] mr-[71px] gap-[7px] md:mr-0">
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
                <Img
                  src="images/defaultNoData.png"
                  alt="banner2 png"
                  className="h-[180px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[10px]"
                />
              </div>
              <div className="h-[180px] w-full md:h-auto relative rounded-[10px]">
                <div className="flex justify-between items-start w-[56%] mt-8 ml-10 gap-5 md:ml-0">
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
                <div className="h-[180px] w-full md:h-auto left-0 bottom-0 right-0 top-0 m-auto absolute rounded-[10px]">
                  <Img
                    src="images/defaultNoData.png"
                    alt="banner3 png"
                    className="h-[180px] w-full object-cover rounded-[10px]"
                  />
                  <div className="h-[45px] w-[46%] bottom-[28.70px] left-[6%] m-auto absolute">
                    <Input
                      name="Group 98"
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
              <div className="flex flex-col items-start w-[22%] md:w-full mt-[31px] ml-[129px] gap-[18px] md:ml-0">
                <Heading size="4xl" as="h5" className="!text-gray-900_09 !font-plusjakartasans">
                  Useful Information
                </Heading>
                <Text size="xl" as="p" className="w-[66%] md:w-full !text-gray-900_09 !font-plusjakartasans leading-10">
                  <>
                    Safety Tip
                    <br />
                    Ads Posting Rule
                  </>
                </Text>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
