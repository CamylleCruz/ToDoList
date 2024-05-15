import React, { useState } from "react";
import './App.css';


const ToDoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        // impede a pag de recarregar ao clicar nos botoes
        setInputValue(e.target.value);
    }

    // adiciona novo ToDo
    const handleAddToDo = () => {
        if(inputValue.trim()) { // quebra o valor do inputValue com o trim 
            setTodos([...todos, inputValue]) // cria novo array incluindo novos itens
            setInputValue(''); // reseta o valor de setInputValue
        }
    }


    const handleDeleteToDo = (index) => {
        const updateTodos = [...todos];
        updateTodos.splice(index,1) // seleciona o item dentro do ToDo
        setTodos(updateTodos)
    }

    return (
        <div className="container">
            <h1 className="title"> To do List ✍🏾 </h1>
            <div className="input-container">
                <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                className='input-field'
                />

                <button onClick={handleAddToDo}
                className='add-button'> Add </button>

                <ul className='todo-list'>{todos.map((todo, index) => (
                    <li key={index} className='todo-item'>
                        <span className="todo-text"> {todo}</span>
                        <button className='delete-button' onClick = {() => handleDeleteToDo(index)}>  Delete </button>
                    </li>
                ))}</ul>
            </div>
        </div>
    )
}


export default ToDoList;

  