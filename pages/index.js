import Head from 'next/head'
import { MongoClient } from "mongodb";
import Item from "../components/Inventory/Item"
// import styles from '../styles/Home.module.css';
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header"
import CheckoutForm from "../components/CheckoutForm/CheckoutForm"

function Home(props) {


  return (
    <>

      <Header />
      <Item storeItems={props.storeItems} />


    </>
  )
}

export async function getStaticProps() {
  const client = await MongoClient.connect("mongodb+srv://chads:Sony1234@cluster0.06sav.mongodb.net/store?retryWrites=true&w=majority");
  const db = client.db();

  const itemsCollection = db.collection("store");

  const storeItems = await itemsCollection.find().toArray();

  client.close();
  return {
    props: {
      storeItems: storeItems.map(item => ({
        title: item.title,
        image: item.image,
        category: item.category,
        many: item.many,
        price: item.price
      }))
    },
    revalidate: 1
  }
}

export default Home;
