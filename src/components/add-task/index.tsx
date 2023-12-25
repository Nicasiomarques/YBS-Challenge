import { KeyboardEvent, useState } from "react";

import { randomHash, enterPressed } from "../../helpers";
import { TodoProps, useTodo, useToggle } from "../../hooks";
import { PlaceholderMode, ColorSelector } from "..";

export const AddTask = () => {
  const { onAdd } = useTodo();
  const { state: isEditing, toggle } = useToggle();
  const [todo, setTodo] = useState<TodoProps>({} as TodoProps);

  const makeTodo = (todo: Partial<TodoProps>): TodoProps => ({
    id: randomHash(),
    text: todo.text ?? "not filled",
    color: todo.color ?? "blue",
    completed: false,
  });

  const handleEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (enterPressed(event) && todo.text) {
      onAdd(makeTodo(todo));
      setTodo(prev => ({ ...prev, text: "" }));
    }
  };

  return (
    <div style={{ display: "flex" }}>
      {!isEditing ? (
        <PlaceholderMode handleMode={toggle} />
      ) : (
        <div className='add-task__wrapper'>
          <ColorSelector onSelectColor={setTodo} />
          <input
            className='add-task__input'
            placeholder='placeholder'
            type='text'
            value={todo.text}
            onChange={e => {
              setTodo(prev => ({ ...prev, text: e.target.value }));
            }}
            onKeyPress={handleEnter}
          />
        </div>
      )}
    </div>
  );
};
