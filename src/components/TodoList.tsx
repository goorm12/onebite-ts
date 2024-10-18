import { useTodoStateContext } from "../hooks/useTodoStateContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useTodoStateContext();

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default TodoList;
