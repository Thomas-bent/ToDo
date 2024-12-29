import {Button} from "./components/ui/button.tsx";
import {Input} from "./components/ui/input.tsx";
import {useLists} from "./Lists.tsx";
import {useState} from "react";

/**
 * Menu to navigate between different lists.
 *
 * @param props The properties of the Navbar
 * @constructor
 */
const Navbar = () => {
    const listContext = useLists();

    const [newListInput, setNewListInput] = useState("");

    function onCreateNewList() {
        if (listContext.lists.includes(newListInput)) {
            return;
        }

        listContext.addList(newListInput);
    }

    return <div className="w-1/5 flow-root mr-3">
        <div className={"flex"}>
            <Input onChange={(e) => setNewListInput(e.target.value)}
                   className={"m-1"} type={"text"} placeholder={"Create New List"} />
            <Button onClick={onCreateNewList} className={"m-1"}>Add</Button>
        </div>
        {
            // Render all the goto list buttons and onclick add filter to only show fitting todos
            listContext.lists.map((list) => {
                return <Button onClick={() => listContext.setCurrentList(list)} className={"m-1 w-full"}>
                    {list}
                </Button>;
            })
        }
    </div>
}

export default Navbar