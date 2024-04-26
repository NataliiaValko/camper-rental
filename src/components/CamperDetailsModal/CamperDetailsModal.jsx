import Modal from "react-modal";
import { useState } from "react";

import BookForm from "../BookForm/BookForm";

import css from "./CamperDetailsModal.module.css";
import { MdClose } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import PropsList from "../PropsList/PropsList";
import VehicleDetails from "../VehicleDetails/VehicleDetails";
import { useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { TbCurrencyEuro } from "react-icons/tb";
import clsx from "clsx";
import StarsList from "../StarsList/StarsList";

Modal.setAppElement("#root");

export default function CamperDetailsModal({
  camper,
  isModalOpen,
  onCloseModal,
}) {
  const [activeTab, setActiveTab] = useState("");
  const {
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
  } = camper;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);
  return (
    <>
      <Modal
        className={css.modalContainer}
        contentLabel="Modal window with details info of camper"
        isOpen={isModalOpen}
        onRequestClose={onCloseModal}
        overlayClassName={css.overlay}
      >
        {/* <div className={css.infoContainer}> */}
        <button
          type="button"
          onClick={onCloseModal}
          className={css.closeButton}
        >
          <MdClose className={css.closeIcon} />
        </button>
        <h2 className={css.title}>{name}</h2>
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
        <div className={css.currencyBox}>
          <TbCurrencyEuro className={css.euroIcon} />
          <p className={css.price}>{price.toFixed(2)}</p>
        </div>
        <ul className={css.imageContainer}>
          {gallery.map((url, index) => {
            return (
              <li key={index}>
                <img className={css.detailsImg} src={url} alt={name} />
              </li>
            );
          })}
        </ul>
        <p className={css.description}>{description}</p>
        <div>
          <ul className={css.modalLink}>
            <li>
              <button
                className={clsx(
                  css.tab,
                  (!activeTab || activeTab === "features") && css.active
                )}
                onClick={() => {
                  setActiveTab("features");
                }}
              >
                Features
              </button>
            </li>
            <li>
              <button
                className={clsx(css.tab, activeTab === "reviews" && css.active)}
                onClick={() => {
                  setActiveTab("reviews");
                }}
              >
                Reviews
              </button>
            </li>
          </ul>
          <div className={css.line}></div>{" "}
          {activeTab === "features" && (
            <>
              <div className={css.modalBottomContainer}>
                <div className={css.modalLeft}>
                  <PropsList camper={camper} />
                  <VehicleDetails {...camper} />
                </div>

                <BookForm />
              </div>
            </>
          )}
          {activeTab === "reviews" && (
            <div className={css.reviewContainer}>
              <ul className={css.reviewLeftContainer}>
                {reviews.map(
                  ({ reviewer_name, reviewer_rating, comment }, index) => (
                    <li key={index}>
                      <div className={css.reviewTopContainer}>
                        <span className={css.avatarContainer}>
                          <p className={css.avatarText}>{reviewer_name[0]}</p>
                        </span>
                        <div className={css.reviewRightContainer}>
                          <p>{reviewer_name}</p>
                          <StarsList length={Math.round(reviewer_rating)} />
                        </div>
                      </div>
                      <p className={css.comment}>{comment}</p>
                    </li>
                  )
                )}
              </ul>
              <BookForm />
            </div>
          )}
        </div>
        {/* </div> */}
      </Modal>
    </>
  );
}
