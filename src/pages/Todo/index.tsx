import { MouseEvent, useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { PageTitle } from "../../components/PageTitle";
import { Task } from "../../components/Task";
import { useTask } from "../../hooks/useTask";
import { TaskInfo } from "../../patterns/TaskInfo";
import { BaseTemplate } from "../../template/Base";
import { ITask } from "../../types/ITask";
import { TaskStatus } from "../../types/TaskStatus";

export const TodoPage = () => {
  const taskList = useTask();
  const [selectedTask, setSelectedTask] = useState<ITask | null>();
  const [taskName, setTaskName] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenTaskInfo = (e: MouseEvent<HTMLDivElement>, task: ITask) => {
    const checkTaskId = (e.target as HTMLDivElement).getAttribute("id");

    if (checkTaskId == "customStyle") {
      setTimeout(() => {
        taskList.finishTask(task.id);
      }, 250);
      if (isModalOpen) {
        setModalOpen(false);
        setSelectedTask(null);
      }
      return;
    }

    setSelectedTask(task);
    setModalOpen(true);
  };

  const addTaskToList = (name: string) => {
    if (!name || name.trim().length === 0) {
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
    taskList.addTask(newTasks);
    setTaskName("");
    setSelectedTask(null);
  };

  useEffect(() => {
    console.log(selectedTask);
  }, [selectedTask]);

  return (
    <BaseTemplate>
      <div className="flex justify-start items-start h-full w-full gap-12">
        <div className="flex flex-col justify-start items-start h-auto w-full gap-6 max-w-lg">
          <PageTitle title="ToDo App" />
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
            {taskList.tasks &&
              taskList.tasks.length > 0 &&
              taskList.tasks.map((task) => (
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
                config={{
                  setSelectedTask,
                  updateTask: taskList.updateTask,
                  removeTask: taskList.removeTask,
                  selectedTask,
                }}
                onClose={() => {
                  setSelectedTask(null);
                  setModalOpen(false);
                }}
              />
            )}
          </section>
        </div>
      </div>
    </BaseTemplate>
  );
};
