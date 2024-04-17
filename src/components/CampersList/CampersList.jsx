// import { useSelector } from "react-redux";

import CampersListItem from "../CampersListItem/CampersListItem";

import css from "./CampersList.module.css";
// import { selectItems } from "../../redux/campers/slice";

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
