import React, { useEffect } from "react";
import { useState } from "react";
import EventEmitter from "./utils/event-emitter";

function TodoList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    EventEmitter.on("new-todo", (todo) => {
      setList([...list, todo]);
    });
  });

  return (
    <div>
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
}

export default TodoList;
