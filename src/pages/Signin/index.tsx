import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, CheckBox, Input, Heading } from "../../components";

export default function SigninPage() {
  return (
    <>
      <Helmet>
        <title>Techness-Ecommerce</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full p-[15px] bg-gray-300_12">
        <div className="flex md:flex-col justify-between items-start w-full mb-[165px] gap-5 p-[30px] mx-auto md:p-5 bg-white-A700 max-w-[1330px] rounded-[10px]">
          <div className="flex flex-col items-center w-[38%] md:w-full mt-[17px] ml-[98px] gap-[139px] md:gap-[104px] md:ml-0 sm:gap-[69px]">
            <div className="flex flex-col items-start gap-[15px]">
              <Heading size="9xl" as="h1" className="!text-green-700">
                Welcome Back
              </Heading>
              <Text as="p" className="!text-gray-500 tracking-[2.00px] uppercase">
                login to continue
              </Text>
            </div>
            <Img src="images/defaultNoData.png" alt="Group 3653" className="h-[327px] w-full md:h-auto object-cover" />
          </div>
          <div className="flex flex-col items-center w-[54%] md:w-full mb-[91px] mr-[104px] gap-[11px] md:mr-0">
            <div className="flex flex-col self-stretch items-center gap-2.5">
              <Heading size="16xl" as="h2" className="!text-black-900_02 tracking-[-2.00px] !font-poppins text-center">
                Sign in to your account
              </Heading>
              <Text
                size="3xl"
                as="p"
                className="w-[78%] md:w-full !text-blue_gray-700_03 !font-poppins text-center leading-[30px]"
              >
                Clarity gives you the blocks and components you need to create a truly professional website.
              </Text>
            </div>
            <div className="flex flex-col items-center justify-center w-[84%] md:w-full gap-[26px] p-[27px] sm:p-5 bg-white-A700 shadow-xs rounded-[20px]">
              <Input
                name="Button Primary With"
                placeholder={`Email Address`}
                className="self-stretch h-[68px] mt-1 px-[35px] sm:px-5 text-blue_gray-700_03 font-poppins text-base border-gray-300_09 border border-solid bg-white-A700 rounded-[9px]"
              />
              <Input
                name="Button Primary With"
                placeholder={`Create Password`}
                className="self-stretch h-[68px] px-[35px] sm:px-5 text-blue_gray-700_03 font-poppins text-base border-gray-300_09 border border-solid bg-white-A700 rounded-[9px]"
              />
              <div className="flex self-stretch justify-between gap-5">
                <CheckBox
                  name="Remember me"
                  label="Remember me"
                  id="Rememberme"
                  className="self-start gap-[9px] p-px text-black-900_02 font-poppins text-left text-sm"
                />
                <a href="#" className="self-end">
                  <Text as="p" className="!text-black-900_02 !font-poppins">
                    Forgot password?
                  </Text>
                </a>
              </div>
              <Button className="h-[68px] w-full px-[35px] sm:px-5 text-white-A700 tracking-[-0.20px] font-poppins text-base font-semibold bg-blue-A700_02 rounded-[9px]">
                Sign In
              </Button>
              <Button
                leftIcon={<Img src="images/defaultNoData.png" alt="google" className="w-[21px] h-[24px]" />}
                className="h-[68px] w-full gap-px px-[35px] sm:px-5 text-blue_gray-900_07 tracking-[-0.20px] font-poppins text-base font-semibold bg-gray-50_03 rounded-[10px]"
              >
                Sign in with Google
              </Button>
              <Text as="p" className="mb-1 !text-gray-600_04 !font-poppins text-center">
                <span className="text-gray-600_04">Don&#39;t have an account?&nbsp;</span>
                <span className="text-blue-A700_02 font-semibold">Sign up</span>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
