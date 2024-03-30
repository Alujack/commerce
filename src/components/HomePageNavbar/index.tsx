import React from "react";
import { Heading, Img } from "./..";

interface Props {
  className?: string;
  button?: string;
  buttonOne?: string;
  buttonTwo?: string;
  buttontitleOne?: string;
  buttontitleTwo?: string;
  buttontitle?: string;
  buttonThree?: string;
}

export default function HomePageNavbar({
  button = "Home",
  buttonOne = "Store",
  buttonTwo = "FQA",
  buttontitleOne = "Orders",
  buttontitleTwo = "Favorites",
  buttontitle = "Cart",
  buttonThree = "Become a seller",
  ...props
}: Props) {
  return (
    <div {...props}>
      <a href="#" className="px-2 py-px rounded">
        <Heading size="xl" as="h1" className="!text-blue_gray-900_01 tracking-[-0.10px] text-center">
          {button}
        </Heading>
      </a>
      <a href="#" className="px-2 py-px rounded">
        <Heading size="xl" as="h2" className="!text-blue_gray-900_01 tracking-[-0.10px] text-center">
          {buttonOne}
        </Heading>
      </a>
      <a href="#" className="px-2 py-px rounded">
        <Heading size="xl" as="h2" className="!text-blue_gray-900_01 tracking-[-0.10px] text-center">
          {buttonTwo}
        </Heading>
      </a>
      <ul className="flex gap-12">
        <li>
          <div className="flex p-2 rounded-md">
            <div className="flex items-center gap-2">
              <Img src="images/defaultNoData.png" alt="vector_one" className="h-[24px]" />
              <Heading size="xl" as="h2" className="!text-blue_gray-900_01 tracking-[-0.10px]">
                {buttontitleOne}
              </Heading>
            </div>
          </div>
        </li>
        <li>
          <div className="flex p-2 rounded-md">
            <div className="flex items-center gap-2">
              <Img src="images/defaultNoData.png" alt="favorite_one" className="h-[24px] w-[24px]" />
              <Heading size="xl" as="h2" className="self-start !text-blue_gray-900_01 tracking-[-0.10px]">
                {buttontitleTwo}
              </Heading>
            </div>
          </div>
        </li>
        <li>
          <div className="flex p-2 rounded-md">
            <div className="flex items-center gap-2">
              <Img src="images/defaultNoData.png" alt="cart_one" className="h-[24px]" />
              <Heading size="xl" as="h2" className="!text-blue_gray-900_01 tracking-[-0.10px]">
                {buttontitle}
              </Heading>
            </div>
          </div>
        </li>
      </ul>
      <a href="#" className="px-2 py-px rounded">
        <Heading size="xl" as="h2" className="!text-blue_gray-900_01 tracking-[-0.10px] text-center">
          {buttonThree}
        </Heading>
      </a>
    </div>
  );
}
