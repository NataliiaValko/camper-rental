import { useGetAllCampersQuery } from "../../redux/campers/campersAPI";
import CampersListItem from "../CampersListItem/CampersListItem";

import css from "./CampersList.module.css";

export default function CampersList() {
  const { data: campers } = useGetAllCampersQuery();
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
