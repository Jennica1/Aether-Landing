import styles from './TeamSection.module.css';
import Image from "next/image";


export default function Team() {
    const teamImages = [
        "/placeholder1.png",
        "/placeholder2.png",
        "/placeholder3.png",
        "/placeholder4.png",
        "/placeholder5.png",
        "/placeholder6.png",
        "/placeholder7.png",
        "/placeholder8.png",
        "/placeholder9.png",
    ];

    return (
        <>
            <div className={styles["team-cont"]}>
                <div className={styles["full-line"]}>
                    <p className={styles["text"]}>Meet the team</p>
                </div>
                <div className={styles["photos"]}>
                    {teamImages.map((image, index) => (
                        <Image
                            key={index}
                            src={"/placeholder.png"}
                            alt={`Team member ${index + 1}`}
                            width={100}
                            height={100}
                        />
                    ))}
                </div>

            </div>
        </>
    )
}