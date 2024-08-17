import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Task } from "../../components/Task";
import { ITask } from "../../types/ITask";
import { TaskStatus } from "../../types/TaskStatus";

const exampleTask: ITask = {
  name: "Task",
  dateAdded: "",
  dateModified: "",
  status: TaskStatus.ACTIVE,
  dateCompleted: "",
  dueDate: "",
  notes: ""
}

export const Home = () => {
  return (
    <div className="bg-slate-900 h-screen text-slate-50 py-32 px-60">
      <div className="flex justify-start items-start h-full w-full">
        <div className="flex flex-col justify-start items-start h-auto w-full gap-6 max-w-lg">
          <Header />
          <div className="flex w-full gap-3">
            <Input className="flex-1" />
            <Button label="Add to list" />
          </div>

          <section className="max-h-72 w-full">
            <Task data={exampleTask} />
          </section>
        </div>
      </div>
    </div>
  );
};
