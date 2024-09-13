function TodoItem({ todo, toggleTodo, deleteTodo }) {
    return (
      <li className="flex items-center p-3 rounded-lg bg-slate-100 border border-gray-200">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={toggleTodo}
          className="mr-2 h-5 w-5 text-blue-600"
        />
        <span
          className={`flex-grow ${
            todo.completed ? "line-through text-gray-500" : "text-gray-800"
          }`}
        >
          {todo.text}
        </span>
        <button
          className="ml-2 border-none p-2 rounded-lg bg-red-500 text-white hover:bg-green-600"
          onClick={deleteTodo}
        >
          Delete
        </button>
      </li>
    );
  }
  
  export default TodoItem;
  