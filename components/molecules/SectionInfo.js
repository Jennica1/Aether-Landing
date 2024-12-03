import Image from "next/image"; // Import the Next.js Image component
import CardInfo from "../atoms/CardInfo";
import styles from "./SectionInfo.module.css";

export default function Info() {
  return (
    <div className={styles.cont}>
      <p className={styles.introText}>How we make your life easier:</p>
      <div>
        <CardInfo />
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/section3.png"
          alt="Section Illustration"
          layout="responsive"
          width={100}
          height={30}
        />
      </div>
    </div>
  );
}
