import { AddTask, Heading, TaskItem } from './components';
import { randomHash } from './helpers';
import { useTodo } from './hooks';

function App() {
  const { todos} = useTodo();
  return (
    <div className="wrapper">
      <div>
        <Heading>To do</Heading>
        <ul className="list">
          {todos.map((todo) => (
            <li key={randomHash()} className="list__item">
              <TaskItem {...todo}>{todo.text}</TaskItem>
            </li>
          ))}
        </ul>
      </div>
      <AddTask />
    </div>
  );
}

export default App;
