import { useState } from "react";
import { ITask } from "../types/ITask";
import { TaskStatus } from "../types/TaskStatus";

export const useTask = (list?: ITask[]) => {
  const [tasks, setTasks] = useState<ITask[]>(list || []);
  let tasksCreated = tasks.length;
  let tasksFinished = 0;

  const addTask = (task: ITask) => {
    setTasks([...tasks, task]);
    tasksCreated++;
  };

  const removeTask = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    tasksCreated--;
  };

  const updateTask = (updatedTask: ITask) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const finishTask = (taskId: string) => {
    const updatedTask = tasks.find((task) => task.id === taskId);
    if (updatedTask) {
      updatedTask.status =
        updatedTask.status === TaskStatus.ACTIVE
          ? TaskStatus.COMPLETED
          : TaskStatus.ACTIVE;
      updatedTask.dateCompleted =
        updatedTask.status === TaskStatus.ACTIVE
          ? ""
          : new Date().toISOString();
      setTasks([...tasks]);
    }
  };

  return {
    addTask,
    removeTask,
    updateTask,
    finishTask,
    tasksCreated,
    tasksFinished,
    tasks: tasks.filter((task) => task.status !== TaskStatus.COMPLETED),
    setTasks,
  };
};
