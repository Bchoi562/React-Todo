import React from 'react';

const Item = props => {
    const handleClick = () => {
        props.handleToggle(props.item.id);
    }

    return (
        <div onClick={handleClick} className={``}>
            <p>{props.item.task}</p>
        </div>
    )
}

export default Item;