import Modal from "react-modal";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { TbCurrencyEuro } from "react-icons/tb";
import clsx from "clsx";

import Features from "../Features";
import Reviews from "../Reviews";

import css from "./CamperDetailsModal.module.css";

Modal.setAppElement("#root");

export default function CamperDetailsModal({
  camper,
  isModalOpen,
  onCloseModal,
}) {
  const [activeTab, setActiveTab] = useState("features");
  const { name, price, rating, location, description, gallery, reviews } =
    camper;

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
                  activeTab === "features" && css.active
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
          {activeTab === "features" && <Features camper={camper} />}
          {activeTab === "reviews" && <Reviews reviews={reviews} />}
        </div>
      </Modal>
    </>
  );
}
