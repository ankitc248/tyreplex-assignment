import { useState, useRef, useEffect } from "react";
import Spinner from "../../Spinner";
export default function Reviews() {
  const [loading, setLoading] = useState(false);
  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setReviews([...reviews, reviews[0]]);
    }, 1000);
  };
  const [reviews, setReviews] = useState([
    {
      rating: 4.5,
      reviewer: "Md Nasir",
      review:
        "Excellent service from start to finish. 100% satisfaction with the job, professionalism and overall service.We were delighted with your courteous , prompt and professional service. We would plan to reuse your services and recommend these to friends and family. You came to us as a recommendation and this proved accurate.",
    },
    {
      rating: 5,
      reviewer: "Rohit Bhati",
      review:
        "Went for Tyre change . Ultimate service by shoppe boys. Owner behavior very cool. Guide as per ur budget. Highly recommend",
    },
    {
      rating: 4,
      reviewer: "Pradeep Kumar",
      review:
        "Best tyre shop in Indirapuram. Good dealing with customer. All types tyre available here. Price also responsible. Overall good experience",
    },
    {
      rating: 4,
      reviewer: "Pradeep Kumar",
      review:
        "Best tyre shop in Indirapuram. Good dealing with customer. All types tyre available here. Price also responsible. Overall good experience",
    },
  ]);
  const totalReviews = 5;
  const totalRating = 4.5;
  return (
    <section
      className="rounded bg-white shadow overflow-hidden p-4"
      id="reviewsSection"
    >
      <div className="flex justify-between gap-4 flex-wrap items-center">
        <h3 className="text-xl font-medium">
          Reviews & Ratings
          <p className="text-xs text-neutral-500">Provided by Google</p>
        </h3>
        <button
          className="bg-accent rounded p-2 shadow text-white text-sm transition hover:bg-neutral-700"
          type=""
        >
          Rate Dealer
        </button>
      </div>
      <div className="flex gap-4 items-center mt-4">
        <StarBlock rating={totalRating} />
        <div className="flex text-4xl font-light gap-2 p-1">
          {totalRating} / 5
        </div>
        <div className="text-xs text-neutral-500 flex flex-col gap-1">
          <span className="font-medium">2278 ratings</span>
          <span className="font-medium">{totalReviews} reviews</span>
        </div>
      </div>
      <ul className="grid grid-cols-1 mt-2 w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </ul>
      <div className="flex justify-center sm:justify-end">
        {reviews.length < totalReviews && (
          <button
            type="button"
            className="group mt-4 inline-flex bg-white border border-neutral-500 p-1 rounded-sm px-4 text-xs font-medium hover:text-accent hover:border-accent gap-1"
            onClick={loadMore}
          >
            Load more {loading && <Spinner />}
          </button>
        )}
      </div>
    </section>
  );
}

const ReviewCard = ({ review }) => {
  const [allText, setAllText] = useState(false);
  const textRef = useRef(null);
  const maxLines = 4;
  const [isClamped, setIsClamped] = useState(false);

  useEffect(() => {
    const textElement = textRef.current;

    if (textElement) {
      const lineHeight = parseFloat(getComputedStyle(textElement).lineHeight);
      const fullHeight = textElement.scrollHeight;
      const maxHeight = lineHeight * maxLines;
      setIsClamped(fullHeight > maxHeight);
    }
  }, []);

  return (
    <li className="flex flex-col p-3 bg-white relative overflow-hidden justify-between text-sm gap-4 border">
      <div className="flex flex-col">
        <span
          ref={textRef}
          className={`text-neutral-500 text-sm ${
            !allText ? "line-clamp-4" : ""
          }`}
        >
          {review.review}{" "}
        </span>
        {isClamped && (
          <button
            type="button"
            className="text-accent text-xs font-semibold self-end"
            onClick={() => setAllText(!allText)}
          >
            {!allText ? "Read more" : "Show less"}
          </button>
        )}
      </div>
      <div className="font-semibold text-xs justify-between flex">
        {review.reviewer}
        <span className="flex gap-1 items-center">
          {review.rating}
          <img
            src="/assets/svg-icons/star-filled.svg"
            alt="star"
            width={12}
            height={12}
          />
        </span>
      </div>
    </li>
  );
};

const StarBlock = ({ rating }) => {
  const emptyStarIcon = "/assets/svg-icons/star-empty.svg";
  const fullStarIcon = "/assets/svg-icons/star-filled.svg";
  const halfStarIcon = "/assets/svg-icons/star-half-stroke.svg";

  const getStarType = (index) => {
    if (rating >= index) {
      return fullStarIcon;
    } else if (rating >= index - 0.5) {
      return halfStarIcon;
    } else {
      return emptyStarIcon;
    }
  };

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((index) => (
        <img
          key={index}
          src={getStarType(index)}
          alt="star"
          width={25}
          height={25}
        />
      ))}
    </div>
  );
};
