import Image from "next/image";
import './sectionTop.styles.css';

export default function SectionTop() {
    return(
        <>
            <div className="main-container">
                <div className="left">
                    <div className="left-content">
                        <div className="top">
                        <p className="keyValue">Clarifying</p>
                        <p className="keyValue">Simplifying</p>
                        <p className="keyValue">Summarizing</p>
                        </div>
                        <p className="content">With Aether, confusing documents <br />
                        are a thing of the pastwith our AI auto-fill feature.</p>

                        <div className="bottom">
                            <button className="startBtn">Get Started</button>
                            <p className="learn">Learn More <Image src="/down-arrow.png" alt="down arrow" width={20} height={20} /></p>
                        </div>

                    </div>
                </div>
                <div className="right">
                    <Image src="/Phone.png"
                    width={650}
                    height={450}
                    alt=""/>
                </div>
            </div>

            <div className="line"></div>
        </>
    )
}