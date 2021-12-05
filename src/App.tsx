import { AddTask, Heading, TaskItem } from './components';
import { useTodo } from './hooks';

function App() {
  const { todos, onRemove, onComplete } = useTodo();
  return (
    <div className="wrapper">
      <div>
        <Heading>To do</Heading>
        <ul className="list">
          {todos.map((todo) => (
            <li className="list__item">
              <TaskItem
                onChange={() => onComplete(todo.id)}
                onRemove={() => onRemove(todo.id)}
                checked={todo.completed}
                variantColor={todo.color}
              >
                {todo.text}
              </TaskItem>
            </li>
          ))}
        </ul>
      </div>

      <AddTask />
    </div>
  );
}

export default App;
