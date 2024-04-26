import css from "./VehicleDetails.module.css";

export default function VehicleDetails({
  form,
  length,
  width,
  height,
  tank,
  consumption,
}) {
  const addSpace = (string) => {
    return string.replace(/([0-9.]+)([a-zA-Z]+)/, "$1 $2");
  };
  return (
    <>
      <div className={css.vehicleDetailsContainer}>
        <h3 className={css.title}>Vehicle details</h3>

        <ul className={css.vehicleDetailsList}>
          <li className={css.vehicleDetailsItem}>
            <p>Form</p>
            <p className={css.text}>{form}</p>
          </li>
          <li className={css.vehicleDetailsItem}>
            <p>Length</p>
            <p className={css.text}>{addSpace(length)}</p>
          </li>
          <li className={css.vehicleDetailsItem}>
            <p>Width</p>
            <p className={css.text}>{addSpace(width)}</p>
          </li>
          <li className={css.vehicleDetailsItem}>
            <p>Height</p>
            <p className={css.text}>{addSpace(height)}</p>
          </li>
          <li className={css.vehicleDetailsItem}>
            <p>Tank</p>
            <p className={css.text}>{addSpace(tank)}</p>
          </li>
          <li className={css.vehicleDetailsItem}>
            <p>Consumption</p>
            <p className={css.text}>{consumption}</p>
          </li>
        </ul>
      </div>
    </>
  );
}
