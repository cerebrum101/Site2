import React from 'react';

const AwardBlock = ({ name, date, description }) => {
  return (
    <div className="award-block">
      <h3 className="award-title">{name}</h3>
      <div className="award-date">{date}</div>
      <p className="award-description">{description}</p>
    </div>
  );
};

export default AwardBlock; 