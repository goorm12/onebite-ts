import React, { useReducer, useEffect } from "react";
import { Todo } from "../types";

type Props = {
  children: React.ReactNode;
};

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

export const TodoStateContext = React.createContext<{
  todos: Todo[];
  dispatch: React.Dispatch<Action>;
} | null>(null);

export const TodoStateContextProvider = ({ children }: Props) => {
  const [todos, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <TodoStateContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoStateContext.Provider>
  );
};
