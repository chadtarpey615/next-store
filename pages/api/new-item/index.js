import { useRouter } from "next/router";


export async function addStoreItem(enteredItemData) {
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