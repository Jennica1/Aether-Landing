import Image from "next/image"
import './review.styles.css'

export default function Reviews() {
    return(
        <>
        <div className="review-container">
            <br/>
            <p className="join">Join 30,000 happy caretakers who trust Aether</p>

            <div className="proof">
                <div className="people">
                    <Image src='/CK.png' alt='people image' width={100} height={85} className="image"/>
                    <p className="name">Comfort Keeper</p>
                </div>
                <div className="people">
                    <Image src='/HI.png' alt='people image' width={100} height={85} className="image"/>
                    <p className="name">Home Instead</p>
                </div>
                <div className="people">
                    <Image src='/hannah.jpeg' alt='people image' width={100} height={85} className="image"/>
                    <p className="name">Hannah Starling</p>
                </div>
                <div className="people">
                    <Image src='/CC.png' alt='people image' width={100} height={85} className="image"/>
                    <p className="name">Care and Company</p>
                </div>
                <div className="people">
                    <Image src='/megan.jpeg' alt='people image' width={100} height={85} className="image"/>
                    <p className="name">Megan Wilson</p>
                </div>
            </div>
        </div>
        </>
    )
}