import './Rating.css';

function Rating({ value }) {
  return (
    <div className="rating">
      <i className="fa-regular fa-star"></i>
      <span>{value}</span>
    </div>
  );
}

export default Rating;