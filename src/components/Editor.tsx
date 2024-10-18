import { useState } from "react";
import { useTodoDispatchContext } from "../hooks/useTodoDispatchContext";

export default function Editor() {
  const [text, setText] = useState("");
  const { onClickAdd } = useTodoDispatchContext();

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    if (text.trim() === "") return;
    onClickAdd(text);
    setText("");
  };

  return (
    <>
      <input value={text} onChange={onChangeInput} />
      <button onClick={onClickButton}>추가</button>
    </>
  );
}
