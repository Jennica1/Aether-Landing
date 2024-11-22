import'./TeamSection.styles.css';
import Image from "next/image";


export default function Team() {
    return(
        <>
            <div className="team-container">
                <p className="team-heading">Meet the team</p>

                <div className="member-section">
                    <div className="team-member">
                        <Image src='/photo-placeholder.png' alt="member's photo" width={100} height={100} className="team-photo" />
                        <p className="team-name">Travor Tan</p>
                    </div>
                    <div className="team-member">
                        <Image src='/photo-placeholder.png' alt="member's photo" width={100} height={100} className="team-photo" />
                        <p className="team-name">Parnell Tse</p>
                    </div>
                    <div className="team-member">
                        <Image src='/photo-placeholder.png' alt="member's photo" width={100} height={100} className="team-photo" />
                        <p className="team-name">Madi Tabon</p>
                    </div>
                    <div className="team-member">
                        <Image src='/photo-placeholder.png' alt="member's photo" width={100} height={100} className="team-photo" />
                        <p className="team-name">Jennica Sask</p>
                    </div>
                    <div className="team-member">
                        <Image src='/photo-placeholder.png' alt="member's photo" width={100} height={100} className="team-photo" />
                        <p className="team-name">Celine Wang</p>
                    </div>
                    <div className="team-member">
                        <Image src='/photo-placeholder.png' alt="member's photo" width={100} height={100} className="team-photo" />
                        <p className="team-name">Jonathan Santiagual</p>
                    </div>
                    <div className="team-member">
                        <Image src='/photo-placeholder.png' alt="member's photo" width={100} height={100} className="team-photo" />
                        <p className="team-name">Sandy Ly</p>
                    </div>
                    <div className="team-member">
                        <Image src='/photo-placeholder.png' alt="member's photo" width={100} height={100} className="team-photo" />
                        <p className="team-name">Kiana Amini</p>
                    </div>
                    <div className="team-member">
                        <Image src='/photo-placeholder.png' alt="member's photo" width={100} height={100} className="team-photo" />
                        <p className="team-name">Zalida Khan</p>
                    </div>
                </div>
            </div>
        </>
    )
}




