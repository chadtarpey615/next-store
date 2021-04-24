import React from 'react'

const Items = (props) => {
    return (
        <div className="card">
            <div className="card-header">
                <h2> {props.title}</h2>
            </div>
            <div className="card-image">
                <img src={props.image} alt={props.title} />
            </div>
            <div className="card-footer">
                <h4>Category: {props.category}</h4>
                <h4>In Stock: {props.many}</h4>
                <h4>Price: {props.price}</h4>
            </div>

        </div>
    )
};


export default Items;
