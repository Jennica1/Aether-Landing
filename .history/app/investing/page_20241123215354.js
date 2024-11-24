import Image from "next/image";
import styles from "./investing.module.css";
import Header from "@/components/molecules/Header";
import Footer from "@/components/molecules/footer";
import InvestingInfo from "@/components/molecules/investingInfo";


export default function Investing() {
    return (
        <div className={styles.page}>
          <Header />
          <main className={styles.main}>
            <InvestingInfo
                title="Who we are:"
                content=""
            />
            <InvestingInfo
                title="Our mission:"
                content="At Aether, we’re committed to making care giving less about paperwork and more about people.
                Our app simplifies tasks so caregivers can focus on meaningful connections."
            />
          </main>
          <Footer/>
        </div>
      );
}




