import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { TbCurrencyEuro } from "react-icons/tb";
import { FaHeart } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";

import {
  addFavorite,
  removeFavorite,
  selectFavoriteItems,
} from "../../redux/favoriteCampers/slice";
import CamperDetailsModal from "../CamperDetailsModal";
import OptionsList from "../PropsList";

import css from "./CampersListItem.module.css";

export default function CampersListItem({
  _id,
  name,
  price,
  rating,
  location,
  adults,
  children,
  engine,
  transmission,
  form,
  length,
  width,
  height,
  tank,
  consumption,
  description,
  details,
  gallery,
  reviews,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const favoritesCampers = useSelector(selectFavoriteItems);

  const dispatch = useDispatch();

  const camper = {
    _id,
    name,
    price,
    rating,
    location,
    adults,
    children,
    engine,
    transmission,
    form,
    length,
    width,
    height,
    tank,
    consumption,
    description,
    details,
    gallery,
    reviews,
  };
  const exist = favoritesCampers.find((item) => _id === item._id);

  const toggleFavorite = () => {
    exist
      ? dispatch(removeFavorite(_id))
      : dispatch(
          addFavorite({
            _id,
            name,
            price,
            rating,
            location,
            adults,
            children,
            engine,
            transmission,
            form,
            length,
            width,
            height,
            tank,
            consumption,
            description,
            details,
            gallery,
            reviews,
          })
        );
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <li className={css.item}>
        <img className={css.image} src={gallery[0]} alt={name} />
        <div className={css.info}>
          <div className={css.topLine}>
            <h2 className={css.title}>{name}</h2>
            <div className={css.priceBox}>
              <TbCurrencyEuro className={css.euroIcon} />
              <p className={css.price}>{price.toFixed(2)}</p>
              <button className={css.heartButton} onClick={toggleFavorite}>
                {exist ? (
                  <FaHeart className={clsx(css.heartIcon, css.favorite)} />
                ) : (
                  <FaRegHeart className={css.heartIcon} />
                )}
              </button>
            </div>
          </div>

          <div className={css.infoBox}>
            <FaStar className={css.starIcon} />
            <p
              className={css.raiting}
            >{`${rating}(${reviews.length} Reviews)`}</p>
            <CiLocationOn className={css.locationIcon} />
            <p className={css.location}>
              {location.split(", ").reverse().join(", ")}
            </p>
          </div>

          <p className={css.description}>{description}</p>
          <OptionsList camper={camper} length={6} />
          <button onClick={handleOpenModal} className={css.button}>
            Show more
          </button>
        </div>
        {isModalOpen && (
          <CamperDetailsModal
            onCloseModal={handleCloseModal}
            isModalOpen={isModalOpen}
            camper={camper}
          />
        )}
      </li>
    </>
  );
}
