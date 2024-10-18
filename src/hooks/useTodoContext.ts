import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

export const useTodoContext = () => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error(
      "useTodoContext TodoContextProvider 내부에서 사용해야 합니다."
    );
  }

  return context;
};
