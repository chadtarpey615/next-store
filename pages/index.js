import Head from 'next/head'
// import styles from '../styles/Home.module.css';
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header"
import CheckoutForm from "../components/CheckoutForm/CheckoutForm"

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <CheckoutForm />
    </>
  )
}
