import useToDosStore from "./useToDosStore";

const AddButton = () => {
  console.log("AddButton rendering!");

  const addTodoToList = useToDosStore((state) => state.addTodoToList);

  return (
    <button style={{ width: "150px" }} onClick={() => addTodoToList()}>
      add
    </button>
  );
};

export default AddButton;
