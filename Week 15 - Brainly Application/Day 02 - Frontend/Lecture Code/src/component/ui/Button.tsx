import { ReactElement } from "react";

export interface ButtonProps {
    variant: 'primary' | 'secondary';
    text: string;
    size?: 'sm' | 'md' | 'lg';
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick?: () => void;
}
const variantStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-400 text-purple-600",
}

export const Button = (props: ButtonProps) => {
    return (
        <button className={variantStyles[props.variant]}>{props.text}</button>
    )
}

<Button variant="primary" text="Click me" size="md"/>
