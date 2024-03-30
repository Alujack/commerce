import React from "react";
import { Heading } from "./..";

interface Props {
  className?: string;
  listitemlink?: string;
  listitemlink1?: string;
  listitemlink2?: string;
  listitemlink3?: string;
  listitemlink4?: string;
  listitemlink5?: string;
  listitemlink6?: string;
  listitemlink7?: string;
  listitemlink8?: string;
  listitemlink9?: string;
  listitemlink10?: string;
  listitemlink11?: string;
}

export default function HomePageColumnlistiteml({
  listitemlink = "Clearance",
  listitemlink1 = "Accessories",
  listitemlink2 = "Home & Lifestyle",
  listitemlink3 = "Health & Beauty",
  listitemlink4 = "Groceries & Pet",
  listitemlink5 = "Baby’s & Toys",
  listitemlink6 = "Networking",
  listitemlink7 = "Sport & Outdoor",
  listitemlink8 = "Medicine",
  listitemlink9 = "Electronic ",
  listitemlink10 = "Man’s Fashion",
  listitemlink11 = "Woman’s fashion",
  ...props
}: Props) {
  return (
    <div {...props}>
      <Heading size="s" as="h1" className="capitalize">
        {listitemlink}
      </Heading>
      <Heading size="s" as="h2" className="capitalize">
        {listitemlink1}
      </Heading>
      <Heading size="s" as="h2" className="capitalize">
        {listitemlink2}
      </Heading>
      <Heading size="s" as="h2" className="capitalize">
        {listitemlink3}
      </Heading>
      <Heading size="s" as="h2" className="capitalize">
        {listitemlink4}
      </Heading>
      <Heading size="s" as="h2" className="capitalize">
        {listitemlink5}
      </Heading>
      <Heading size="s" as="h2" className="capitalize">
        {listitemlink6}
      </Heading>
      <Heading size="s" as="h2" className="capitalize">
        {listitemlink7}
      </Heading>
      <Heading size="s" as="h2" className="capitalize">
        {listitemlink8}
      </Heading>
      <Heading size="s" as="h2" className="capitalize">
        {listitemlink9}
      </Heading>
      <Heading size="s" as="h2" className="capitalize">
        {listitemlink10}
      </Heading>
      <Heading size="s" as="h2" className="capitalize">
        {listitemlink11}
      </Heading>
    </div>
  );
}
