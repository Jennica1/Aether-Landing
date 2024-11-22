import Image from "next/image";
import './sectiomTop.styles.css';

export default function SectionTop() {
    return(
        <>
            <div className="main-container">
                <div className="left">
                    <div className="left-content">
                        <div>
                        <p>Clarifying</p>
                        <p>Simplifying</p>
                        <p>Summarizing</p>
                        </div>
                        <p>With Aether, confusing documents 
                        are a thing of the pastwith our AI auto-fill feature.</p>

                        <div>
                            <button>Get Started</button>
                            <p>Learn More</p>
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