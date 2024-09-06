import Image from "next/image";
import {About, FAQ, Contacts, Hero, News  } from "../components";


export default function Home() {
  return (
    <main className="">
      <Hero/>
      <About/>
      <News/>
      <FAQ/>
      <Contacts/>
    </main>
  );
}
