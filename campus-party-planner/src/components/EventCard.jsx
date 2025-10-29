import PropTypes from 'prop-types';
const EventCard = ({ name, image, date, location, category }) => {
  return (
    <div className='event-card'>
      <h2 className='event-card__name'>{name}</h2>
      <img
        className='event-card__image'
        src={image}
        alt={name}
      />
      <p className="event-card__date">Date : {date}</p>
      <p className="event-card__location">Lieu: {location}</p>
      <p className="event-card__category">{category}</p>
    </div>
  );
}
EventCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default EventCard;
