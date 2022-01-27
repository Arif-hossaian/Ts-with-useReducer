import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

export interface RatingProps {
  rate?: any;
  setRate?: any;
}

const Rating: React.FC<RatingProps> = ({ rate, setRate }) => {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <span className="cursor-pointer" key={i} onClick={() => setRate(i + 1)}>
          {rate > i ? (
            <AiFillStar fontSize="22px" />
          ) : (
            <AiOutlineStar fontSize="22px" />
          )}
        </span>
      ))}
    </div>
  );
};

export default Rating;
