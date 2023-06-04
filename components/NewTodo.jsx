import { useState } from "react";

export function NewTodo({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;
    // instead of AddTodo(newItem), instead of props.onSubmit(newItem)
    onSubmit(newItem);
    setNewItem("");
  }

  return (
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
  );
}
