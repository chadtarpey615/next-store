import React from 'react'

const Items = (props) => {
    return (
        <div>
            <h2> {props.title}</h2>
            <img src={props.image} alt={props.title} />
            <h4>Category: {props.category}</h4>
            <h4>In Stock: {props.many}</h4>
            <h4>Price: {props.price}</h4>
        </div>
    )
};


export default Items;
