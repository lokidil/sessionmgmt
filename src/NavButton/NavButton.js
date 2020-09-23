import React from 'react'

const navButton = (props) => {

    return (
        <button type='button' onClick={(event) => props.click(event)}>{props.title}</button>
    );
}

export default navButton;