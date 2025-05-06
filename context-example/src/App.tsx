import AddButton from "./AddButton";
import "./App.css";
import List from "./List";
import ListProvider from "./providers/ListProvider";
import ToDoProvider from "./providers/ToDoProvider";
import SearchInput from "./SearchInput";

const App = () => {
  console.log("App rendering!");

  return (
    <div className="content">
      <ToDoProvider>
        <SearchInput />
        <ListProvider>
          <AddButton />
          <List />
        </ListProvider>
      </ToDoProvider>
    </div>
  );
};

export default App;
