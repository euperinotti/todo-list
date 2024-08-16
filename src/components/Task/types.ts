import { HTMLAttributes } from "react";
import { ITask } from "../../types/ITask";

export interface TaskProps extends HTMLAttributes<HTMLDivElement> {
  data: ITask;
}
