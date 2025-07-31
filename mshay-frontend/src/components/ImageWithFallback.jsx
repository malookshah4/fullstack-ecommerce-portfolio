import React, { useState } from 'react';
import placeholderImage from '../assets/placeholder.svg'

const ImageWithFallback = ({ src, alt, className }) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc(placeholderImage);
  };

  return (
    <img
      src={imgSrc}
      onError={handleError}
      alt={alt}
      className={className}
    />
  );
};

export default ImageWithFallback;