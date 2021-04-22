import { MongoClient } from "mongodb";

async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;

        const client = await MongoClient.connect("mongodb+srv://chads:Sony1234@cluster0.06sav.mongodb.net/Store?retryWrites=true&w=majority");
        const db = client.db();

        const storeCollection = db.collection("Store");

        const result = await storeCollection.insertOne(data);

        console.log(result);
        client.close();

        res.status(201).json({ message: "Store updated" });
    }
}

export default handler;