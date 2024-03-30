import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Button, Img, Heading, Text, Input } from "../../components";

export default function DesktopOnePage() {
  const [searchBarValue36, setSearchBarValue36] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Techness-Ecommerce</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col w-full gap-[74px] p-5 md:gap-[55px] sm:gap-[37px] bg-gray-400_05">
        <div className="w-full mt-2.5 p-4 mx-auto md:p-5 border-gray-200_05 border-b border-solid bg-white-A700 max-w-[1355px]">
          <div className="flex flex-col gap-4">
            <header className="flex md:flex-col justify-between items-center gap-5">
              <div className="flex items-center gap-2">
                <Img src="images/defaultNoData.png" alt="Chip" className="w-[24px] object-cover" />
                <Heading
                  size="2xl"
                  as="h6"
                  className="!text-transparent tracking-[-0.25px] !font-semibold bg-gradient1 bg-clip-text"
                >
                  TECHNESS @
                </Heading>
              </div>
              <div className="flex md:flex-col justify-center w-[77%] md:w-full gap-[43px]">
                <Input
                  name="Text input"
                  placeholder={`DJI phantom`}
                  value={searchBarValue36}
                  onChange={(e: string) => setSearchBarValue36(e)}
                  suffix={
                    searchBarValue36?.length > 0 ? (
                      <CloseSVG onClick={() => setSearchBarValue36("")} height={24} width={24} fillColor="#b0b9beff" />
                    ) : (
                      <Img src="images/defaultNoData.png" alt="search" className="w-[24px] h-[24px] cursor-pointer" />
                    )
                  }
                  className="h-[40px] pl-4 pr-2 gap-[35px] text-blue_gray-900_01 tracking-[-0.08px] text-sm border-gray-300_06 border border-solid bg-white-A700 flex-grow rounded-[15px]"
                />
                <Button className="h-[40px] px-[15px] text-blue_gray-900_01 tracking-[-0.08px] text-sm border-gray-300_06 border border-solid bg-white-A700 min-w-[77px] rounded-md">
                  Sign In
                </Button>
              </div>
            </header>
            <div className="flex md:flex-col justify-between gap-5">
              <a href="#">
                <div className="flex items-center gap-2">
                  <Img src="images/defaultNoData.png" alt="Location marker" className="w-[24px] object-cover" />
                  <Text as="p" className="!text-blue_gray-900_01 tracking-[-0.08px]">
                    Cambodia
                  </Text>
                </div>
              </a>
              <div className="flex md:flex-col justify-between items-center w-[78%] md:w-full gap-5">
                <div className="flex sm:flex-col justify-between w-[47%] md:w-full gap-5">
                  <div className="flex justify-between w-[71%] sm:w-full gap-5 p-[5px] flex-wrap">
                    <Text as="p" className="ml-0.5 md:ml-0 !text-blue_gray-900_01 tracking-[-0.08px] text-center">
                      Home
                    </Text>
                    <Text as="p" className="!text-blue_gray-900_01 tracking-[-0.08px] text-center">
                      Store
                    </Text>
                    <Text as="p" className="mr-0.5 md:mr-0 !text-blue_gray-900_01 tracking-[-0.08px] text-center">
                      FQA
                    </Text>
                  </div>
                  <div className="flex items-center gap-2">
                    <Img src="images/defaultNoData.png" alt="Cube" className="w-[24px] object-cover" />
                    <Text as="p" className="!text-blue_gray-900_01 tracking-[-0.08px]">
                      Orders
                    </Text>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Img src="images/defaultNoData.png" alt="Heart" className="w-[24px] object-cover" />
                  <Text as="p" className="!text-blue_gray-900_01 tracking-[-0.08px]">
                    Favorites
                  </Text>
                </div>
                <div className="flex items-center gap-2">
                  <Img src="images/defaultNoData.png" alt="Shopping cart" className="w-[24px] object-cover" />
                  <Text as="p" className="!text-blue_gray-900_01 tracking-[-0.08px]">
                    Cart
                  </Text>
                </div>
                <Text as="p" className="!text-blue_gray-900_01 tracking-[-0.08px] text-center">
                  Become a seller
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start w-full mb-[5px] mx-auto max-w-[1308px]">
          <Heading as="h1" className="ml-[3px] md:ml-0 !text-red-600_03 !font-poppins">
            Today’s
          </Heading>
          <div className="h-[40px] w-[20px] mt-[9px] ml-[3px] md:ml-0 bg-red-600_03 rounded" />
          <Heading size="13xl" as="h2" className="mt-[23px] ml-[3px] md:ml-0">
            Explore Our Product’s New Arrival
          </Heading>
          <div className="flex md:flex-col self-stretch mt-[11px] gap-10">
            <div className="flex flex-col items-center justify-center w-full gap-[23px] p-[13px] bg-white-A700 rounded">
              <div className="flex flex-col self-stretch mt-[3px] gap-3">
                <Img src="images/defaultNoData.png" alt="Image" className="object-cover rounded" />
                <div className="flex flex-col gap-[9px]">
                  <div className="flex justify-between items-center gap-5">
                    <div className="flex flex-col items-start">
                      <Text as="p" className="!text-blue_gray-500 !font-manrope">
                        Extra Bass
                      </Text>
                      <Heading as="h2" className="!text-gray-900_07">
                        Sony Black Headphones
                      </Heading>
                    </div>
                    <Heading size="7xl" as="h3" className="!text-gray-900_07">
                      $100
                    </Heading>
                  </div>
                  <div className="flex flex-col gap-1">
                    <Text size="2xl" as="p" className="!text-gray-900_07 !font-manrope">
                      Turn down the world&#39;s noise with the long-lasting noise cancellation performance of the
                      WH-CH710N wireless headphones. Dual Noise Sensor technology automatically senses your environment
                      to deliver an amazing sound experience.{" "}
                    </Text>
                    <div className="flex self-start gap-1">
                      <Heading size="md" as="h4" className="!text-gray-900_07 !font-semibold">
                        Show more
                      </Heading>
                      <Img src="images/defaultNoData.png" alt="checkmark" className="w-[20px] object-cover" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex self-start mb-[3px] gap-3">
                <Button className="p-3 border-blue_gray-100_01 border border-solid bg-white-A700 rounded">
                  <Img src="images/defaultNoData.png" />
                </Button>
                <Button
                  rightIcon={<Img src="images/defaultNoData.png" alt="arrow_right" className="w-[20px] h-[20px]" />}
                  className="h-[44px] gap-2 px-[35px] sm:px-5 text-white-A700 font-manrope text-base font-semibold bg-teal-800 min-w-[189px] rounded"
                >
                  Buy Now
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-[23px] p-[13px] bg-white-A700 rounded">
              <div className="flex flex-col self-stretch mt-[3px] gap-3">
                <Img src="images/defaultNoData.png" alt="Image" className="object-cover rounded" />
                <div className="flex flex-col gap-[9px]">
                  <div className="flex justify-between items-center gap-5">
                    <div className="flex flex-col items-start">
                      <Text as="p" className="!text-blue_gray-500 !font-manrope">
                        Extra Bass
                      </Text>
                      <Heading as="h5" className="!text-gray-900_07">
                        Sony Black Headphones
                      </Heading>
                    </div>
                    <Heading size="7xl" as="h6" className="!text-gray-900_07">
                      $100
                    </Heading>
                  </div>
                  <div className="flex flex-col gap-1">
                    <Text size="2xl" as="p" className="!text-gray-900_07 !font-manrope">
                      Turn down the world&#39;s noise with the long-lasting noise cancellation performance of the
                      WH-CH710N wireless headphones. Dual Noise Sensor technology automatically senses your environment
                      to deliver an amazing sound experience.{" "}
                    </Text>
                    <div className="flex self-start gap-1">
                      <Heading size="md" as="p" className="!text-gray-900_07 !font-semibold">
                        Show more
                      </Heading>
                      <Img src="images/defaultNoData.png" alt="checkmark" className="w-[20px] object-cover" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex self-start mb-[3px] gap-3">
                <Button className="p-3 border-blue_gray-100_01 border border-solid bg-white-A700 rounded">
                  <Img src="images/defaultNoData.png" />
                </Button>
                <Button
                  rightIcon={<Img src="images/defaultNoData.png" alt="arrow_right" className="w-[20px] h-[20px]" />}
                  className="h-[44px] gap-2 px-[35px] sm:px-5 text-white-A700 font-manrope text-base font-semibold bg-teal-800 min-w-[189px] rounded"
                >
                  Buy Now
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-[23px] p-[13px] bg-white-A700 rounded">
              <div className="flex flex-col self-stretch mt-[3px] gap-3">
                <Img src="images/defaultNoData.png" alt="Image" className="object-cover rounded" />
                <div className="flex flex-col gap-[9px]">
                  <div className="flex justify-between items-center gap-5">
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
                  <div className="flex flex-col gap-1">
                    <Text size="2xl" as="p" className="!text-gray-900_07 !font-manrope">
                      Turn down the world&#39;s noise with the long-lasting noise cancellation performance of the
                      WH-CH710N wireless headphones. Dual Noise Sensor technology automatically senses your environment
                      to deliver an amazing sound experience.{" "}
                    </Text>
                    <div className="flex self-start gap-1">
                      <Heading size="md" as="p" className="!text-gray-900_07 !font-semibold">
                        Show more
                      </Heading>
                      <Img src="images/defaultNoData.png" alt="checkmark" className="w-[20px] object-cover" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex self-start mb-[3px] gap-3">
                <Button className="p-3 border-blue_gray-100_01 border border-solid bg-white-A700 rounded">
                  <Img src="images/defaultNoData.png" />
                </Button>
                <Button
                  rightIcon={<Img src="images/defaultNoData.png" alt="arrow_right" className="w-[20px] h-[20px]" />}
                  className="h-[44px] gap-2 px-[35px] sm:px-5 text-white-A700 font-manrope text-base font-semibold bg-teal-800 min-w-[189px] rounded"
                >
                  Buy Now
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-[23px] p-[13px] bg-white-A700 rounded">
              <div className="flex flex-col self-stretch mt-[3px] gap-3">
                <Img src="images/defaultNoData.png" alt="Image" className="object-cover rounded" />
                <div className="flex flex-col gap-[9px]">
                  <div className="flex justify-between items-center gap-5">
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
                  <div className="flex flex-col gap-1">
                    <Text size="2xl" as="p" className="!text-gray-900_07 !font-manrope">
                      Turn down the world&#39;s noise with the long-lasting noise cancellation performance of the
                      WH-CH710N wireless headphones. Dual Noise Sensor technology automatically senses your environment
                      to deliver an amazing sound experience.{" "}
                    </Text>
                    <div className="flex self-start gap-1">
                      <Heading size="md" as="p" className="!text-gray-900_07 !font-semibold">
                        Show more
                      </Heading>
                      <Img src="images/defaultNoData.png" alt="checkmark" className="w-[20px] object-cover" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex self-start mb-[3px] gap-3">
                <Button className="p-3 border-blue_gray-100_01 border border-solid bg-white-A700 rounded">
                  <Img src="images/defaultNoData.png" />
                </Button>
                <Button
                  rightIcon={<Img src="images/defaultNoData.png" alt="arrow_right" className="w-[20px] h-[20px]" />}
                  className="h-[44px] gap-2 px-[35px] sm:px-5 text-white-A700 font-manrope text-base font-semibold bg-teal-800 min-w-[189px] rounded"
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
          <Button className="self-center h-[56px] mt-[50px] px-[35px] sm:px-5 text-gray-50 font-poppins text-base font-medium bg-red-600_03 min-w-[234px] rounded-[15px]">
            View All Products
          </Button>
        </div>
      </div>
    </>
  );
}
