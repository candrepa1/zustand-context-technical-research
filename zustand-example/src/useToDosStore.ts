import { create } from "zustand";

interface ToDosState {
  todo: string;
  addTodo: (newTodo: string) => void;
  list: string[];
  addTodoToList: () => void;
}

const useToDosStore = create<ToDosState>((set) => ({
  todo: "",
  addTodo: (newTodo) => set({ todo: newTodo }),
  list: [],
  addTodoToList: () => set((state) => ({ list: [...state.list, state.todo] })),
}));

export default useToDosStore;
