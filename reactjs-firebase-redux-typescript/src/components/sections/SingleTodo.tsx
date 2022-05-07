import React, { useState } from "react";
import { Todo } from "../../model";
import { AiFillPlusCircle, AiFillEdit, AiFillDelete } from "react-icons/ai";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((item) => (item.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  const handleDelete = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(todos.filter((item) => item.id !== id));
  };
  return (
    <div>
      <div className="list-box">
        <div className="list-box-item">
          {edit ? (
            <input
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
              className="editTodo"
            />
          ) : todo.isDone ? (
            <h2>{todo.todo}</h2>
          ) : (
            <h2>{todo.todo}</h2>
          )}
        </div>
        <div className="list-box-actions">
          <span>
            <AiFillPlusCircle onClick={(e) => handleDone(e, todo.id)} />
          </span>
          <span>
            <AiFillEdit
              onClick={() => {
                if (!edit && !todo.isDone) {
                  setEdit(!edit);
                }
              }}
            />
          </span>
          <span>
            <AiFillDelete onClick={(e) => handleDelete(e, todo.id)} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleTodo;
