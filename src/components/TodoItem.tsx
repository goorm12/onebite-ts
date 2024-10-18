import { useTodoDispatchContext } from "../hooks/useTodoDispatchContext";
import { Todo } from "../types";

const TodoItem = (props: Todo) => {
  const { onClickDelete } = useTodoDispatchContext();
  const onClickButton = () => {
    onClickDelete(props.id);
  };

  return (
    <div>
      {props.id}번 : {props.content}
      <button onClick={onClickButton}>삭제</button>
    </div>
  );
};

export default TodoItem;
