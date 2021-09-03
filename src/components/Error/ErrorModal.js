import React, {Fragment} from 'react'
import classes from '../Css/Error.module.css';
import { Card, Button } from 'reactstrap';

const ErrorModal = props => {

    return (
        <Fragment>
            <div className={classes.backdrop} onClick={props.onConfirm} />
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button color="success" onClick={props.onConfirm}>Okay</Button>
                </footer>
            </Card>
         </Fragment>
      )
}

export default ErrorModal
