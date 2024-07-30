import { useState } from "react";
import { Button } from "src/components/ui/button";
import { Input } from "src/components/ui/input";

interface Props {
  onAdd: (value: string) => void;
}

const AddTodo = ({ onAdd }: Props) => {
  const [value, setValue] = useState<string>("");

  const handleOnAdd = () => {
    if (value.trim()) {
      onAdd(value.trim());
      setValue("");
    }
  };

  return (
    <div className="flex items-center gap-4 p-4">
      <Input
        placeholder="Add a new todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleOnAdd();
          }
        }}
        className="flex-1 border-2 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Button
        onClick={handleOnAdd}
        className="bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 rounded-md px-4 py-2"
      >
        Add
      </Button>
    </div>
  );
};

export default AddTodo;
