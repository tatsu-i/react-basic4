import React, { useState } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

export type todo = {
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  const [todoList, setTodoList] = useState<todo[]>([]);
  const handleChange = (id: number) => {
    setTodoList((prevTodoList) => {
      return prevTodoList.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      });
    });
  };

  const handleAddTodo = (
    title: string,
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false,
    };
    setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
  };

  return (
    <>
      <div className="flex justify-center">
        <header className="font-mono text-3xl my-5">Todo App</header>
      </div>
      <div className="mx-9 my-3">
        <TodoList todoList={todoList} handleChange={handleChange} />
        <AddTodo handleAddTodo={handleAddTodo} />
      </div>
    </>
  );
}

export default App;
