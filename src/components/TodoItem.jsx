export function TodoItem({ id, title, completed, toggleTodo, deleteTodo }) {
  return (
    <li className="flex items-center justify-between">
      <label>
        <input
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
          type="checkbox"
          className="mr-2"
        />
        {title}
      </label>
      <button
        onClick={() => deleteTodo(id)}
        className="bg-red-500 px-4 py-2 rounded text-slate-200"
      >
        Delete
      </button>
    </li>
  );
}
