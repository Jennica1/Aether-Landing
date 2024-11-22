import Image from "next/image";
import './sectionTop.styles.css';

export default function SectionTop() {
    return(
        <>
            <div className="main-container">
                <div className="left">
                    <div className="left-content">
                        <div>
                        <p className="keyValue">Clarifying</p>
                        <p className="keyValue">Simplifying</p>
                        <p className="keyValue">Summarizing</p>
                        </div>
                        <p>With Aether, confusing documents 
                        are a thing of the pastwith our AI auto-fill feature.</p>

                        <div>
                            <button className="start-btn">Get Started</button>
                            <p>Learn More <Image src="/down-arrow.png" alt="down arrow" width={20} height={20} /></p>
                        </div>

                    </div>
                </div>
                <div className="right">
                    <Image src="/Phone.png"
                    width={60}
                    height={60}
                    alt=""/>
                </div>
            </div>
        </>
    )
}