import React from "react";
import { Todo } from "../../model";
import SingleTodo from "../sections/SingleTodo";
interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Todolist: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="list">
      {todos &&
        todos.length > 0 &&
        todos.map((item) => (
          <SingleTodo
            todo={item}
            key={item.id}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
    </div>
  );
};

export default Todolist;
