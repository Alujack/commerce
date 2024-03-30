import React from "react";

const sizes = {
  "3xl": "text-[19px] font-semibold",
  "2xl": "text-lg font-bold",
  "5xl": "text-[22px] font-semibold",
  "4xl": "text-xl font-bold",
  "7xl": "text-2xl font-extrabold md:text-[22px]",
  "6xl": "text-[23px] font-bold md:text-[21px]",
  "9xl": "text-[28px] font-bold md:text-[26px] sm:text-2xl",
  "8xl": "text-[25px] font-bold md:text-[23px] sm:text-[21px]",
  "16xl": "text-[52px] font-semibold md:text-[44px] sm:text-[38px]",
  "15xl": "text-[45px] font-bold md:text-[41px] sm:text-[35px]",
  "14xl": "text-[40px] font-bold md:text-[38px] sm:text-4xl",
  "13xl": "text-4xl font-semibold md:text-[34px] sm:text-[32px]",
  xl: "text-[17px] font-bold",
  s: "text-[13px] font-semibold",
  md: "text-sm font-bold",
  "12xl": "text-[35px] font-extrabold md:text-[33px] sm:text-[31px]",
  xs: "text-xs font-black",
  lg: "text-base font-semibold",
  "11xl": "text-[32px] font-bold md:text-3xl sm:text-[28px]",
  "10xl": "text-3xl font-bold md:text-[28px] sm:text-[26px]",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "lg",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900_01 font-manrope ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
