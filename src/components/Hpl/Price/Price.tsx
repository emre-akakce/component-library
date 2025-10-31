import React from 'react';
import './price.css';

const Price = ({ price }: { price: string }) => {
  return <span className="price">{price}</span>;
};

export default Price;