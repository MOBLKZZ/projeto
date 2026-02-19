import "./style.css"

function Card({ image, title, style, name}) {

    if (style === "card-1") {
        return (
            <div className="Card-1">
                <img src={image} alt="" loading="lazy"/>
                <h3>{name}</h3>
            </div>
        )
    } else if (style === "card-2") {
        return (
            <div className="Card-2">
                <img src={image} alt="" loading="lazy"/>
                <h3>{name}</h3>
            </div>
        )
    } else if (style === "card-3") {
        return (
            <div className="Card-3">
                <img src={image} alt="" loading="lazy"/>
        <h3>{name}</h3>
            </div>
        )
    } else if (style === "card-4") {
        return (
            <div className="Card-4">
                <img src={image} alt="" loading="laze"/>
                <h3>{name}</h3>
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