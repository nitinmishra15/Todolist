// npm run dev
// onClick functionka use kya h isme


import { useState } from 'react';

import Navbar from './components/Navbar.jsx';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Hey Hii How r u.' },
  ]);
  const [currentTodo, setCurrentTodo] = useState(null);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    const newTodoItem = { id: Date.now(), text: newTodo };
    setTodos([...todos, newTodoItem]);
    setNewTodo('');
  };

  const editTodo = (id, text) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text };
      }
      return todo;
    });
    setTodos(updatedTodos);
    setCurrentTodo(null);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-x1 p-5 bg-violet-100 min-h-[90vh]">
        <div className="addTodo my-5">
          <h2 className="text-lg font-bold">Add a Todo</h2>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button
            className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-6"
            onClick={addTodo}
          >
            Add
          </button>
        </div>

        <h2 className="text-lg font-bold">Your Todos</h2>
        <div className="todos">
          {todos.map((todo) => (
            <div key={todo.id} className="todo flex">
              <div className="text">{todo.text}</div>
              <button
                className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-wrap rounded-md mx-6"
                onClick={() => setCurrentTodo(todo)}
              >
                Edit
              </button>
              <button
                className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-wrap rounded-md mx-6"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
              {currentTodo && currentTodo.id === todo.id ? (
                <div>
                  <input
                    type="text"
                    value={currentTodo.text}
                    onChange={(e) =>
                      setCurrentTodo({ ...currentTodo, text: e.target.value })
                    }
                  />
                  <button
                    className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-6"
                    onClick={() => editTodo(currentTodo.id, currentTodo.text)}
                  >
                    Save
                  </button>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;