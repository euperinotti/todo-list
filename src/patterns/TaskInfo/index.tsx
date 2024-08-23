import { useState } from "react";
import { Button } from "../../components/Button";
import { ITask } from "../../types/ITask";
import { TaskInfoProps } from "./types";

export const TaskInfo = ({ data }: TaskInfoProps) => {
  const [newTaskInfo, setNewTaskInfo] = useState<ITask>(data);

  const saveChanges = () => {
    console.log(newTaskInfo);
  };

  return (
    <div className="p-6 flex flex-col w-100 bg-slate-800 border border-slate-700 rounded-md gap-2">
      <h1 className="text-4xl font-bold">{data.name}</h1>
      <p className="text-lg text-slate-500">
        {data.dateAdded.toLocaleDateString("pt-BR")} -{" "}
        <input
          type="datetime-local"
          value={newTaskInfo?.dueDate}
          onChange={(e) =>
            setNewTaskInfo({ ...newTaskInfo, dueDate: e.target.value })
          }
          className="bg-slate-800 text-slate-500"
          placeholder=""
        />
      </p>
      <h3 className="font-bold text-lg">Notes</h3>
      <textarea
        value={newTaskInfo.notes}
        onChange={(e) =>
          setNewTaskInfo({ ...newTaskInfo, notes: e.target.value })
        }
        className="w-full min-h-36 p-3 bg-slate-700 rounded border border-slate-500"
      ></textarea>
      <Button label="Save changes" onClick={saveChanges} variant="default" />
      <Button label="Delete task" onClick={saveChanges} variant="danger" />
    </div>
  );
};
