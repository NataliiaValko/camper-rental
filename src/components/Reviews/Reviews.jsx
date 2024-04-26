import BookForm from "../BookForm";
import StarsList from "../StarsList";

import css from "./Reviews.module.css";

export default function Reviews({ reviews }) {
  return (
    <>
      <div className={css.reviewContainer}>
        <ul className={css.reviewLeftContainer}>
          {reviews.map(({ reviewer_name, reviewer_rating, comment }, index) => (
            <li key={index}>
              <div className={css.reviewTopContainer}>
                <span className={css.avatarContainer}>
                  <p className={css.avatarText}>{reviewer_name[0]}</p>
                </span>
                <div className={css.reviewRightContainer}>
                  <p>{reviewer_name}</p>
                  <StarsList length={Math.round(reviewer_rating)} />
                </div>
              </div>
              <p className={css.comment}>{comment}</p>
            </li>
          ))}
        </ul>
        <BookForm />
      </div>
    </>
  );
}
