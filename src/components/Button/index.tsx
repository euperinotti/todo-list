import { ButtonProps } from "./types";

export const ButtonVariant = {
  default:
    "px-3 py-2 bg-sky-700 hover:bg-sky-600 border rounded border-sky-600 font-medium w-fit transition",
  danger:
    "px-3 py-2 bg-red-800 hover:bg-red-700 border rounded border-red-700 font-medium w-fit transition",
};

export const Button = ({ label, variant, ...rest }: ButtonProps) => {

  let buttonStyles = ButtonVariant[variant];

  return (
    <button className={`${buttonStyles}`} {...rest}>
      {label}
    </button>
  );
};
