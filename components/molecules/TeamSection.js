import "./TeamSection.styles.css";
import Image from "next/image";

export default function Team() {
  return (
    <>
      <div className="team-container">
        <p className="team-heading">Meet the team</p>

        <div className="member-section">
          <div className="team-member">
            <Image
              src="/trevor.png"
              alt="member's photo"
              width={100}
              height={100}
              className="team-photo"
            />
            <p className="team-name">Travor Tan</p>
            <p className="team-name">Developer</p>
            <Image
              src="/linkIn.png"
              alt="linkedin icon"
              width={25}
              height={25}
            />
          </div>
          <div className="team-member">
            <Image
              src="/parnellt.png"
              alt="member's photo"
              width={100}
              height={100}
              className="team-photo"
            />
            <p className="team-name">Parnell Tse</p>
            <p className="team-name">Developer</p>
            <a
              href="https://www.linkedin.com/in/parnelltse/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkIn.png"
                alt="linkedin icon"
                width={25}
                height={25}
              />
            </a>
          </div>
          <div className="team-member">
            <Image
              src="/madi.png"
              alt="member's photo"
              width={100}
              height={100}
              className="team-photo"
            />
            <p className="team-name">Madi Tabon</p>
            <p className="team-name">Developer</p>
            <a
              href="https://www.linkedin.com/in/madi-tabon-2786761a0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkIn.png"
                alt="linkedin icon"
                width={25}
                height={25}
              />
            </a>
          </div>
          <div className="team-member">
            <Image
              src="/jennica.png"
              alt="member's photo"
              width={100}
              height={100}
              className="team-photo"
            />
            <p className="team-name">Jennica Sask</p>
            <p className="team-name">Developer</p>
            <a
              href="https://www.linkedin.com/in/jennica-sask-78000a306/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkIn.png"
                alt="linkedin icon"
                width={25}
                height={25}
              />
            </a>
          </div>
          <div className="team-member">
            <Image
              src="/celine.png"
              alt="member's photo"
              width={100}
              height={100}
              className="team-photo"
            />
            <p className="team-name">Celine Wang</p>
            <p className="team-name">Developer</p>
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkIn.png"
                alt="linkedin icon"
                width={25}
                height={25}
              />
            </a>
          </div>
          <div className="team-member">
            <Image
              src="/jon.png"
              alt="member's photo"
              width={100}
              height={100}
              className="team-photo"
            />
            <p className="team-name">Jonathan Santiagual</p>
            <p className="team-name">Designer</p>
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkIn.png"
                alt="linkedin icon"
                width={25}
                height={25}
              />
            </a>
          </div>
          <div className="team-member">
            <Image
              src="/sandy.png"
              alt="member's photo"
              width={100}
              height={100}
              className="team-photo"
            />
            <p className="team-name">Sandy Ly</p>
            <p className="team-name">Designer</p>
            <a
              href="https://www.linkedin.com/in/boisan-sandy-ly/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkIn.png"
                alt="linkedin icon"
                width={25}
                height={25}
              />
            </a>
          </div>
          <div className="team-member">
            <Image
              src="/kiana.png"
              alt="member's photo"
              width={100}
              height={100}
              className="team-photo"
            />
            <p className="team-name">Kiana Amini</p>
            <p className="team-name">Designer</p>
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkIn.png"
                alt="linkedin icon"
                width={25}
                height={25}
              />
            </a>
          </div>
          <div className="team-member">
            <Image
              src="/zalida.png"
              alt="member's photo"
              width={100}
              height={100}
              className="team-photo"
            />
            <p className="team-name">Zalida Khan</p>
            <p className="team-name">Designer</p>
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkIn.png"
                alt="linkedin icon"
                width={25}
                height={25}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
