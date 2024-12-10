import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Header from "@/components/molecules/Header";
import SectionTop from "@/components/molecules/SectionTop";
import Reviews from "@/components/molecules/Reviews";
import Info from "@/components/molecules/SectionInfo";
import CTA from "@/components/atoms/CTA";
import Team from "@/components/molecules/TeamSection";

export default function Home() {

  <head>
    <title>Landing page</title>
  </head>
  return (

    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <SectionTop />
        <div className={styles.line}></div>
        <Info />
        <Reviews />
        <CTA />
        <div className={styles.line}></div>
        <Team />
      </main>
      <footer className={styles.footer}>
        <div className={styles.row}>
          <ul className={styles.column}>
            <li>Blog</li>
            <li>
              <Link href="/investor">Work With Us</Link>
            </li>
            <li>Contact Us</li>
          </ul>
          <ul className={styles.column}>
            <li>About Aether</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
          <ul className={styles.column}>
            <li className={styles.smIcon}>
              <Image src="/Fb.png" alt="facebook icon" width={25} height={25} />
              Facebook
            </li>
            <li className={styles.smIcon}>
              <Image
                src="/Ig.png"
                alt="instagram icon"
                width={25}
                height={25}
              />
              Instagram
            </li>
            <li className={styles.smIcon}>
              <Image
                src="/linkIn.png"
                alt="linkedin icon"
                width={25}
                height={25}
              />
              LinkedIn
            </li>
            <li className={styles.smIcon}>
              <Image src="/x.png" alt="twitter icon" width={25} height={25} />
              Twitter
            </li>
          </ul>
        </div>
        <div className={styles["team-cont"]}>
          <p>Designed and developed by Aether Team </p>
          <br></br>
          <p>©2024</p>
        </div>
      </footer>
    </div>
  );
}