import { ReactNode } from "react";

export interface AboutItemProps {
  title: string
  description?: string
  children?: ReactNode
}

export const AboutItem = ({ title, description, children }: AboutItemProps) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-xl font-bold m-0">{title}</h3>
      <p className="text-slate-500 text-lg m-0">{description}</p>
      {children}
    </div>
  );
};
