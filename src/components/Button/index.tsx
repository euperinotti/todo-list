import { ButtonProps, ButtonVariant } from "./types";

export const Button = ({ label, variant, ...rest }: ButtonProps) => {
  return (
    <button
      className={ButtonVariant[variant] || ButtonVariant.default}
      {...rest}
    >
      {label}
    </button>
  );
};
