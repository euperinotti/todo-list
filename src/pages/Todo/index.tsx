import { MouseEvent, useState } from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Navbar } from "../../components/Navbar";
import { Task } from "../../components/Task";
import { TaskInfo } from "../../patterns/TaskInfo";
import { ITask } from "../../types/ITask";
import { TaskStatus } from "../../types/TaskStatus";

const exampleTask: ITask = {
  id: "1",
  name: "Task",
  dateAdded: new Date(),
  dateModified: "",
  status: TaskStatus.ACTIVE,
  dateCompleted: "",
  dueDate: "",
  notes: "ajsdasdaskdl",
};

export const TodoPage = () => {
  const [selectedTask, setSelectedTask] = useState<ITask | null>();
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskName, setTaskName] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenTaskInfo = (e: MouseEvent<HTMLDivElement>, task: ITask) => {
    const checkTaskId = e.target.getAttribute("id");
    setSelectedTask(task);

    if (checkTaskId == "customStyle") {
      setSelectedTask({
        ...selectedTask,
        status: TaskStatus.COMPLETED,
      } as ITask);
      return;
    }
    setModalOpen(true);
  };

  const addTaskToList = (name: string) => {

    if (!name) {
      return;
    }

    const newTasks = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      dateAdded: new Date(),
      dateModified: "",
      status: TaskStatus.ACTIVE,
      dateCompleted: "",
      dueDate: "",
      notes: "",
    };
    taskList.push(newTasks);
    setTaskList(taskList);
    setTaskName("");
    setSelectedTask(null);
  };

  return (
    <div className="bg-slate-900 min-h-screen h-full text-slate-50 py-12 px-60 flex flex-col items-start gap-12">
      <Navbar />
      <div className="flex justify-start items-start h-full w-full gap-12">
        <div className="flex flex-col justify-start items-start h-auto w-full gap-6 max-w-lg">
          <Header />
          <div className="flex w-full gap-3">
            <Input
              className="flex-1"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
            <Button
              label="Add to list"
              variant="default"
              onClick={() => addTaskToList(taskName)}
            />
          </div>

          <section className="max-h-96 h-full w-full flex flex-col gap-2 overflow-scroll">
            {taskList &&
              taskList.length > 0 &&
              taskList.map((task) => (
                <Task
                  key={task.id}
                  data={task}
                  onClick={(e) => {
                    handleOpenTaskInfo(e, task);
                  }}
                />
              ))}
          </section>
        </div>

        <div className="flex flex-col justify-start items-start h-auto w-full gap-6 max-w-lg">
          <section className="max-h-72 w-full">
            {isModalOpen && (
              <TaskInfo
                data={selectedTask as ITask}
                config={{ setSelectedTask }}
              />
            )}
          </section>
        </div>
      </div>
    </div>
  );
};
