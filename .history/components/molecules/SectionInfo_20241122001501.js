import CardInfo from "../atoms/CardInfo"
import './sectionInfo.styles.css'

export default function Info() {
    return(
        <>
        <div className="container">
            <p>How we make your life easier:</p>
            
            <div>
                <CardInfo/>
            </div>
        </div>
        </>
    )
}