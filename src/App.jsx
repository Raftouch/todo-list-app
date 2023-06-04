import { useState } from "react";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
    setNewItem("");
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
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <label htmlFor="item" className="text-xl">
            New Item
          </label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            className="w-full bg-slate-400 border rounded border-stone-950 outline-none h-11 p-2"
            type="text"
            id="item"
          />
          <button className="bg-slate-900 text-slate-200 rounded w-full py-2 h-11">
            Add
          </button>
        </form>
        <h1 className="text-xl mb-3 mt-5 uppercase">Todo List</h1>
        <ul className="flex flex-col gap-3">
          {todos.length === 0 && "No Todos yet"}
          {todos.map((todo) => {
            return (
              <li key={todo.id} className="flex items-center justify-between">
                <label>
                  <input
                    checked={todo.completed}
                    onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                    type="checkbox"
                    className="mr-2"
                  />
                  {todo.title}
                </label>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="bg-red-500 px-4 py-2 rounded text-slate-200"
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
