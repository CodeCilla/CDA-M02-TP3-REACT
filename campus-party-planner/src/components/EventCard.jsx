import { useContext } from "react";
import PropTypes from "prop-types";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { EventContext } from "../context/EventContext";
import "../styles/components/EventCard.css";

const EventCard = ({ id, name, image, date, location, category, liked }) => {
  const { toggleLike, darkmode } = useContext(EventContext);

  const handleLikeClick = () => {
    toggleLike(id);
  };

  return (
    <div className={`event-card ${darkmode ? "event-card--dark" : ""}`}>
      <h2 className="event-card__name">{name}</h2>
      <img className="event-card__image" src={image} alt={name} />
      <p className="event-card__location">Lieu : {location}</p>
      <p className="event-card__date">Date : {date}</p>
      <p className="event-card__category">{category}</p>

      <button
        className={`event-card__like-button ${liked ? "liked" : ""}`}
        onClick={handleLikeClick}
        aria-label={liked ? "Unlike" : "Like"}
      >
        {liked ? <FaHeart /> : <FaRegHeart />}
      </button>
    </div>
  );
};

EventCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
};

export default EventCard;
