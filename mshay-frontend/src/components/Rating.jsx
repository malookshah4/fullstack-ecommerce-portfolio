import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import './Rating.css';

const Rating = ({ rating, numReviews }) => {
  return (
    <div className="rating-view">
      <div className="stars">
        {[1, 2, 3, 4, 5].map((value) => {
          if (rating >= value) {
            return <FaStar key={value} />; // Full Star
          } else if (rating >= value - 0.5) {
            return <FaStarHalfAlt key={value} />; // Half Star
          } else {
            return <FaRegStar key={value} />; // Empty Star
          }
        })}
      </div>
      {numReviews && <span className="review-count">({numReviews})</span>}
    </div>
  );
};

export default Rating;