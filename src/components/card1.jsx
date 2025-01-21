import img from "../assets/20231121_145928.jpg";
import "../styles/card.css";

const Card1 = () => {
    const name= 'Jane Doe';
    const title= 'Engineer';
    const email= 'rar@gmail.com';
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
export default Card1;