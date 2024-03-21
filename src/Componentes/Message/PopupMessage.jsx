import PropTypes from 'prop-types';
import  { useState, useEffect } from 'react';
import './PopupMessage.css'; 

const PopupMessage = ({ message }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 10000);

    return () => {
      clearTimeout(timeout);
      setIsVisible(false);
    };
  }, [message]); 
  return (
    <div className={`popup-message ${isVisible ? 'visible' : ''}`}>
      {message}
    </div>
  );
};

PopupMessage.propTypes = {
    message: PropTypes.string.isRequired,
};

export default PopupMessage;
