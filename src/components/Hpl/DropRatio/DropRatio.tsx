import React from 'react';
import './dropratio.css';

const DropRatio = ({ ratio }) => {
  return (
    <div className="drop-ratio">
      <span>{ratio}</span>
    </div>
  );
};

export default DropRatio;
