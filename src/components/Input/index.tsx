import React from "react";

const shapes = {
  round: "rounded-md",
} as const;
const variants = {
  fill: {
    gray_100_02: "bg-gray-100_07 text-black-900_01",
    white_A700: "bg-white-A700 text-gray-900_21",
    green_700: "bg-green-700 text-white-A700",
    gray_100_01: "bg-gray-100_06 text-black-900_01",
    white_A700_11: "bg-white-A700_11 text-green-A700",
  },
} as const;
const sizes = {
  "6xl": "h-[68px] px-[35px] text-base",
  "3xl": "h-[57px] pl-6 pr-[35px] text-xl",
  "4xl": "h-[61px] pl-6 pr-[35px] text-xl",
  sm: "h-[38px] pl-3 pr-[35px]",
  "5xl": "h-[65px] px-[35px] text-base",
  xs: "h-[35px] pl-[35px] pr-2.5 text-xs",
  "2xl": "h-[51px] px-2 text-sm",
  xl: "h-[43px] pl-3 pr-[35px]",
  lg: "h-[43px] pl-3 pr-[35px] text-sm",
  md: "h-[40px] pl-4 pr-2 text-sm",
} as const;

type InputProps = Omit<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "size" | "prefix" | "type" | "onChange"
> &
  Partial<{
    className: string;
    name: string;
    placeholder: string;
    type: string;
    label: string;
    prefix: React.ReactNode;
    suffix: React.ReactNode;
    onChange: Function;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "fill",
      size = "md",
      color = "white_A700",
      ...restProps
    },
    ref,
  ) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${className} flex items-center justify-center  ${(shape && shapes[shape]) || ""} ${variants[variant]?.[color as keyof (typeof variants)[typeof variant]] || variants[variant] || ""} ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input ref={ref} type={type} name={name} onChange={handleChange} placeholder={placeholder} {...restProps} />
          {!!suffix && suffix}
        </div>
      </>
    );
  },
);

export { Input };
