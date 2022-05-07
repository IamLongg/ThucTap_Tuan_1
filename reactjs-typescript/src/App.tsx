import React, { useState } from "react";
import "./styles/App.scss";
import InputFeild from "./components/InputFeild";
import Todolist from "./components/Todolist";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    } else {
      alert("Vui lòng nhập công việc cần làm!");
    }
  };
  console.log(todos);

  return (
    <div className="App">
      <div className="container">
        <div className="heading">Công Việc Cần Làm</div>
        <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <Todolist todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default App;
