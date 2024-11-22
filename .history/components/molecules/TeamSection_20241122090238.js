import Image from "next/image"
import './team.styles.css'

export default function Team() {
    return(
        <>
            <div className="team-container">
                <p className="team-heading">Meet the team</p>

                <div className="member-section">
                    <div className="team-member">
                        <Image src='/photo-placeholder.png' alt="member's photo" width={100} height={100} className="team-photo" />
                        <p className="team-name"></p>
                    </div>
                    <div className="team-member">
                        <Image src='/photo-placeholder.png' alt="member's photo" width={100} height={100} className="team-photo" />
                        <p className="team-name"></p>
                    </div>
                    <div className="team-member">
                        <Image src='/photo-placeholder.png' alt="member's photo" width={100} height={100} className="team-photo" />
                        <p className="team-name"></p>
                    </div>
                    <div className="team-member">
                        <Image src='/photo-placeholder.png' alt="member's photo" width={100} height={100} className="team-photo" />
                        <p className="team-name"></p>
                    </div>
                    <div className="team-member">
                        <Image src='/photo-placeholder.png' alt="member's photo" width={100} height={100} className="team-photo" />
                        <p className="team-name"></p>
                    </div>
                    <div className="team-member">
                        <Image src='/photo-placeholder.png' alt="member's photo" width={100} height={100} className="team-photo" />
                        <p className="team-name"></p>
                    </div>
                    <div className="team-member">
                        <Image src='/photo-placeholder.png' alt="member's photo" width={100} height={100} className="team-photo" />
                        <p className="team-name"></p>
                    </div>
                    <div className="team-member">
                        <Image src='/photo-placeholder.png' alt="member's photo" width={100} height={100} className="team-photo" />
                        <p className="team-name"></p>
                    </div>
                    <div className="team-member">
                        <Image src='/photo-placeholder.png' alt="member's photo" width={100} height={100} className="team-photo" />
                        <p className="team-name"></p>
                    </div>
                </div>
            </div>
        </>
    )
}





