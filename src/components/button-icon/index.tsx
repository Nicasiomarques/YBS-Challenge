import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import { Icon } from '../icon';

export const ButtonCancel: FC<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ ...props }) => (
  <button {...props} className="btn">
    <Icon icon="cancel" />
  </button>
);
