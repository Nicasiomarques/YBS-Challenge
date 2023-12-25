import { FC, ComponentProps } from "react";

import { useToggle } from "../../hooks/use-toggle";
import { ButtonCancel } from "../button-icon";
import { Colors, useTodo } from "../../hooks";
import { randomHash } from "../../helpers";

type TaskItemProps = ComponentProps<"input"> & {
  completed: boolean;
  color: Colors;
  id: string;
};

export const TaskItem: FC<TaskItemProps> = ({ children, id, completed, ...props }) => {
  const hash = randomHash();
  const { toggle, state } = useToggle(false);
  const { onRemove, onComplete } = useTodo();

  const styleChecked = (done?: boolean) =>
    done ? { textDecoration: "line-through", color: "#33333380" } : {};

  return (
    <label
      className={`checkbox checkbox--${props.color}`}
      onMouseEnter={toggle}
      onMouseLeave={toggle}
      htmlFor={hash}
    >
      <input
        onChange={() => onComplete(id)}
        className='checkbox__input'
        checked={completed}
        type='checkbox'
        id={hash}
      />
      <div className='checkbox__box'></div>
      <span style={styleChecked(props.checked)} className='checkbox__text'>
        {children}
      </span>
      {state && <ButtonCancel onClick={() => onRemove(id)} />}
    </label>
  );
};
