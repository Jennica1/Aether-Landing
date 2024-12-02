import Image from 'next/image';  // Import the Next.js Image component
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
          src="/section1.png"      // Path relative to the 'public' folder
          alt="Section Illustration" 
          layout="responsive"     // Makes the image span the width of its container
          width={100}             // Percentage width
          height={30}             // Aspect ratio height (adjust as needed)
        />
      </div>
    </div>
  );
}
