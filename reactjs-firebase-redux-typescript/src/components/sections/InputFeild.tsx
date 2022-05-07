import React, { useRef } from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputFeild: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <div className="form">
      <>
        <input
          className="input"
          type="text"
          placeholder="Nhập công việc đang làm..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="btn" onClick={(e) => handleAdd(e)}>
          thực hiện
        </button>
      </>
    </div>
  );
};

export default InputFeild;
