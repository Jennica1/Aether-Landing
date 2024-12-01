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
            <p className={styles["words"]}>
            At Aether, we’re committed to making care giving less about paperwork and more about people. 
            Our app simplifies tasks so caregivers can focus on meaningful connections.
            </p>
          </div>
        </div>
        <div className={styles["right"]}>
          <div className={styles["form-container"]}>
            <form className={styles["form"]}>
              <div className={styles["name-fields"]}>
                <input
                  type="text"
                  placeholder="First Name"
                  className={styles["input-field"]}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className={styles["input-field"]}
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className={styles["input-field"]}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className={styles["input-field"]}
              />
              <button className={styles["submit-btn"]}>Get Started</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
