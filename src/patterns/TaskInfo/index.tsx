import { useState } from "react";
import { Button } from "../../components/Button";
import { ITask } from "../../types/ITask";
import { TaskInfoProps } from "./types";

export const TaskInfo = ({ config, onClose }: TaskInfoProps) => {
  const [newTaskInfo, setNewTaskInfo] = useState<ITask>(config.selectedTask);

  const saveChanges = () => {
    config.updateTask(newTaskInfo);
  };

  return (
    <div className="p-6 flex flex-col w-full bg-slate-800 border border-slate-700 rounded-md gap-2">
      <button
        className="absolute z-20 self-end text-slate-700 font-bold"
        onClick={onClose}
      >
        X
      </button>
      <h1 className="text-4xl font-bold">{newTaskInfo.name}</h1>
      <p className="text-lg text-slate-500">
        {newTaskInfo.dateAdded.toLocaleDateString("pt-BR")} -{" "}
        <input
          type="datetime-local"
          value={newTaskInfo?.dueDate ? newTaskInfo?.dueDate?.toISOString().slice(0, 16) : ''}
          onChange={(e) => {
            const date = new Date(e.target.value);
            setNewTaskInfo({ ...newTaskInfo, dueDate: date });
          }}
          className="bg-slate-800 text-slate-500"
          placeholder=""
          title="Due date"
        />
      </p>
      <div className="w-100 flex flex-col">
        <h3 className="font-bold text-lg mb-0">Notes</h3>
        <textarea
          value={newTaskInfo.notes}
          onChange={(e) =>
            setNewTaskInfo({ ...newTaskInfo, notes: e.target.value })
          }
          className="w-full min-h-48 p-3 bg-slate-700 rounded border border-slate-500 resize-none"
        ></textarea>
      </div>
      <div className="flex w-full items-end justify-end gap-3 mt-3">
        <Button
          label="Delete task"
          onClick={() => config.removeTask(newTaskInfo.id)}
          variant="danger"
        />
        <Button
          label="Save changes"
          onClick={() => saveChanges()}
          variant="default"
        />
      </div>
    </div>
  );
};
