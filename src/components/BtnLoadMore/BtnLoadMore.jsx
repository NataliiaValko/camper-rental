import css from "./BtnLoadMore.module.css";

export default function BtnLoadMore({ onClick }) {
  return (
    <>
      <button type="button" className={css.button} onClick={onClick}>
        Load more
      </button>
    </>
  );
}
