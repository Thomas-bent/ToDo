import Navbar from "./Navbar.tsx";
import {FilterContextProvider} from "./Filter.tsx";
import {ListContextProvider} from "./Lists.tsx";
import ToDoView from "./ToDoView.tsx";

function App() {

  return (
      <FilterContextProvider>
          <ListContextProvider>
              <div className="flex">
                  <Navbar />
                  <ToDoView />
              </div>
          </ListContextProvider>
      </FilterContextProvider>
  )
}

export default App
