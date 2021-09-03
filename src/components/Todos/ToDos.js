import React, {Fragment, useState} from 'react'
import ToDoList from './ToDoList'
import ToDoForm from './ToDoForm'

const ToDos = () => {
    
    const [toDosItem, setToDosItem] = useState([]);
    
    const saveToDoData = (enteredtodo) => {

        setToDosItem((prevToDos) =>{
            return [...prevToDos, {todo: enteredtodo , id: Math.random().toString()}];
        })
    }


    return (
        <Fragment>
            <ToDoForm onSaveToDoData={saveToDoData}/>
            <ToDoList toDoItemList={toDosItem}/>
        </Fragment>
    )
}

export default ToDos
