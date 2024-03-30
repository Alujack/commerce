import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Text, Heading, Button, Img, Input } from "../../components";

export default function HomePageOnePage() {
  const [searchBarValue65, setSearchBarValue65] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Techness-Ecommerce</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col w-full pt-5 gap-3.5 bg-white-A700">
        <header className="p-2 border border-solid deep_purple_700_pink_400_01_border bg-white-A700 rounded-[10px]">
          <div className="flex md:flex-col justify-between items-center w-full mt-2 gap-5 mx-auto max-w-[1282px]">
            <div className="flex flex-col items-start mt-1.5">
              <div className="flex items-center gap-[5px] py-2">
                <Img src="images/defaultNoData.png" alt="emotion 1" className="w-[32px] object-cover" />
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
              <div className="flex ml-[19px] px-2 md:ml-0">
                <div className="flex items-center gap-2">
                  <Img src="images/defaultNoData.png" alt="linkedin" className="object-cover" />
                  <Text as="p" className="!text-blue_gray-900_01 tracking-[-0.08px]">
                    Cambodia
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[76%] md:w-full gap-2">
              <div className="flex md:flex-col gap-[47px]">
                <Input
                  name="Text input"
                  placeholder={`DJI phantom`}
                  value={searchBarValue65}
                  onChange={(e: string) => setSearchBarValue65(e)}
                  suffix={
                    searchBarValue65?.length > 0 ? (
                      <CloseSVG onClick={() => setSearchBarValue65("")} height={24} width={24} fillColor="#b0b9beff" />
                    ) : (
                      <Img src="images/defaultNoData.png" alt="search" className="w-[24px] h-[24px] cursor-pointer" />
                    )
                  }
                  className="h-[40px] gap-[35px] px-2 text-blue_gray-900_01 tracking-[-0.08px] text-sm border-gray-300_06 border border-solid bg-white-A700 flex-grow rounded-[15px]"
                />
                <Button className="h-[40px] px-[15px] text-blue_gray-900_01 tracking-[-0.08px] text-sm border-gray-300_06 border border-solid bg-white-A700 min-w-[77px] rounded-md">
                  Sign In
                </Button>
              </div>
              <div className="flex md:flex-col self-start items-center gap-12">
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
                <ul className="flex gap-12">
                  <li>
                    <div className="flex p-2 rounded-md">
                      <div className="flex items-center gap-2">
                        <Img src="images/defaultNoData.png" alt="Vector" className="object-cover" />
                        <Heading size="xl" as="h6" className="!text-blue_gray-900_01 tracking-[-0.10px]">
                          Orders
                        </Heading>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex p-2 rounded-md">
                      <div className="flex items-center gap-2">
                        <Img src="images/defaultNoData.png" alt="favorite" className="w-[24px] object-cover" />
                        <Heading
                          size="xl"
                          as="h6"
                          className="self-start mt-0.5 !text-blue_gray-900_01 tracking-[-0.10px]"
                        >
                          Favorites
                        </Heading>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex p-2 rounded-md">
                      <div className="flex items-center gap-2">
                        <Img src="images/defaultNoData.png" alt="cart" className="object-cover" />
                        <Heading size="xl" as="h6" className="!text-blue_gray-900_01 tracking-[-0.10px]">
                          Cart
                        </Heading>
                      </div>
                    </div>
                  </li>
                </ul>
                <a href="#" className="px-2 py-0.5 rounded">
                  <Heading size="xl" as="h6" className="!text-blue_gray-900_01 tracking-[-0.10px] text-center">
                    Become a seller
                  </Heading>
                </a>
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-col w-full gap-[13px] mx-auto md:p-5 max-w-[1330px]">
          <div className="flex md:flex-col items-center gap-9">
            <div className="flex flex-col items-start md:self-stretch p-2.5 bg-white-A700 flex-1 rounded-[10px]">
              <div className="flex ml-[34px] p-[5px] md:ml-0">
                <Heading size="4xl" as="h1" className="!text-red-600 uppercase">
                  Category
                </Heading>
              </div>
              <div className="flex flex-col self-center items-start justify-center mb-3.5 gap-[18px]">
                <Heading size="s" as="h2" className="capitalize">
                  Clearance
                </Heading>
                <Heading size="s" as="h3" className="capitalize">
                  Accessories
                </Heading>
                <Heading size="s" as="h4" className="capitalize">
                  Home & Lifestyle
                </Heading>
                <Heading size="s" as="h5" className="capitalize">
                  Health & Beauty
                </Heading>
                <Heading size="s" as="h6" className="capitalize">
                  Groceries & Pet
                </Heading>
                <Heading size="s" as="p" className="capitalize">
                  Baby’s & Toys
                </Heading>
                <Heading size="s" as="p" className="capitalize">
                  Networking
                </Heading>
                <Heading size="s" as="p" className="capitalize">
                  Sport & Outdoor
                </Heading>
                <Heading size="s" as="p" className="capitalize">
                  Medicine
                </Heading>
                <Heading size="s" as="p" className="capitalize">
                  Electronic{" "}
                </Heading>
                <Heading size="s" as="p" className="capitalize">
                  Man’s Fashion
                </Heading>
                <Heading size="s" as="p" className="capitalize">
                  Woman’s fashion
                </Heading>
              </div>
            </div>
            <div className="flex flex-col w-[50%] md:w-full gap-[5px]">
              <div className="rounded-[10px]">
                <div className="flex flex-col items-start h-[310px] md:h-auto gap-[45px] p-8 sm:p-5 bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat rounded-[10px]">
                  <div className="flex flex-col items-start w-[44%] md:w-full ml-[7px] md:ml-0">
                    <Heading size="10xl" as="h3" className="ml-1.5 md:ml-0 !text-white-A700 leading-9">
                      <span className="text-white-A700">
                        <>
                          Noise Cancelling
                          <br />
                        </>
                      </span>
                      <span className="text-white-A700 font-light">Headphone</span>
                    </Heading>
                    <Text size="s" as="p" className="mt-[17px] ml-[23px] md:ml-0 !text-white-A700 capitalize">
                      Boso Over-Ear Headphone
                    </Text>
                    <div className="flex flex-col items-start mt-1 gap-1.5">
                      <Text size="s" as="p" className="!text-white-A700 capitalize">
                        Wifi, Voice Assistant,
                      </Text>
                      <Text size="s" as="p" className="!text-white-A700 capitalize">
                        Low latency game mde
                      </Text>
                    </div>
                  </div>
                  <Button className="h-[34px] mb-[27px] ml-[7px] px-[15px] md:ml-0 text-black-900_01 uppercase text-xs font-medium bg-white-A700 min-w-[89px] rounded-[10px]">
                    buy now
                  </Button>
                </div>
              </div>
              <div className="flex md:flex-col gap-[19px]">
                <div className="flex flex-col items-start justify-center h-[120px] w-full md:h-auto gap-9 p-[15px] bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat">
                  <Text size="xl" as="p" className="w-[37%] md:w-full mt-1 ml-1 md:ml-0 !font-medium leading-[18px]">
                    <span className="text-black-900_01">
                      <>
                        Sono Playgo 5<br />
                        from&nbsp;
                      </>
                    </span>
                    <span className="text-green-700">$569</span>
                  </Text>
                  <Text size="s" as="p" className="ml-1 md:ml-0 uppercase underline">
                    Discover now
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-center h-[120px] w-full md:h-auto gap-[29px] p-[19px] bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat rounded-[10px]">
                  <Text size="xl" as="p" className="w-[46%] md:w-full !text-white-A700 !font-medium leading-[18px]">
                    <span className="text-white-A700">
                      <>
                        Logitek Bluetooth
                        <br />
                      </>
                    </span>
                    <span className="text-amber_500">Keyboard</span>
                  </Text>
                  <Text size="s" as="p" className="mb-1 !text-white-A700">
                    Best for all device
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:self-stretch gap-[17px] flex-1">
              <div className="rounded-[10px]">
                <div className="flex flex-col items-start justify-center h-[215px] md:h-auto p-[23px] sm:p-5 bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat rounded-[10px]">
                  <Heading size="6xl" as="h5" className="w-[43%] md:w-full !text-white-A700 uppercase leading-[27px]">
                    <span className="text-white-A700">
                      <>
                        OKODo
                        <br />
                      </>
                    </span>
                    <span className="text-white-A700 font-normal">
                      <>
                        hero 11+
                        <br />
                        black
                      </>
                    </span>
                  </Heading>
                  <Text size="xs" as="p" className="mt-9 !text-gray-500 uppercase">
                    from
                  </Text>
                  <Text size="5xl" as="p" className="mt-0.5 mb-1 !text-green-700 !font-normal">
                    $169
                  </Text>
                </div>
              </div>
              <div className="rounded-[10px]">
                <div className="flex flex-col items-end h-[215px] md:h-auto p-[18px] bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat rounded-[10px]">
                  <Text size="xs" as="p" className="mt-2 mr-[78px] md:mr-0 uppercase">
                    xomia
                  </Text>
                  <Heading size="3xl" as="h6" className="w-[41%] md:w-full mt-[9px] capitalize leading-[22px]">
                    <>
                      Sport Water
                      <br />
                      Resistance
                      <br />
                      Watch
                    </>
                  </Heading>
                  <Button className="h-[32px] mt-[30px] mb-[17px] mr-[17px] px-[15px] md:mr-0 text-white-A700 uppercase text-[11px] font-medium bg-blue_gray-900 min-w-[92px] rounded-[10px]">
                    Shop Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col items-center gap-[29px]">
            <div className="flex flex-col items-center w-full gap-[38px] p-[21px] sm:p-5 bg-white-A700 rounded-[10px]">
              <div className="flex justify-between items-start w-[93%] md:w-full gap-5">
                <Heading size="2xl" as="h2" className="uppercase">
                  featured brands
                </Heading>
                <Button className="h-[25px] mb-[5px] px-3.5 text-black-900_01 text-[11px] bg-blue_gray-50 min-w-[70px] rounded-[12px]">
                  View All
                </Button>
              </div>
              <div className="flex sm:flex-col items-start w-[88%] md:w-full">
                <Img src="images/defaultNoData.png" alt="Link   logo4 png" className="w-[24%] sm:w-full object-cover" />
                <Img
                  src="images/defaultNoData.png"
                  alt="Link   logo5 png"
                  className="w-[20%] sm:w-full ml-7 sm:ml-0 object-cover"
                />
                <Img
                  src="images/defaultNoData.png"
                  alt="Link   logo1 png"
                  className="w-[18%] sm:w-full ml-10 sm:ml-0 object-cover"
                />
                <Img
                  src="images/defaultNoData.png"
                  alt="Link   logo2 png"
                  className="w-[23%] sm:w-full ml-[35px] sm:ml-0 object-cover"
                />
                <Img
                  src="images/defaultNoData.png"
                  alt="Link   logo3 png"
                  className="w-[15%] sm:w-full mt-[3px] ml-[42px] sm:ml-0 object-cover"
                />
              </div>
              <div className="flex sm:flex-col items-start w-[87%] md:w-full mb-2">
                <Img
                  src="images/defaultNoData.png"
                  alt="Link   logo6 png"
                  className="w-[24%] sm:w-full mt-1 object-cover"
                />
                <Img
                  src="images/defaultNoData.png"
                  alt="Link   logo7 png"
                  className="w-[18%] sm:w-full ml-[35px] sm:ml-0 object-cover"
                />
                <Img
                  src="images/defaultNoData.png"
                  alt="Link   logo8 png"
                  className="w-[22%] sm:w-full ml-[38px] sm:ml-0 object-cover"
                />
                <Img
                  src="images/defaultNoData.png"
                  alt="Link   logo9 png"
                  className="w-[21%] sm:w-full ml-8 sm:ml-0 object-cover"
                />
                <Img
                  src="images/defaultNoData.png"
                  alt="Link   logo10 png"
                  className="w-[15%] sm:w-full ml-[45px] sm:ml-0 object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col items-center w-full gap-8 p-[15px] bg-white-A700 rounded-[10px]">
              <div className="flex self-stretch justify-between items-start mt-[13px] gap-5">
                <div className="flex pb-2 px-2">
                  <Heading size="2xl" as="h3" className="ml-[7px] md:ml-0 uppercase">
                    top categories
                  </Heading>
                </div>
                <Button className="h-[25px] px-3.5 text-black-900_01 text-[11px] bg-blue_gray-50 min-w-[70px] rounded-[12px]">
                  View All
                </Button>
              </div>
              <div className="flex md:flex-row sm:flex-col w-[90%] md:w-full mb-[21px] gap-[35px]">
                <div className="flex flex-col items-center w-full sm:w-full mb-2.5 gap-[9px] sm:mb-0">
                  <Img
                    src="images/defaultNoData.png"
                    alt="Group   4   4  "
                    className="h-[60px] w-full md:h-auto object-cover"
                  />
                  <Heading size="md" as="h4" className="text-center !font-semibold">
                    Laptops
                  </Heading>
                </div>
                <div className="flex flex-col items-center w-full sm:w-full gap-2">
                  <Img
                    src="images/defaultNoData.png"
                    alt="Group   1   4  "
                    className="h-[60px] w-full md:h-auto object-cover"
                  />
                  <Heading size="md" as="h5" className="text-center !font-semibold">
                    PC Gaming
                  </Heading>
                </div>
                <div className="flex flex-col items-center w-full sm:w-full gap-[9px]">
                  <Img
                    src="images/defaultNoData.png"
                    alt="Group   2   4  "
                    className="h-[60px] w-full md:h-auto object-cover"
                  />
                  <Heading size="md" as="h6" className="text-center !font-semibold">
                    Headphones
                  </Heading>
                </div>
                <div className="flex flex-col items-center w-full sm:w-full pb-[5px] gap-2.5">
                  <Img
                    src="images/defaultNoData.png"
                    alt="Group   3   4  "
                    className="h-[60px] w-full md:h-auto object-cover"
                  />
                  <Heading size="md" as="p" className="text-center !font-semibold">
                    Monitors
                  </Heading>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[68px] relative">
            <div className="flex justify-end w-full top-[0.80px] right-0 left-0 p-3.5 m-auto bg-green-700 absolute rounded-[10px]">
              <div className="flex mr-[30px] md:mr-0">
                <Button className="h-[31px] px-2.5 text-gray-800_01 capitalize text-lg font-medium bg-gray-200_02 min-w-[89px] rounded-[10px]">
                  View All{" "}
                </Button>
              </div>
            </div>
            <div className="flex h-max left-[21.00px] bottom-0 top-0 p-2.5 my-auto absolute">
              <Heading size="4xl" as="h2" className="mt-[13px] mb-3.5 !text-white-A700 uppercase !font-semibold">
                Explore Our Product’s New Arrival
              </Heading>
            </div>
          </div>
          <div className="justify-center gap-5 grid-cols-[repeat(auto-fill,_minmax(226px_,_1fr))] bg-white-A700 grid rounded-[10px]">
            <div className="flex flex-col justify-center w-full gap-6 p-3 bg-gray-100_04 rounded-[10px]">
              <div className="flex flex-col mt-1 gap-2">
                <Img src="images/defaultNoData.png" alt="Image" className="h-[186px] object-cover rounded" />
                <div className="flex flex-col gap-[5px]">
                  <div className="flex flex-col items-start">
                    <Text as="p" className="!text-blue_gray-500 !font-manrope">
                      Extra Bass
                    </Text>
                    <Heading as="h2" className="!text-gray-900_07">
                      Sony Black Headphones
                    </Heading>
                  </div>
                  <div className="flex self-start">
                    <Heading size="7xl" as="h3" className="!text-gray-900_07">
                      $100
                    </Heading>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex justify-center w-[31%] p-3 border-blue_gray-100_01 border border-solid bg-white-A700 rounded">
                  <Img src="images/defaultNoData.png" alt="cart" className="w-[21px] object-cover" />
                </div>
                <Button
                  rightIcon={<Img src="images/defaultNoData.png" alt="arrow_right" className="w-[20px] h-[20px]" />}
                  className="h-[44px] gap-2 px-6 sm:px-5 text-white-A700 font-manrope text-base font-semibold bg-gray-900_04 min-w-[142px] rounded"
                >
                  Buy Now
                </Button>
              </div>
            </div>
            <div className="flex flex-col w-full pt-4 gap-3 px-4 bg-gray-100_04 rounded-[10px]">
              <Img src="images/defaultNoData.png" alt="Image" className="object-cover rounded" />
              <div className="flex flex-col items-start pb-3 gap-[13px]">
                <div className="flex flex-col items-start">
                  <Text as="p" className="!text-blue_gray-500 !font-manrope">
                    Extra Bass
                  </Text>
                  <Heading as="h4" className="!text-gray-900_07">
                    Sony Black Headphones
                  </Heading>
                </div>
                <Heading size="7xl" as="h5" className="!text-gray-900_07">
                  $100
                </Heading>
                <div className="flex self-stretch gap-3">
                  <div className="flex justify-center w-[31%] p-3 border-blue_gray-100_01 border border-solid bg-white-A700 rounded">
                    <Img src="images/defaultNoData.png" alt="cart" className="w-[21px] object-cover" />
                  </div>
                  <Button
                    rightIcon={<Img src="images/defaultNoData.png" alt="arrow_right" className="w-[20px] h-[20px]" />}
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
                    rightIcon={<Img src="images/defaultNoData.png" alt="arrow_right" className="w-[20px] h-[20px]" />}
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
                    rightIcon={<Img src="images/defaultNoData.png" alt="arrow_right" className="w-[20px] h-[20px]" />}
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
                    rightIcon={<Img src="images/defaultNoData.png" alt="arrow_right" className="w-[20px] h-[20px]" />}
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
                    rightIcon={<Img src="images/defaultNoData.png" alt="arrow_right" className="w-[20px] h-[20px]" />}
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
                    rightIcon={<Img src="images/defaultNoData.png" alt="arrow_right" className="w-[20px] h-[20px]" />}
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
                    rightIcon={<Img src="images/defaultNoData.png" alt="arrow_right" className="w-[20px] h-[20px]" />}
                    className="h-[44px] gap-2 px-6 sm:px-5 text-white-A700 font-manrope text-base font-semibold bg-gray-900_04 min-w-[142px] rounded"
                  >
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full pt-4 gap-3 px-4 bg-gray-100_04 rounded-[10px]">
              <Img src="images/defaultNoData.png" alt="Image" className="object-cover rounded" />
              <div className="flex flex-col pb-3 gap-4">
                <div className="flex flex-col items-start gap-[9px]">
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
                </div>
                <div className="flex self-start gap-3">
                  <Button className="p-3 border-blue_gray-100_01 border border-solid bg-white-A700 rounded">
                    <Img src="images/defaultNoData.png" />
                  </Button>
                  <Button
                    rightIcon={<Img src="images/defaultNoData.png" alt="arrow_right" className="w-[20px] h-[20px]" />}
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
                    rightIcon={<Img src="images/defaultNoData.png" alt="arrow_right" className="w-[20px] h-[20px]" />}
                    className="h-[44px] gap-2 px-6 sm:px-5 text-white-A700 font-manrope text-base font-semibold bg-gray-900_04 min-w-[142px] rounded"
                  >
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col pb-[38px] gap-[15px] sm:pb-5">
              <div className="flex justify-center p-3.5 bg-green-700 rounded-[10px]">
                <div className="flex justify-between items-center w-[97%] md:w-full gap-5">
                  <Heading size="4xl" as="h2" className="!text-white-A700 uppercase !font-semibold">
                    Explore Our Product’s Best seller
                  </Heading>
                  <Button className="h-[31px] px-2.5 text-gray-800_01 capitalize text-lg font-medium bg-gray-200_02 min-w-[89px] rounded-[10px]">
                    View All{" "}
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-[15px] bg-white-A700 rounded-[10px]">
                <div className="flex md:flex-col justify-between items-center gap-5 p-1">
                  <div className="flex flex-col items-start h-[190px] w-[46%] md:w-full md:h-auto mt-0.5 ml-2.5 gap-2 p-[18px] md:ml-0 bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat rounded-[28px]">
                    <div className="flex flex-col items-start w-[28%] md:w-full mt-2.5 ml-[11px] pb-2 gap-[19px] md:ml-0">
                      <Text size="5xl" as="p" className="uppercase leading-7">
                        <>
                          redmi note
                          <br />
                          12 Pro+ 5g
                        </>
                      </Text>
                      <Text size="s" as="p" className="!text-gray-700_03">
                        Rise to the challenge
                      </Text>
                    </div>
                    <Button className="h-[32px] ml-[11px] px-[15px] md:ml-0 text-white-A700 uppercase text-[11px] font-medium bg-gray-900_12 min-w-[92px] rounded-lg">
                      shop now
                    </Button>
                  </div>
                  <div className="w-[50%] mr-[31px] gap-px grid-cols-[repeat(auto-fill,_minmax(164px_,_1fr))] md:mr-0 grid">
                    <div className="flex justify-between items-start w-full gap-5">
                      <div className="flex flex-col items-start gap-1">
                        <Heading size="md" as="h3">
                          Android
                        </Heading>
                        <Text size="s" as="p" className="!text-gray-700_03">
                          35 Items
                        </Text>
                      </div>
                      <Img src="images/defaultNoData.png" alt="Link   prod21 png" className="w-[30%] object-cover" />
                    </div>
                    <div className="flex justify-between items-start w-full gap-5">
                      <div className="flex flex-col items-start gap-[3px]">
                        <Heading size="md" as="h4">
                          iPhone (iOS)
                        </Heading>
                        <Text size="s" as="p" className="!text-gray-700_03">
                          74 Items
                        </Text>
                      </div>
                      <Img src="images/defaultNoData.png" alt="Link   prod20 png" className="w-[37%] object-cover" />
                    </div>
                    <div className="flex justify-between items-start w-full gap-5">
                      <div className="flex flex-col items-start gap-0.5">
                        <Heading size="md" as="h5">
                          5G Support
                        </Heading>
                        <Text size="s" as="p" className="!text-gray-700_03">
                          12 Items
                        </Text>
                      </div>
                      <Img src="images/defaultNoData.png" alt="Link   prod22 png" className="w-[31%] object-cover" />
                    </div>
                    <div className="flex justify-between items-start w-full gap-5">
                      <div className="flex flex-col gap-1">
                        <Heading size="md" as="h6">
                          Xiaomi
                        </Heading>
                        <Text size="s" as="p" className="!text-gray-700_03">
                          52 Items
                        </Text>
                      </div>
                      <Img src="images/defaultNoData.png" alt="Link   prod24 png" className="w-[30%] object-cover" />
                    </div>
                    <div className="flex justify-between items-start w-full gap-5">
                      <div className="flex flex-col items-start gap-1">
                        <Heading size="md" as="p">
                          Accessories
                        </Heading>
                        <Text size="s" as="p" className="!text-gray-700_03">
                          29 Items
                        </Text>
                      </div>
                      <Img src="images/defaultNoData.png" alt="Link   prod25 png" className="w-[37%] object-cover" />
                    </div>
                    <div className="flex justify-between items-start w-full gap-5">
                      <div className="flex flex-col items-start gap-0.5">
                        <Heading size="md" as="p">
                          Gaming
                        </Heading>
                        <Text size="s" as="p" className="!text-gray-700_03">
                          9 Items
                        </Text>
                      </div>
                      <Img src="images/defaultNoData.png" alt="Link   prod23 png" className="w-[30%] object-cover" />
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col gap-5">
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
                  <div className="flex flex-col items-center justify-center w-full gap-6 p-3 bg-gray-100_04 rounded-[10px]">
                    <div className="flex flex-col self-stretch mt-1 gap-3">
                      <Img src="images/defaultNoData.png" alt="Image" className="h-[186px] object-cover rounded" />
                      <div className="flex flex-col items-start gap-2">
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
                </div>
              </div>
            </div>
            <div className="h-[961px] mt-[-11px] relative">
              <div className="flex flex-col items-start w-full gap-[61px] bottom-[0.00px] right-0 left-0 m-auto sm:gap-[30px] absolute">
                <div className="flex md:flex-col justify-center items-start w-[74%] md:w-full ml-[35px] pr-[11px] gap-[37px] py-[11px] md:ml-0">
                  <div className="flex sm:flex-col items-start md:self-stretch mt-[9px] flex-1">
                    <div className="flex flex-col w-[7%] sm:w-full gap-5">
                      <Img src="images/defaultNoData.png" alt="Group   1   4  " className="object-cover" />
                      <Img src="images/defaultNoData.png" alt="Group   2   4  " className="object-cover" />
                      <Img src="images/defaultNoData.png" alt="Group   3   4  " className="object-cover" />
                      <Img src="images/defaultNoData.png" alt="Group   4   4  " className="object-cover" />
                    </div>
                    <div className="flex flex-col items-start sm:self-stretch mt-9 ml-[-1px] sm:ml-0 relative flex-1">
                      <div className="flex justify-between items-start w-[86%] md:w-full ml-[18px] gap-5 md:ml-0">
                        <div className="flex flex-col items-start justify-center p-[5px] bg-green-700 rounded-[10px]">
                          <Text size="s" as="p" className="ml-[9px] md:ml-0 !text-white-A700 uppercase">
                            save
                          </Text>
                          <Text size="3xl" as="p" className="self-end mr-1 md:mr-0 !text-white-A700 !font-medium">
                            $199.00
                          </Text>
                        </div>
                        <Heading
                          size="md"
                          as="p"
                          className="flex justify-center items-center h-[30px] w-[30px] text-center !font-black bg-blue_gray-50 rounded-[15px]"
                        >
                          
                        </Heading>
                      </div>
                      <Img
                        src="images/defaultNoData.png"
                        alt="prod5 png"
                        className="h-[280px] w-full md:h-auto object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start w-[46%] md:w-full mb-1">
                    <Heading as="h6" className="w-[84%] md:w-full !font-bold leading-[19px]">
                      <>
                        Xioma Redmi Note 11 Pro 256GB 2023, Black
                        <br />
                        Smartphone
                      </>
                    </Heading>
                    <div className="flex items-center mt-[18px] flex-wrap">
                      <Heading size="5xl" as="h5" className="!text-red-600">
                        $569.00{" "}
                      </Heading>
                      <Heading as="h6" className="self-end !text-gray-700_03 line-through">
                        $759.00
                      </Heading>
                    </div>
                    <div className="flex items-center w-[85%] md:w-full mt-[18px] gap-[11px]">
                      <div className="h-[6px] w-[6px] bg-gray-700_03 rounded-[3px]" />
                      <Text size="s" as="p">
                        Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core
                      </Text>
                    </div>
                    <div className="flex items-center w-[82%] md:w-full mt-[5px] gap-[11px]">
                      <div className="h-[6px] w-[6px] bg-gray-700_03 rounded-[3px]" />
                      <Text size="s" as="p">
                        DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory
                      </Text>
                    </div>
                    <div className="flex items-center w-[89%] md:w-full mt-[5px] gap-[11px]">
                      <div className="h-[6px] w-[6px] bg-gray-700_03 rounded-[3px]" />
                      <Text size="s" as="p">
                        Commanding Power Design: Twin 16+1+2 Phases Digital VRM
                      </Text>
                    </div>
                    <div className="flex mt-[22px] ml-2.5 gap-[9px] md:ml-0 flex-wrap">
                      <Text
                        size="s"
                        as="p"
                        className="flex justify-center items-center h-[28px] pl-1 pr-8 py-[7px] sm:pr-5 !text-green-700 uppercase bg-green-700 rounded-md"
                      >
                        free shipping
                      </Text>
                      <Text
                        size="s"
                        as="p"
                        className="flex justify-center items-center h-[28px] pl-px pr-[33px] py-[7px] sm:pr-5 !text-red-600 uppercase bg-red-600 rounded-md"
                      >
                        free gift
                      </Text>
                    </div>
                    <div className="flex sm:flex-col self-stretch items-center mt-[30px] gap-5">
                      <Text size="md" as="p" className="w-[30%] sm:w-full uppercase !font-medium leading-[19px]">
                        <>
                          hurry up!
                          <br />
                          Promotion will
                          <br />
                          expires in
                        </>
                      </Text>
                      <div className="flex md:flex-row sm:self-stretch flex-1">
                        <div className="flex w-full">
                          <div className="flex flex-col items-center gap-[15px] p-[11px] bg-blue_gray-50 rounded-md">
                            <Heading size="4xl" as="h5" className="self-end text-center">
                              -162
                            </Heading>
                            <Heading size="md" as="p" className="!text-gray-700_03 text-center">
                              d
                            </Heading>
                          </div>
                          <div className="flex justify-center items-start w-full ml-[-9px] p-[7px] relative bg-blue_gray-50 flex-wrap rounded-md">
                            <Heading size="4xl" as="h5" className="mb-[30px] text-center">
                              -9
                            </Heading>
                            <Heading size="md" as="p" className="mt-2.5 !text-gray-700_03 text-center">
                              h
                            </Heading>
                          </div>
                        </div>
                        <div className="flex w-full">
                          <div className="flex items-start p-[7px] bg-blue_gray-50 flex-wrap rounded-md">
                            <Heading size="4xl" as="h5" className="h-[30px] mb-[30px] text-center">
                              -32
                            </Heading>
                            <Heading size="md" as="p" className="mt-3 !text-gray-700_03 text-center">
                              m
                            </Heading>
                          </div>
                          <div className="flex justify-center items-start w-full ml-[-9px] p-[7px] relative bg-blue_gray-50 flex-wrap rounded-md">
                            <Heading size="4xl" as="h5" className="h-[30px] mb-[30px] text-center">
                              -34
                            </Heading>
                            <Heading size="md" as="p" className="mt-3 !text-gray-700_03 text-center">
                              s
                            </Heading>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col self-stretch items-start mt-5 gap-[13px] py-1 border-gray-300_10 border-t border-solid">
                      <div className="self-stretch h-[8px] mt-4 bg-gray-300_12 relative rounded">
                        <div style={{ width: "43%" }} className="h-full bg-green-700 absolute rounded" />
                      </div>
                      <Text size="md" as="p" className="!text-gray-700_03">
                        <span className="text-gray-700_03">Sold:&nbsp;</span>
                        <span className="text-black-900_01 font-bold">26/75</span>
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col self-stretch gap-5 bg-white-A700">
                  <div className="flex flex-col w-full pt-4 gap-3 px-4 md:p-5 bg-gray-100_04 rounded-[10px]">
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
                  <div className="flex flex-col w-full pt-4 gap-3 px-4 md:p-5 bg-gray-100_04 rounded-[10px]">
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
                  <div className="flex flex-col w-full pt-4 gap-3 px-4 md:p-5 bg-gray-100_04 rounded-[10px]">
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
                  <div className="flex flex-col w-full pt-4 gap-3 px-4 md:p-5 bg-gray-100_04 rounded-[10px]">
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
                  <div className="flex flex-col w-full pt-4 gap-3 px-4 md:p-5 bg-gray-100_04 rounded-[10px]">
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
                </div>
              </div>
              <div className="flex justify-between items-start w-[74%] left-[0.00px] top-[0.20px] gap-5 p-[7px] m-auto bg-green-700 absolute rounded-[10px]">
                <Heading
                  size="4xl"
                  as="h5"
                  className="mt-[5px] ml-3.5 md:ml-0 !text-white-A700 uppercase !font-semibold"
                >
                  Explore Our Product’s discount
                </Heading>
                <Button className="h-[31px] mb-[17px] px-2.5 text-gray-800_01 capitalize text-lg font-medium bg-gray-200_02 min-w-[89px] rounded-[10px]">
                  View All{" "}
                </Button>
              </div>
              <div className="flex flex-col w-[22%] gap-2 right-[23.00px] top-[0.00px] m-auto bg-white-A700 absolute md:relative">
                <Img
                  src="images/defaultNoData.png"
                  alt="Main   Section  "
                  className="md:w-full flex-1 object-cover rounded-[12px]"
                />
                <Img
                  src="images/defaultNoData.png"
                  alt="Main   Section  "
                  className="md:w-full flex-1 object-cover rounded-[12px]"
                />
                <Img
                  src="images/defaultNoData.png"
                  alt="Main   Section  "
                  className="h-[177px] w-full flex-1 object-cover rounded-[12px]"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center h-[107px] md:h-auto p-9 sm:p-5 bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat rounded-[15px]">
            <div className="flex md:flex-col self-start items-center ml-[232px] md:ml-0 flex-wrap">
              <Img
                src="images/defaultNoData.png"
                alt="Heading 6   star png"
                className="w-[30px] md:w-full object-cover"
              />
              <Text size="3xl" as="p" className="self-end ml-2.5 md:ml-0 !text-white-A700 text-center">
                Member get
              </Text>
              <Text size="3xl" as="p" className="ml-[11px] md:ml-0 !text-yellow-A400 uppercase text-center">
                FREE SHIPPING*
              </Text>
              <Text size="3xl" as="p" className="self-end ml-1 md:ml-0 !text-white-A700 text-center">
                with no order minimum!. *Restriction apply
              </Text>
            </div>
          </div>
          <div className="h-[1213px] bg-white-A700 relative">
            <div className="flex flex-col w-full gap-[15px] bottom-[-0.80px] right-0 left-0 m-auto absolute">
              <div className="flex md:flex-col gap-[22px]">
                <div className="flex flex-col justify-center w-full gap-[30px] p-7 sm:p-5 bg-gray-100_04 rounded-[10px]">
                  <div className="flex flex-col gap-[30px]">
                    <div className="flex justify-between items-center gap-5">
                      <div className="flex">
                        <Heading size="2xl" as="h2" className="uppercase">
                          Audios & Cameras
                        </Heading>
                      </div>
                      <div className="flex self-end py-0.5">
                        <Text size="md" as="p" className="self-start !text-gray-700_03 capitalize text-right">
                          View All{" "}
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-start h-[190px] md:h-auto p-[30px] sm:p-5 bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat rounded-[10px]">
                      <Heading size="md" as="h3" className="w-[18%] mt-[3px] mb-[59px] !text-white-A700 leading-[22px]">
                        <>
                          Best
                          <br />
                          Speaker
                          <br />
                          2023
                        </>
                      </Heading>
                    </div>
                  </div>
                  <div className="justify-center gap-[79px] grid-cols-[repeat(auto-fill,_minmax(120px_,_1fr))] border-gray-500_54_01 border-t border-solid grid">
                    <div className="flex flex-col items-center w-full gap-1.5">
                      <div className="self-stretch rounded-[60px]">
                        <Img
                          src="images/defaultNoData.png"
                          alt="prod46 png"
                          className="h-[120px] w-[120px] rounded-[50%]"
                        />
                      </div>
                      <div className="flex">
                        <Heading size="md" as="h4" className="self-end capitalize text-center">
                          Speaker
                        </Heading>
                      </div>
                      <div className="flex py-0.5">
                        <Text size="s" as="p" className="self-start !text-gray-700_03 text-center">
                          12 Items
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center w-full gap-1.5">
                      <div className="self-stretch rounded-[60px]">
                        <Img
                          src="images/defaultNoData.png"
                          alt="prod47 png"
                          className="h-[120px] w-[120px] rounded-[50%]"
                        />
                      </div>
                      <div className="flex py-[5px]">
                        <Heading size="md" as="h5" className="capitalize text-center">
                          DSLR Camera
                        </Heading>
                      </div>
                      <div className="flex py-0.5">
                        <Text size="s" as="p" className="self-start !text-gray-700_03 text-center">
                          9 Items
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center w-full gap-1.5">
                      <div className="self-stretch rounded-[60px]">
                        <Img
                          src="images/defaultNoData.png"
                          alt="prod48 png"
                          className="h-[120px] w-[120px] rounded-[50%]"
                        />
                      </div>
                      <div className="flex py-[5px]">
                        <Heading size="md" as="h6" className="capitalize text-center">
                          Earbuds
                        </Heading>
                      </div>
                      <div className="flex py-0.5">
                        <Text size="s" as="p" className="self-start !text-gray-700_03 text-center">
                          5 Items
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center w-full gap-1.5">
                      <div className="self-stretch rounded-[60px]">
                        <Img
                          src="images/defaultNoData.png"
                          alt="prod49 png"
                          className="h-[120px] w-[120px] rounded-[50%]"
                        />
                      </div>
                      <div className="flex">
                        <Heading size="md" as="p" className="self-end capitalize text-center">
                          Microphone
                        </Heading>
                      </div>
                      <div className="flex py-0.5">
                        <Text size="s" as="p" className="self-start !text-gray-700_03 text-center">
                          12 Items
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center w-full gap-[30px] p-7 sm:p-5 bg-gray-100_04 rounded-[10px]">
                  <div className="flex flex-col gap-[30px]">
                    <div className="flex justify-between items-center gap-5">
                      <Heading size="2xl" as="h6" className="uppercase">
                        gaming
                      </Heading>
                      <div className="flex self-end py-0.5">
                        <Text size="md" as="p" className="self-start !text-gray-700_03 capitalize text-right">
                          View All{" "}
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-start h-[190px] md:h-auto p-[30px] sm:p-5 bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat rounded-[10px]">
                      <Heading size="md" as="p" className="w-[30%] mt-[3px] mb-[59px] uppercase leading-[22px]">
                        <>
                          wireless
                          <br />
                          rgb gaming
                          <br />
                          mouse
                        </>
                      </Heading>
                    </div>
                  </div>
                  <div className="justify-center gap-[79px] grid-cols-[repeat(auto-fill,_minmax(120px_,_1fr))] border-gray-500_54_01 border-t border-solid grid">
                    <div className="flex flex-col items-center w-full gap-3">
                      <div className="self-stretch rounded-[60px]">
                        <Img
                          src="images/defaultNoData.png"
                          alt="prod50 png"
                          className="h-[120px] w-[120px] rounded-[50%]"
                        />
                      </div>
                      <Heading size="md" as="p" className="capitalize text-center">
                        Monitors
                      </Heading>
                      <Text size="s" as="p" className="!text-gray-700_03 text-center">
                        28 Items
                      </Text>
                    </div>
                    <div className="flex flex-col items-center w-full gap-1.5">
                      <div className="self-stretch rounded-[60px]">
                        <Img
                          src="images/defaultNoData.png"
                          alt="prod51 png"
                          className="h-[120px] w-[120px] rounded-[50%]"
                        />
                      </div>
                      <div className="flex py-[5px]">
                        <Heading size="md" as="p" className="capitalize text-center">
                          Chair
                        </Heading>
                      </div>
                      <div className="flex py-0.5">
                        <Text size="s" as="p" className="self-start !text-gray-700_03 text-center">
                          12 Items
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center w-full gap-1.5">
                      <div className="self-stretch rounded-[60px]">
                        <Img
                          src="images/defaultNoData.png"
                          alt="prod52 png"
                          className="h-[120px] w-[120px] rounded-[50%]"
                        />
                      </div>
                      <div className="flex py-[5px]">
                        <Heading size="md" as="p" className="capitalize text-center">
                          Controller
                        </Heading>
                      </div>
                      <div className="flex py-0.5">
                        <Text size="s" as="p" className="self-start !text-gray-700_03 text-center">
                          9 Items
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center w-full gap-1.5">
                      <div className="self-stretch rounded-[60px]">
                        <Img
                          src="images/defaultNoData.png"
                          alt="prod53 png"
                          className="h-[120px] w-[120px] rounded-[50%]"
                        />
                      </div>
                      <div className="flex">
                        <Heading size="md" as="p" className="self-end capitalize text-center">
                          Keyboards
                        </Heading>
                      </div>
                      <div className="flex py-0.5">
                        <Text size="s" as="p" className="self-start !text-gray-700_03 text-center">
                          30 Items
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center w-full gap-[30px] p-7 sm:p-5 bg-gray-100_05 rounded-[10px]">
                  <div className="flex flex-col gap-[29px]">
                    <div className="flex justify-between items-center gap-5">
                      <div className="flex">
                        <Heading size="2xl" as="h6" className="uppercase">
                          office equipments
                        </Heading>
                      </div>
                      <div className="flex self-end py-0.5">
                        <Text size="md" as="p" className="self-start !text-gray-700_03 capitalize text-right">
                          View All{" "}
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center h-[190px] md:h-auto gap-0.5 p-[31px] sm:p-5 bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat rounded-[10px]">
                      <Text size="xs" as="p" className="!text-blue_gray-100 capitalize text-center">
                        Home Thearther 4k
                      </Text>
                      <Heading
                        size="7xl"
                        as="h4"
                        className="mb-[81px] !text-white-A700 capitalize text-center !font-semibold"
                      >
                        Laser Projector
                      </Heading>
                    </div>
                  </div>
                  <div className="justify-center gap-[79px] grid-cols-[repeat(auto-fill,_minmax(120px_,_1fr))] border-gray-500_54_01 border-t border-solid grid">
                    <div className="flex flex-col items-center w-full gap-2.5">
                      <div className="self-stretch rounded-[60px]">
                        <Img
                          src="images/defaultNoData.png"
                          alt="prod54 png"
                          className="h-[120px] w-[120px] rounded-[50%]"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-center gap-[9px]">
                        <Heading size="md" as="p" className="mt-0.5 capitalize text-center">
                          Printers
                        </Heading>
                        <Text size="s" as="p" className="!text-gray-700_03 text-center">
                          9 Items
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center w-full">
                      <div className="self-stretch rounded-[60px]">
                        <Img
                          src="images/defaultNoData.png"
                          alt="prod55 png"
                          className="h-[120px] w-[120px] rounded-[50%]"
                        />
                      </div>
                      <div className="flex mt-2.5 py-[5px]">
                        <Heading size="md" as="p" className="capitalize text-center">
                          Network
                        </Heading>
                      </div>
                      <div className="flex py-0.5">
                        <Text size="s" as="p" className="self-start !text-gray-700_03 text-center">
                          90 Items
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center w-full">
                      <div className="self-stretch rounded-[60px]">
                        <Img
                          src="images/defaultNoData.png"
                          alt="prod56 png"
                          className="h-[120px] w-[120px] rounded-[50%]"
                        />
                      </div>
                      <Heading size="md" as="p" className="mt-[13px] capitalize text-center">
                        Security
                      </Heading>
                      <Text size="s" as="p" className="mt-[5px] !text-gray-700_03 text-center">
                        12 Items
                      </Text>
                    </div>
                    <div className="flex flex-col items-center w-full">
                      <div className="self-stretch rounded-[60px]">
                        <Img
                          src="images/defaultNoData.png"
                          alt="prod57 png"
                          className="h-[120px] w-[120px] rounded-[50%]"
                        />
                      </div>
                      <div className="flex mt-2.5">
                        <Heading size="md" as="p" className="self-end capitalize text-center">
                          Projectors
                        </Heading>
                      </div>
                      <div className="flex py-0.5">
                        <Text size="s" as="p" className="self-start !text-gray-700_03 text-center">
                          12 Items
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col gap-[19px]">
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
              </div>
            </div>
            <div className="h-[68px] w-full top-[0.00px] right-0 left-0 m-auto absolute">
              <div className="flex justify-end w-full top-[1.80px] right-0 left-0 p-3.5 m-auto bg-green-700 absolute rounded-[10px]">
                <div className="flex mr-[30px] md:mr-0">
                  <Button className="h-[31px] px-2.5 text-gray-800_01 capitalize text-lg font-medium bg-gray-200_02 min-w-[89px] rounded-[10px]">
                    View All{" "}
                  </Button>
                </div>
              </div>
              <div className="flex h-max left-[20.00px] bottom-0 top-0 p-2.5 my-auto absolute">
                <Heading size="4xl" as="h5" className="mt-[13px] mb-3.5 !text-white-A700 uppercase !font-semibold">
                  Explore Our Product’s checking all product
                </Heading>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col gap-[37px]">
            <div className="flex w-full">
              <div className="flex flex-col items-end justify-center h-[180px] w-full md:h-auto gap-[7px] p-10 sm:p-5 bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat">
                <Heading size="14xl" as="h2" className="mr-[30px] md:mr-0 !text-yellow-A400">
                  10% Back
                </Heading>
                <Text as="p" className="w-[31%] md:w-full mr-[63px] md:mr-0 !text-white-A700 leading-[19px]">
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
            <div className="flex w-full">
              <div className="flex flex-col items-start justify-center h-[180px] w-full md:h-auto gap-[15px] p-7 sm:p-5 bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat">
                <div className="flex justify-between items-start w-[63%] md:w-full mt-1 ml-[11px] gap-5 md:ml-0">
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
                <div className="h-[45px] w-[52%] ml-[11px] md:ml-0 relative">
                  <Input
                    name="Group 79"
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
        <footer className="p-[35px] sm:p-5 bg-white-A700">
          <div className="w-full mt-9 mb-4 mx-auto md:p-5 bg-gray-100_04 max-w-[1270px] rounded-[10px]">
            <div className="flex flex-col gap-[15px]">
              <div className="flex md:flex-col justify-between items-center pr-2.5 gap-5">
                <div className="flex justify-center w-[48%] md:w-full p-2.5">
                  <Heading size="11xl" as="h2" className="!text-gray-900_06 !font-plusjakartasans leading-[42px]">
                    Enjoy your shopping with TECHNESS the biggest online market.{" "}
                  </Heading>
                </div>
                <Button className="h-[50px] px-[34px] sm:px-5 text-black-900_01 font-plusjakartasans text-sm font-bold border-gray-900 border border-solid bg-gray-200_03 min-w-[213px] rounded-[25px]">
                  Contact Us
                </Button>
              </div>
              <div className="flex flex-col gap-[15px]">
                <Img src="images/defaultNoData.png" alt="Frame 947" className="h-[20px] object-cover" />
                <div className="p-2.5">
                  <div className="flex md:flex-col justify-between items-start gap-5">
                    <div className="flex flex-col w-[32%] md:w-full">
                      <div className="flex p-1.5">
                        <Heading
                          as="h6"
                          className="mt-[7px] mb-[5px] !text-gray-900_08 !font-plusjakartasans !font-bold"
                        >
                          About TECHNESS
                        </Heading>
                      </div>
                      <Text as="p" className="mt-[5px] !text-gray-900_03 !font-plusjakartasans leading-[22px]">
                        TECHNESS is the leading online marketplace, where you can buy and sell everything from cars,
                        motorcycles, mobile phones, computers, electronics, furniture, books, pets, foods, and more.
                        TECHNESS connects buyers and sellers across the country, making it easy and convenient to find
                        what you need or sell what you don’t want.
                      </Text>
                      <div className="flex justify-between w-[73%] md:w-full mt-[-2px] gap-5 relative">
                        <Button className="h-[40px] w-[40px]">
                          <Img src="images/defaultNoData.png" />
                        </Button>
                        <Button className="h-[40px] w-[40px] shadow-md">
                          <Img src="images/defaultNoData.png" />
                        </Button>
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
                      <ul className="flex flex-col self-end items-start gap-7">
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
                    <div className="flex flex-col items-start gap-[23px]">
                      <div className="flex self-center p-[7px]">
                        <Heading size="4xl" as="h5" className="!text-gray-900_09 !font-plusjakartasans">
                          Useful Information
                        </Heading>
                      </div>
                      <ul className="flex flex-col items-start ml-2.5 gap-[27px] md:ml-0">
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
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
