import React, { FC } from "react";

interface MessageProps {
  msg: string;
  type: "danger" | "success";
}

const Message: FC<MessageProps> = ({ msg, type }) => {
  let typeClass = "";

  if (type === "danger") {
    typeClass = "danger";
  }

  if (type === "success") {
    typeClass = "success";
  }

  return (
    <article className={`message ${typeClass}`}>
      <div>{msg}</div>
    </article>
  );
};

export default Message;
