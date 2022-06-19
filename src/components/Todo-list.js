import React, {useState} from 'react';
import Todo from './Todo';
import TodoForm from './Todo-Form';

function Todolist() {
    const [todos, setTodos] = useState([]);
    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        const newtodos = [todo, ...todos];
        setTodos(newtodos);
        console.log(todo, ...todos);
    };
    const removeTodo = id =>{
      const removeArr = [...todos].filter(todo => todo.id !== id);
      setTodos(removeArr);
    };
    const updateTodo = (todoId, newValue) => {
      if(!newValue.text || /^\s*$/.test(newValue.text)) {
        return;
      }
      setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };
    const completeTodo = id => {
      let updatedTodos = todos.map(todo =>{
        if (todo.id === id){
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      });
      setTodos(updatedTodos);
    };
  return (
    <div>
        <h1>Plan</h1>
        <TodoForm  onsubmit={addTodo} />
        <Todo 
         todos = {todos}
         completeTodo= {completeTodo}
         removeTodo ={removeTodo}
         updateTodo = {updateTodo}
        />
    </div>
  );
} 

export default Todolist;