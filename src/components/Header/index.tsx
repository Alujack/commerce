import React from "react";
import { CloseSVG } from "../../assets/images";
import { Heading, Img, Text, Button, Input } from "./..";

interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {
  const [searchBarValue1, setSearchBarValue1] = React.useState("");

  return (
    <header {...props}>
      <div className="flex md:flex-col justify-between items-center w-full mt-2 mb-12 gap-5 mx-auto md:p-5 max-w-[1274px]">
        <div className="flex items-start gap-[9px]">
          <Img src="images/defaultNoData.png" alt="chip_one" className="object-cover" />
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
            name="search"
            placeholder={`DJI phantom`}
            value={searchBarValue1}
            onChange={(e: string) => setSearchBarValue1(e)}
            suffix={
              searchBarValue1?.length > 0 ? (
                <CloseSVG onClick={() => setSearchBarValue1("")} height={24} width={24} fillColor="#b0b9beff" />
              ) : (
                <Img src="images/defaultNoData.png" alt="search" className="cursor-pointer" />
              )
            }
            className="w-[88%] md:w-full gap-[35px] !text-blue_gray-900_01 tracking-[-0.08px] border-gray-300_06 border border-solid rounded-[15px]"
          />
          <Button size="9xl" shape="circle" className="w-[48px] border-gray-300_06 border border-solid !rounded-[24px]">
            <Img src="images/defaultNoData.png" />
          </Button>
        </div>
      </div>
      <div className="flex md:flex-col justify-between items-center w-full mt-16 gap-5 mx-auto md:p-5 max-w-[1273px]">
        <div className="flex items-center gap-2">
          <Img src="images/defaultNoData.png" alt="locationmarker" className="h-[24px] w-[24px]" />
          <Text as="p" className="!text-blue_gray-900_01 tracking-[-0.08px]">
            Cambodia
          </Text>
        </div>
        <div className="flex md:flex-col justify-between w-[77%] md:w-full gap-5 py-2">
          <div className="flex justify-between w-[28%] md:w-full gap-5 flex-wrap">
            <a href="#" className="px-2 py-px rounded">
              <Heading size="xl" as="h6" className="!text-blue_gray-900_01 tracking-[-0.10px] text-center">
                Home
              </Heading>
            </a>
            <a href="#" className="px-2 py-px rounded">
              <Heading size="xl" as="h6" className="!text-blue_gray-900_01 tracking-[-0.10px] text-center">
                Store
              </Heading>
            </a>
            <a href="#" className="px-2 py-px rounded">
              <Heading size="xl" as="h6" className="!text-blue_gray-900_01 tracking-[-0.10px] text-center">
                FQA
              </Heading>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Img src="images/defaultNoData.png" alt="cube_one" className="h-[24px] w-[24px]" />
            <Heading size="xl" as="h6" className="!text-blue_gray-900_01 tracking-[-0.10px]">
              Orders
            </Heading>
          </div>
          <div className="flex items-center gap-2">
            <Img src="images/defaultNoData.png" alt="heart_one" className="h-[24px] w-[24px]" />
            <Heading size="xl" as="h6" className="self-start !text-blue_gray-900_01 tracking-[-0.10px]">
              Favorites
            </Heading>
          </div>
          <div className="flex items-center gap-2">
            <Img src="images/defaultNoData.png" alt="shoppingcart" className="h-[24px] w-[24px]" />
            <Heading size="xl" as="h6" className="!text-blue_gray-900_01 tracking-[-0.10px]">
              Cart
            </Heading>
          </div>
          <a href="#" className="px-2 py-px rounded">
            <Heading size="xl" as="h6" className="!text-blue_gray-900_01 tracking-[-0.10px] text-center">
              Become a seller
            </Heading>
          </a>
        </div>
      </div>
    </header>
  );
}
