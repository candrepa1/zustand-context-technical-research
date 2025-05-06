import useToDosStore from "./useToDosStore";

const SearchInput = () => {
  console.log("SearchInput rendering!");

  const todo = useToDosStore((state) => state.todo);
  const addTodo = useToDosStore((state) => state.addTodo);

  return (
    <input
      style={{ width: "300px" }}
      placeholder="type your todo"
      value={todo}
      onChange={(e) => addTodo(e.target.value)}
    />
  );
};

export default SearchInput;
