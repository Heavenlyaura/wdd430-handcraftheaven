import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { useActionState } from "react";
import { addReview } from "@/library/actions";

export default function StarRate({ productid }: { productid: string }) {
  const [rating, setRating] = useState<number>(0);
  const [review, setReview] = useState<string>("");
  const [state, addReviewAction] = useActionState(addReview, undefined);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };
  const handleReviewChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setReview(event.target.value);
  };

  return (
    <form
      action={addReviewAction}
      className=" p-6 md:w-fit w-full flex flex-col"
    >
      <section className="flex justify-evenly p-4">
        {Array.from({ length: 5 }).map((_, index) => {
          const starIndex = index + 1; 
          return (
            <label htmlFor={`rate-${index}`} key={index}>
              <input
                type="radio"
                id={`rate-${index}`}
                name="rate"
                value={starIndex}
                onChange={() => handleRatingChange(starIndex)}
                checked={rating === starIndex}
                className="hidden"
              />
              <FaStar
                color={rating >= starIndex ? "gold" : "gray"}
                style={{ cursor: "pointer", fontSize: "30px" }} // Increase the fontSize to your desired value
              />
            </label>
          );
        })}
      </section>

      <div className="">
        <textarea
          id="review"
          name="review"
          value={review}
          onChange={handleReviewChange}
          placeholder="Write your review here"
          rows={3}
          className=" p-2 border rounded-2xl outline-stone-500 focus: mt-2 w-full"
        />
      </div>
      <input type="hidden" name="productid" value={productid} />
      <p>{state?.message}</p>
      <button
        onSubmit={() => {
          setRating(0);
        }}
        type="submit"
        className="border p-2 rounded-2xl bg-stone-500 text-white"
      >
        Submit Review
      </button>
    </form>
  );
}
