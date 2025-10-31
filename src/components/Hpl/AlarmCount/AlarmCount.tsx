import React from 'react';
import './alarmcount.css';

const AlarmCount = ({ count }: { count: number }) => {
  return (
    <div className="alarm-count">
      <span className="alarm-icon"></span>
      <span>{count}</span>
    </div>
  );
};

export default AlarmCount;
