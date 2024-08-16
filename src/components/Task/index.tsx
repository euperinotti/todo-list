import { CheckTask } from "../CheckTask";
import { TaskProps } from "./types";

export const Task = ({ data, ...rest }: TaskProps) => {
  return (
    <div
      className="w-full flex justify-between items-center bg-slate-800 border rounded border-slate-700 p-3 hover:bg-slate-700"
      {...rest}
    >
      <h3 className="font-bold text-xl">{data.name}</h3>
      <CheckTask />
    </div>
  );
};
