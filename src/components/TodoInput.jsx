function TodoInput({ input, setInput, addTodo }) {
    return (
      <div className="mb-4 flex">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Add a new Homework"
          className="flex-grow px-3 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:red-blue-500"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
        >
          ADD
        </button>
      </div>
    );
  }
  
  export default TodoInput;
  