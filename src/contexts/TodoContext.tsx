import React, { useReducer, useEffect, useRef } from "react";
import { Todo } from "../types";

type Props = {
  children: React.ReactNode;
};

interface TodoContextType {
  todos: Todo[];
  onClickAdd: (text: string) => void;
  onClickDelete: (id: number) => void;
}

type Action =
  | {
      type: "CREATE";
      data: {
        id: number;
        content: string;
      };
    }
  | {
      type: "DELETE";
      id: number;
    };

function reducer(state: Todo[], action: Action) {
  switch (action.type) {
    case "CREATE": {
      return [...state, action.data];
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.id);
    }
  }
}

export const TodoContext = React.createContext<TodoContextType | null>(null);

export const TodoContextProvider = ({ children }: Props) => {
  const [todos, dispatch] = useReducer(reducer, []);

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

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, onClickAdd, onClickDelete }}>
      {children}
    </TodoContext.Provider>
  );
};
