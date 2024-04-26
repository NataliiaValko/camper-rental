import { useSelector } from "react-redux";

import CampersList from "../../components/CampersList";
import { selectFavoriteItems } from "../../redux/favoriteCampers/slice";

import css from "./FavoritesPage.module.css";

export default function FavoritesPage() {
  const favoriteItems = useSelector(selectFavoriteItems);

  return (
    <>
      <section className={css.section}>
        <h1 className={css.hidden}>Our catalog</h1>
        {Array.isArray(favoriteItems) && favoriteItems.length > 0 ? (
          <>
            <CampersList campers={favoriteItems} />
          </>
        ) : (
          <p className={css.text}>No Favorite Campers Found!</p>
        )}
      </section>
    </>
  );
}
