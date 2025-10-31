import React from 'react';
import './badge.css';

const Badge = ({ text }: { text: string }) => {
  return <span className="badge">{text}</span>;
};

export default Badge;