import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/molecules/Header";
import SectionTop from "@/components/molecules/SectionTop";
import Reviews from "@/components/molecules/Reviews";
import Info from "@/components/molecules/SectionInfo";
import CTA from "@/components/atoms/CTA";
import Team from "@/components/molecules/TeamSection";
import Link from "next/link";

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
    </div>
  );
}
