import { FaStar } from "react-icons/fa";

import css from "./StarsList.module.css";

export default function StarsList({ length }) {
  return (
    <>
      {length > 0 && (
        <ul className={css.list}>
          {Array(length)
            .fill()
            .map((_, index) => (
              <li key={index}>
                <FaStar className={css.starIcon} />
              </li>
            ))}
        </ul>
      )}
    </>
  );
}
