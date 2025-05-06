import { useContext } from "react";
import { ListContext, ListContextType } from "./providers/ListProvider";
import { ToDoContext, ToDoContextType } from "./providers/ToDoProvider";

const AddButton = () => {
  console.log("AddButton rendering!");

  const { setList } = useContext(ListContext) as Pick<
    ListContextType,
    "setList"
  >;
  const { todo } = useContext(ToDoContext) as Pick<ToDoContextType, "todo">;

  return (
    <button
      style={{ width: "150px" }}
      onClick={() => setList((prev) => [...prev, todo])}
    >
      add
    </button>
  );
};

export default AddButton;
