import { Todo } from "../types";

const TodoItem = (props: Todo) => {
  return (
    <div>
      {props.id}번 : {props.content}
    </div>
  );
};

export default TodoItem;
