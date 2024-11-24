import Image from "next/image";
import styles from "./investing.module.css";
import Header from "@/components/molecules/Header";
import Footer from "@/components/molecules/footer";


export default function Investing() {
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
          <Footer/>
        </div>
      );
}




