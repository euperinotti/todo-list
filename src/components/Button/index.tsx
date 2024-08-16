import { ButtonProps } from "./types";

const ButtonStyles = {
  default: "",
};

export const Button = ({ label, ...rest }: ButtonProps) => {
  return (
    <button
      className="px-3 py-2 bg-sky-700 border rounded border-sky-600 font-medium w-fit"
      {...rest}
    >
      {label}
    </button>
  );
};
