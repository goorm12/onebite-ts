import { useTodoDispatch } from "../App";
import { Todo } from "../types";

const TodoItem = (props: Todo) => {
  const dispatch = useTodoDispatch();

  const onClickButton = () => {
    dispatch.onClickDelete(props.id);
  };

  return (
    <div>
      {props.id}번 : {props.content}
      <button onClick={onClickButton}>삭제</button>
    </div>
  );
};

export default TodoItem;
