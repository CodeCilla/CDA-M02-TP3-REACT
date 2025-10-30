import { useContext } from 'react';
import PropTypes from 'prop-types';
import { FaHeart, FaRegHeart } from 'react-icons/fa'; // Utilise Font Awesome pour les icônes de cœur plein et vide
import { EventContext } from '../context/EventContext';
import './EventCard.css';

const EventCard = ({ id, name, image, date, location, category, liked }) => {
  const { toggleLike } = useContext(EventContext);


  const handleLikeClick = () => {
    toggleLike(id);
  };

  return (
    <div className='event-card'>
      <h2 className='event-card__name'>{name}</h2>
      <img className='event-card__image' src={image} alt={name} />
      <p className='event-card__location'>Lieu: {location}</p>
      <p className='event-card__date'>Date : {date}</p>
      <p className='event-card__category'>{category}</p>
      <button className='event-card__like-button' onClick={handleLikeClick}>
        {liked ? <FaHeart /> : <FaRegHeart />}{' '}
      </button>
    </div>
  );
};

EventCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onclick: PropTypes.func,
  toggleLike: PropTypes.func.isRequired,
  isLiked: PropTypes.bool.isRequired,
};

export default EventCard;
