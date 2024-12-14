import { ReactElement } from "react";

export interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  size: "sm" | "md" | "lg";
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
}
const variantStyles = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-300 text-purple-600",
};

const sizeStyles = {
  sm: "py-2 px-4 text-sm", 
  md: "py-3 px-6 text-base",
  lg: "py-4 px-8 text-lg",
};

const defaultStyles =
  "rounded-lg flex gap-2 items-center justify-center transition-all duration-300 ease-in-out shadow-md hover:shadow-lg focus:ring-2 focus:ring-purple-500 focus:outline-none active:scale-95";

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${variantStyles[props.variant]} ${defaultStyles} ${
        sizeStyles[props.size]
      }`}
    >
      {props.startIcon} {props.text} {props.endIcon}
    </button>
  );
};

<Button variant="primary" text="Click me" size="md" />;
