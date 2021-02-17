import React, { useEffect, useState } from "react";
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [type, setType] = useState("all");

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(()=>{
    saveLocalTodos();
    setFilteredTodos(todos)
  },[todos]);

  useEffect(() => {
    let totallyFilteredTodos = todos
    
    if (status !== "all") {
      const isCompleted = status === "completed" ? true : false
      totallyFilteredTodos = totallyFilteredTodos.filter(todo => todo.completed === isCompleted)
    }

    if (type !== "all") {
      console.log('status', totallyFilteredTodos)
      totallyFilteredTodos = totallyFilteredTodos.filter(todo => todo.type === type)
    }

    setFilteredTodos(totallyFilteredTodos)
  }, [status, type]);

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todosLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todosLocal);
    }  
  }

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form 
        inputText={inputText} 
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        todos={todos}        
        setTodos={setTodos} 
        setInputText={setInputText}
        setStatus={setStatus}
        setType={setType}
      />
      <TodoList 
        filteredTodos={filteredTodos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;