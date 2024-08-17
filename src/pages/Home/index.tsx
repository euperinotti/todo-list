import { useState } from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Task } from "../../components/Task";
import { TaskInfo } from "../../patterns/TaskInfo";
import { ITask } from "../../types/ITask";
import { TaskStatus } from "../../types/TaskStatus";

const exampleTask: ITask = {
  id: "1",
  name: "Task",
  dateAdded: "2024-12-06 00:00:00",
  dateModified: "",
  status: TaskStatus.ACTIVE,
  dateCompleted: "",
  dueDate: "",
  notes: "ajsdasdaskdl"
}

export const Home = () => {

  const [selectedTask, setSelectedTask] = useState<ITask | null>()

  const handleOpenTaskInfo = (task: ITask) => {
    setSelectedTask(task)
  }

  return (
    <div className="bg-slate-900 h-screen text-slate-50 py-32 px-60">
      <div className="flex justify-start items-start h-full w-full gap-12">
        <div className="flex flex-col justify-start items-start h-auto w-full gap-6 max-w-lg">
          <Header />
          <div className="flex w-full gap-3">
            <Input className="flex-1" />
            <Button label="Add to list" />
          </div>

          <section className="max-h-72 w-full">
            <Task data={exampleTask} onClick={() => handleOpenTaskInfo(exampleTask)} />
          </section>
        </div>

        <div className="flex flex-col justify-start items-start h-auto w-full gap-6 max-w-lg">
          <section className="max-h-72 w-full">
            {selectedTask && (<TaskInfo data={selectedTask} />)}
          </section>
        </div>
      </div>
    </div>
  );
};
