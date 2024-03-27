import React from "react";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import Link from "next/link";

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
        <h1>Portfolio</h1>
        <ul>
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
      </main>
    </div>
  );
}
