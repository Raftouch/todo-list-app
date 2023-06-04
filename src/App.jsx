import { useState } from "react";
import { NewTodo } from "../components/NewTodo";
import { TodoList } from "../components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <div className="p-5 bg-slate-200 h-screen">
      <div className="flex flex-col gap-3 m-auto max-w-[800px]">
        <NewTodo onSubmit={addTodo} />
        <h1 className="text-xl mb-3 mt-5 uppercase">Todo List</h1>
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}
