import { KeyboardEvent } from 'react';

export const enterPressed = (event: KeyboardEvent<HTMLInputElement>) =>
  event.charCode === 13 || event.keyCode === 13;
