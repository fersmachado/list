import React, { useContext } from "react";
import { IItemTask } from "../interfaces";

interface TaskContext {
    items: IItemTask[]
    onEdit: (id: string) => void
    onRemove: (id: string) => void
    onCheck: (id: string) => void
}

//@ts-ignore
export const TaskContext = React.createContext<TaskContext>({})

export const useTaskContext = () => {
    return useContext(TaskContext);
}