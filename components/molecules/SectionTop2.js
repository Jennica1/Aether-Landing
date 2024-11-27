import Image from "next/image";
import styles from "./SectionTop2.module.css";

export default function SectionTop2() {
  return (
    <>
      <div className={styles["main-container"]}>
        <div className={styles["left"]}>
          <div className={styles["left-content"]}>
            <div className={styles["words-cont"]}>
              <p>
                Saving Caregiver's Time, so they can Focus on what Matters Most
              </p>
            </div>
            <p>
              With Aether, confusing documents
              <br />
              are a thing of the past with our AI auto-fill feature.
            </p>

            <div className={styles["btn-cont"]}>
              <button>Get Started</button>
              <p>Learn More</p>
              {/* <Image src="/arrowdown.png" alt="Learn More icon" width={15} height={10} /> */}
            </div>
          </div>
        </div>
        <div className={styles["right"]}>
          <Image
            src="/Phone.png"
            width={700}
            height={450}
            alt="phone"
            priority
          />
        </div>
      </div>
    </>
  );
}
