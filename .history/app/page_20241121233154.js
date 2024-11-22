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
        <hr class="line" />
        <Reviews />
        <Info />
        <CTA />
        <hr class="line" />
        <Team />
      </main>
      <footer className={styles.footer}>
        <div>
          <p>Blog Developers Contact Us</p>
        </div>
        <div>
          <p>About Aether Privacy Policy Terms of Service</p>
        </div>

        <div>Facebook Instagram LinkIn Twitter</div>
      </footer>
    </div>
  );
}
