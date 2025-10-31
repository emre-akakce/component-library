import React from 'react';
import './image.css';

const Image = ({ src, alt }: { src: string, alt: string }) => {
  return <img src={src} alt={alt} className="product-image" />;
};

export default Image;
