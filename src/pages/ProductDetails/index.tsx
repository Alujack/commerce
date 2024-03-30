import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Text, Heading, Button, Img, CheckBox, Input } from "../../components";

export default function ProductDetailsPage() {
  const [searchBarValue35, setSearchBarValue35] = React.useState("");

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
                  value={searchBarValue35}
                  onChange={(e: string) => setSearchBarValue35(e)}
                  suffix={
                    searchBarValue35?.length > 0 ? (
                      <CloseSVG onClick={() => setSearchBarValue35("")} height={24} width={24} fillColor="#b0b9beff" />
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
            <div className="flex md:flex-col justify-between items-start gap-5 p-[30px] sm:p-5 bg-white-A700 rounded-[10px]">
              <div className="w-[39%] md:w-full">
                <div className="h-[500px] md:h-auto relative">
                  <Img src="images/defaultNoData.png" alt="Group   1   3  " className="h-[500px] w-full object-cover" />
                  <div className="flex justify-between items-center w-[84%] right-[8.00px] top-[5.00px] gap-5 m-auto absolute">
                    <Button className="h-[23px] px-1.5 text-white-A700 uppercase text-[10px] bg-gray-900_12 min-w-[39px] rounded-[5px]">
                      new
                    </Button>
                    <Heading
                      size="md"
                      as="h1"
                      className="flex justify-center items-center h-[30px] w-[30px] text-center !font-black bg-blue_gray-50 rounded-[15px]"
                    >
                      
                    </Heading>
                  </div>
                </div>
                <div className="flex gap-5">
                  <Img src="images/defaultNoData.png" alt="Group   1   3  " className="w-[16%] object-cover" />
                  <Img src="images/defaultNoData.png" alt="Group   2   3  " className="w-[88px] object-cover" />
                  <Img src="images/defaultNoData.png" alt="Group   3   3  " className="w-[88px] object-cover" />
                </div>
              </div>
              <div className="flex flex-col items-start w-[30%] md:w-full mt-0.5">
                <div className="flex gap-1 flex-wrap">
                  <Heading size="s" as="h2" className="!text-amber-700_01 !font-black">
                    <span className="text-amber-700_01"></span>
                    <span className="text-gray-500"></span>
                  </Heading>
                  <Text size="md" as="p" className="self-start !text-gray-700_03">
                    (5)
                  </Text>
                </div>
                <Heading as="h3" className="w-[83%] md:w-full mt-[7px] !font-bold leading-[19px]">
                  <>
                    Pinnapple Macbook Pro 2022 M1 / 512GB
                    <br />
                    Dark Grey
                  </>
                </Heading>
                <Heading size="5xl" as="h4" className="mt-[19px]">
                  $579.00
                </Heading>
                <div className="flex flex-col self-stretch mt-[18px] gap-[5px]">
                  <div className="flex items-center gap-[11px]">
                    <div className="self-end h-[6px] w-[6px] mb-1 bg-gray-700_03 rounded-[3px]" />
                    <Text size="s" as="p">
                      Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core
                    </Text>
                  </div>
                  <div className="flex items-center gap-[11px]">
                    <div className="self-end h-[6px] w-[6px] mb-1 bg-gray-700_03 rounded-[3px]" />
                    <Text size="s" as="p">
                      DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory
                    </Text>
                  </div>
                  <div className="flex items-center gap-[11px]">
                    <div className="self-end h-[6px] w-[6px] mb-1 bg-gray-700_03 rounded-[3px]" />
                    <Text size="s" as="p">
                      Commanding Power Design: Twin 16+1+2 Phases Digital VRM
                    </Text>
                  </div>
                </div>
                <div className="self-stretch h-[54px] mt-[17px] pr-[5px] py-[5px] border-gray-300_10 border-b border-solid relative">
                  <div className="h-[28px] w-[29%] opacity-0.05 bg-green-700_5e_01 absolute rounded-md" />
                  <Text
                    size="s"
                    as="p"
                    className="left-[15.00px] top-[11.65px] m-auto !text-green-700 uppercase absolute"
                  >
                    free shipping
                  </Text>
                </div>
                <CheckBox
                  name="In stock"
                  label=" In stock"
                  id="Instock"
                  className="mt-5 gap-[7px] p-px text-black-900_01 text-left text-xs"
                />
                <div className="flex flex-col items-start mt-[25px] gap-[7px]">
                  <Heading size="md" as="h5">
                    qty
                  </Heading>
                  <div className="flex items-center">
                    <div className="flex items-center p-[7px] border-gray-500_33_01 border border-solid bg-white-A700 rounded-[10px]">
                      <Img src="images/defaultNoData.png" alt="settings" className="my-[7px] object-cover" />
                      <Button className="h-[23px] px-[26px] sm:px-5 text-black-900_01 text-sm font-bold bg-white-A700 min-w-[60px]">
                        1
                      </Button>
                      <Img src="images/defaultNoData.png" alt="settings" className="object-cover" />
                    </div>
                    <Button className="self-start h-[50px] ml-[23px] px-[35px] sm:px-5 text-white-A700 uppercase text-xs font-medium bg-green-700 min-w-[168px] rounded-[10px]">
                      Add To Cart
                    </Button>
                    <Button className="self-start h-[50px] w-[50px] ml-[42px] bg-blue_gray-50_06 rounded-[25px]">
                      <Img src="images/defaultNoData.png" />
                    </Button>
                  </div>
                </div>
                <Text size="s" as="p" className="mt-[18px]">
                  Guaranteed Safe Checkout
                </Text>
                <div className="flex self-stretch mt-3.5 pb-[21px] sm:pb-5 border-gray-300_10 border-b border-solid">
                  <Img src="images/defaultNoData.png" alt="pay png" className="w-[58%] object-cover" />
                </div>
                <div className="flex flex-col items-start mt-[25px] gap-[9px]">
                  <div className="flex gap-[7px] flex-wrap">
                    <Heading size="md" as="h6" className="uppercase">
                      SKU:{" "}
                    </Heading>
                    <Text as="p" className="!text-gray-700_03">
                      ABC025168
                    </Text>
                  </div>
                  <div className="flex gap-1.5 flex-wrap">
                    <Heading size="md" as="p" className="self-start uppercase">
                      Category:{" "}
                    </Heading>
                    <Text as="p" className="!text-gray-700_03">
                      Cell Phones & Tablets
                    </Text>
                  </div>
                  <div className="flex items-start gap-1.5 flex-wrap">
                    <Heading size="md" as="p" className="uppercase">
                      Tags:{" "}
                    </Heading>
                    <Text as="p" className="!text-gray-700_03">
                      Laptop, Macbook, Computer, M1
                    </Text>
                  </div>
                </div>
                <div className="flex mt-[21px] gap-[13px]">
                  <Button className="h-[40px] w-[40px] bg-gray-300_12 rounded-[20px]">
                    <Img src="images/defaultNoData.png" />
                  </Button>
                  <Button className="h-[40px] w-[40px] bg-gray-300_12 rounded-[20px]">
                    <Img src="images/defaultNoData.png" />
                  </Button>
                  <Button className="h-[40px] w-[40px] bg-gray-300_12 rounded-[20px]">
                    <Img src="images/defaultNoData.png" />
                  </Button>
                  <Button className="h-[40px] w-[40px] bg-gray-300_12 rounded-[20px]">
                    <Img src="images/defaultNoData.png" />
                  </Button>
                  <Button className="h-[40px] w-[40px] bg-gray-300_12 rounded-[20px]">
                    <Img src="images/defaultNoData.png" />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-start w-[21%] md:w-full gap-[13px]">
                <div className="flex flex-col self-stretch items-start gap-[35px] p-[30px] sm:p-5 bg-blue_gray-50_06 rounded-[10px]">
                  <Text as="p" className="mt-[5px] !text-gray-700_03">
                    <span className="text-gray-700_03">Brand:&nbsp;</span>
                    <span className="text-black-900_01 font-bold">Sonex</span>
                  </Text>
                  <Img src="images/defaultNoData.png" alt="brand6 png" className="self-center w-[69%] object-cover" />
                </div>
                <div className="flex flex-col self-stretch items-start justify-center p-[21px] sm:p-5 border-green-700 border border-solid rounded-[10px]">
                  <Heading as="h6" className="mt-[3px] !font-bold">
                    Your Cart
                  </Heading>
                  <div className="flex flex-col self-stretch items-end mt-[23px]">
                    <Heading size="s" as="p" className="w-[59%] md:w-full mr-3 md:mr-0 !font-bold z-[1] leading-[18px]">
                      <>
                        Pinnaeple Macbook
                        <br />
                        Pro 2022 M1/ 512GB
                      </>
                    </Heading>
                    <div className="flex self-stretch items-center mt-[-36px] pb-4 gap-[19px] relative border-gray-300_10 border-b border-solid">
                      <Img src="images/defaultNoData.png" alt="prod37 png" className="w-[70px] object-cover" />
                      <Text size="s" as="p" className="self-end mb-[11px] !text-gray-700_03">
                        3 x $579.00
                      </Text>
                    </div>
                  </div>
                  <div className="flex self-stretch justify-between items-center gap-5 border-gray-300_10 border-b border-solid flex-wrap">
                    <Text as="p" className="mt-4 mb-[17px] !text-gray-700_03">
                      Sub Total:
                    </Text>
                    <Heading size="md" as="p">
                      $1,737.00
                    </Heading>
                  </div>
                  <div className="flex self-stretch justify-between mt-4 gap-5">
                    <Button className="h-[50px] px-3.5 text-white-A700 uppercase text-xs font-medium bg-gray-900_12 min-w-[96px] rounded-[10px]">
                      view cart
                    </Button>
                    <Button className="h-[50px] px-3.5 text-white-A700 uppercase text-xs font-medium bg-green-700 min-w-[96px] rounded-[10px]">
                      checkout
                    </Button>
                  </div>
                </div>
                <div className="flex items-center gap-[11px]">
                  <Img src="images/defaultNoData.png" alt="settings" className="object-cover" />
                  <Text as="p" className="self-end !text-gray-700_03">
                    <span className="text-gray-700_03">Ships from</span>
                    <span className="text-black-900_01">&nbsp;</span>
                    <span className="text-black-900_01 font-bold">United States</span>
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col gap-9">
              <div className="flex w-[49%] md:w-full rounded-[10px]">
                <Img
                  src="images/defaultNoData.png"
                  alt="banner2 png"
                  className="h-[180px] w-full md:h-auto object-cover rounded-[10px]"
                />
              </div>
              <Img
                src="images/defaultNoData.png"
                alt="banner3 png"
                className="w-[49%] md:w-full object-cover rounded-[10px]"
              />
            </div>
            <div className="flex flex-col gap-[15px] bg-white-A700">
              <div className="flex md:flex-col items-center gap-[17px]">
                <div className="md:self-stretch flex-1">
                  <div className="flex justify-between items-center gap-5 p-[15px] bg-green-700 rounded-[10px]">
                    <Heading
                      size="4xl"
                      as="h5"
                      className="self-end mb-1 ml-[15px] md:ml-0 !text-white-A700 uppercase !font-semibold"
                    >
                      Explore Our Product’s discount
                    </Heading>
                    <Button className="h-[31px] mr-[9px] px-2.5 md:mr-0 text-gray-800_01 capitalize text-lg font-medium bg-gray-200_02 min-w-[89px] rounded-[10px]">
                      View All{" "}
                    </Button>
                  </div>
                  <div className="flex md:flex-col items-start gap-[34px] p-[30px] sm:p-5 bg-gray-100_04 rounded-[10px]">
                    <div className="md:self-stretch h-[400px] md:w-full md:h-auto pt-[22px] pl-[22px] sm:pt-5 sm:pl-5 flex-1 relative md:flex-none">
                      <div className="flex sm:flex-col justify-center items-center w-full">
                        <div className="flex flex-col w-[7%] sm:w-full pb-[65px] gap-5 md:pb-5">
                          <Img src="images/defaultNoData.png" alt="Group   1   4  " className="h-[60px] object-cover" />
                          <Img src="images/defaultNoData.png" alt="Group   2   4  " className="h-[60px] object-cover" />
                          <Img src="images/defaultNoData.png" alt="Group   3   4  " className="h-[60px] object-cover" />
                          <Img src="images/defaultNoData.png" alt="Group   4   4  " className="h-[60px] object-cover" />
                        </div>
                        <div className="sm:self-stretch ml-[-22px] sm:ml-0 relative flex-1">
                          <Img
                            src="images/defaultNoData.png"
                            alt="prod5 png"
                            className="h-[280px] w-full md:h-auto object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-center left-[14%] top-[13%] p-[5px] m-auto bg-green-700 absolute rounded-[10px]">
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
                        className="flex justify-center items-center h-[30px] w-[30px] right-[10%] top-[15%] m-auto text-center !font-black bg-blue_gray-50 absolute rounded-[15px]"
                      >
                        
                      </Heading>
                    </div>
                    <div className="flex flex-col items-start w-[47%] md:w-full mt-0.5">
                      <div className="flex gap-1 flex-wrap">
                        <Heading size="s" as="p" className="self-end !text-amber-700_01 !font-black">
                          
                        </Heading>
                        <Text size="md" as="p" className="self-start !text-gray-700_03">
                          (12)
                        </Text>
                      </div>
                      <Heading as="h6" className="w-[79%] md:w-full mt-[5px] !font-bold leading-[19px]">
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
                      <div className="flex flex-col w-[84%] md:w-full mt-[18px] gap-[5px]">
                        <div className="flex items-center gap-[11px]">
                          <div className="h-[6px] w-[6px] bg-gray-700_03 rounded-[3px]" />
                          <Text size="s" as="p">
                            Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core
                          </Text>
                        </div>
                        <div className="flex items-center gap-[11px]">
                          <div className="h-[6px] w-[6px] bg-gray-700_03 rounded-[3px]" />
                          <Text size="s" as="p">
                            DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory
                          </Text>
                        </div>
                        <div className="flex items-center gap-[11px]">
                          <div className="h-[6px] w-[6px] bg-gray-700_03 rounded-[3px]" />
                          <Text size="s" as="p">
                            Commanding Power Design: Twin 16+1+2 Phases Digital VRM
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col self-stretch mt-[22px] gap-[30px]">
                        <div className="flex w-[59%] md:w-full ml-[15px] md:ml-0">
                          <div className="flex items-center flex-1">
                            <div className="flex items-center flex-1">
                              <Text size="s" as="p" className="!text-green-700 uppercase">
                                free shipping
                              </Text>
                              <div className="h-[28px] ml-[-78px] opacity-0.05 relative bg-green-700_5e_01 flex-1 rounded-md" />
                            </div>
                            <Text size="s" as="p" className="ml-[-6px] !text-red-600 uppercase relative">
                              free gift
                            </Text>
                          </div>
                          <div className="h-[28px] w-[34%] ml-[-43px] opacity-0.05 relative bg-red-600_5e_01 rounded-md" />
                        </div>
                        <div className="flex sm:flex-col items-center gap-5">
                          <Text size="md" as="p" className="w-[28%] sm:w-full uppercase !font-medium leading-[19px]">
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
                              <div className="flex flex-col items-center w-full gap-[15px] p-[11px] bg-blue_gray-50 rounded-md">
                                <Heading size="4xl" as="h5" className="self-end mr-[13px] md:mr-0 text-center">
                                  -162
                                </Heading>
                                <Heading size="md" as="p" className="!text-gray-700_03 text-center">
                                  d
                                </Heading>
                              </div>
                              <div className="flex justify-center items-start w-full ml-[-34px] p-[7px] relative bg-blue_gray-50 flex-wrap rounded-md">
                                <Heading size="4xl" as="h5" className="mb-[30px] text-center">
                                  -9
                                </Heading>
                                <Heading size="md" as="p" className="mt-2.5 !text-gray-700_03 text-center">
                                  h
                                </Heading>
                              </div>
                            </div>
                            <div className="flex w-full">
                              <div className="flex justify-center items-start w-full p-[7px] bg-blue_gray-50 flex-wrap rounded-md">
                                <Heading size="4xl" as="h5" className="h-[30px] mb-[30px] text-center">
                                  -32
                                </Heading>
                                <Heading size="md" as="p" className="mt-3 !text-gray-700_03 text-center">
                                  m
                                </Heading>
                              </div>
                              <div className="flex justify-center items-start w-full ml-[-34px] p-[7px] relative bg-blue_gray-50 flex-wrap rounded-md">
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
                      </div>
                      <div className="flex flex-col self-stretch items-start mt-5 gap-[13px] py-1 border-gray-300_10 border-t border-solid">
                        <div className="self-stretch h-[8px] mt-4 bg-gray-300_12 relative rounded">
                          <div style={{ width: "46%" }} className="h-full bg-green-700 absolute rounded" />
                        </div>
                        <Text size="md" as="p" className="!text-gray-700_03">
                          <span className="text-gray-700_03">Sold:&nbsp;</span>
                          <span className="text-black-900_01 font-bold">26/75</span>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-[23%] md:w-full gap-2">
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
              <div className="flex md:flex-col gap-5">
                <div className="flex flex-col w-full pt-4 gap-3 px-4 border-black-900_33_01 border border-solid bg-white-A700 rounded">
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
                <div className="flex flex-col w-full pt-4 gap-3 px-4 border-black-900_33_01 border border-solid bg-white-A700 rounded">
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
                <div className="flex flex-col w-full pt-4 gap-3 px-4 border-black-900_33_01 border border-solid bg-white-A700 rounded">
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
                <div className="flex flex-col w-full pt-4 gap-3 px-4 border-black-900_33_01 border border-solid bg-white-A700 rounded">
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
                <div className="flex flex-col w-full pt-4 gap-3 px-4 border-black-900_33_01 border border-solid bg-white-A700 rounded">
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
