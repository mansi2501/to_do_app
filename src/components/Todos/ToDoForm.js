import React, {Fragment, useState} from 'react'
import {Form, FormGroup, Label, Input, Container, Button, Card } from 'reactstrap'
import ErrorModal from '../Error/ErrorModal';

const ToDoForm = ({onSaveToDoData}) => {

    const [todoData, setTodoData] = useState ({
        todo: ""
    });
    const [error, setError] = useState();
    
    const changeHandler = event =>{
        setTodoData({
            ...todoData,
            [event.target.name] : event.target.value
        })
    }

    const HandleChange = event => {
        event.preventDefault();
        if(todoData.todo.trim().length === 0)
        {
            setError({
                title:'Empty Input value not allowed',
                message:'Please enter a valid ToDo Item.'
            })
            return;
        }

        onSaveToDoData(todoData.todo);
        console.log(todoData);
        console.log(todoData.todo);
        setTodoData({todo: ''});
    }

    const errorHandler = () => {
        setError(null);
      };

    return (
    <Fragment>
        {error && (
            <ErrorModal
            title={error.title}
            message={error.message}
            onConfirm={errorHandler}
            />
        )}
        <Card>
            <Container>
                <Form onSubmit={HandleChange}>
                <FormGroup>
                    <Label for="todo">Enter ToDo Item</Label>
                    <Input type="text" name="todo" id="todo" value={todoData.todo} onChange={changeHandler} placeholder="Enter ToDos" autoComplete="off"/>
                </FormGroup>
                <Button color='success' type="submit">Add ToDo</Button>
                </Form>
            </Container>
        </Card>
    </Fragment>
    )
}

export default ToDoForm
