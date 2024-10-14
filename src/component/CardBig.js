import { AiFillStar } from "react-icons/ai"; 
import "./CardBig.css";

export default function CardBig({ title, genre, img, size, color }) {
    return (
        <div className="containerBig">
            <img src={img} alt={`Cover of ${title}`} className="posterBig" />
            <div className="descriptionBig">
                <div>
                    <p id="title">{title}</p>
                    <p id="genre">{genre}</p>
                </div>
                <div className="stars">
                    {[...Array(5)].map((_, index) => (
                        <AiFillStar key={index} color={color} size={size} />
                    ))}
                </div>
            </div>
        </div>
    );
}
