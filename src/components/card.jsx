import styles from "../styles/card.module.css";
import PropTypes from 'prop-types';

const Card = ({ img, name, title, email, animate, updateAnimate }) => {
    return (
        <div className={`${styles['profile-card']} ${animate ? styles["is-entering"] : "" }`}
        onAnimationEnd={updateAnimate}>
            <div className="profile-card_img">
                <img src={img} alt={name} />
            </div>
            <div className="profile-card_content">
                <p>{name}</p>
                <p>{title}</p>
                <p><a href={`mailto:${email}`}>{email}</a></p>
            </div>
        </div>
    );

}
Card.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    email: PropTypes.string.isRequired,
}
export default Card;