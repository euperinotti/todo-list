import { Button } from "../../components/Button";
import { TaskInfoProps } from "./types";

export const TaskInfo = ({ data }: TaskInfoProps) => {
  return (
    <div className="p-6 flex flex-col w-100 bg-slate-800 border border-slate-700 rounded-md gap-2">
      <h1 className="text-4xl font-bold">{data.name}</h1>
      <p className="text-lg text-slate-500">{data.dateAdded}</p>
      {/* <p>{data.notes}</p>
      <p>Due: {data.dueDate}</p>
      <p>Status: {data.status}</p>
      <p>Date Modified: {data.dateModified}</p>
      <p>Date Completed: {data.dateCompleted}</p> */}
      <h3 className="font-bold text-lg">Notes</h3>
      <textarea name="" id="" className="w-full min-h-36 p-3 bg-slate-700 rounded border border-slate-500"></textarea>
      <Button label="Save changes"/>
    </div>
  );
};
