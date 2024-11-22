import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/molecules/Header";
import SectionTop from "@/components/molecules/SectionTop";
import Reviews from "@/components/molecules/Reviews";
import Info from "@/components/molecules/SectionInfo";
import CTA from "@/components/atoms/CTA";
import Team from "@/components/molecules/TeamSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <SectionTop />
        <div className={styles.line}></div>
        <Reviews />
        <Info />
        <CTA />
        <div className={styles.line}></div>
        <Team />
      </main>
      <footer className={styles.footer}>
        <div className={styles.row}>
          <ul className={styles.column}>
            <li>Blog</li>
            <li>Developers</li>
            <li>Contact Us</li>
          </ul>
          <ul className={styles.column}>
            <li>About Aether</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
          <ul className={styles.column}>
            <li className={styles.sm-icon}> <Image src='/Fb.png' alt="facebook icon" width={30} height={30} />Facebook</li>
            <li className={styles.sm-icon}> <Image src='/Ig.png' alt="facebook icon" width={30} height={30} />Instagram</li>
            <li className={styles.sm-icon}> <Image src='/linkIn.png' alt="facebook icon" width={30} height={30} />LinkedIn</li>
            <li className={styles.sm-icon}> <Image src='/x.png' alt="facebook icon" width={30} height={30} />Twitter</li>
          </ul>
        </div>
        <div className={styles["team-cont"]}>
    <p>© Designed and developed by Aether team _ 2024</p>
  </div>      
  </footer>
    </div>
  );
}
