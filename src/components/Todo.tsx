import React, { useEffect, useState } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const Todo = () => {
  const [todos, setTodos] = useState<Record<string, string | boolean | number>[]>([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    setTodos(JSON.parse(storedTodos ?? "[]"));
  }, []);

  const handleAddTodo = (value: string) => {
    const newTodos = [
      ...todos,
      { id: todos.length, todo: value, status: "incompleted" },
    ];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const handleOnClick = (id: number) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id
        ? { ...todo, status: todo.status === "completed" ? "incompleted" : "completed" }
        : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const handleDeleteTodo = (id: number) => {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
  };

  return (
    <div className="max-w-lg mx-auto bg-zinc-800 rounded-xl shadow-md">
      <AddTodo onAdd={handleAddTodo} />
      <TodoList
        todos={todos}
        handleOnClick={handleOnClick}
        onDelete={handleDeleteTodo}
      />
    </div>
  );
};

export default Todo;
