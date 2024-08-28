import { ButtonHTMLAttributes } from "react";
import { ButtonVariant } from ".";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant: keyof typeof ButtonVariant;
}
