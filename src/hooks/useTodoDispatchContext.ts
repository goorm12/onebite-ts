import { TodoDispatchContext } from "../contexts/TodoDispatchContext";
import { useContext } from "react";

export const useTodoDispatchContext = () => {
  const context = useContext(TodoDispatchContext);

  if (!context) {
    throw new Error(
      "useTodoDispatchContext TodoDispatchContextProvider 내부에서 사용해야 합니다."
    );
  }

  return context;
};
