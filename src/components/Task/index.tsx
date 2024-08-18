import { CheckTask } from "../CheckTask";
import { TaskProps } from "./types";

export const Task = ({ data, ...rest }: TaskProps) => {
  return (
    <div
      className="w-full flex justify-between items-center bg-slate-800 border rounded border-slate-700 p-3 hover:bg-slate-700"
      {...rest}
    >
      <div className="w-full">
        <h3 className="font-bold text-xl">{data.name}</h3>
        <div className="w-full flex items-center justify-start gap-2 text-slate-500 text-sm">
          <span>{data.dateAdded}</span>
          {data.notes && (
            <>
              {/* <p>•</p> <Icon color="text-slate-500" name="smallNote" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                />
              </svg>
            </>
          )}
        </div>
      </div>
      <CheckTask />
    </div>
  );
};
