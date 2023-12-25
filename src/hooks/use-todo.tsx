import React, { createContext } from "react";
import { createTaskState } from "./todos-state";

export type Colors = "blue" | "violet" | "green" | "orange";

export type TodoProps = {
  id: string;
  text: string;
  color: Colors;
  completed: boolean;
};

type TodoContextProps = {
  todos: TodoProps[];
  onComplete: (todoId: string) => void;
  onRemove: (todoId: string) => void;
  onAdd: (newTodo: TodoProps) => void;
};

const TodoContext = createContext({} as TodoContextProps);

const taskState = createTaskState();

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <TodoContext.Provider value={{ ...taskState, todos: taskState.todos.value }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  return React.useContext(TodoContext);
};
