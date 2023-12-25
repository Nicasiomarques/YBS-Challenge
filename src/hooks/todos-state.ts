import { computed, effect, signal } from "@preact/signals-react";

import { LocalStorageAdapter } from "../helpers";
import { TodoProps } from "./use-todo";

export const todosKeyName = "@App:Todos";

export function createTaskState() {
  const todos = signal<TodoProps[]>(getAllTasks());
  const completed = computed(() => todos.value.filter(({ completed }) => completed).length);
  
  effect(() => LocalStorageAdapter.set(todosKeyName, todos.value));  
  
  function getAllTasks() {
    return LocalStorageAdapter.get(todosKeyName) || [];
  }
  
  function onComplete(id: string) {
    todos.value = todos.value.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }

  function onAdd(newTodo: TodoProps) {
    todos.value = [...todos.value, newTodo];
  }

  const onRemove = (todoId: string) => {
    todos.value = todos.value.filter(({ id }) => id !== todoId);
  };

  return { todos, onComplete, onAdd, onRemove, completed };
}
