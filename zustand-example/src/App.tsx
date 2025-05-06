import AddButton from "./AddButton";
import "./App.css";
import List from "./List";
import SearchInput from "./SearchInput";

const App = () => {
  console.log("App rendering!");

  return (
    <div className="content">
      <SearchInput />
      <AddButton />
      <List />
    </div>
  );
};

export default App;
