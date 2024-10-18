import "./App.css";
import Editor from "./components/Editor";
import TodoList from "./components/TodoList";

import { TodoContextProvider } from "./contexts/TodoContext";

function App() {
  return (
    <div className="App">
      <h1>할 일 목록</h1>
      <TodoContextProvider>
        <Editor />
        <TodoList />
      </TodoContextProvider>
    </div>
  );
}

export default App;
