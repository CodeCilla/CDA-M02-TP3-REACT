import PropTypes from 'prop-types';
import Modal from 'react-modal';
import '../styles/components/EventModal.css';

const EventModal = ({ event, isOpen, onClose }) => {
  if (!event) return null;

  const { name, image, description, date, location, city, category } = event;

  return (
    <Modal className='modal' isOpen={isOpen} onRequestClose={onClose}>
      <div className='modal__content'>
        <button onClick={onClose} className='modal__content--close'>
          Fermer
        </button>
        <div className='info'>
          <h3 className='info__title'>{name}</h3>
          {image && (
            <img src={image} alt={`image de ${name}`} className='info__image' />
          )}
        </div>
        <div className='details'>
          <div className='details__place'>
            <p className='details__place--title'>Date :&nbsp;</p>
            <p className='details__place--content'>{date}</p>
          </div>
          <div>
            <div className='details__place'>
              <p className='details__place--title'>Lieu :&nbsp;</p>
              <p className='details__place--content'>{location}</p>
            </div>
          </div>
          <div>
            <div className='details__place'>
              <p className='details__place--title'>Ville :&nbsp;</p>
              <p className='details__place--content'>{city}</p>
            </div>
          </div>
        </div>
        <div>
          <p className='details__description'>{description}</p>
        </div>
        <div className='details__category'>
          <p className='details__category--text'>{category}</p>
        </div>
        {/* <footer className='modal-footer'>
          <a href={map} target='_blank' rel='noreferrer'>
            {' '}
            S'y rendre
          </a>
        </footer> */}
      </div>
    </Modal>
  );
};

EventModal.propTypes = {
  event: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    location: PropTypes.string,
    city: PropTypes.string,
    category: PropTypes.string,
  }),
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EventModal;
