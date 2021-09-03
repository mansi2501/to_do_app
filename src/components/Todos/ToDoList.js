import React from 'react'
import {Col, Container, Row,Card} from 'reactstrap'

const ToDoList = ({toDoItemList}) => {
    return (
        <Container>
            <Row>
                <Card>
                    <Col>
                        <div>
                            {toDoItemList.map((element, index)=>{
                                return(
                                    <div key={index}>
                                        <h3>{element.todo.toUpperCase()}</h3>
                                    </div>
                                    )})}
                        </div>
                    </Col>
                </Card>
            </Row>
        </Container>
    )
}

export default ToDoList
