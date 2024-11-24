import './investingInfo.styles.css'

export default function InvestingInfo({title, content}) {
    return(
        <>
            <div className="infoBox">
                <p className="infoHeading">{title}</p>

                <p className="infoContent">{content}</p>
            </div>
        </>
    )
}



