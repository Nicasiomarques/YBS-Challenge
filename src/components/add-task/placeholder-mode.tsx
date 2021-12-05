import { Icon } from '../icon';

type PlaceholderModeProps = {
  handleMode: () => void;
};

export const PlaceholderMode = ({ handleMode }: PlaceholderModeProps) => {
  return (
    <div onClick={handleMode} className="add-task">
      <div className="add-task__icon-wrapper">
        <Icon icon="plus" />
      </div>
      <span className="add-task__palceholder">Add new item</span>
    </div>
  );
};
