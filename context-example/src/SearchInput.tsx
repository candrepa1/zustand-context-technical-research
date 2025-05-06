import { useContext } from "react";
import { ToDoContext, ToDoContextType } from "./providers/ToDoProvider";

const SearchInput = () => {
  console.log("SearchInput rendering!");

  const { todo, setTodo } = useContext(ToDoContext) as ToDoContextType;

  return (
    <input
      style={{ width: "300px" }}
      placeholder="type your todo"
      value={todo}
      onChange={(e) => setTodo(e.target.value)}
    />
  );
};

export default SearchInput;
