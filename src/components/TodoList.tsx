import { useTodoContext } from "../hooks/useTodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useTodoContext();

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default TodoList;
