import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";

export interface ListContextType {
  list: string[];
  setList: Dispatch<SetStateAction<string[]>>;
}

export const ListContext = createContext<ListContextType | undefined>(
  undefined
);

const ListProvider = ({ children }: PropsWithChildren) => {
  console.log("ListProvider rendering!");
  const [list, setList] = useState<string[]>([]);

  return (
    <ListContext.Provider value={{ list, setList }}>
      {children}
    </ListContext.Provider>
  );
};

export default ListProvider;
