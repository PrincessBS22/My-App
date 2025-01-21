import img from "../assets/maxresdefault.jpg";
import "../styles/card.css";

const Card2 = () => {
    const name= 'John Smith';
    const title= 'Social Media Manager';
    const email= 'json@gmail.com';
    return(
        <div className="profile-card">
            <div className="profile-card_img">
                <img src={img} alt={name}/>
            </div>
            <div className="profile-card_content">
                <p>{name}</p>
                <p>{title}</p>
                <p><a href={`mailto:${email}`}>{email}</a></p>
            </div>
        </div>
    );

}
export default Card2;