import "./App.css";
import Editor from "./components/Editor";
import TodoList from "./components/TodoList";
import { TodoDispatchContextProvider } from "./contexts/\bTodoDispatchContext";

import { TodoStateContextProvider } from "./contexts/TodoStateContext";

function App() {
  return (
    <div className="App">
      <h1>할 일 목록</h1>
      <TodoStateContextProvider>
        <TodoDispatchContextProvider>
          <Editor />
          <TodoList />
        </TodoDispatchContextProvider>
      </TodoStateContextProvider>
    </div>
  );
}

export default App;
