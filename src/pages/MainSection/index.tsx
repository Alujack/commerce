import React from "react";
import { Helmet } from "react-helmet";
import { Text } from "../../components";

export default function MainSectionPage() {
  return (
    <>
      <Helmet>
        <title>Techness-Ecommerce</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex justify-center w-full px-14 py-[230px] md:p-5 bg-white-A700_4c_01">
        <div className="flex flex-col items-center mb-[17px] gap-5">
          <Text size="7xl" as="p" className="tracking-[3.30px]">
            404 Not Found
          </Text>
          <Text size="2xl" as="p" className="!font-poppins">
            Your visited page not found. You may go home page.
          </Text>
        </div>
      </div>
    </>
  );
}
