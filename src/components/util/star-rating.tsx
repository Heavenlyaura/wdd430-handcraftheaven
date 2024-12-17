import { getReviews } from "@/library/data";

export default function RatingStars({ rating }: { rating: number }) {
  const validRating = Number(rating);
  const fullStars = Math.floor(validRating);
  const halfStars = validRating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <div className="rating-stars">
      {[...Array(fullStars)].map((_, index) => (
        <span key={`full-${index}`} className="star filled">
          ★
        </span>
      ))}
      {[...Array(halfStars)].map((_, index) => (
        <span key={`half-${index}`} className="star half-filled">
          ★
        </span>
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={`empty-${index}`} className="star">
          ★
        </span>
      ))}
      <span className="rating-text">{validRating.toFixed(1)}</span>
    </div>
  );
}
