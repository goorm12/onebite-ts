import { useContext } from "react";
import { TodoStateContext } from "../contexts/TodoStateContext";

export const useTodoStateContext = () => {
  const context = useContext(TodoStateContext);

  if (!context) {
    throw new Error(
      "useTodoStateContext TodoStateContextProvider 내부에서 사용해야 합니다."
    );
  }

  return context;
};
