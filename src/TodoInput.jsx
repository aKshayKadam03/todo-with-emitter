import React, { useState } from "react";
import EventEmitter from "./utils/event-emitter";

function TodoInput() {
  const [inputValue, setInputValue] = useState("");

  const onTodoAddition = () => {
    EventEmitter.emit("new-todo", inputValue);
    setInputValue("");
  };

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
      />
      <button onClick={onTodoAddition}>ADD</button>
    </div>
  );
}

export default TodoInput;
