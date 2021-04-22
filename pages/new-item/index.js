import { useRouter } from "next/router";
import React from 'react';
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm"

export default function index() {
    return (
        <>
            <h1>Check Items In Here</h1>
            <CheckoutForm onAddItem={addStoreItem} />
        </>
    )
}


async function addStoreItem(enteredItemData) {
    const response = await fetch("/api/new-item", {
        method: "POST",
        body: JSON.stringify(enteredItemData),
        headers: {
            "Content-Type": "application/json"
        }
    });

    const data = await response.json();
    console.log(data)
}