import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Text, Heading, Button, Img, CheckBox, Input } from "../../components";

export default function ConfirmPaymentPage() {
  const [searchBarValue32, setSearchBarValue32] = React.useState("");

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
                  value={searchBarValue32}
                  onChange={(e: string) => setSearchBarValue32(e)}
                  suffix={
                    searchBarValue32?.length > 0 ? (
                      <CloseSVG onClick={() => setSearchBarValue32("")} height={24} width={24} fillColor="#b0b9beff" />
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
            <div className="flex items-end p-[30px] sm:p-5 bg-white-A700 flex-wrap rounded-[10px]">
              <Heading size="md" as="h1" className="mt-[3px] mb-0.5 !text-gray-500">
                Home
              </Heading>
              <Heading size="md" as="h2" className="mb-0.5 ml-[7px] !text-gray-600_06">
                /
              </Heading>
              <Heading size="md" as="h3" className="ml-[7px] !text-gray-500">
                pages
              </Heading>
              <Heading size="md" as="h4" className="mb-0.5 ml-[7px] !text-gray-600_06">
                /
              </Heading>
              <Heading size="md" as="h5" className="ml-[7px] !text-gray-500">
                checkout
              </Heading>
              <Heading size="md" as="h6" className="mb-0.5 ml-[7px] !text-gray-600_06">
                /
              </Heading>
              <Heading size="md" as="p" className="ml-2.5">
                Conform Payment
              </Heading>
            </div>
            <div className="flex flex-col items-start justify-center h-[1015px] md:h-auto pl-[138px] pr-14 gap-[30px] py-[138px] md:p-5 bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat">
              <Heading as="h6" className="ml-[271px] md:ml-0 !font-bold">
                Your Order
              </Heading>
              <div className="self-center w-[45%] md:w-full">
                <div className="p-[23px] sm:p-5 z-[1] bg-blue_gray-50_05 rounded-[10px]">
                  <div className="flex justify-between pb-[9px] gap-5 border-gray-300_10 border-b border-solid flex-wrap">
                    <Text size="s" as="p" className="!text-gray-700_03 uppercase !font-medium">
                      Product
                    </Text>
                    <Text size="s" as="p" className="!text-gray-700_03 uppercase !font-medium">
                      sub total
                    </Text>
                  </div>
                  <div className="flex flex-col justify-center mt-2 gap-6 py-[9px] border-gray-300_10 border-b border-solid">
                    <div className="flex items-center w-[59%] md:w-full gap-[15px]">
                      <Img src="images/defaultNoData.png" alt="prod37 png" className="w-[60px] object-cover" />
                      <div className="flex flex-col self-start items-start gap-[5px] flex-1">
                        <Text as="p" className="!font-medium leading-[19px]">
                          <>
                            Pinnaeple Macbook Pro 2022
                            <br />
                            M1/ 512GB
                          </>
                        </Text>
                        <Text as="p" className="!text-gray-700_03">
                          x 3
                        </Text>
                      </div>
                    </div>
                    <div className="flex justify-between gap-5 flex-wrap">
                      <Text as="p" className="self-end">
                        Worldwide Standard Shipping Free
                      </Text>
                      <Text as="p" className="self-start !text-red-600">
                        + $9.50
                      </Text>
                    </div>
                  </div>
                  <div className="flex justify-between gap-5 my-[19px] flex-wrap">
                    <Heading as="h6" className="self-start !font-bold">
                      Order Total
                    </Heading>
                    <Heading as="h6" className="!text-green-700 !font-bold">
                      $1,746.50
                    </Heading>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-center mt-[-15px] p-6 sm:p-5 relative bg-gray-300_11 rounded-[10px]">
                  <div className="flex flex-col self-stretch items-start mt-[23px] gap-[7px]">
                    <div className="flex items-center gap-[11px]">
                      <Img src="images/defaultNoData.png" alt="image fill" className="w-[20px] object-cover" />
                      <Heading size="md" as="p" className="self-start">
                        Direct Bank Transfer
                      </Heading>
                    </div>
                    <Text size="md" as="p" className="self-end w-[90%] md:w-full !text-gray-700_03 leading-[22px]">
                      <>
                        Make your payment directly into our bank account. Please use your
                        <br />
                        Order ID as the payment reference. Your order will not be shipped
                        <br />
                        until the funds have cleared in our account.
                      </>
                    </Text>
                  </div>
                  <CheckBox
                    name="Label   Heading"
                    label="Cash on Delivery"
                    id="LabelHeading3"
                    className="mt-[9px] gap-[11px] py-px text-black-900_01 text-left text-sm font-bold"
                  />
                  <div className="flex self-stretch justify-between items-center mt-[15px] gap-5">
                    <CheckBox
                      name="Label   Heading"
                      label="Bank"
                      id="LabelHeading2"
                      className="gap-[11px] p-px text-black-900_01 text-left text-sm font-bold"
                    />
                    <div className="flex gap-2">
                      <Img src="images/defaultNoData.png" alt="Visa" className="object-cover" />
                      <Img src="images/defaultNoData.png" alt="Mastercard" className="object-cover" />
                      <Img src="images/defaultNoData.png" alt="Nagad" className="object-cover" />
                    </div>
                  </div>
                  <div className="flex self-stretch justify-between items-start mt-[25px] gap-5">
                    <div className="flex flex-col w-[40%]">
                      <CheckBox
                        name="Label   Heading"
                        label="Paypal "
                        id="LabelHeading1"
                        className="pl-[31px] py-px sm:pl-5 text-black-900_01 text-left text-sm font-bold"
                      />
                      <CheckBox
                        name="Label   Heading"
                        label="What’s Paypal?"
                        id="LabelHeading"
                        className="mt-[-21px] pt-1 gap-[35px] text-blue-A400_01 text-left text-sm relative underline"
                      />
                    </div>
                    <Img src="images/defaultNoData.png" alt="Label   paypal png" className="w-[13%] object-cover" />
                  </div>
                  <Button className="h-[50px] w-full mt-[79px] mb-[19px] px-[35px] sm:px-5 text-white-A700 uppercase text-xs font-medium bg-green-700 rounded-[10px]">
                    place order
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col gap-9">
              <Img
                src="images/defaultNoData.png"
                alt="banner2 png"
                className="w-[50%] md:w-full object-cover rounded-[10px]"
              />
              <Img
                src="images/defaultNoData.png"
                alt="banner3 png"
                className="w-[50%] md:w-full object-cover rounded-[10px]"
              />
            </div>
          </div>
        </div>
        <footer className="px-14 py-[67px] md:p-5 bg-white-A700">
          <div className="flex flex-col items-center justify-center w-full mt-[7px] gap-[46px] py-[7px] mx-auto md:p-5 bg-gray-100_04 max-w-[1343px] rounded-[10px]">
            <div className="flex md:flex-col justify-between items-center w-[92%] md:w-full gap-5">
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
            <div className="flex md:flex-col items-start w-[93%] md:w-full mb-[5px]">
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
