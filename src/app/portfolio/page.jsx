import React from "react";
import Navbar from "../../components/Navbar";
import Image from "next/image";

export default function Portfolio() {
  const title = "Lien Tran's Portfolio";
  return (
    <div className="App">
      <title>{title}</title>

      <Image className="bg-image" src="/star.png" width={0} height={0} sizes="100vw" alt="bg-image" />
      <Navbar />

      <h1>{title}</h1>
    </div>
  );
}
