import React from 'react'

const Item = (props) => {
    return (
        <div>
            {props.storeItems.map(item => (
                <h1>{item.title}</h1>
            ))}
        </div>
    )
}

export default Item;
