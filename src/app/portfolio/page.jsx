import React from "react";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import "../globals.css";
import "./page.css";
import Card from "@/components/Card";

export default function Portfolio() {
  const title = "Lien Tran's Portfolio";
  return (
    <div className="App">
      <title>{title}</title>

      <Image
        className="bg-image"
        src="/star.png"
        width={0}
        height={0}
        sizes="100vw"
        alt="bg-image"
      />
      <Navbar />
      <main>
        <div className="main-content">
          <p>Portfolio</p>
          <hr width="30%;" color="orange" size="3"></hr>
        </div>
        <ul className="flex">
          <li>
            <Link
              href="https://lientran1990.github.io/net-gross-calculation/"
              target="blank"
            >
              Net-Gross Calculator
            </Link>
          </li>
          <li>
            <Link
              href="https://lientran1990.github.io/portfolio-reactjs/"
              target="blank"
            >
              Project Landing Page
            </Link>
          </li>
        </ul>
        <Card />
      </main>
    </div>
  );
}
