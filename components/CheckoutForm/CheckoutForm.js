import React, { useState, useRef } from 'react';
// import { getStaticProps } from "../../db/index"
// import { MongoClient } from "mongodb";
const CheckoutForm = (props) => {
    const titleInputRef = useRef();
    const categoryInputRef = useRef();
    const manyInputRef = useRef();
    const imageInputRef = useRef();
    const priceInputRef = useRef();


    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredCategory = categoryInputRef.current.value;
        const enteredMany = manyInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredPrice = priceInputRef.current.value;

        const itemData = {
            title: enteredTitle,
            category: enteredCategory,
            many: enteredMany,
            image: enteredImage,
            price: enteredPrice,
        };

        props.onAddItem(itemData)
    }


    return (
        <>
            <form className="input-form" onSubmit={submitHandler}>
                <div>
                    <label htmlFor="title">Item Title</label>
                    <input required id="title" type="text" ref={titleInputRef} />
                </div>

                <div>
                    <label htmlFor="category">Item Category</label>
                    <input required id="category" type="text" ref={categoryInputRef} />
                </div>
                <div>
                    <label htmlFor="many">How Many</label>
                    <input required id="many" type="text" ref={manyInputRef} />
                </div>
                <div>
                    <label htmlFor="image">Image url</label>
                    <input required id="image" type="text" ref={imageInputRef} />
                </div>
                <div>
                    <label htmlFor="Price">Price</label>
                    <input required id="price" type="text" ref={priceInputRef} />
                </div>
                <div className="form-button">
                    <button className="form-btn">Submit</button>
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

