import { todo } from "../App";

type TodoListProps = {
  todoList: todo[];
  handleChange: (id: number) => void;
};

const TodoList = ({ todoList, handleChange }: TodoListProps) => {
  return (
    <>
      <h1 className="font-mono text-2xl ml-10">Todo</h1>
      <div>
        {todoList.map((todo) => {
          return (
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleChange(todo.id)}
                />
                <span>{todo.title}</span>
              </label>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TodoList;
