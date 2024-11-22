import CardInfo from "../atoms/CardInfo"
import './sectionInfo.styles.css'

export default function Info() {
    return(
        <>
        <div className="container">
            <p>How we make your life easier:</p>
            
            <div className="info-container">
                <CardInfo
                    title="Ease of Access:"
                    content="Everything in one place.  Access everything you need all in one app. "
                />
                <CardInfo
                    title="Organization:"
                    content="Everything in one place.  Access everything you need all in one app. "
                />
                <CardInfo
                    title="Autofill Feature:"
                    content="With our AI auto filling feature, filling out forms have never been easier. "
                />
                <CardInfo
                    title="ESimplifcation Made Simple:"
                    content="Difficulty understanding is a thing of the past now that Aether is here to breakdown  document lingo in a easy-to-understand way."
                />
            </div>
        </div>
        </>
    )
}