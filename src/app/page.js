// page.js
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";
import Hero from "./components/Hero";
import Stack from "./components/Stack";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-dvh">
        <Hero />
        <Stack />
      </main>
      <Footer />
    </>
  );
}
