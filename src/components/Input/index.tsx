import { InputProps } from "./types";

export const Input = ({ ...rest }: InputProps) => {
  return (
    <input
      {...rest}
      className={`px-4 py-1 text-slate-100 rounded border border-slate-600 bg-slate-800 text-lg ${rest.className}`}
    />
  );
};
