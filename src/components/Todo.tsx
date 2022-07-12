import React, { useState } from "react";
import "./Todo.css";
import Form from "./Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn } from "@fortawesome/free-solid-svg-icons";
import LiItems from "./LiItems";

export interface TodoType {
  id: number;
  text: string;
  isCompleted: boolean;
}
function ToDo() {
  const [toDos, setToDo] = useState<TodoType[]>([]);
  const [showInput, setShowInput] = useState<boolean>(true);

  const handleShowInput = () => {
    setShowInput(!showInput);
  };
  const addToDo = (todo: TodoType) => {
    const newTodo = [todo, ...toDos];
    if (todo.text.trim()) {
      setToDo(newTodo);
    }
  };
  const handleComplete = (id: number) => {
    const newComplete = toDos.map((todo) => {
      if (todo.id === id) {
        return {
          id: todo.id,
          text: todo.text,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });

    setToDo(newComplete);
  };
  const handleRemove = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    id: number,
  ) => {
    e.stopPropagation();
    const filteredArr = toDos.filter((todo) => todo.id !== id);
    setToDo(filteredArr);
  };

  return (
    <div>
      <div>
        <h1 className="h1-style">
          To-Do List
          <FontAwesomeIcon icon={faToggleOn} onClick={handleShowInput} />
        </h1>
      </div>
      <div className="toDo">
        {showInput ? <Form onSubmit={addToDo} /> : null}
        <ul className="ul-list">
          {toDos.map((todo) => {
            return (
              <LiItems
                key={todo.id}
                todo={todo}
                handleComplete={handleComplete}
                handleRemove={handleRemove}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ToDo;
