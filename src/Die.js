import React from 'react';
import './Die.css';
function Die(props) {
    return (
        <i className={`Die fas fa-dice-${props.face}`} ></i>
    )
}

export default Die