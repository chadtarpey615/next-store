import { MongoClient } from "mongodb";

export async function getStaticProps() {
    // fetch data from an api
    const client = await MongoClient.connect("mongodb+srv://chads:Sony1234@cluster0.06sav.mongodb.net/Store?retryWrites=true&w=majority")
    const db = client.db();

    const meetupsCollection = db.collection("Store");

    // const meetups = await meetupsCollection.find().toArray();

    client.close();
}
