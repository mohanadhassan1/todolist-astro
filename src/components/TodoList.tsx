import { Label } from "src/components/ui/label";

interface Props {
  todos: Record<string, string | number | boolean>[];
  handleOnClick: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoList = ({ todos = [], handleOnClick, onDelete }: Props) => {
  return (
    <div className="flex flex-col gap-4 p-4">
      {todos.length === 0 && <p className="text-gray-400 text-center">No todos yet!</p>}
      {todos.map((todo) => (
        <div
          key={String(todo.id)}
          className="flex items-center justify-between p-2 hover:bg-zinc-700 rounded-lg"
        >
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              onChange={() => handleOnClick(Number(todo.id))}
              checked={todo.status === "completed"}
              className="h-5 w-5 cursor-pointer"
            />
            <Label
              htmlFor={String(todo.id)}
              className={`text-lg ${todo.status === "completed" ? "line-through text-gray-600" : "text-gray-200"}`}
            >
              {todo.todo}
            </Label>
          </div>
          <button
            onClick={() => onDelete(Number(todo.id))}
            className="text-red-500 hover:text-red-700"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
            >
              <path
                d="M12 4L4 12M4 4L12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
