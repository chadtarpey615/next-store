import React, { useState, useRef } from 'react';
// import { getStaticProps } from "../../db/index"
// import { MongoClient } from "mongodb";
const CheckoutForm = (props) => {

    const [addItem, setAddItem] = useState({});

    const handleChange = event => {
        event.preventDefault();

        const { name, value } = event.target;
        setAddItem({ ...addItem, [name]: value.trim() })



    }



    const submitHandler = (event) => {
        event.preventDefault();

        const itemData = {
            title: addItem.title,
            category: addItem.category,
            many: addItem.many
        }
        console.log(itemData)
        props.onAddItem(itemData);


    }


    return (
        <>
            <form onSubmit={submitHandler}>
                <label htmlFor="title">Item Title</label>
                <input name="title" type="text" onChange={handleChange} />
                <label htmlFor="category">Item Category</label>
                <input name="category" type="text" onChange={handleChange} />
                <label htmlFor="many">How Many</label>
                <input name="many" type="text" onChange={handleChange} />
                <div className="form-button">
                    <button>Submit</button>
                </div>
            </form>

        </>
    )
}

export default CheckoutForm;
