import React, { useState, useEffect } from 'react';
// import { storeInventory } from "../../pages/index"
const Items = (props) => {
    const [storeItems, setStoreItems] = useState([])
    useEffect(() => {

        setStoreItems(props.storeItems)
    }, [])


    const removeHandler = (id) => {

        // console.log(storeItems)


        storeItems.filter(item => {
            item.id !== storeItems.id
            setStoreItems(...items, storeItems)
        })





    }


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
                <button>Add To Cart</button>
                <button onClick={() => { removeHandler(props.id) }}>Remove Item</button>
            </div>

        </div>
    )
};


export default Items;
