import { TaskStatus } from "./TaskStatus";

export interface ITask {
  id: string;
  name: string;
  dateAdded: Date;
  dateModified: string;
  status: TaskStatus;
  dateCompleted: string;
  dueDate: string;
  notes: string;
}
