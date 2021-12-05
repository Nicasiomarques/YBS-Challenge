import React, { createContext, useEffect, useState } from 'react';
import { LocalStorageAdapter } from '../helpers/cache/local-storage-adapter';

export type Colors = 'blue' | 'violet' | 'green' | 'orange';

const todosKeyName = '@App:Todos';

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

export const TodoProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = useState<TodoProps[]>([]);

  useEffect(() => {
    const savedTodos = LocalStorageAdapter.get(todosKeyName);
    setTodos(savedTodos || []);
  }, []);

  const onComplete = (todoId: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    LocalStorageAdapter.set(todosKeyName, updatedTodos);
    setTodos(updatedTodos);
  };

  const onAdd = (newTodo: TodoProps) => {
    const updatedTodos = [...todos, newTodo];
    LocalStorageAdapter.set(todosKeyName, updatedTodos);
    setTodos(updatedTodos);
  };

  const onRemove = (todoId: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    LocalStorageAdapter.set(todosKeyName, updatedTodos);
    setTodos(updatedTodos);
  };

  return (
    <TodoContext.Provider value={{ todos, onComplete, onRemove, onAdd }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  return React.useContext(TodoContext);
};
