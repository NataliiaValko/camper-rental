import CampersListItem from "../CampersListItem";

import css from "./CampersList.module.css";

export default function CampersList({ campers }) {
  return (
    <>
      <ul className={css.list}>
        {campers.map((camper) => (
          <CampersListItem key={camper._id} {...camper} />
        ))}
      </ul>
    </>
  );
}
