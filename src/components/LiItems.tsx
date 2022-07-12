import React from "react";
import { TodoType } from "./Todo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface Props {
  todo: TodoType;
  handleComplete: (id: number) => void;
  handleRemove: (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    id: number,
  ) => void;
}

const LiItems = ({ todo, handleRemove, handleComplete }: Props) => {
  return (
    <li
      className={`el ${todo.isCompleted ? "completed" : ""}`}
      onClick={() => {
        handleComplete(todo.id);
      }}
    >
      <span className="trash" onClick={(e) => handleRemove(e, todo.id)}>
        <FontAwesomeIcon icon={faTrash} />
      </span>
      {todo.text}
    </li>
  );
};

export default LiItems;
