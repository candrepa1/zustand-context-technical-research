import useToDosStore from "./useToDosStore";

const List = () => {
  console.log("List rendering!");

  const list = useToDosStore((state) => state.list);

  return list.map((itemName, index) => <p key={index}>{itemName}</p>);
};

export default List;
