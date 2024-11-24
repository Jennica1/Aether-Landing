import Image from "next/image";
import styles from "./investing.module.css";
import Header from "@/components/molecules/Header";
import Footer from "@/components/molecules/footer";


export default function Investing() {
    return(
        <div className={styles.page}>
            <Header />

            <Footer />
        </div>
    )
}



