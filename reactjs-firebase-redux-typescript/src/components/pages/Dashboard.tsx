import React, { FC, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import InputFeild from "../sections/InputFeild";
import Todolist from "../sections/Todolist";
import Message from "../UI/Message";
import { setSuccess } from "../../store/actions/authActions";
import { RootState } from "../../store";
import { Todo } from "../../model";

const Dashboard: FC = () => {
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
  const dispatch = useDispatch();

  const { user, needVerification, success } = useSelector(
    (state: RootState) => state.auth
  );
  useEffect(() => {
    if (success) {
      dispatch(setSuccess(""));
    }
  }, [success, dispatch]);

  return (
    <section className="section">
      <div className="container">
        <div className="heading">Công Việc Cần Làm</div>
        <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <Todolist todos={todos} setTodos={setTodos} />
      </div>
    </section>
  );
};

export default Dashboard;
