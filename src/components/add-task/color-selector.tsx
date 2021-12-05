import { Dispatch, SetStateAction, useState } from 'react';

import { Colors, TodoProps, useToggle } from '../../hooks';
import { randomHash } from '../../helpers';
import { Icon } from '../icon';

type ColorSelectorProps = {
  onSelectColor: Dispatch<SetStateAction<TodoProps>>;
};

export const ColorSelector = ({ onSelectColor }: ColorSelectorProps) => {
  const colors = {
    blue: '#0892fc',
    green: '#00a863',
    violet: '#7f43ff',
    orange: '#ff6f59',
  };
  const { state: colorOptions, toggle: toggleColorOptions } = useToggle();
  const [selectedColor, setColor] = useState('');

  const onChangeSelectedColor = (color: Colors) => {
    onSelectColor((prev) => ({ ...prev, color }));
    toggleColorOptions();
  };

  return (
    <div className="color-choser__wrapper">
      <div
        onClick={toggleColorOptions}
        className="color-choser__color--selected__wrapper"
      >
        <div
          className="color-choser__color color-choser__color--selected"
          style={{ background: selectedColor || colors.blue }}
        />
        <Icon icon="dropdown" />
      </div>

      {colorOptions && (
        <div className="color-choser">
          {Object.values(colors).map((color, index) => (
            <span
              key={randomHash()}
              className="color-choser__color"
              style={{ backgroundColor: color }}
              onClick={() => {
                const currentcolor = Object.keys(colors)[index] as Colors;
                onChangeSelectedColor(currentcolor);
                setColor(colors[currentcolor]);
              }}
            ></span>
          ))}
        </div>
      )}
    </div>
  );
};
