import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Heading, Img, Text, Button, Input } from "../../components";

export default function ProfilePage() {
  const [searchBarValue4, setSearchBarValue4] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Techness-Ecommerce</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full pb-[295px] px-[295px] md:pb-5 md:px-5 bg-gray-300_12">
        <header className="flex flex-col mb-[617px] gap-16 py-2 sm:gap-8 bg-white-A700 rounded-[10px]">
          <div className="flex md:flex-col justify-between items-center w-full mt-2 mb-12 gap-5 mx-auto md:p-5 max-w-[1274px]">
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
                value={searchBarValue4}
                onChange={(e: string) => setSearchBarValue4(e)}
                suffix={
                  searchBarValue4?.length > 0 ? (
                    <CloseSVG onClick={() => setSearchBarValue4("")} height={24} width={24} fillColor="#b0b9beff" />
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
          <div className="flex md:flex-col justify-between items-center w-full mt-16 gap-5 mx-auto md:p-5 max-w-[1273px]">
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
      </div>
    </>
  );
}
