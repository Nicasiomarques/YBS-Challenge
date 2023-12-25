import { ComponentProps, FC } from "react";
import { CancelIcon } from "../icon";

export const ButtonCancel: FC<ComponentProps<"button">> = props => (
  <button className='btn' {...props}>
    <CancelIcon />
  </button>
);
