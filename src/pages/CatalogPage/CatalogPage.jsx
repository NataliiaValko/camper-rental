import CampersList from "../../components/CampersList/CampersList";
import Loader from "../../components/Loader/Loader";
import { useGetAllCampersQuery } from "../../redux/campers/campersAPI";
import css from "./CatalogPage.module.css";
export default function CatalogPage() {
  const { data: campers, isLoading, isError } = useGetAllCampersQuery();

  return (
    <>
      <section className={css.section}>
        <h1 className={css.hidden}>Our catalog</h1>
        {Array.isArray(campers) && campers.length > 0 && <CampersList />}
        {isLoading && <Loader />}
        {isError && <p>Try again later...</p>}
      </section>
    </>
  );
}
