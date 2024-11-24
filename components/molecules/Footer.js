import Image from "next/image";
import Link from "next/link";
import './footer.styles.css'

export default function Footer() {
    return(
        <>
            <footer className="footer">
                <div className="row">
                    <ul className="column">
                        <li>Blog</li>
                        <li><Link href="/investing">Work With Us</Link></li>
                        <li>Contact Us</li>
                    </ul>
                    <ul className="column">
                        <li>About Aether</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                    <ul className="column">
                        <li className="smIcon"> <Image src='/Fb.png' alt="facebook icon" width={25} height={25} />Facebook</li>
                        <li> 
                            <Link 
                                href={"https://www.instagram.com/aether.hq/"}
                                className="smIcon"
                                passHref
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image src='/Ig.png' alt="Instagram icon" width={25} height={25} />
                                Instagram
                            </Link>
                        </li>
                        <li className="smIcon"> <Image src='/linkIn.png' alt="LinkIn icon" width={25} height={25} />LinkedIn</li>
                        <li className="smIcon"> <Image src='/x.png' alt="Twitter icon" width={25} height={25} />Twitter</li>
                    </ul>
                </div>
                <div className="team-cont">
                    <p>© Designed and developed by Aether team _ 2024</p>
                </div>          
            </footer>
        </>
    )
}



