import {createContext, useContext, useState} from "react";

interface ListContext {
    lists: string[];
    addList: (item: string) => void;
    removeList: (item: string) => void;
    currentList: string;
    setCurrentList: (item: string) => void;
}

const listContext = createContext<ListContext>({} as ListContext);

interface ListContextProviderProps {
    children: React.ReactNode;
}

export const ListContextProvider: React.FC<ListContextProviderProps> = ({ children }) => {

    const [lists, setLists] = useState<string[]>([]);
    const [currentList, setCurrentList] = useState<string>("");

    function addList(item: string) {
        setLists([...lists, item]);
    }

    function removeList(list: string) {
        setLists(lists.filter((item) => item !== list));
    }

    return <listContext.Provider value={{
        lists: lists,
        addList: addList,
        removeList: removeList,
        currentList: currentList,
        setCurrentList: setCurrentList
    }}>
        {children}
    </listContext.Provider>
}

export const useLists = () => useContext(listContext);