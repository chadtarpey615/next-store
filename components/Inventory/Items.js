import React, { useState, useEffect } from 'react'
import { MongoClient } from "mongodb";
const Items = (props) => {
    const [storeItems, setStoreItems] = useState()
    useEffect(() => {

        storeInventory();
    }, [])

    async function storeInventory() {
        const client = await MongoClient.connect("mongodb+srv://chads:Sony1234@cluster0.06sav.mongodb.net/store?retryWrites=true&w=majority");
        const db = client.db();

        const storeItems = db.collection("store");

        const items = await storeItems.find().toArray();
        setStoreItems(items);
    }
    const removeHandler = (id) => {
        console.log(id)
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
