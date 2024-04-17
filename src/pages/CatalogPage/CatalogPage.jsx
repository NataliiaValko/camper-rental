import { useEffect } from "react";
import BtnLoadMore from "../../components/BtnLoadMore/BtnLoadMore";
import CampersList from "../../components/CampersList/CampersList";
import Loader from "../../components/Loader/Loader";
import {
  selectError,
  selectItems,
  selectLimit,
  selectPage,
  selectShowLoadMore,
  selectIsLoading,
  setPage,
} from "../../redux/campers/slice";

import css from "./CatalogPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCampers } from "../../redux/campers/operations";

export default function CatalogPage() {
  const page = useSelector(selectPage);
  const limit = useSelector(selectLimit);
  const campers = useSelector(selectItems);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const showLoadMore = useSelector(selectShowLoadMore);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCampers({ page, limit }));
  }, [page, dispatch, limit]);

  const handleClick = () => dispatch(setPage());
  return (
    <>
      <section className={css.section}>
        <h1 className={css.hidden}>Our catalog</h1>
        {Array.isArray(campers) && campers.length > 0 && (
          <>
            <CampersList campers={campers} />
          </>
        )}
        {showLoadMore && <BtnLoadMore onClick={handleClick} />}
        {isLoading && <Loader />}
        {error && <p>Try again later...</p>}
      </section>
    </>
  );
}
