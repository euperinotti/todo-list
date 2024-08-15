import { useState } from "react";
import "./styles.css";

export const TodoList = () => {
  const [items, setItems] = useState<string[]>([
    "Lora Simon",
    "Beatrice Schultz",
    "Mattie Bowman",
  ]);

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};
