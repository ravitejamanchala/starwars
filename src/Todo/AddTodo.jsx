import React, { useEffect, useState } from "react";
import TodoLIst from "./TodoLIst";

export default function AddTodo() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [fontSize, setFontSize] = useState(16);
    const [color,setColor] = useState("#ffffff")
  
    useEffect(() => {
      const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
      setTodos(storedTodos);
    }, []);
  

  
    const addTodo = (event) => {
        event.preventDefault();
      if (newTodo.trim() === '') return;
      const newTodoItem = {
        id: Date.now(),
        text: newTodo,
        completed:false,
      };
      setTodos([...todos, newTodoItem]);
      localStorage.setItem('todos', JSON.stringify([...todos, newTodoItem]));
      setNewTodo('');
    };
  
    const deleteTodo = (id) => {
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
      localStorage.setItem('todos', JSON.stringify(todos));
    };
    const toggleTaskCompletion = (id)=>{
        const updatedTasks = [...todos];
        const index = updatedTasks.findIndex(item => item.id === id)
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTodos(updatedTasks);
        localStorage.setItem('todos', JSON.stringify(updatedTasks));
    };
    const clear = ()=>{
        setTodos([])
        localStorage.setItem('todos', JSON.stringify([]));
    }
  
    return (
      <div>
        <h1>Todo List</h1>
        <form
          onSubmit={addTodo}
        >
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button type="submit">Add</button>
          <button onClick={clear}>Clear</button>
        </form>
        <div>
          <label>Font Size:</label>
          <input
            type="number"
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
          />
          <input type="color" value={color} onChange={(e) => setColor(e.target.value)}></input>
        </div>
        <hr/>
        <span>task done:{todos.filter((todo) => todo.completed == true).length}/{todos.length}</span>
       <hr/>
      
        <div>
          {todos?.map((todo) => (
            <TodoLIst
              key={todo.id}
              id={todo.id}
              todo={todo}
              onDelete={deleteTodo}
              font={fontSize}
              onComplete={toggleTaskCompletion}
              color={color}
            />
          ))}
        </div>
      </div>
    );
}
