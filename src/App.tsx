import { useEffect, useRef, useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import TodoItem from "./components/TodoItem";
import { Todo } from "./types";
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const idRef = useRef(0);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const onClickAdd = (text: string) => {
    setTodos([
      ...todos,
      {
        id: idRef.current++,
        content: text,
      },
    ]);
  };
  return (
    <div>
      <h1>Todo</h1>
      <Editor onClickAdd={onClickAdd} />
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
    </div>
  );
}

export default App;
