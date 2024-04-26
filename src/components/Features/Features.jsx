import BookForm from "../BookForm";
import PropsList from "../PropsList";
import VehicleDetails from "../VehicleDetails";

import css from "./Features.module.css";

export default function Features({ camper }) {
  return (
    <>
      <div className={css.modalBottomContainer}>
        <div className={css.modalLeft}>
          <PropsList camper={camper} />
          <VehicleDetails {...camper} />
        </div>

        <BookForm />
      </div>
    </>
  );
}
