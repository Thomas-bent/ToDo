import {useState} from "react";
import ToDoDisplay, {ToDo} from "./ToDo.tsx";
import {Input} from "./components/ui/input.tsx";
import {Button} from "./components/ui/button.tsx";

const ToDoView = () => {

    const [todos, setTodos] = useState<ToDo[]>([{
        title: "test",
        description: "testdescription",
        tags: ["test"],
        list: "testlist"
    }])
    const [newTodoValue, setNewTodoValue] = useState("");

    const onHandleNewToDo = () => {
        setTodos([...todos, {
            title: newTodoValue,
            description: newTodoValue,
            tags: [],
            list: "testlist"
        }])
        setNewTodoValue("")
    }

    return <div className="flow-root h-dvh mt-5 w-full">
        {
            todos.map((todo) => <ToDoDisplay className={"m-1"} todo={todo} />)
        }
        <div className="flex mt-5 w-1/5">
            <Input onChange={e => setNewTodoValue(e.target.value)}
                   value={newTodoValue} type={"text"} placeholder={"Add new Todo"} />
            <Button onClick={onHandleNewToDo}>Add</Button>
        </div>
    </div>
}

export default ToDoView