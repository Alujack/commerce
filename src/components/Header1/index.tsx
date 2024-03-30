import React from "react";
import { CloseSVG } from "../../assets/images";
import { Heading, Img, Button, Input, Text } from "./..";

interface Props {
  className?: string;
}

export default function Header1({ ...props }: Props) {
  const [searchBarValue2, setSearchBarValue2] = React.useState("");

  return (
    <header {...props}>
      <div className="flex md:flex-col justify-between items-center w-full mt-2 gap-5 mx-auto max-w-[1282px]">
        <div className="flex flex-col items-start mt-1.5">
          <div className="flex items-center gap-[5px] py-2">
            <Img src="images/defaultNoData.png" alt="emotionone_one" className="w-[32px] object-cover" />
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
              <Img src="images/defaultNoData.png" alt="linkedin_one" className="h-[24px]" />
              <Text as="p" className="!text-blue_gray-900_01 tracking-[-0.08px]">
                Cambodia
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[76%] md:w-full gap-2">
          <div className="flex md:flex-col gap-[47px]">
            <Input
              name="search"
              placeholder={`DJI phantom`}
              value={searchBarValue2}
              onChange={(e: string) => setSearchBarValue2(e)}
              suffix={
                searchBarValue2?.length > 0 ? (
                  <CloseSVG onClick={() => setSearchBarValue2("")} height={24} width={24} fillColor="#b0b9beff" />
                ) : (
                  <Img src="images/defaultNoData.png" alt="search" className="cursor-pointer" />
                )
              }
              className="gap-[35px] !text-blue_gray-900_01 tracking-[-0.08px] border-gray-300_06 border border-solid flex-grow rounded-[15px]"
            />
            <Button
              size="5xl"
              shape="round"
              className="text-blue_gray-900_01 tracking-[-0.08px] border-gray-300_06 border border-solid min-w-[77px]"
            >
              Sign In
            </Button>
          </div>
          <div className="flex md:flex-col self-start items-center gap-12">
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
            <ul className="flex gap-12">
              <li>
                <div className="flex p-2 rounded-md">
                  <div className="flex items-center gap-2">
                    <Img src="images/defaultNoData.png" alt="vector_one" className="h-[24px]" />
                    <Heading size="xl" as="h6" className="!text-blue_gray-900_01 tracking-[-0.10px]">
                      Orders
                    </Heading>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex p-2 rounded-md">
                  <div className="flex items-center gap-2">
                    <Img src="images/defaultNoData.png" alt="favorite_one" className="h-[24px] w-[24px]" />
                    <Heading size="xl" as="h6" className="self-start !text-blue_gray-900_01 tracking-[-0.10px]">
                      Favorites
                    </Heading>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex p-2 rounded-md">
                  <div className="flex items-center gap-2">
                    <Img src="images/defaultNoData.png" alt="cart_one" className="h-[24px]" />
                    <Heading size="xl" as="h6" className="!text-blue_gray-900_01 tracking-[-0.10px]">
                      Cart
                    </Heading>
                  </div>
                </div>
              </li>
            </ul>
            <a href="#" className="px-2 py-px rounded">
              <Heading size="xl" as="h6" className="!text-blue_gray-900_01 tracking-[-0.10px] text-center">
                Become a seller
              </Heading>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
