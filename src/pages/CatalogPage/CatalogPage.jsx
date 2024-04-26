import { useEffect, useState } from "react";
import BtnLoadMore from "../../components/BtnLoadMore/BtnLoadMore";
import CampersList from "../../components/CampersList/CampersList";
import Loader from "../../components/Loader/Loader";
import {
  selectError,
  // selectShowLoadMore,
  selectIsLoading,
  // selectItems,
} from "../../redux/campers/slice";

import css from "./CatalogPage.module.css";
import { useSelector } from "react-redux";
// import { getCampers } from "../../redux/campers/operations";
import Filters from "../../components/Filters/Filters";
// import { selectFilteredCampers } from "../../redux/filters/slice";
import { fetchCampers } from "../../service/campersAPI";

export default function CatalogPage() {
  const [page, setPage] = useState(1);
  const [limit] = useState(4);
  const [campers, setCampers] = useState([]);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [showLoadMore, setShowLoadMore] = useState(false);

  useEffect(() => {
    (async () => {
      // console.log(page);
      const data = await fetchCampers({ page, limit });
      setShowLoadMore(!!data.length);

      setCampers((prev) => [...prev, ...data]);
    })();
  }, [page, limit]);

  const handleClick = () => {
    // console.log(123);
    setPage(page + 1);
  };
  return (
    <>
      <div className={css.wrapper}>
        <aside className={css.aside}>
          <Filters />
        </aside>
        <section className={css.section}>
          <h1 className="visually-hidden">Our catalog</h1>
          {Array.isArray(campers) && campers.length > 0 && (
            <>
              <CampersList campers={campers} />
            </>
          )}
          {showLoadMore && <BtnLoadMore onClick={handleClick} />}
          {isLoading && <Loader />}
          {error && <p>Try again later...</p>}
        </section>
      </div>
    </>
  );
}
