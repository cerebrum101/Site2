import React, { useState } from 'react';
import BlockLarge from './BlockLarge';

const Block = ({ name, date, text, place, points, cl, coverImg, ratio = '3/1', isSquareBlock = false }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <div 
        className={cl} 
        onClick={() => setIsVisible(true)}
        style={{ 
          aspectRatio: isSquareBlock && window.innerWidth > 780 ? '1/1' : 'auto',
          position: 'relative',
          backgroundColor: '#1a1a1a',
          cursor: 'pointer',
          padding: '1.5rem'
        }}
      >
        <h2 className="title">{name}</h2>
        <p className="details">
          <span className="date">{date}</span>
          {place && <> | <span className="place">{place}</span></>}
        </p>
        <ul className="points">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>

      {isVisible && (
        <BlockLarge
          title={name}
          text={text}
          date={date}
          place={place}
          points={points}
          image={coverImg}
          onClose={() => setIsVisible(false)}
        />
      )}
    </>
  );
};

export default Block; 