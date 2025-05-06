import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";

export interface ToDoContextType {
  todo: string;
  setTodo: Dispatch<SetStateAction<string>>;
}

export const ToDoContext = createContext<ToDoContextType | undefined>(
  undefined
);

const ToDoProvider = ({ children }: PropsWithChildren) => {
  console.log("ToDoProvider rendering!");
  const [todo, setTodo] = useState<string>("");

  return (
    <ToDoContext.Provider value={{ todo, setTodo }}>
      {children}
    </ToDoContext.Provider>
  );
};

export default ToDoProvider;
