import React from 'react';
import PropTypes from 'prop-types';

const MediaDisplay = ({  media, mediaType, explanation, title }) => {
  return (
    <>
      <h2>{title}</h2>
      {mediaType === 'image'
        ? <img src={media} /> 
        :  <iframe width="420" height="315"
          src={media}>
        </iframe> }
      <p>{explanation}</p>
    </>
  );
};

MediaDisplay.propTypes = {
  media: PropTypes.string.isRequied,
  mediaType: PropTypes.string.isRequied,
  explanation: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default MediaDisplay;
