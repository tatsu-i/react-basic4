import React, { useState } from "react";

type AddTodoProps = {
  handleAddTodo: (
    inputTitle: string,
    event: React.FormEvent<HTMLFormElement>
  ) => void;
};

const AddTodo = ({ handleAddTodo }: AddTodoProps) => {
  const [inputTitle, setInputTitle] = useState<string>("");
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(event.target!.value);
  };

  return (
    <>
      <form onSubmit={(event) => handleAddTodo(inputTitle, event)}>
        <input type="text" value={inputTitle} onChange={handleTitleChange} />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default AddTodo;
