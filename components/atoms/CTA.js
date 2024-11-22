import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <>
      <div className={styles["cta-cont"]}>
        <p className={styles["cta-heading"]}>Ready to get started?</p>
        <p className={styles["cta-subtext"]}>Create your free account, no credit card needed.</p>
        <button className={styles["cta-btn"]}>Get Started</button>
      </div>
    </>
  );
}
