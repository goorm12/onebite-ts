import { useState } from "react";
import { useTodoContext } from "../hooks/useTodoContext";

export default function Editor() {
  const [text, setText] = useState("");
  const { onClickAdd } = useTodoContext();

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
