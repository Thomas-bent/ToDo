import React from "react";
import { Label } from "./components/ui/label";
import {Checkbox} from "./components/ui/checkbox.tsx";

export interface ToDo {
    title: string;
    description: string;
    tags: string[];
    list: string;
}

const ToDoDisplay: React.FC<{todo: ToDo, className?: string}> = (props: {todo: ToDo, className?: string}) => {
    return <div className={"flex items-center space-x-2 " + props.className}>
        <Checkbox id={props.todo.title} />
        <Label htmlFor={props.todo.title}>{props.todo.description}</Label>
    </div>
}

export default ToDoDisplay;