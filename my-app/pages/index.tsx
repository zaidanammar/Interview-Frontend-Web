import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <main className="  flex gap-5">
      <Sidebar />
      <h1 className="text-sky-600">Test</h1>
    </main>
  );
};

export default Home;
