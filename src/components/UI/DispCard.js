import React from 'react'
import style from '../Css/Card.module.css';

const DispCard = props => {
    return (
        <div className={style.card}>
          {props.childern}  
        </div>
    )
}

export default DispCard
