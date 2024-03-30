import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, Input, Heading } from "../../components";

export default function SignUpPage() {
  return (
    <>
      <Helmet>
        <title>Techness-Ecommerce</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full p-[15px] bg-gray-300_12">
        <div className="flex md:flex-col justify-between items-center w-full mb-[165px] gap-5 p-[26px] mx-auto md:p-5 bg-white-A700 max-w-[1330px] rounded-[10px]">
          <Img
            src="images/defaultNoData.png"
            alt="Group 3653"
            className="w-[37%] md:w-full ml-[102px] md:ml-0 object-cover"
          />
          <div className="flex flex-col w-[58%] md:w-full mb-3.5 mr-[77px] gap-11 px-[51px] md:mr-0 md:px-5">
            <div className="flex flex-col gap-[9px]">
              <Heading size="16xl" as="h1" className="!text-black-900_02 tracking-[-2.00px] !font-poppins text-center">
                Create Free Account
              </Heading>
              <Text
                size="3xl"
                as="p"
                className="w-[96%] md:w-full !text-blue_gray-700_03 !font-poppins text-center leading-[30px]"
              >
                Clarity gives you the blocks and components you need to create a truly professional website.
              </Text>
            </div>
            <div className="flex flex-col items-center justify-center gap-[23px] p-[25px] sm:p-5 bg-white-A700 shadow-xs rounded-[20px]">
              <Input
                name="Button Primary With"
                placeholder={`First & Last Name`}
                className="self-stretch h-[65px] px-[35px] sm:px-5 text-blue_gray-700_03 font-poppins text-base border-gray-300_09 border border-solid bg-white-A700 rounded-[9px]"
              />
              <Input
                name="Button Primary With"
                placeholder={`Email Address`}
                className="self-stretch h-[65px] px-[35px] sm:px-5 text-blue_gray-700_03 font-poppins text-base border-gray-300_09 border border-solid bg-white-A700 rounded-[9px]"
              />
              <Input
                name="Button Primary With"
                placeholder={`Create Password`}
                className="self-stretch h-[65px] px-[35px] sm:px-5 text-blue_gray-700_03 font-poppins text-base border-gray-300_09 border border-solid bg-white-A700 rounded-[9px]"
              />
              <div className="flex self-start items-start w-[72%] md:w-full ml-[5px] gap-[9px] md:ml-0">
                <div className="h-[19px] w-[19px] border-blue_gray-300_01 border border-solid rounded-[5px]" />
                <Text as="p" className="!text-black-900_02 !font-poppins">
                  <span className="text-black-900_02">I agree with the&nbsp;</span>
                  <span className="text-blue-A700_02">Terms & Conditions of Clarity</span>
                </Text>
              </div>
              <Button className="h-[65px] w-full px-[35px] sm:px-5 text-white-A700 tracking-[-0.20px] font-poppins text-base font-semibold bg-blue-A700_02 rounded-[9px]">
                Sign Up
              </Button>
              <Button
                leftIcon={<Img src="images/defaultNoData.png" alt="google" className="w-[24px] h-[24px]" />}
                className="h-[65px] w-full gap-[11px] px-[35px] sm:px-5 text-blue_gray-900_07 tracking-[-0.20px] font-poppins text-base font-semibold bg-gray-50_03 rounded-[10px]"
              >
                Sign up with Google
              </Button>
              <Text as="p" className="mb-[3px] !text-gray-600_04 !font-poppins text-center">
                <span className="text-gray-600_04">Already have an account?&nbsp;</span>
                <span className="text-blue-A700_02 font-semibold">Sign in</span>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
