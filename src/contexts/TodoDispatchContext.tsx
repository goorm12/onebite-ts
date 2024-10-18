import React, { useRef, useContext } from "react";
import { TodoStateContext } from "./TodoStateContext";

export const TodoDispatchContext = React.createContext<{
  onClickAdd: (text: string) => void;
  onClickDelete: (id: number) => void;
} | null>(null);

export const TodoDispatchContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { dispatch } = useContext(TodoStateContext)!;

  const idRef = useRef(0);

  const onClickAdd = (text: string) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        content: text,
      },
    });
  };

  const onClickDelete = (id: number) => {
    dispatch({
      type: "DELETE",
      id: id,
    });
  };

  return (
    <TodoDispatchContext.Provider value={{ onClickAdd, onClickDelete }}>
      {children}
    </TodoDispatchContext.Provider>
  );
};
