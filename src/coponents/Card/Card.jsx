import "./style.css"

function Card({ image, title, style}) {

    if (style === "card-1") {
        return (
            <div className="Card-1">
                <img src={image} alt="" />
            </div>
        )
    } else if (style === "card-2") {
        return (
            <div className="Card-2">
                <img src={image} alt="" />
            </div>
        )
    } else if (style === "card-3") {
        return (
            <div className="Card-3">
                <img src={image} alt="" />
            </div>
        )
    } else if (style === "card-4") {
        return (
            <div className="Card-4">
                <img src={image} alt="" />
            </div>
        )
    }
    return (

        <div className="Card">
            <img src={image} alt="" />
            <h1>{title}</h1>
        </div>
    )
}

export default Card;