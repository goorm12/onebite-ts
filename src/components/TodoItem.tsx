import { Todo } from "../types";
import { useTodoContext } from "../hooks/useTodoContext";

const TodoItem = (props: Todo) => {
  const { onClickDelete } = useTodoContext();
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
