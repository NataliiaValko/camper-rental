import { CiLocationOn } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { TbAutomaticGearbox } from "react-icons/tb";
import { MdOutlineLocalGasStation } from "react-icons/md";
import { TbToolsKitchen2 } from "react-icons/tb";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineAir } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { TbCurrencyEuro } from "react-icons/tb";
import { FaHeart } from "react-icons/fa6";

import css from "./CampersListItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
  selectFavoriteItems,
} from "../../redux/favoriteCampers/slice";
import clsx from "clsx";

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
  const favoritesCampers = useSelector(selectFavoriteItems);

  const dispatch = useDispatch();
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const mainProps = {
    adults: { value: `${adults} adults`, icon: <IoPeopleOutline /> },
    transmission: {
      value: capitalizeFirstLetter(transmission),
      icon: <TbAutomaticGearbox />,
    },
    engine: {
      value: capitalizeFirstLetter(engine),
      icon: <MdOutlineLocalGasStation />,
    },
    kitchen: { value: `${details.kitchen} Kitchen`, icon: <TbToolsKitchen2 /> },
    beds: { value: `${details.beds} beds`, icon: <IoBedOutline /> },
    airConditioner: {
      value: details.airConditioner && "AC",
      icon: <MdOutlineAir />,
    },
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
          <ul className={css.mainPropList}>
            {Object.values(mainProps).map(({ value, icon }, index) => (
              <li className={css.mainPropItem} key={index}>
                {icon} <p className={css.mainPropText}>{value}</p>
              </li>
            ))}
          </ul>
          <button className={css.send}>Show more</button>
        </div>
      </li>
    </>
  );
}
