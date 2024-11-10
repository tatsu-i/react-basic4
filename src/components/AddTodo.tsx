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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    handleAddTodo(inputTitle, event);
    setInputTitle("");
  };

  return (
    <>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div>
          <input
            type="text"
            value={inputTitle}
            onChange={handleTitleChange}
            className="font-mono w-80 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Programming..."
          />
          <button
            type="submit"
            className="font-mono flex justify-center items-center h-7 px-4 py-2.5 mt-3 border-2 border-black rounded text-black transition-all duration-300 hover:bg-slate-100 hover:ring-1 hover:ring-slate-400"
          >
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default AddTodo;
