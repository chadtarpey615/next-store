import React, { useState, useRef } from 'react';
// import { getStaticProps } from "../../db/index"
// import { MongoClient } from "mongodb";
const CheckoutForm = (props) => {
    const titleInputRef = useRef();
    const categoryInputRef = useRef();
    const manyInputRef = useRef();
    const imageInputRef = useRef();


    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredCategory = categoryInputRef.current.value;
        const enteredMany = manyInputRef.current.value;
        const enteredImage = imageInputRef.current.value;

        const itemData = {
            title: enteredTitle,
            category: enteredCategory,
            many: enteredMany,
            image: enteredImage,
        };

        props.onAddItem(itemData)
    }


    return (
        <>
            <form onSubmit={submitHandler}>
                <label htmlFor="title">Item Title</label>
                <input required id="title" type="text" ref={titleInputRef} />
                <label htmlFor="category">Item Category</label>
                <input required id="category" type="text" ref={categoryInputRef} />
                <label htmlFor="many">How Many</label>
                <input required id="many" type="text" ref={manyInputRef} />
                <label htmlFor="image">Image url</label>
                <input required id="image" type="text" ref={imageInputRef} />
                <div className="form-button">
                    <button>Submit</button>
                </div>
            </form>

        </>
    )
}

export default CheckoutForm;

  // const [addItem, setAddItem] = useState({});

    // const handleChange = event => {
    //     event.preventDefault();

    //     const { name, value } = event.target;
    //     setAddItem({ ...addItem, [name]: value.trim() })



    // }



    // const submitHandler = (event) => {
    //     event.preventDefault();

    //     const itemData = {
    //         title: addItem.title,
    //         category: addItem.category,
    //         many: addItem.many
    //     }
    //     console.log(itemData)
    //     props.onAddItem(itemData);

