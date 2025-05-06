import { useContext } from "react";
import { ListContext, ListContextType } from "./providers/ListProvider";

const List = () => {
  console.log("List rendering!");

  const { list } = useContext(ListContext) as Pick<ListContextType, "list">;

  return list.map((itemName, index) => <p key={index}>{itemName}</p>);
};

export default List;
