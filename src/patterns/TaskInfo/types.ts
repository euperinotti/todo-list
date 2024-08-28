import { Dispatch, SetStateAction } from "react";
import { ITask } from "../../types/ITask";

export interface TaskInfoProps {
  data: ITask;
  config: {
    setSelectedTask: Dispatch<SetStateAction<ITask | null | undefined>>;
    selectedTask: any;
  };
  onClose: () => void;
}
