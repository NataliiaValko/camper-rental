import { NavLink } from "react-router-dom";

import css from "./Navigation.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  return (
    <>
      <nav className={css.nav}>
        <ul className={css.list}>
          <li className={css.item}>
            <NavLink className={buildLinkClass} to="/">
              Home
            </NavLink>
          </li>
          <li className={css.item}>
            <NavLink className={buildLinkClass} to="/catalog">
              Catalog
            </NavLink>
          </li>
          <li className={css.item}>
            <NavLink className={buildLinkClass} to="/favorites">
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
