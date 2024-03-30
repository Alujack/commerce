import React from "react";

const variants = {
  primary:
    "border-blue_gray-300_01 border border-solid checked:border-black-900_3f_01 checked:border checked:border-solid checked:bg-white-A700 checked:focus:bg-white-A700 checked:focus:border-black-900_3f_01",
} as const;
const sizes = {
  xs: "",
  sm: "h-[12px] w-[12px]",
  md: "h-[14px] w-[14px] rounded-[3px]",
  lg: "h-[20px] w-[20px] rounded-[5px]",
} as const;

type CheckboxProps = Omit<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "size" | "prefix" | "type" | "onChange"
> &
  Partial<{
    className: string;
    name: string;
    label: string;
    id: string;
    onChange: Function;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    onClick: () => void;
  }>;
const CheckBox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className = "",
      name = "",
      children,
      label = "",
      id = "checkbox_id",
      onChange,
      variant = "primary",
      size = "md",
      ...restProps
    },
    ref,
  ) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (onChange) onChange(e?.target?.checked);
    };

    return (
      <>
        <div className={className + " flex items-center gap-[5px] cursor-pointer"}>
          <input
            className={` ${(size && sizes[size]) || ""} ${(variant && variants[variant]) || ""}`}
            ref={ref}
            type="checkbox"
            name={name}
            onChange={handleChange}
            id={id}
            {...restProps}
          />
          <label htmlFor={id}>{label}</label>
        </div>
        {children}
      </>
    );
  },
);

export { CheckBox };
