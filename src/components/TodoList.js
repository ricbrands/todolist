import React from "react";
import Todo from './Todo';

const TodoList = ({setTodos, filteredTodos}) => {

    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo=>(
                    <Todo 
                        key={todo.id} 
                        text={todo.text}
                        setTodos={setTodos}
                        todo={todo}
                        todos={filteredTodos}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;