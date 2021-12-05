import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';

import { ButtonCancel } from '../button-icon';
import { randomHash } from '../../helpers';
import { Colors } from '../../hooks';
import { useToggle } from '../../hooks/use-toggle';

type TaskItemProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  variantColor: Colors;
  onRemove: () => void;
};

export const TaskItem: FC<TaskItemProps> = ({ children, ...props }) => {
  const hash = randomHash();
  const { toggle: toggleRemoveVisivility, state: removeIsVisible } =
    useToggle();

  const styleChecked = (done?: boolean) =>
    done ? { textDecoration: 'line-through', color: '#33333380' } : {};

  return (
    <label
      className={`checkbox checkbox--${props.variantColor}`}
      htmlFor={hash}
      onMouseEnter={toggleRemoveVisivility}
      onMouseLeave={toggleRemoveVisivility}
    >
      <input className="checkbox__input" {...props} type="checkbox" id={hash} />
      <div className="checkbox__box"></div>
      <span style={styleChecked(props.checked)} className="checkbox__text">
        {children}
      </span>
      {removeIsVisible && <ButtonCancel onClick={props.onRemove} />}
    </label>
  );
};
