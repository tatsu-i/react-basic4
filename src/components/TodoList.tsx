import { todo } from "../App";

type TodoListProps = {
  todoList: todo[];
  handleChange: (id: number) => void;
};

const TodoList = ({ todoList, handleChange }: TodoListProps) => {
  return (
    <>
      <h1 className="font-mono text-2xl mb-3">Todo</h1>
      <div className="mb-6">
        {todoList.map((todo) => {
          return (
            <div key={todo.id} className="flex items-center mb-1">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleChange(todo.id)}
                className="peer h-4 w-4 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
              />
              <span className="ml-2 font-mono peer-checked:text-slate-300">
                {todo.title}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TodoList;
