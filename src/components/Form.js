import React from "react";

const Form = ({ inputText
            ,selectedType
            ,setSelectedType
            ,setInputText
            ,todos
            ,setTodos
            ,setStatus
            ,setType }) => {
    const inputTextHandler = (event) => {
        setInputText(event.target.value);
    };

    const radioHandler = (event) => {
        setSelectedType(event.target.value);
    }

    const submitTodoHandler = (event) => {
        event.preventDefault();
        setTodos([
            ...todos, {type: selectedType, text: inputText, completed: false, id: Math.random() * 1000}
        ]);
        setInputText("");
    };

    const statusHandler = (event) => {
        setStatus(event.target.value);
    };

    const typeHandler = (event) => {
        setType(event.target.value);
    }

    return (
        <form>
            <p>Todo type:</p>

            <div>
                <input type="radio" onChange={radioHandler} id="home" name="type" value="home" />
                <label htmlFor="home">Home</label>
            </div>

            <div>
                <input type="radio" onChange={radioHandler}  id="work" name="type" value="work" />
                <label htmlFor="work">Work</label>
            </div>

            <div>
                <input type="radio" onChange={radioHandler} id="study" name="type" value="study" />
                <label htmlFor="study">Study</label>
            </div>
            <input
                value={inputText}                
                onChange={inputTextHandler} 
                type="text" 
                className="todo-input" 
            />

            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select                     
                    name="todos" 
                    className="filter-todo"
                    onChange={statusHandler}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>

            <div className="select">
                <select                     
                    name="type" 
                    className="filter-todo"
                    onChange={typeHandler}>
                    <option value="all">All</option>
                    <option value="home">Home</option>
                    <option value="study">Study</option>
                    <option value="work">Work</option>
                </select>
            </div>
        </form>
    );
};

export default Form;