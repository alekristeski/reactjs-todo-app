import React, { useState } from "react";

function Form({ onSubmit }: any) {
  const [enterToDo, setEnteredToDo] = useState("");

  const addNewToDo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredToDo(event.target.value);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit({
      id: (Math.random() * (1000 - 1) + 1) as number,
      text: enterToDo as string,
    });

    setEnteredToDo("");
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        className="input-style"
        type="text"
        name="text"
        value={enterToDo}
        placeholder="Add New Todo"
        onChange={addNewToDo}
      />
    </form>
  );
}
export default Form;
